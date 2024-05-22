import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="border-t ">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={128} height={38} />
        </Link>
        <p>{date.getFullYear()} Evenly. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
