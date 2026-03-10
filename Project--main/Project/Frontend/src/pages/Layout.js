import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <ul className="nav nav-tabs justify-content-between border border-success sticky-top bg-white">
        <li className="nav-item">
          <img 
            src="https://th.bing.com/th/id/OIP.oVGhnjV7Ilfc9BAw8BoNCQHaCe?w=318&h=116&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt="Logo" 
            style={{ height: '60px', width: '150px' }} 
          />
        </li>
        <div className="d-flex"> 
          <li className="nav-item">
            <Link className="nav-link text-dark m-2" to="/home">Home</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link text-dark m-2 " to="/student">Student</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark m-2" to="/about">About</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-dark m-2" to="/faq">FAQ</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-dark m-2" to="/contact">Contact</Link>
          </li>
        </div>
      </ul>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Outlet /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;