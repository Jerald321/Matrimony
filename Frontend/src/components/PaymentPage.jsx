import { useState } from 'react';

export const gpayNumber = '89402 56793';
export const offerPrice = '₹99';

const paymentSteps = [
  'Copy the GPay number shown below.',
  'Open Google Pay or another UPI app.',
  `Send the offer price of ${offerPrice} to this number.`,
  'Share the transaction ID after payment.',
];

const PaymentPage = ({ onBack }) => {
  const [message, setMessage] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(gpayNumber.replace(/\s+/g, ''));
      setMessage('GPay number copied successfully.');
    } catch (error) {
      setMessage('Copy failed. Please copy the number manually.');
    }
  };

  return (
    <div className="payment-page">
      
    

      <main className="payment-card">
        {onBack && (
          <button className="payment-back-btn" type="button" onClick={onBack}>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m15 18-6-6 6-6M9 12h12" />
            </svg>
            <span>Back to home</span>
          </button>
        )}

        <div className="payment-intro">
          <p className="eyebrow">Secure payment</p>
          <h1>Send your payment to continue</h1>
          <p className="subtext">
            Please pay the offer price of {offerPrice}. Copy this number and send the money from your preferred banking app.
          </p>
        </div>

        <div className="offer-price-box">
          <span className="label">Offer Price</span>
          <strong>{offerPrice}</strong>
        </div>

        <div className="account-box" aria-live="polite">
          <span className="label">G-Pay Number</span>
          <div className="account-number">{gpayNumber}</div>
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
