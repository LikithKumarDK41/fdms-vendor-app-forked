import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51N8SSZSEAoqrKaZBCVaos5UGgpcGjuAg4Wbc0fPBAtnbUb6TffKUKTbKM2s5Rj657wmBAlin8RbtA377gVITdIsU009zyxFoax');

export default async (req, res) => {
    if (req.method === 'POST') {
        const { items } = req.body;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 2000, // Amount in cents
                currency: 'usd',
                automatic_payment_methods: {
                    enabled: true,
                },
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
};
