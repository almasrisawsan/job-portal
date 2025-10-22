# React useEffect Workshop Documentation: Jobs Portal

## I. Workshop Overview

*   **Goal:** Implement a fully functional Jobs Portal using React Hooks (`useState`, `useEffect`) and a hosted REST API. The core focus is on correctly handling side effects, asynchronous operations (data fetching), and dependency arrays in `useEffect`.
*   **Duration:** 4–6 hours (split over two sessions recommended).
*   **Deliverable:** A single-page application (SPA) that can list, filter, view, create, and delete job listings.

### Group Roles (3 Students per Group)

| Role | Primary Focus | Key Skills Applied |
| :--- | :--- | :--- |
| **The Implementer** | Logic and Hooks | Writing `useEffect`, implementing API service calls, state management (`useState`), and error handling. |
| **The Designer** | UI/UX & Styling | Translating the Figma design into styled React components (using provided CSS/utility classes), ensuring responsiveness. |
| **The Presenter** | Integration & Structure | Setting up routing (`react-router-dom`), connecting components, managing prop flow, and leading the final presentation/code review. |

---

## II. Project Setup & Resources

### A. Prerequisites

*   A clone of the starter React project.
*   **Dependencies:** `axios` (for API calls), `react-router-dom` (for navigation).
*   Access to the Figma design.

### B. Live API Endpoints

**Base URL:** `https://68f8f8e8deff18f212b83fba.mockapi.io`

| Resource | Endpoint | Purpose |
| :--- | :--- | :--- |
| **Jobs** | `/jobs` | All CRUD operations (List, Detail, Create, Update, Delete). **Primary workshop focus.** |
| **Categories** | `/categories` | Read-only list for the filtering sidebar. |

### C. Design Reference

The application UI must align with the provided Figma design:

**Figma Link:** [https://www.figma.com/design/mgi5wkYZTxU2OjZh7gh5sm/Jobs-Portal--Community---Copy-?node-id=56-134&t=vrqgpNQ9owjVmsay-0](https://www.figma.com/design/mgi5wkYZTxU2OjZh7gh5sm/Jobs-Portal--Community---Copy-?node-id=56-134&t=vrqgpNQ9owjVmsay-0)

---

## III. API Documentation & Operations

### A. Jobs Resource (`/jobs`)

| Operation | Method | Endpoint | `useEffect` Use Case |
| :--- | :--- | :--- | :--- |
| **List All** | `GET` | `/jobs` | Initial data load, search, and filtering. |
| **List/Filter**| `GET` | `/jobs?search=term&category=id&isFeatured=true` | **CRITICAL: Filtering based on user interaction.** |
| **Get Detail** | `GET` | `/jobs/:id` | Fetching data for the Job Detail Page. |
| **Create** | `POST` | `/jobs` | Submitting a new job (form submission handler). |
| **Update** | `PUT` | `/jobs/:id` | Saving changes to an existing job (form submission handler). |
| **Delete** | `DELETE` | `/jobs/:id` | Removing a job (button click handler). |

### B. Categories Resource (`/categories`)

| Operation | Method | Endpoint | `useEffect` Use Case |
| :--- | :--- | :--- | :--- |
| **List All** | `GET` | `/categories` | Populating the filter sidebar/dropdown menu. |

---

## IV. Project Requirements: `useEffect` Implementation

The team must implement the following features, demonstrating correct usage of the `useEffect` hook:

| Feature | Component | `useEffect` Implementation | Dependency Array |
| :--- | :--- | :--- | :--- |
| **1. Initial Job Fetch** | `JobListPage.jsx` | Fetch the list of all jobs when the component first mounts. | `[]` (Empty Array) |
| **2. Category Filter Fetch** | `FilterSidebar.jsx` | Fetch the list of categories when the component mounts. | `[]` (Empty Array) |
| **3. Job Search/Filter** | `JobListPage.jsx` | **A single function** that re-fetches jobs when the search term OR the selected category changes. | `[searchTerm, selectedCategoryId]` |
| **4. Featured Jobs View**| `JobListPage.jsx` | The function must append the query `?isFeatured=true` to the API call when the "Featured" state is toggled. | `[isFeaturedToggleState]` |
| **5. Job Detail Fetch** | `JobDetailPage.jsx` | Fetch a single job's data based on the ID retrieved from the URL route parameters. | `[jobIdFromRoute]` |
| **6. Cleanup (Optional/Bonus)** | `JobListPage.jsx` | Implement a **cleanup function** inside `useEffect` to **debounce** the search input field, preventing excessive API calls while the user types. | `[searchTerm]` |

---

## V. Deliverables and Code Review Focus

The final submission must include:

1.  A link to the deployed/running application (if hosted, otherwise a local demo).
2.  The final Git repository URL.

### Instructor Review Questions (The Implementer must be ready to answer):

1.  Show us the `useEffect` hook in `JobListPage.jsx`. Why did you choose that specific dependency array?
2.  Where did you handle the loading state, and which hook did you use to manage it?
3.  Demonstrate the **cleanup function** you implemented for the debounced search. What problem does the cleanup function solve?
4.  How did you handle the redirection after a successful job creation or deletion? (Hint: Side effects after an async action).