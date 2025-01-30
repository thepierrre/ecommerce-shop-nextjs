"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/shop" },
  { name: "All Coffees", href: "/shop/all-coffees" },
  { name: "Filter", href: "/shop/filter-coffees" },
  { name: "Espresso", href: "/shop/espresso-coffees" },
  { name: "Decaf", href: "/shop/decaf-coffees" },
  { name: "Accessories", href: "/shop/accessories" },
  { name: "Account", href: "/shop/account" },
  { name: "Cart", href: "/shop/cart" },
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
