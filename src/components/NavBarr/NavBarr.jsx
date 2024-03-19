import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from 'react-icons/ti';
import { RiCloseCircleLine } from "react-icons/ri";

const NavBarr = () => {
  const [open, setOpen]= useState(false);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About Us' },
    { id: 3, path: '/services', name: ' Services' },
    { id: 4, path: '/contact', name: 'Contact Us' },
    { id: 5, path: '*', name: ' Not Found' }
  ];
  

  
  return (
    <nav className="text-white p-5 bg-[#282828]">
    
    <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
      {
        open === true ? <RiCloseCircleLine></RiCloseCircleLine> :  <TiThMenu className=" "></TiThMenu>
      }
   
    </div>

    <ul className={`md:flex absolute duration-1000  md:static
    ${open ? 'top-[70px]': '-top-56'}
    px-4`}>
    {
        routes.map(route=>  <Link  key={route.id} route={route}></Link>)
      }
    </ul>
    </nav>
  );
};

export default NavBarr;