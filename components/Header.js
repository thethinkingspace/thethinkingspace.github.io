import Link from 'next/link';
import classNames from 'classnames';

export default ({ route }) => {
  return (
    <header id="top-header" className="header-home">
      <div className="grid">
        <div className="col-1-1">
          <div className="content">
            <div className="logo-wrap">
              <Link href="/">
                <a className="logo">Thinking Space</a>
              </Link>
            </div>
            <nav className="navigation">
              <input type="checkbox" id="nav-button" />
              <label htmlFor="nav-button" />
              <ul className="nav-container">
                <li>
                  <Link href="/">
                    <a className={classNames({ current: route === '/' })}>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a
                      className={classNames({ current: route === '/services' })}
                    >
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/treatments">
                    <a
                      className={classNames({
                        current: route === '/treatment'
                      })}
                    >
                      Treatments
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <a className={classNames({ current: route === '/team' })}>
                      Team
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/gp-services">
                    <a
                      className={classNames({
                        current: route === '/gp-services'
                      })}
                    >
                      GP Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      className={classNames({ current: route === '/contact' })}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
