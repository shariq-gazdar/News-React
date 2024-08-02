"use client";

import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

<<<<<<< HEAD
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
=======
export function Component() {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
>>>>>>> eeec141ac46583e2f80689e62c4a6ee23eadab0f
            Pak News
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
<<<<<<< HEAD
          <Button className="mx-5">View More</Button>
=======
          <Button>Get started</Button>
>>>>>>> eeec141ac46583e2f80689e62c4a6ee23eadab0f
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
<<<<<<< HEAD
          <Navbar.Link href="#" active className="font-bold">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="font-bold">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="font-bold">
            Contact
          </Navbar.Link>
=======
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
>>>>>>> eeec141ac46583e2f80689e62c4a6ee23eadab0f
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
