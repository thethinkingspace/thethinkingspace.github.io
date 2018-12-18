const QuoteItem = ({ children }) => (
  <div className="item client-carousel-item">
    <div className="quotes-icon">
      <i className="icon-quotes-left" />
    </div>
    <p>{children}</p>
  </div>
);

export default () => (
  <div className="wrap services-wrap">
    <section className="grid grid-pad">
      <div className="col-1-1 service-box cl-client-carousel-container">
        <div className="content">
          <div className="cl-client-carousel">
            <QuoteItem>
              Thank you for all the help you gave me and for not giving up on me
              when I wasn’t the easiest of patients to treat. Your dedication to
              help me has been amazing and you have changed my life for the
              better.
            </QuoteItem>
            <QuoteItem>Relaxation therapy and revisit past events.</QuoteItem>
            <QuoteItem>
              Thank you for making me not scared, I’m so happy that I am not
              scared.
            </QuoteItem>
            <QuoteItem>
              The relaxation sessions were helpful in dispersing my anxieties
              and worries.
            </QuoteItem>
            <QuoteItem>
              Realising the reasons for my OCD, what ‘safety’ means to me.
            </QuoteItem>
            <QuoteItem>
              I literally feel like a different person. Even through the tears I
              loved my sessions with you.
            </QuoteItem>
            <QuoteItem>
              I feel like I have become a more balanced person, this experience
              has exceeded my expectations.
            </QuoteItem>
            <QuoteItem>
              I feel like I have been given such a precious gift to carry
              forward in my life.
            </QuoteItem>
            <QuoteItem>
              I have grown and developed much more as a person after working
              with you.
            </QuoteItem>
          </div>
        </div>
      </div>
    </section>
  </div>
);
