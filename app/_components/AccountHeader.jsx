"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState } from "react";

function AccountHeader({ user, profile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col bg-primary-100">
      <div className="flex items-center gap-6 text-xs">
        <div className="w-12">
          <Logo />
        </div>

        <div className="flex-1">
          <form className="flex justify-between gap-2">
            <input className="basis-[80%]" type="search" />
            <button className="flex-1" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="">
          <button
            className="flex h-14 w-14 items-center justify-center"
            onClick={() => setIsOpen((state) => !state)}
          >
            {isOpen ? "X" : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <div>{isOpen ? <Navigation /> : ""}</div>
    </header>
  );
}

export default AccountHeader;
