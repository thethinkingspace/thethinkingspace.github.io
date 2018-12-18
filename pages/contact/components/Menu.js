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
    <NavItem href="/privacy/about-us">About Us</NavItem>
    <NavItem href="/privacy/info-collection">
      How we collect information about you
    </NavItem>
    <NavItem href="/privacy/about-info">
      About the Information we collect and why we use it
    </NavItem>
    <NavItem href="/privacy/profiling">
      Profiling: making our work more unique to you
    </NavItem>
    <NavItem href="/privacy/legal-basis">
      Legal basis for using your information
    </NavItem>
    <NavItem href="/privacy/info-sharing">Sharing your Information</NavItem>
    <NavItem href="/privacy/info-safety">Keeping your information safe</NavItem>
    <NavItem href="/privacy/info-duration">
      How long we hold your information for
    </NavItem>
    <NavItem href="/privacy/your-rights">Your rights</NavItem>
    <NavItem href="/privacy/cookies">Cookies</NavItem>
  </ul>
);
