import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ position: 'relative', zIndex: 1 }}>
      <h1 className="logo" style={{ position: 'relative', zIndex: 1 }}>
         Welcome to My Portfolio
      </h1>
      <div className="links" style={{ position: 'relative', zIndex: 1 }}>
        <Link to="/home"className="gradient-fill">Home</Link>
        <Link to="/exp"className="gradient-fill">Experience</Link>
        <Link to="/projects" className="gradient-fill">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
