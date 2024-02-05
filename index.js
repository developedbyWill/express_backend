const express = require("express");

const app = express();

// routes & handlers
app.get("/waakye-vendors", (req, res) => {
  res.send(
    "<h2>Here are your waakye vendors for today: Auntie Muni, Waakye Guy Guy, Rockstone.</h2>"
  );
});

app.post("/order-waakye", (req, res) => {
  res.send(
    "<h2>Your waakye order has been placed! Delivery time: 30 - 45 minutes.</h2>"
  );
});

app.put("/update-waakye-order", (req, res) => {
  res.send("<h2>Order has been successfully updated.</h2>");
});

app.delete("/cancel-order", (req, res) => {
  res.send("<h2>Order has been cancelled.</h2>");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
