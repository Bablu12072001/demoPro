import React from "react";

const Nav = () => {
  let Links = [
    {
      name: "Home",
      link: "https://meet.google.com/landing",
      icon: <ion-icon name="home-outline"></ion-icon>,
    },
    {
      name: "About us ",
      link: "/",
      icon: <ion-icon name="home-outline"></ion-icon>,
    },
    { name: "Service", link: "/" },
    { name: "Gallary", link: "/" },
    { name: "Blog", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          Log
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12">
          {Links.map((link) => (
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link}>
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
