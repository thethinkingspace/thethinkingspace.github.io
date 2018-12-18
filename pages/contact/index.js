import Link from 'next/link';
import { Fragment } from 'react';
import CurveDown from '../../components/CurveDown';
import CurveUp from '../../components/CurveUp';
import Header from '../../components/Header';
import Appointment from '../../components/Appointment';
import Help from '../../components/Help';
import Footer from '../../components/Footer';
import Parallax from '../../components/Parallax';

const Index = () => (
  <div class="wrap contact" id="contact">
    <div class="grid grid-pad contact">
      <div class="content">
        <h2>Contact Us</h2>
        <div class="col-1-2">
          <div class="content address">
            <h3>Talk to us</h3>
            <address>
              <div>
                <div class="box-icon">
                  <i class="icon-location" />
                </div>
                <span>Address:</span>
                <p>2/8 Victoria Avenue Bishopsgate London EC2M 4NS</p>
              </div>

              <div>
                <div class="box-icon">
                  <i class="icon-envelope" />
                </div>
                <span>Email</span>
                <p>
                  <a href="mailto:therapy@thethinkingspace.co.uk">
                    therapy@thethinkingspace.co.uk
                  </a>
                </p>
              </div>

              <div>
                <div class="box-icon">
                  <i class="icon-phone" />
                </div>
                <span>Phone:</span>
                <p>020 8361 3219</p>
              </div>

              <div>
                <div class="box-icon">
                  <i class="icon-location" />
                </div>
                <span>We also practice from:</span>
                <p>
                  East Finchley Clinic Bedford Mews Bedford Road London N2 9DB
                </p>
              </div>
            </address>
          </div>
        </div>
        <div class="col-1-2 pleft-25">
          <div class="content contact-form">
            <h3 id="contact-referral-title">Self Referral Form</h3>
            <a
              class="btn"
              href="https://gateway.mayden.co.uk/referral/4561ab1b-33f4-497d-b7f8-c02985ca6c39"
            >
              GO
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default () => (
  <Fragment>
    <Header />
    <Parallax />
    <CurveUp />
    <Index />
    <CurveDown />
    <Appointment />
    <CurveDown className="curveGrey" />
    <Help />
    <CurveUp className="curveBlack" />
    <Footer />
  </Fragment>
);
