import { IoMdMenu, IoIosCloseCircle } from "react-icons/io";
import Link from '../Link/Link';
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/products', name: 'Products' },
    { id: 3, path: '/products/:id', name: 'ProductDetails' },
    { id: 4, path: '/about', name: 'About' },
    { id: 5, path: '/contact', name: 'Contact' }
  ];

  return (
    <nav className="mx-5 mt-5">
      <button onClick={() => setOpen(!open)} className={`md:hidden`}>

        {/* {
          open ? <IoMdMenu className="text-2xl" /> : <IoIosCloseCircle className="text-3xl" />
        } */}
        {
          open ? <IoMdMenu className="text-2xl" /> : <IoMdMenu className="text-2xl" />
        }

      </button>

      <ul className={`md:flex gap-10 absolute md:static bg-indigo-800 p-4 duration-1000 rounded-lg
      ${open ? 'top-12' : '-top-44'}
      text-white `}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;