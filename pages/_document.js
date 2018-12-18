import Document, { Head, Main, NextScript } from 'next/document';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader">
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  </div>
);

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="stylesheet" href="/static/css/reset.css" />
          <link rel="stylesheet" href="/static/css/simplegrid.css" />
          <link rel="stylesheet" href="/static/css/icomoon.css" />
          <link rel="stylesheet" href="/static/css/lightcase.css" />
          <link rel="stylesheet" href="/static/css/tweetscroll.css" />
          <link rel="stylesheet" href="/static/css/jquery-ui.css" />
          <link
            rel="stylesheet"
            href="/static/js/owl-carousel/owl.carousel.css"
          />
          <link rel="stylesheet" href="/static/js/owl-carousel/owl.theme.css" />
          <link
            rel="stylesheet"
            href="/static/js/owl-carousel/owl.transitions.css"
          />
          <link rel="stylesheet" href="/static/css/jquery-word-rotator.css" />
          <link rel="stylesheet" href="/static/css/animate.css" />
          <link rel="stylesheet" href="/static/style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css"
          />
          <link
            href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="http://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Loader />
          <script src="/static/js/jquery.js" />
          <script src="/static/js/jquery.tweetscroll.js" />
          <script src="/static/js/jquery-ui.js" />
          <script src="/static/js/jquery.dialogOptions.js" />
          <script src="/static/js/mixitup.js" />
          <script src="/static/js/smoothscroll.js" />
          <script src="/static/js/jquery.nav.js" />
          <script src="/static/js/owl-carousel/owl.carousel.min.js" />
          <script src="/static/js/jquery.counterup.min.js" />
          <script src="/static/js/lightcase.min.js" />
          <script src="/static/js/jquery.validate.min.js" />
          <script src="/static/js/jquery.wordrotator.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js" />
          <script src="//maps.googleapis.com/maps/api/js" />
          <script src="/static/js/main.js" />
        </body>
      </html>
    );
  }
}
