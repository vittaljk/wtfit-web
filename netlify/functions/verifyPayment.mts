exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  const crypto = require("crypto");

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);

  hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const generated_signature = hmac.digest("hex");

  if (generated_signature === razorpay_signature) {
    return {
      statusCode: 200,
      body: JSON.stringify({ statusCode: 200, message: "Payment successful" }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        statusCode: 400,
        error: "Payment verification failed",
      }),
    };
  }
};
