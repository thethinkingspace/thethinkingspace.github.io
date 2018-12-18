import Link from 'next/link';

export default () => (
  <div className="wrap services-wrap" id="services">
    <section className="grid grid-pad services">
      <h2>Welcome</h2>
      <p className="hello-txt col-1-1">
        The Thinking space practice evidence based ‘third wave’{' '}
        <Link href="cbt">
          <a>cognitive behavioural</a>
        </Link>
         treatments (CBT), which includes the latest 
        <Link href="act">
          <a>Acceptance and Commitment therapy (ACT)</a>
        </Link>{' '}
        and 
        <Link href="fap">
          <a>Functional Analytic Psychotherapy (FAP)</a>
        </Link>
        , both enhanced with mindfulness skills to promote behavioural change
        towards your life-values.
      </p>
      <div className="col-1-3 service-box service-1">
        <div className="content">
          <div className="service-icon">
            <i className="circle-icon icon-heart4" />
          </div>
          <div className="service-entry">
            <h3>TalkSpace</h3>
            <p>
              This is a flexible space for when you need guidance and support
              without commitment.
            </p>
            <Link href="talk-space">
              <a className="btn read-more">Read More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-1-3 service-box service-2">
        <div className="content">
          <div className="service-icon">
            <i className="circle-icon icon-star4" />
          </div>
          <div className="service-entry">
            <h3>Skype Therapy</h3>
            <p>
              We provide skype therapy for clients who cannot travel easily or
              time restrained.
            </p>
            <Link href="sykpe-therapy">
              <a className="btn read-more">Read More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-1-3 service-box service-3">
        <div className="content">
          <div className="service-icon">
            <i className="circle-icon icon-display" />
          </div>
          <div className="service-entry">
            <h3>Patient Referrals</h3>
            <p>We accept self-referrals as well as GP and company referrals.</p>
            <Link href="gp-services">
              <a className="btn read-more">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);
