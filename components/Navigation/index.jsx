import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import ThemeChanger from '../ThemeChanger';
import { useScrollContext } from '../../lib/scrollContext';

const Navigation = () => {
  const { shouldHideNav } = useScrollContext();

  return (
    <div
      className={`navbar h-20 z-10 sticky top-0 left-0 ${
        shouldHideNav ? 'bg-transparent' : 'bg-base-200'
      } duration-500 hover:bg-base-200`}
    >
      <div className="navbar-start ml-5">
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
            <div className="h-full aspect-square flex justify-center"></div>
          </a>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/quy-trinh-lam-viec">Quy Trình Làm Việc</Link>
            </li>
            <li tabIndex="0">
              <a>
                Dịch vụ
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
                  <Link href="/dieu-khoan-dich-vu">Điều Khoản</Link>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/goi-thiet-ke">Gói Thiết Kế</Link>
            </li>
          </ul>
        </div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navigation;
