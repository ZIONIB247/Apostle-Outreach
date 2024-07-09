import React, { useState } from "react";
import paystacklogo from "../../assets/paystack.png";
import flutterwavelogo from "../../assets/flutterwave.png";
import PaystackPop from "@paystack/inline-js";

const Donation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle radio button changes
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // function to process payment with paystack
  const handlePayment = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: import.meta.env.VITE_APP_API_KEY,
      amount: amount * 100,
      email: email,

      onSuccess(transcation) {
        let message = `Payment Complete!! Reference ${transcation.reference}`;
        alert(message);
        setEmail("");
        setFirstName("");
        setLastName("");
        setAmount("");
      },

      onCancel() {
        alert("You are about to cancel the transaction!!!");
      },
    });
  };

  // function to process payment with flutterwave
  const handleFlutterPayment = (event) => {
    event.preventDefault();
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

            <p>Select a method of payment:</p>

            <div className="paymentSelection">
              <label>
                <input
                  type="radio"
                  value="optionPayStack"
                  checked={selectedOption === "optionPayStack"}
                  onChange={handleRadioChange}
                />
                PayStack
              </label>

              <label>
                <input
                  type="radio"
                  value="optionFlutterWave"
                  checked={selectedOption === "optionFlutterWave"}
                  onChange={handleRadioChange}
                />
                Flutter Wave
              </label>
            </div>

            <div className="btnPaymentGroup">
              {/* button one  */}
              <button
                className="formBtn"
                onClick={handlePayment}
                type="submit"
                style={{
                  backgroundColor:
                    selectedOption === "optionPayStack" ? "#fff" : "gray",
                  cursor:
                    selectedOption === "optionPayStack"
                      ? "pointer"
                      : "not-allowed",
                }}
                disabled={selectedOption !== "optionPayStack"}
              >
                {selectedOption === "optionPayStack" ? (
                  <img src={paystacklogo} alt="pay stack" />
                ) : (
                  "paystack"
                )}
              </button>

              {/* button two  */}
              <button
                className="formBtn"
                type="submit"
                style={{
                  backgroundColor:
                    selectedOption === "optionFlutterWave" ? "#fff" : "gray",
                  // boxShadow:
                  //   selectedOption === "optionFlutterWave"
                  //     ? "0.2rem 0.2rem 5px #228ae6"
                  //     : "none",
                  cursor:
                    selectedOption === "optionFlutterWave"
                      ? "pointer"
                      : "not-allowed",
                }}
                disabled={selectedOption !== "optionFlutterWave"}
                onClick={handleFlutterPayment}
              >
                {selectedOption === "optionFlutterWave" ? (
                  <img src={flutterwavelogo} alt="flutter" />
                ) : (
                  "flutterwave"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Donation;
