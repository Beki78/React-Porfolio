import React, { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import ButtonColor from "../components/ButtonColor";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-950 text-cyan-100 fixed z-50 w-screen bg-opacity-40 backdrop-blur-md ">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 px-12 lg:px-20"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <RouterLink to="/" className="-m-1.5 p-1.5">
              <h1 className="text-xl font-bold uppercase">Bereket G.</h1>
            </RouterLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-md font-semibold leading-6 text-cyan-400 hover:text-cyan-100 duration-300 ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-md font-semibold leading-6 text-cyan-400 hover:text-cyan-100 duration-300 ease-in-out cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-md font-semibold leading-6 text-cyan-400 hover:text-cyan-100 duration-300 ease-in-out cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-md font-semibold leading-6 text-cyan-400 hover:text-cyan-100 duration-300 ease-in-out cursor-pointer"
            >
              Projects
            </Link>
           
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ButtonColor to = "contact" />
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto shadow-cyan-50 shadow-sm bg-opacity-50 backdrop-blur-lg bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <RouterLink to="/" className="-m-1.5 p-1.5">
                <h1 className="text-xl font-bold uppercase">Bereket G.</h1>
              </RouterLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-16 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-center">
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-cyan-400 hover:bg-slate-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-cyan-400 hover:bg-slate-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-cyan-400 hover:bg-slate-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-cyan-400 hover:bg-slate-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-cyan-400 hover:bg-slate-900 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
