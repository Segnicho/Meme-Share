"use client";
import React from "react";
import SwitchTheme from "./Theme";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedInAuthObject, SignedOutAuthObject } from "@clerk/nextjs/dist/types/server";
const Navbar = ({
  userId,
}: {
  userId: string | null;
}) => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 ">
      <div className="navbar-start">
        <Link className="cursor-pointer" href="/">
          <p className="btn btn-ghost normal-case text-xl hover:bg-inherit ">
            meme<span className="text-accent">Share</span>
          </p>
        </Link>
      </div>
      <div className="navbar-end font-sans ">
        <Link
          className="btn bg-accent mr-5 hover:bg-sec border-0"
          href="/new-meme"
        >
          Add Meme
        </Link>
        {!userId ? (
          <Link
            href="/sign-in"
            className="btn bg-accent mr-5 hover:bg-sec border-0"
          >
            Login
          </Link>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
        {/* <a className="btn bg-accent mr-5 hover:bg-sec border-0">Login</a> */}
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Navbar;
