

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#338573] hover:bg-[#52998a] text-white rounded-xl px-6 py-2 transition ${className}`}
    >
      {children}
    </button>
  );
};

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Fresher UI/UX Designer (1 Year Exp.)',
      company: 'March Company Limited',
      location: 'Nairobi, Kenya',
      type: 'Full Time',
      salary: 'Ksh 180,000',
    },
    {
      id: 2,
      title: 'Fresher UI/UX Designer (3 Year Exp.)',
      company: 'March Company Limited',
      location: 'Nairobi, Kenya',
      type: 'Full Time',
      salary: 'Ksh 180,000',
    },
    {
      id: 3,
      title: 'Fresher UI/UX Designer (3 Year Exp.)',
      company: 'March Company Limited',
      location: 'Nairobi, Kenya',
      type: 'Full Time',
      salary: 'Ksh 180,000',
    },
    {
      id: 4,
      title: 'Fresher UI/UX Designer (3 Year Exp.)',
      company: 'March Company Limited',
      location: 'Nairobi, Kenya',
      type: 'Full Time',
      salary: 'Ksh 180,000',
    }
  ];

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Jobs</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#338573] flex items-center justify-center text-white font-semibold text-lg">
                  {job.company.charAt(0)}
                </div>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.company}</p>
                  <div className="flex space-x-3 text-sm text-gray-500 mt-1">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.salary}</span>
                  </div>
                </CardContent>
              </div>
              <Button className="w-full sm:w-auto mt-3 sm:mt-0">View Details</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
