import { useState, useEffect } from "react";
import { Button } from "@heroui/button";

declare global {
  interface Window {
    Razorpay: any;
  }
}

function IndexPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script tag when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  async function handlePayment() {
    setLoading(true);

    const response = await fetch("/.netlify/functions/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 100 }),
    });

    const order = await response.json();

    if (order.error) {
      alert(order.error);
      setLoading(false);

      return;
    }

    // Step 2: Initialize Razorpay Checkout with the order details
    const options = {
      key: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
      amount: order.amount, // Amount in currency subunits (e.g., 100 INR = 10000 paise)
      currency: "INR",
      name: "WTFit",
      //   description: "Test Transaction", // Transaction description
      //   image: "https://example.com/your_logo.png", // Optional: Your logo or an image
      order_id: order.id, // Razorpay order ID from your backend
      //   prefill: {
      //     name: "Gaurav Kumar", // Customer's name
      //     email: "gaurav.kumar@example.com",
      //     contact: "9000090000", // Customer's phone number
      //   },
      theme: {
        color: "#000000", // Custom theme color
      },
      handler: async function (response: any) {
        // This function will be called when the payment is successful

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        const verifyResponse = await fetch(
          "/.netlify/functions/verifyPayment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
            }),
          },
        );

        const verifyResult = await verifyResponse.json();

        console.log("verifyResult", verifyResult);

        if (verifyResult.statusCode === 200) {
          alert(verifyResult.message);
        } else {
          alert(verifyResult.error);
        }

        setLoading(false); // Stop loading after verification
      },
    };

    // Step 4: Open Razorpay Checkout Modal
    const rzp1 = new window.Razorpay(options);

    rzp1.open();

    setLoading(false); // Stop loading once the checkout modal opens
  }

  return (
    <div>
      <Button color="primary" onPress={handlePayment}>
        <span className="text-white">Pay 1 INR</span>
      </Button>
      {/* <Button color="primary" onPress={verifyPayment}>
        <span className="text-white">Verify Payment</span>
      </Button> */}
    </div>
  );
}

export default IndexPage;
