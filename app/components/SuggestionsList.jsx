import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, DollarSign, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router';

const SuggestionsList = ({
    suggestions,
    isVisible,
    onSelect,
    onClose,
    searchTerm
}) => {
    const navigate = useNavigate();
    const listRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (listRef.current && !listRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, onClose]);

    const handleJobClick = (job) => {
        // Call the onSelect callback first (to update search input)
        onSelect(job);
        // Navigate to job details page
        navigate(`/jobs/${job.id}`);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            ref={listRef}
            className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-80 overflow-y-auto"
        >
            {suggestions.map((job, index) => (
                <div
                    key={job.id}
                    className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors group"
                    onClick={() => handleJobClick(job)}
                >
                    <div className="flex items-start gap-3">
                        {job.companyUrl ? (
                            <img
                                src={job.companyUrl}
                                alt={job.company}
                                className="w-10 h-10 rounded-full object-cover shrink-0"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div
                            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center shrink-0"
                            style={{ display: job.companyUrl ? 'none' : 'flex' }}
                        >
                            <span className="text-gray-500 font-semibold text-xs">
                                {job.company ? job.company.charAt(0).toUpperCase() : '?'}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate group-hover:text-primary transition-colors">
                                {highlightSearchTerm(job.title, searchTerm)}
                            </h4>
                            <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                                <Building2 size={12} />
                                <span className="truncate">{job.company}</span>
                            </div>
                            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                                <span className="flex items-center gap-1">
                                    <MapPin size={10} className="text-primary" />
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={10} className="text-primary" />
                                    {job.type}
                                </span>
                                {job.salary && (
                                    <span className="flex items-center gap-1">
                                        <DollarSign size={10} className="text-primary" />
                                        {job.salary}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {suggestions.length === 0 && searchTerm && searchTerm.trim().length > 0 && (
                <div className="p-4 text-center text-gray-500">
                    No jobs found for "{searchTerm}"
                </div>
            )}
        </div>
    );
};

// Helper function to highlight search term in text
const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
        regex.test(part) ? (
            <span key={index} className="bg-yellow-200 font-semibold">
                {part}
            </span>
        ) : part
    );
};

export default SuggestionsList;
