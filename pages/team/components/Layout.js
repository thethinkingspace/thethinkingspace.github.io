import { Fragment } from 'react';
import CurveDown from '../../../components/CurveDown';
import CurveUp from '../../../components/CurveUp';
import Header from '../../../components/Header';
import Appointment from '../../../components/Appointment';
import Help from '../../../components/Help';
import Footer from '../../../components/Footer';
import Parallax from '../../../components/Parallax';
import Menu from './Menu';

const Index = ({ title, children }) => (
  <div class="wrap privacy-wrap" id="privacy">
    <section class="grid grid-pad privacy">
      <h2>{title}</h2>
      <Menu />
      <div class="content-text col-9-12 push-right">{children}</div>
    </section>
  </div>
);

export default props => (
  <Fragment>
    <Header />
    <Parallax />
    <CurveUp />
    <Index {...props} />
    <CurveDown />
    <Appointment />
    <CurveDown className="curveGrey" />
    <Help />
    <CurveUp className="curveBlack" />
    <Footer />
  </Fragment>
);
