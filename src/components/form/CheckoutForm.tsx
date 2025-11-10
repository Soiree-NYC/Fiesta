import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

import SpecialButton from "../ui/buttons/SpecialButton";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation`,
      },
    });

    if (error) alert(error.message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <SpecialButton
        title='Pay Now'
        callback={() => console.log('clicked')}
        type="submit"
        disabled={!stripe}
      />
    </form>
  );
};

export default CheckoutForm;
