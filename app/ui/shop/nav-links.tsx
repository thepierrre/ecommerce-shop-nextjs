"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Filter", href: "/filter " },
  { name: "Espresso", href: "/epresso" },
  { name: "Accessories", href: "/accessories " },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="w-4">
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
}
