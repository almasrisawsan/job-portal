import Button from "./button";

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center gap-2 sm:gap-0 bg-white rounded-lg w-full text-xs sm:text-sm md:text-base">
      <input
        type="text"
        className="flex-1 px-3 py-2 sm:py-3 border-none rounded-lg sm:rounded-r-none focus:outline-none"
        placeholder="Search by job title..."
      />
      <Button className="sm:rounded-l-none md:w-auto">Search</Button>
    </div>
  );
}
