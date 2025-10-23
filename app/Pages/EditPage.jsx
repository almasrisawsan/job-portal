import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [send, setSend] = useState(true);

  useEffect(() => {
    if (send) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get('https://68f8f8e8deff18f212b83fba.mockapi.io/jobs');
          console.log('Data received:', response.data);

        } catch (err) {
          setError(err.message);
          console.error('Error:', err);
        } finally {
          setLoading(false);
          setSend(false);
        }
      };

      fetchData();
    }
  }, [send]);

  return (
    <div className="container">
      {/* Loading Message */}
      {loading && (
        <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded mb-4 flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-delete/10 border border-delete text-delete px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      )}

      {/* Success Message */}
      {!loading && !error && !send && (
        <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded mb-4">
          <strong className="font-bold">Success! </strong>
          <span>Data loaded successfully</span>
        </div>
      )}

      <form>

      </form>
    </div>
  );
}
