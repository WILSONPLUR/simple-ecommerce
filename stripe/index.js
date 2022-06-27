// @ts-nocheck
import Stripe from "stripe";
export const stripe = new Stripe(
  process.env.STRIPE_S_KEY,
  {
    apiVersion: "2020-08-27",
  }
);
