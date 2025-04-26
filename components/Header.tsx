"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex gap-5 justify-between my-10">
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="BookWise Logo"
          width={40}
          height={40}
        />
      </Link>

      <ul className="flex flex-row gap-8 items-center">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base capitalize cursor-pointer",
              pathname === "/library" ? "text-light-200" : "text-light-100",
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
