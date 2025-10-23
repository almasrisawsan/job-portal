import { useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

export default function EditPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    companyUrl: '',
    location: '',
    type: 'Full-Time',
    salary: '',
    tags: '',
    description: '',
    requirements: '',
    isFeatured: false,
    categoryId: 1
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const jobData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        requirements: formData.requirements.split('\n').filter(req => req.trim()),
        categoryId: parseInt(formData.categoryId)
      };

      const response = await axios.post('https://68f8f8e8deff18f212b83fba.mockapi.io/jobs', jobData);
      console.log('Job created:', response.data);
      setSuccess(true);

      setFormData({
        title: '',
        company: '',
        companyUrl: '',
        location: '',
        type: 'Full-Time',
        salary: '',
        tags: '',
        description: '',
        requirements: '',
        isFeatured: false,
        categoryId: 1
      });
    } catch (err) {
      setError(err.message);
      console.error('Error creating job:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Add New Job</h2>

          {loading && (
            <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded mb-4 flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </div>
          )}

          {error && (
            <div className="bg-delete/10 border border-delete text-delete px-4 py-3 rounded mb-4">
              <strong className="font-bold">Error: </strong>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded mb-4">
              <strong className="font-bold">Success! </strong>
              <span>Job created successfully</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <Input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Senior React Developer"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Nexus Corp"
                required
              />
            </div>

            <div>
              <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Company Logo URL
              </label>
              <Input
                id="companyUrl"
                name="companyUrl"
                type="url"
                value={formData.companyUrl}
                onChange={handleChange}
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Remote, New York, London"
                  required
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type *
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
              </label>
              <Input
                id="salary"
                name="salary"
                type="text"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g. $80,000 - $120,000"
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Skills/Tags (comma separated)
              </label>
              <Input
                id="tags"
                name="tags"
                type="text"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g. React, TypeScript, Node.js, AWS"
              />
              <p className="mt-1 text-sm text-gray-500">Separate tags with commas</p>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Job Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Describe the job role and responsibilities..."
                required
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                Requirements (one per line)
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="5+ years of experience in React
Strong knowledge of TypeScript
Experience with modern CI/CD pipelines"
              />
              <p className="mt-1 text-sm text-gray-500">Enter each requirement on a new line</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-2">
                  Category ID
                </label>
                <Input
                  id="categoryId"
                  name="categoryId"
                  type="number"
                  value={formData.categoryId}
                  onChange={handleChange}
                  min="1"
                />
              </div>

              <div className="flex items-center pt-8">
                <input
                  id="isFeatured"
                  name="isFeatured"
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-700">
                  Featured Job
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setFormData({
                  title: '',
                  company: '',
                  companyUrl: '',
                  location: '',
                  type: 'Full-Time',
                  salary: '',
                  tags: '',
                  description: '',
                  requirements: '',
                  isFeatured: false,
                  categoryId: 1
                })}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Job'}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
