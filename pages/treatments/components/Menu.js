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
    <NavItem href="/treatments/fap">
      Functional Analytic Psychotherapy (FAP)
    </NavItem>
    <NavItem href="/treatments/cbt">
      Cognitive Behavioural Therapy (CBT)
    </NavItem>
    <NavItem href="/treatments/act">
      Acceptance and Commitment Therapy (ACT)
    </NavItem>
  </ul>
);
