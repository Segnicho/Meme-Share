"use client";
import React from "react";
import SwitchTheme from "./Theme";
import Link from "next/link";


const Navbar:React.FC = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 ">
      <div className="navbar-start">
        <Link className="cursor-pointer" href="/">
          <p className="btn btn-ghost normal-case text-xl hover:bg-white ">
            meme<span className="text-accent">Share</span>
          </p>
        </Link>
      </div>
      {/* <select
          name=""
          id=""
          className="rounded-md p-2 hover:border-none text-accent font-bold"
        >
          <option value="" className="flex items-center">
            <CiApple className="w-6 h-6 mr-2" /> Grocery
          </option>
          <option value="">
            <span>
              <CiApple /> Bakery
            </span>
          </option>
          <option value="">
            <span>
              <CiApple /> Makeup
            </span>
          </option>
          <option value="">
            <span>
              <CiApple /> Bags
            </span>
          </option>
          <option value="">
            <span>
              <CiApple /> Clothing
            </span>
          </option>
          <option value="">
            <span>
              <CiApple /> Furniture
            </span>
          </option>
          <option value="">
            <span>
              <CiApple /> Daily Needs
            </span>
          </option>
          <option value="">
            <span>
              <CiApple /> Books
            </span>
          </option>
        </select>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end font-sans ">
        <div className="flex gap-7 mr-5">
          <Link href="/shops" className=" hover:text-accent">
            Shops
          </Link>
          <Link href="/offers" className=" hover:text-accent">
            Offers
          </Link>
          <Link href="/help" className=" hover:text-accent">
            FAQ
          </Link>
          <Link href="/contact" className=" hover:text-accent">
            Contact
          </Link>
        </div> */}
      <div className="navbar-end font-sans ">
        <a className="btn bg-accent mr-5 hover:bg-secondary border-0">Get started</a>
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Navbar;
