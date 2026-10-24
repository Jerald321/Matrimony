import { useState } from 'react';

const accountNumber = '6379179214';

const paymentSteps = [
  'Copy the account number shown below.',
  'Open your mobile banking or bank app.',
  'Send the payment to this number.',
  'Share the transaction ID after payment.',
];

const PaymentPage = ({ onBack }) => {
  const [message, setMessage] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber.replace(/\s+/g, ''));
      setMessage('Account number copied successfully.');
    } catch (error) {
      setMessage('Copy failed. Please copy the number manually.');
    }
  };

  return (
    <div className="payment-page">
      
    

      <main className="payment-card">
        <div className="payment-intro">
          <p className="eyebrow">Secure payment</p>
          <h1>Send your payment to continue</h1>
          <p className="subtext">
            Please copy this number and send the money from your preferred banking app.
          </p>
        </div>

        <div className="account-box" aria-live="polite">
          <span className="label">Account Number</span>
          <div className="account-number">{accountNumber}</div>
        </div>

        <button className="copy-btn" onClick={handleCopy} type="button">
          Copy Number
        </button>

        {message && <p className="copy-message">{message}</p>}

        <div className="process-box">
          <h2>Payment Process</h2>
          <ol>
            {paymentSteps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
