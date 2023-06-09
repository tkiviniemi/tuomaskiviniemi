import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="fixed z-50 flex w-full bg-white bg-opacity-50 p-4 text-lg shadow-md  backdrop-blur-sm">
      <div className="flex w-3/4 items-center justify-center gap-2">
        <Link className={`group rounded-lg p-1`} to="/">
          About
          <div
            className={`h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full group-hover:shadow-md ${
              location.pathname === '/' ? 'w-full' : 'w-0'
            }`}
          ></div>
        </Link>
        <Link className={`group rounded-lg p-1`} to="/portfolio">
          Portfolio
          <div
            className={`h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full group-hover:shadow-md ${
              location.pathname === '/portfolio' ? 'w-full' : 'w-0'
            }`}
          ></div>
        </Link>
      </div>
      <div className="flex w-1/4 items-center justify-center gap-3">
        <Link
          className="duration-100 ease-in-out hover:-translate-y-0.5"
          to="https://github.com/tkiviniemi"
          target={'_blank'}
        >
          <AiFillGithub size="36" />
        </Link>
        <Link
          className="duration-100 ease-in-out hover:-translate-y-0.5"
          to="https://www.linkedin.com/in/tuomas-kiviniemi-755572172/"
          target={'_blank'}
        >
          <AiFillLinkedin size="38" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
