const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint for health data
app.get("/health", (req, res) => {
  // Simulated health data
  const healthData = {
    username: "John Doe",
    heartRate: 75,
    bloodPressure: "120/80",
  };

  res.json(healthData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
