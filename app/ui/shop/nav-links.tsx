"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/shop" },
  { name: "Filter", href: "/shop/filter-coffees-coffees" },
  { name: "Espresso", href: "/shop/espresso" },
  { name: "Accessories", href: "/shop/accessories " },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
}
