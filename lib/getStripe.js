// @ts-nocheck
import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51LAtieLrnNWCZqyrlmUNqrL9xMgOV4D9l585auNjnjXlgNq9d1ll7CHqLzLpFKeKHcNtsQlOXnUaALi6vydjnpUE00jY1bjTwP");
  }
  return stripePromise;
};

export default getStripe;
