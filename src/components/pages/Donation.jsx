import React, { useState } from "react";
import paystacklogo from "../../assets/paystack.png";
import PaystackPop from "@paystack/inline-js";

const Donation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  // function to process payment
  const handlePayment = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_caf651a9be19d6c43831fc848bc81aa2714783cf",
      amount: amount * 100,
      email: email,

      onSuccess(transcation) {
        let message = `Payment Complete!! Reference ${transcation.reference}`;
        alert(message);
        setEmail("");
      },

      onCancel() {
        alert("You are about to cancel the transaction!!!");
      },
    });
  };

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
                <label htmlFor="first-name">first name</label>
                <input
                  type="text"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="inputCont">
                <label htmlFor="last-name">last name:</label>
                <input
                  type="text"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="inputWrapper">
              <div className="inputCont">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  placeholder="email@gmail.com"
                  required
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputCont">
                <label>mobile phone</label>
                <input type="text" />
              </div>
            </div>
            <div className="inputCont">
              <label htmlFor="amount">amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <button className="formBtn" onClick={handlePayment} type="submit">
              <img src={paystacklogo} alt="pay stack" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donation;
