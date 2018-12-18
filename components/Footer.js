import Link from 'next/link';

export default () => (
  <footer className="wrap">
    <div className="grid grid-pad">
      <div className="col-1-2 footer-address">
        <div className="col-1-2">
          <div className="content">
            <div className="footer-widget">
              <h3>City Clinic</h3>
              <div className="textwidget">
                <address>
                  <span>2/8 Victoria Avenue</span>
                  <span>Bishopsgate</span>
                  <span>London EC2M 4NS</span>
                </address>
              </div>
              <p>
                <a
                  href="https://maps.google.co.uk/maps?q=Victoria+Avenue,+London+EC2M+4NS"
                  target="_blank"
                >
                  Click here for map.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-2">
          <div className="content">
            <div className="footer-widget">
              <h3>East Finchley Clinic</h3>
              <div className="fwidget">
                <address>
                  <span>Bedford Mews</span>
                  <span>Bedford Road</span>
                  <span>London N2 9DB</span>
                </address>
              </div>
              <p>
                <a
                  href="https://maps.google.co.uk/maps?q=1+Bedford+Road,+London+N2+9DB"
                  target="_blank"
                >
                  Click here for map.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-4">
        <div className="content">
          <div className="footer-widget">
            <h3>Tweets</h3>
            <div id="tweet-scroll-wrapper" className="clearfix">
              <div className="tweets-list-container" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-4">
        <div className="content">
          <div className="footer-widget">
            <h3>Contact</h3>
            <span className="tel-no">
              Tel: <a href="tel:02083613219">020 8361 3219</a>
            </span>
            <span>
              Email:{' '}
              <a href="mailto:therapy&#64;thethinkingspace.co.uk">
                therapy&#64;thethinkingspace.co.uk
              </a>
            </span>
            <div className="social-set">
              <a href="#0">
                <i className="icon-facebook" />
              </a>
              <a href="https://twitter.com/thinkinspace" target="_blank">
                <i className="icon-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid">
      <div className="col-1-1 charity_sec">
        <div className="charity">
          <p>
            <strong>
              The Thinking Space supports the charity 'commit and act’.{' '}
              <a href="#" id="dialog_link">
                Learn more
              </a>
              .
            </strong>
          </p>
          <div id="dialog" title="commit and act">
            <p>
              The Thinking Space supports the charity 'commit and act’. This is
              an international NGO that disseminates psychological (ACT)
              training to local health workers in developing countries and have
              a training centre in Bo, Sierra Leone.
            </p>
            <p>
              commit and act has been pivotal in teaching culturally effective
              Ebola prevention strategies (see ‘
              <a
                href="http://www.huffingtonpost.com/steven-c-hayes-phd/kissing-the-banana-trunk-_b_5839680.html"
                target="_blank"
              >
                <strong>Kiss the banana trunk</strong>
              </a>
              ’).
            </p>
            <p>
              Tien is on the fund-raising committee and a trainer for the NGO.
            </p>
            <p>
              If you have found our treatment helpful, please consider donating
              a session fee to commit and act to help others benefit, or adopt
              us for your fund-raiser.
            </p>
            <p>
              For more information: 
              <a href="http://commitandact.com/" target="_blank">
                commit and act
              </a>
            </p>
          </div>
        </div>
        <p className="source-org copyright">
          Copyright © 2018 | All Rights Reserved |{' '}
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>{' '}
          | Website by{' '}
          <a href="http://gro.media" target="_blank">
            GroMedia
          </a>
        </p>
      </div>
    </div>
  </footer>
);
