import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">

        <div className="logo">
          <Link to="/">
            <h1 className="text-2xl font-bold transition-colors">
              JobsPortal
            </h1>
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <Link 
            to="/" 
            className="font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link to="/">
            <button className="px-4 py-2 rounded-lg  transition-colors shadow-md  post-btn">
              Post a Job
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
