import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";

import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";

// import {Alert} from "@heroui/alert";
declare global {
  interface Window {
    Razorpay: any;
  }
}

const words = ["Fitness", "Flexibility", "Fun"];
// const sentences = [
// ` Strengthening involves exercises that build muscle power,
//   endurance, and resilience. Activities like weightlifting,
//   resistance training, and bodyweight exercises improve bone
//   density, joint stability, and overall physical performance.
//   Regular strengthening routines enhance metabolism, posture, and
//   injury prevention, contributing to long-term health and vitality.
//   It’s a foundation for a strong, balanced body. If your aim is to
//   be stronger than yesterday? Then this program is for you…`,
// `Flexibility is the ability of muscles and joints to move through
//   their full range of motion. It enhances mobility, posture, and
//   overall physical performance while reducing the risk of injury.
//   Stretching exercises like yoga or dynamic movements improve
//   flexibility, promoting relaxation, better circulation, and balance
//   for a healthier, more agile body. Join our Flexi guru and
//   challenge your limits and body…`,
// `Dance fitness combines fun and exercise through rhythmic,
//   high-energy movements. It improves cardiovascular health,
//   coordination, and strength while burning calories. Styles like
//   Zumba, hip-hop, or salsa make workouts enjoyable and accessible
//   for all skill levels. Dance fitness boosts mood, relieves stress,
//   and fosters a sense of community in an engaging way. Get ready to
//   show us your Thumkaas and engage yourself for the fun filled
//   session.`,
// ];

function IndexPage() {
  // TODO: custom hook for booking
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  async function handleBooking() {
    setLoading(true);
    const response = await fetch("/.netlify/functions/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 60000 }),
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

    setLoading(false);
  }

  return (
    <Templates.Layout>
      <Molecules.HeroBanner
        actionButton={{
          text: "book now",
          onClick: handleBooking,
        }}
        heroImage="https://res.cloudinary.com/dckehlgqk/image/upload/v1738428647/fun_event_8th_se4ixp.jpg"
      />
      <div className="px-6 py-8" data-aos="fade-up">
        Fitness is the state of physical and mental well-being achieved through
        regular exercise, proper nutrition, and healthy lifestyle habits. It
        improves strength, endurance, flexibility, and cardiovascular health
        while reducing the risk of chronic diseases. Fitness isn’t just about
        intense workouts; activities like walking, yoga, or swimming contribute
        too. Consistency, balanced diets, and adequate rest are key components.
        Mental fitness, through mindfulness and stress management, complements
        physical health. Fitness fosters confidence, boosts energy, and enhances
        overall quality of life. Whether for weight management, muscle building,
        or simply feeling good, prioritizing fitness helps create a healthier,
        more vibrant version of yourself.
      </div>
      <div className="m-5 p-6 bg-white rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.4)]  text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Dance Choreography Workshop
        </h2>

        <p className="mb-2 text-sm">
          <span className="font-semibold text-gray-700">Dates:</span> 8th –
          9th February 2025
        </p>
        <p className="mb-2 text-sm">
          <span className="font-semibold text-gray-700">Timing:</span> 9:00 AM –
          11:00 AM
        </p>
        <p className="mb-2 text-sm">
          <span className="font-semibold text-gray-700">Place:</span> NH2
          Dopamine, Kathriguppe, Banashankari 3rd Stage
        </p>
        <p className="text-sm">
          <span className="font-semibold text-gray-700">Amout:</span> 600 INR
        </p>
        <div className="mt-4">
          <Button fullWidth color="primary" onPress={handleBooking}>
            <span className="text-white uppercase">book now</span>
          </Button>
        </div>
      </div>

      <div>
        <div className="px-6 pb-8 text-3xl font-bold">
          <span>What the </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              initial={{ y: 20, opacity: 0 }}
              style={{ display: "inline-block" }}
              transition={{ duration: 0.5 }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="px-6 pb-8">
          <div data-aos="fade-up">
            Strengthening involves exercises that build muscle power, endurance,
            and resilience. Activities like weightlifting, resistance training,
            and bodyweight exercises improve bone density, joint stability, and
            overall physical performance. Regular strengthening routines enhance
            metabolism, posture, and injury prevention, contributing to
            long-term health and vitality. It’s a foundation for a strong,
            balanced body. If your aim is to be stronger than yesterday? Then
            this program is for you…
          </div>
          <div className="pt-2 font-semibold" data-aos="fade-right">
            Are you ready to Transform????
          </div>
        </div>
        <div className="px-6 pb-8">
          <div data-aos="fade-up">
            Flexibility is the ability of muscles and joints to move through
            their full range of motion. It enhances mobility, posture, and
            overall physical performance while reducing the risk of injury.
            Stretching exercises like yoga or dynamic movements improve
            flexibility, promoting relaxation, better circulation, and balance
            for a healthier, more agile body. Join our Flexi guru and challenge
            your limits and body…
          </div>
          <div className="pt-2 font-semibold" data-aos="fade-right">
            Are you ready to Transform????
          </div>
        </div>
        <div className="px-6 pb-8">
          <div data-aos="fade-up">
            Dance fitness combines fun and exercise through rhythmic,
            high-energy movements. It improves cardiovascular health,
            coordination, and strength while burning calories. Styles like
            Zumba, hip-hop, or salsa make workouts enjoyable and accessible for
            all skill levels. Dance fitness boosts mood, relieves stress, and
            fosters a sense of community in an engaging way. Get ready to show
            us your Thumkaas and engage yourself for the fun filled session.
          </div>
          <div className="pt-2 font-semibold">
            Are you ready to Transform????
          </div>
        </div>
      </div>
    </Templates.Layout>
  );
}

export default IndexPage;
