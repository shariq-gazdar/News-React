"use client";

import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

export function Nav() {
  return (
    <>
      <Navbar className="rounded-b bg-zinc-200/50">
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="media/image.png"
            className="mr-3 w-20 "
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Pak News
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="mx-5">View More</Button>
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active className="font-bold">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="font-bold">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="font-bold">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
