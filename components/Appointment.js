export default () => (
  <div className="wrap grey contact" id="contact">
    <div className="grid grid-pad">
      <div className="content">
        <h2>Make an appointment</h2>
        <div className="col-1-2">
          <div className="content address">
            <h3>Talk to us</h3>
            <p>
              If you would like to book an appointment or request a call back,
              please fill in this simple form
            </p>
          </div>
        </div>
        <div className="col-1-2 pleft-25">
          <div className="content contact-form">
            <form
              className="form"
              id="form-contact"
              name="form-contact"
              method="post"
              action=""
            >
              <div className="contact_us">
                <input id="hidden" name="hidden" type="text" defaultValue="" />
                <label htmlFor="your-name" />
                <input
                  type="text"
                  name="your-name"
                  id="your-name"
                  className="required"
                  placeholder="Name*"
                />
                <label htmlFor="email-address" />
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  className="email required"
                  placeholder="Email*"
                />
                <label htmlFor="phone" />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="comment-phone required"
                  placeholder="Enter your phone number*"
                />
                <span id="checkbox-holder">
                  <span id="learn-terms">
                    I accept the terms of{' '}
                    <span id="popup-link">patient consent</span>
                    (alternatively give us a call or{' '}
                    <a href="mailto:therapy@thethinkingspace.co.uk">
                      email
                    </a>{' '}
                    us)
                  </span>
                  <input
                    type="checkbox"
                    name="accept-terms"
                    className="required"
                    id="accept-terms"
                  />
                </span>
                <input type="hidden" name="times" id="consent-time" />
                <input type="hidden" name="dates" id="consent-date" />
                <input
                  type="hidden"
                  name="consent"
                  id="consent-accepted"
                  defaultValue="Yes, consent is accepted by patient"
                />
                <input
                  type="submit"
                  value="Submit your request"
                  className="btn submit comment-submit"
                />

                <div id="concent-pop-up" className="popup">
                  <div className="popup-container">
                    <div className="popup-header">
                      <h3>Access to Patient Information Consent Form</h3>
                      <span className="close-popup" />
                    </div>

                    <div className="popup-body content-text">
                      <p>
                        Your privacy is important to us, and we would like to
                        communicate with you in a manner that is in line with UK
                        law on data protection. As a result of a change in UK
                        law, we need your consent in order for us to contact you
                        and hold information about you. Information we might
                        hold about you includes the following:
                      </p>

                      <ul>
                        <li>
                          Personal details such as: name, address, telephone
                          numbers, email, date of birth, signature, bank
                          details, insurance details, referring GP or
                          psychiatrist details.
                        </li>
                      </ul>

                      <p>
                        This Psychology Practice collects the above type of
                        information for the primary purpose of providing quality
                        health care. By signing this form you are confirming
                        that you are consenting to The Thinking Space Psychology
                        Service Ltd holding and processing your personal data
                        for the following purposes:
                      </p>

                      <ul>
                        <li>
                          Communicating with you via telephone, SMS, email or
                          letter for the purposes of your therapy or invoicing
                          for your therapy. We use client management software
                          for this purpose:{' '}
                          <a
                            href="https://bac-pac.co.uk/security/ "
                            target="_blank"
                          >
                            https://bac-pac.co.uk/security/{' '}
                          </a>
                        </li>

                        <li>
                          Communicating with your referring GP or psychiatrist
                          or insurer for the purposes of your therapy;
                          assessment and treatment purposes.
                        </li>

                        <li>
                          If we are concerned for your safety or identify any
                          risk to yourself or others at any time during your
                          treatment, we may contact your GP or other relevant
                          services as we would have a duty of care to do so.
                          Where possible the reasons for this would be discussed
                          with you, but this may not always be possible.
                        </li>

                        <li>
                          ank details for the purpose of invoicing you for your
                          therapy. We use Sage and iZettle for recording and
                          processing of financial transactions. Please view
                          their privacy policies here:{' '}
                          <a
                            href="https://www.sage.com/company/privacy-notice-and-cookies"
                            target="_blank"
                          >
                            https://www.sage.com/company/privacy-notice-and-cookies
                          </a>{' '}
                          and{' '}
                          <a
                            href="https://www.izettle.com/gb/privacy-policy"
                            target="_blank"
                          >
                            https://www.izettle.com/gb/privacy-policy
                          </a>{' '}
                        </li>
                      </ul>

                      <p>
                        I understand that by signing this consent form, The
                        Thinking Space Psychology Service Ltd is authorised on
                        my behalf to use my personal information for the
                        purposes specified and I am free to withdraw my consent
                        at any time.
                      </p>
                    </div>

                    <div className="popup-footer">
                      <div className="clearfix" />
                    </div>
                  </div>

                  <div className="consent-pop-up-bg" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
