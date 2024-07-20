import React from "react";
import { useFlutterwave } from "flutterwave-react-v3";
// import flutterwavelogo from "../../assets/flutterwave.png";


export const FlutterPayment = ({number, email, firstName, lastName, amount, selectedOption}) => {
  const config = {
    public_key: import.meta.env.VITE_APP_FLUTTERAPI_KEY,
    tx_ref: Date.now(),
    amount: 1000,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "tayo@gmail.com",
      phonenumber: "07089675634",
      name: "tayor little",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://example.com/logo.png",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      className="formBtn"
      type="submit"
 
      // onClick={handleFlutterPayment}
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            // closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      }}
    >
      {/* {selectedOption === "optionFlutterWave" ? (
        <img src={flutterwavelogo} alt="flutter" />
      ) : (
        "flutterwave"
      )} */}
      flutter
    </button>
  );
};
