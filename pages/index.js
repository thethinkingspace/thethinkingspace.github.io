import { Fragment } from 'react';
import CurveDown from '../components/CurveDown';
import CurveUp from '../components/CurveUp';
import Header from '../components/Header';
import Services from '../components/Services';
import Issues from '../components/Issues';
import Quotes from '../components/Quotes';
import Appointment from '../components/Appointment';
import Help from '../components/Help';
import Footer from '../components/Footer';
import Parallax from '../components/Parallax';

export default () => (
  <Fragment>
    <Header />
    <Parallax>
      <h1 id="rotating-words" />
      <p>
        We are a London based provider of caring, efficient and wellbeing
        focused treatment.
      </p>
      <a className="btn btn-ghost" href="#services">
        Find Out More
      </a>
      <a className="btn btn-ghost" href="#contact">
        Book Appointment
      </a>
    </Parallax>
    <CurveUp />
    <Services />
    <CurveDown />
    <Issues />
    <CurveUp />
    <Quotes />
    <CurveDown />
    <Appointment />
    <CurveDown className="curveGrey" />
    <Help />
    <CurveUp className="curveBlack" />
    <Footer />
  </Fragment>
);
