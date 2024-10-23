import CheckoutConfig from "../ui/cards/CheckoutConfig";

const Test = () => {
  return (
    <div className="h-[100vh] ">
      <CheckoutConfig 
        basePrice={80}
        standing={100}
      />
    </div>
  );
};

export default Test;
