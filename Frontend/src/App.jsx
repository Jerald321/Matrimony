import { useState } from "react";
import Home from "./components/Home";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  return showPaymentPage ? (
    <PaymentPage onBack={() => setShowPaymentPage(false)} />
  ) : (
    <Home onPayment={() => setShowPaymentPage(true)} />
  );
};

export default App;