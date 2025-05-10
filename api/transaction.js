export default function handler(req, res) {
  const locations = ['Australia', 'USA', 'India', 'Germany', 'UK'];
  const descriptions = [
    "Transferred to family member",
    "Payment for online shopping",
    "Suspicious overseas purchase",
    "ATM cash withdrawal",
    "Monthly rent transfer",
    "Utility bill payment",
    "Unknown charge",
    "Business transaction from new client"
  ];

  const randomTransaction = {
    user_id: `u${Math.floor(Math.random() * 1000)}`,
    amount: parseFloat((Math.random() * 15000).toFixed(2)),
    location: locations[Math.floor(Math.random() * locations.length)],
    timestamp: new Date().toISOString(),
    description: descriptions[Math.floor(Math.random() * descriptions.length)]
  };

  res.status(200).json(randomTransaction);
}
