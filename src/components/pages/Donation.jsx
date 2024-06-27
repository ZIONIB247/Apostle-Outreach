import React from "react";
import paystacklogo from "../../assets/paystack.png";

const Donation = () => {
  return (
    <section className="secTwo">
      <div className="genLayout donationWrapper">
        <div className="donationContent">
          <h1>donor care</h1>

          <p>
            Our Donor Care team is available to answer any general inquiries
            about Covenant House programs, policies, donations, and our
            fundraising work.
          </p>
          <br />

          <p>
            Our team responds to questions from 8:30 AM - 5 PM (ET) Monday
            through Friday.
          </p>

          <span>
            phone: <a href="#">1-800-388-3888</a>
          </span>
        </div>

        <div className="donationForm">
          <h2>donation details</h2>
          <form>
            <div className="inputWrapper">
              <div className="inputCont">
                <label>first name</label>
                <input type="text" />
              </div>
              <div className="inputCont">
                <label>last name</label>
                <input type="text" />
              </div>
            </div>
            <div className="inputWrapper">
              <div className="inputCont">
                <label>email</label>
                <input type="text" placeholder="email@gmail.com" required />
              </div>
              <div className="inputCont">
                <label>mobile phone</label>
                <input type="text" />
              </div>
            </div>
            <div className="inputCont">
              <label>amount</label>
              <input type="text" required />
            </div>

            {/* <div className="formBtnGroup">
              <button className="formBtn">
                pay with bank
              </button>
              <button className="formBtn">
                <img src={paystacklogo} alt="pay stack" />
              </button>
            </div> */}

            <button className="formBtn">
              <img src={paystacklogo} alt="pay stack" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donation;
