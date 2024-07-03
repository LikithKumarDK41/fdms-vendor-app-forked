import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51N8SSZSEAoqrKaZBiDuIM1lJEKSWPCKa19ghscHdKhEsR2Hpsth2ScamFLdvfwMkA00r1EBdXB8QHMaSQ1yuFP1J00qVbJ1tnU');

const StripeProvider = ({ children, clientSecret }) => {
    return (
        clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                {children}
            </Elements>
        )
    );
};

export default StripeProvider;
