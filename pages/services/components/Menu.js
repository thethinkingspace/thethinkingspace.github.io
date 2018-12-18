import Link from 'next/link';

const NavItem = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </li>
);

export default () => (
  <ul class="col-1-5 sidenav">
    <NavItem href="/services/talk-space">About Us</NavItem>
    <NavItem href="/services/fees">Fees</NavItem>
    <NavItem href="/services/sykpe-therapy">Skype Therapy</NavItem>
    <NavItem href="/services/ethics">Ethics</NavItem>
  </ul>
);
