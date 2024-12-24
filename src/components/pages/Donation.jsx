// import paystacklogo from "../../assets/paystack.png";
// import { FlutterPayment } from "../payment/FlutterPayment";
// import PaystackPop from "@paystack/inline-js";
import React, { useState } from "react";
import flutterwavelogo from "../../assets/fluuterwave.jpg";
import { useFlutterwave } from "flutterwave-react-v3";
import logo from "../../assets/logoo.png"
import { useNavigate } from "react-router-dom";


const Donation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  // name: firstName,
  // Function to handle radio button changes
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // function to process payment with paystack
  // const handlePayment = (e) => {
  //   e.preventDefault();

  //   const paystack = new PaystackPop();
  //   paystack.newTransaction({
  //     key: import.meta.env.VITE_APP_API_KEY,
  //     amount: amount * 100,
  //     email: email,

  //     onSuccess(transcation) {
  //       let message = `Payment Complete!! Reference ${transcation.reference}`;
  //       alert(message);
  //       setEmail("");
  //       setFirstName("");
  //       setLastName("");
  //       setAmount("");
  //     },

  //     onCancel() {
  //       alert("You are about to cancel the transaction!!!");
  //     },
  //   });
  // };

  // function to process payment with flutterwave
  // const handleFlutterPayment = (event) => {
  //   event.preventDefault();

  //   const config = {
  //     public_key: 'YOUR_PUBLIC_KEY', // Replace with your public key
  //     tx_ref: Date.now(),
  //     amount: amount,
  //     currency: 'USD',
  //     payment_options: 'card,mobilemoney,ussd',
  //     customer: {
  //       email: email,
  //       phonenumber: '070********',
  //       name: `${firstName} ${lastName}`,
  //     },
  //     customizations: {
  //       title: 'My store',
  //       description: 'Payment for items in cart',
  //       logo: 'https://example.com/logo.png',
  //     },
  //   };

  // };
  const config = {
    public_key: import.meta.env.VITE_APP_FLUTTERAPI_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: number,
      name: `${firstName} ${lastName}`,
      
    },
    customizations: {
      title: "Apostle Chidi Alagwu Outreach",
      description: "A nonprofit organization, aims at reaching lives" ,
      logo: logo,
    },
  };
  const handleFlutterPayment = useFlutterwave(config);


  // function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !amount) {
      alert("All fields are required.");
      return;
    }

    handleFlutterPayment({
      callback: (response) => {
        if (response.status === "successful") {
          alert("Payment Successful!");
        }

        // Close the payment modal
        closePaymentModal();
      },
      onClose: () => {
        alert("Payment process closed.");

         // Redirect to the home page
         navigate("/donate");

         // Clear input fields
         setFirstName("")
         setLastName("")
         setEmail("")
         setAmount("")
         setNumber("")
         setSelectedOption("")
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
                <label htmlFor="number">mobile phone</label>
                <input
                  type="number"
                  required
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
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

            {/* <p>Select a method of payment:</p> */}
            <p>Select the radio button to make payment:</p>

            <div className="paymentSelection">
              {/* <label>
                <input
                  type="radio"
                  value="optionPayStack"
                  checked={selectedOption === "optionPayStack"}
                  onChange={handleRadioChange}
                />
                PayStack
              </label> */}

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
              {/* <button
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
              </button> */}

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

                // onClick={handleFlutterPayment}
                // onClick={(e) => {
                //   e.preventDefault();
                //   handleFlutterPayment({
                //     callback: (response) => {
                //       console.log(response);
                //       // closePaymentModal(); // this will close the modal programmatically
                //     },
                //     onClose: () => {},
                //   });
                // }}
                onClick={handleSubmit}
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
      {/* <FlutterPayment /> */}
    </section>
    
  );
};

export default Donation;
