"use client";

// import { useState } from 'react';
// import { CardElement, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             setError(error.message);
//             setLoading(false);
//         } else {
//             console.log(paymentMethod, paymentMethod.id);

//             // Send the paymentMethod.id to your server for payment processing
//             // const response = await fetch('/api/payment_intent', {
//             //     method: 'POST',
//             //     headers: {
//             //         'Content-Type': 'application/json',
//             //     },
//             //     body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
//             // });

//             // const paymentIntentResult = await response.json();

//             // if (paymentIntentResult.error) {
//             //     setError(paymentIntentResult.error);
//             // } else {
//             //     // Handle successful payment here
//             // }

//             setLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             {error && <div>{error}</div>}
//             <button type="submit" disabled={!stripe || loading}>
//                 {loading ? 'Processing...' : 'Pay'}
//             </button>
//         </form>
//     );
// };

// export default CheckoutForm;

import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: 'http://localhost:3001/stripe',
            },
        });

        if (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            {error && <div>{error}</div>}
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default CheckoutForm;

// /api/payment_intent
// import Stripe from 'stripe';

// const stripe = new Stripe('your-secret-key-here');

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const { paymentMethodId } = req.body;

//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: 2000, // Amount in cents
//         currency: 'usd',
//         payment_method: paymentMethodId,
//         confirm: true,
//       });

//       res.status(200).json(paymentIntent);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// };
