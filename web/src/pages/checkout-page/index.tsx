import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from '../../components/payment-form';

import styles from "./styles.module.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NpF68Gx9zfdiazshH4YnKsNCRE1ddEyfAtqEKefhaKKbmpTUaOC8q4Hr7X9ohdXVHBARQdcoDp8ijdPv8YLxOip00gkoaupig');

export function CheckoutPage() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3OGqnTGx9zfdiazs0veL54gh_secret_xZW0CiNo9W3VfqfP58mLJSokX',
  };

  return (
    <div className={styles.container}>

      <Elements stripe={stripePromise} options={options}>
        <PaymentForm />
      </Elements>
    </div>
  );
};