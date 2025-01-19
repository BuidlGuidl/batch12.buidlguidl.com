"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Debug Contracts",
    href: "/debug",
    icon: <BugAntIcon className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex w-10 h-10">
            <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M394 419.361V567.137L333.927 575.346V523.618C333.927 504.498 318.872 488.996 300.374 488.996C281.877 488.996 266.822 504.498 266.822 523.618V575.346L207 567.137V419.361H242.011V440.713C242.011 449.851 249.217 457.24 258.058 457.24C266.898 457.24 274.104 449.851 274.104 440.713V419.361H326.621V440.623C326.621 449.76 333.828 457.149 342.668 457.149C351.508 457.149 358.715 449.76 358.715 440.623V419.361H394Z"
                fill="currentColor"
              />
              <path
                d="M292.215 343.998V433.105H307.826V393.155C307.826 393.155 311.815 384.95 326.358 388.57C345.602 393.36 369.311 390.114 384.532 362.567C338.41 377.757 337.174 325.556 292.215 343.998Z"
                fill="currentColor"
              />
              <circle cx="300" cy="300" r="281" stroke="currentColor" stroke-width="18" />
              <circle cx="300" cy="300" r="20" fill="currentColor" />
              <path d="M300 291V199" stroke="currentColor" stroke-width="26" stroke-linecap="round" />
              <path
                d="M262.398 165.44C258.318 165.44 255.198 164.36 253.038 162.2C250.878 159.92 249.798 156.68 249.798 152.48V63.92H260.958L236.838 85.52C233.718 88.4 230.358 89.36 226.758 88.4C223.278 87.32 221.118 85.04 220.278 81.56C219.558 78.08 220.998 74.72 224.598 71.48L251.778 46.28C253.698 44.6 255.618 43.46 257.538 42.86C259.458 42.26 261.678 41.96 264.198 41.96C267.558 41.96 270.198 42.92 272.118 44.84C274.038 46.76 274.998 49.46 274.998 52.94V152.48C274.998 156.68 273.918 159.92 271.758 162.2C269.598 164.36 266.478 165.44 262.398 165.44ZM303.303 164C299.103 164 296.043 163.04 294.123 161.12C292.323 159.2 291.423 156.44 291.423 152.84C291.423 150.56 291.963 148.4 293.043 146.36C294.123 144.32 295.803 142.1 298.083 139.7L333.183 102.44L338.223 97.22C342.423 93.02 345.303 89.78 346.863 87.5C348.423 85.22 349.203 82.58 349.203 79.58C349.203 74.06 347.223 69.86 343.263 66.98C339.423 64.1 334.023 62.66 327.063 62.66C323.583 62.66 319.863 63.44 315.903 65C311.943 66.44 308.283 68.66 304.923 71.66C301.563 74.3 298.263 74.84 295.023 73.28C291.783 71.6 289.803 68.9 289.083 65.18C288.483 61.34 289.803 57.98 293.043 55.1C297.723 51.14 303.483 47.9 310.323 45.38C317.283 42.86 323.943 41.6 330.303 41.6C339.423 41.6 347.163 43.1 353.523 46.1C359.883 49.1 364.743 53.3 368.103 58.7C371.463 63.98 373.143 70.22 373.143 77.42C373.143 81.38 372.363 85.28 370.803 89.12C369.243 92.84 366.843 96.86 363.603 101.18C360.363 105.38 355.983 110.3 350.463 115.94L317.703 149.78V143.12H368.643C372.123 143.12 374.763 144.02 376.563 145.82C378.363 147.5 379.263 150.02 379.263 153.38C379.263 156.86 378.363 159.5 376.563 161.3C374.763 163.1 372.123 164 368.643 164H303.303Z"
                fill="currentColor"
              />
              <path
                d="M106.192 370.193L107.136 366.999V274.3L106.192 273.361L63.0263 298.796L106.192 370.193Z"
                fill="currentColor"
              />
              <path d="M106.193 370.193L149.36 298.796L106.193 273.361V318.355V370.193Z" fill="currentColor" />
              <path
                d="M106.193 265.215L106.724 264.568V231.547L106.193 230L63 290.636L106.193 265.215Z"
                fill="currentColor"
              />
              <path d="M106.193 230V265.215L149.36 290.636L106.193 230Z" fill="currentColor" />
              <path d="M106.192 273.361L63.0262 298.796L106.192 318.355V273.361Z" fill="currentColor" />
              <path d="M149.36 298.796L106.193 273.361V318.355L149.36 298.796Z" fill="currentColor" />
              <path
                d="M495.167 230L494.224 233.195V325.894L495.167 326.832L538.334 301.397L495.167 230Z"
                fill="currentColor"
              />
              <path d="M495.167 230L452 301.397L495.167 326.832V281.839V230Z" fill="currentColor" />
              <path
                d="M495.167 334.979L494.635 335.625V368.646L495.167 370.193L538.36 309.557L495.167 334.979Z"
                fill="currentColor"
              />
              <path d="M495.167 370.193V334.979L452 309.557L495.167 370.193Z" fill="currentColor" />
              <path d="M495.167 326.832L538.334 301.397L495.167 281.839V326.832Z" fill="currentColor" />
              <path d="M452 301.397L495.167 326.832V281.839L452 301.397Z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">BuildGuidl Batch 12</span>
            <span className="text-xs">Seizing the Right Time to Build</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
