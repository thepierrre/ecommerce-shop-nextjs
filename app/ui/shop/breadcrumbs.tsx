import Link from "next/link";
import { clsx } from "clsx";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  console.log(breadcrumbs);
  return (
    <ul className="flex">
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={breadcrumb.href}>
          <Link
            href={breadcrumb.href}
            className={clsx(breadcrumb.active ? "underline" : "")}
          >
            {breadcrumb.label}
          </Link>
          {index < breadcrumbs.length - 1 ? (
            <span className="mx-2">/</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
