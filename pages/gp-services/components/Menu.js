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
    <NavItem href="/gp-services/referral">Referral Pathway</NavItem>
    <NavItem href="/gp-services/cpd">Provider of CPD </NavItem>
  </ul>
);
