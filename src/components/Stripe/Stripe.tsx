import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../CheckoutForm/CheckoutForm'
const public_key = "pk_test_51KsVJPEspMlAcj4SbW2cOBjefHDWNk7ktVZEzoY42bh5VE4FNqBfnZXhuDj7PknKnWEIC9D7IlRH25leSOeTzlZG00fKHIDQqx"

const stripePromise = loadStripe(public_key);
const Stripe = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Stripe
