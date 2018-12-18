import Layout from './components/Layout';

export default () => (
  <Layout title="Keeping your information safe">
    <p>
      We take looking after your information seriously. We will implement
      reasonable and appropriate physical, technical and organisational measures
      to protect the personal information we have under our control, both on and
      off-line, from improper access, use, alteration, destruction and loss.
    </p>

    <p>
      Unfortunately the transmission of information using the internet is not
      completely secure. Although we do our best to protect your personal
      information sent to us this way, we cannot guarantee the security of data
      transmitted to our site.
    </p>

    <p>
      Our websites may contain links to other sites. While we try to link only
      to sites that share our high standards and respect for privacy, we are not
      responsible for the content or the privacy practices employed by other
      sites. Please be aware that advertisers or websites that have links on our
      site may collect personally identifiable information about you. Our
      privacy statement does not cover the information practices of those
      websites or advertisers.
    </p>

    <p>
      Any payment details which we receive when you make a payment to us are
      passed securely to Sage.{' '}
      <a
        href="https://www.sage.com/en-gb/legal/privacy-and-cookies/"
        target="_blank"
      >
        https://www.sage.com/en-gb/legal/privacy-and-cookies/
      </a>{' '}
      and iZettle{' '}
      <a href="https://www.izettle.com/gb/privacy-policy" target="_blank">
        {' '}
        https://www.izettle.com/gb/privacy-policy
      </a>{' '}
    </p>
  </Layout>
);
