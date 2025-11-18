"use client";
import Link from "next/link";
import { usePathName } from "next/navigation";

const NavLink = (href,children) => {
  const path = usePathName();
  return (
    <Link href={href} className={path.startsWith(href)?'active':''}>{children}</Link>
  )
};

export default NavLink;
