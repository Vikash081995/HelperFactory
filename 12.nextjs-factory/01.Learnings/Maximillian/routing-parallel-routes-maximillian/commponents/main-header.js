import NavLink from "./NavLink";

export default function MainHeader() {

  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <NavLink href="/news">News</NavLink>
        </li>
        <li>
          <NavLink href="/archive">Archive</NavLink>
        </li>
      </ul>
    </header>
  );
}
