import React, { useEffect } from 'react';

const GooglePayButton = ({ onPaymentSuccess, onPaymentError, totalPrice }) => {
  useEffect(() => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: 'TEST' });

    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: 'your-merchant-id',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: parseFloat(totalPrice).toFixed(2), // Ensure totalPrice is a number
        currencyCode: 'USD',
        countryCode: 'US',
      },
    };

    const handlePaymentData = (paymentData) => {
      onPaymentSuccess(paymentData);
    };

    const handleError = (error) => {
      onPaymentError(error);
    };

    const onGooglePayLoaded = () => {
      const button = paymentsClient.createButton({
        onClick: () => {
          paymentsClient.loadPaymentData(paymentRequest)
            .then(handlePaymentData)
            .catch(handleError);
        },
      });
      document.getElementById('google-pay-button-container').appendChild(button);
    };

    if (window.google && window.google.payments && window.google.payments.api) {
      onGooglePayLoaded();
    } else {
      const script = document.createElement('script');
      script.src = 'https://pay.google.com/gp/p/js/pay.js';
      script.async = true;
      script.onload = onGooglePayLoaded;
      script.onerror = () => handleError('Google Pay script failed to load.');
      document.body.appendChild(script);
    }
  }, [onPaymentSuccess, onPaymentError, totalPrice]);

  return <div id="google-pay-button-container" />;
};

export default GooglePayButton;
