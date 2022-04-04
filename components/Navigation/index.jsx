import * as React from 'react';
import { useTheme } from 'next-themes';

import { FiSun, FiMoon } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const ThemeChanger = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="p-4"
      onClick={() => setTheme(theme === 'bumblebee' ? 'luxury' : 'bumblebee')}
    >
      {theme === 'bumblebee' ? (
        <FiSun className="text-xl" />
      ) : (
        <FiMoon className="text-xl" />
      )}
    </button>
  );
};

const Navigation = () => {
  const [shouldHideNav, setShouldHideNav] = React.useState(0);

  const { theme } = useTheme();

  React.useEffect(() => {
    const checkScroll = () => setShouldHideNav(window.scrollY > 100);
    window.document.addEventListener('scroll', checkScroll);
    return () => window.document.addEventListener('scroll', checkScroll);
  }, [shouldHideNav]);

  return (
    <div
      className={`navbar h-20 z-10 sticky top-0 left-0 ${
        shouldHideNav ? 'bg-transparent' : 'bg-base-200'
      } duration-500 hover:bg-base-200`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className="btn btn-ghost hover:bg-transparent normal-case text-xl">
            <div className="h-full aspect-square flex justify-center">
              <Image
                src={`/assets/${
                  theme === 'luxury' ? 'logo-white' : 'logo-black'
                }.svg`}
                alt="logo"
                width="100%"
                height="100%"
                className={`rounded-full bg-base-100`}
                priority
              />
            </div>
          </a>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navigation;
