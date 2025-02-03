import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black p-6 md:p-10 flex justify-center items-center w-full">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-20">
        <li className="text-lg md:text-2xl font-bold text-white text-center hover:text-yellow-300">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="text-lg md:text-2xl font-bold text-white text-center hover:text-yellow-300">
          <Link href={'/Customers'}>Customers</Link>
        </li>
        <li className="text-lg md:text-2xl font-bold text-white text-center hover:text-yellow-300">
          <Link href={'/Orders'}>Orders</Link>
        </li>
        <li className="text-lg md:text-2xl font-bold text-white text-center hover:text-yellow-300">
          <Link href={'/Sales'}>Sales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

