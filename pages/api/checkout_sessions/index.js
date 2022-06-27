// @ts-nocheck
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51LAtieLrnNWCZqyrrDWEsCaHiN1FYwbfyZKiblmOwukX1OsTOKb17pAKthV54vIPSRwM3jvQ1nICqjHtDhEFxd1k00HfsmrIQU', {
  apiVersion: "2020-08-27"
})

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req?.body?.items ?? [],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
