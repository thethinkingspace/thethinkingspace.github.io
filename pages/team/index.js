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
  <div class="wrap team-wrap" id="team">
    <div class="grid grid-pad">
      <div class="content">
        <div class="col-1-1">
          <div class="content staff-content">
            <div class="recent-work staff-img">
              <div class="work-info staff-info">
                <h5>
                  <a href="">Ms Tien Mandell</a>
                </h5>
                <span>Your Therapist</span>
                <p>BSc (Hons) Psychology, MSc CBT with merit</p>
                <p>
                  Tien has a foundation in counselling psychology and cognitive
                  behavioural therapy and now specialises in '3rd wave' CBT
                  approaches, which focuses on compassionate yet precise
                  behavioural focused treatments. Tien's expertise are in
                  Acceptance &amp; Commitment therapy (ACT) and Functional
                  Analytic Psychotherapy (FAP) and contributes to the clinical
                  development of the FAP field as well as presents FAP training
                  workshops for clinicians internationally. She has worked in
                  both the primary care sector and with the Priory Hospital with
                  adults across a variety of mental health and life issues. She
                  worked as a research therapist for UCH/UCL in an ACT based RCT
                  for terminal cancer patients.
                </p>
                <p>
                  Tien is currently reading a PhD with the University of Glasgow
                  researching the behavioural components of effective
                  therapeutic relationship to foster change.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-1 second-member">
          <div class="content staff-content">
            <div class="recent-work staff-img">
              <div class="work-info staff-info">
                <h5>
                  <a href="">Jacqui Thorne</a>
                </h5>
                <span>Practice Manager</span>
                <p>
                  Jacqui ensures that the practice runs smoothly, handling all
                  appointment and administrative queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="staff_des col-1-1">
        All our practitioners are fully insured for both public liabilities and
        professional indemnity and undertakes regular supervision and
        professional development.
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
