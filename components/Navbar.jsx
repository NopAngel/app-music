import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import { FaUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="p-6 sticky top-0 bg-[#040406] z-20">
      <nav>
        <ul className="flex justify-around">
          <section>
            <li>
              <a
                href="/"
                className="flex items-center gap-2 text-2xl font-semibold"
              >
                <img src="./logo.svg" alt="" />
                <span>MuriZ</span>
              </a>
            </li>
          </section>
          <section>
            <li>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <a href="/sign-in" className="flex items-center gap-2">
                  <FaUser />
                  <span>Log in</span>
                </a>
              </SignedOut>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
}
