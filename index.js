const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Endpoint 1: Calculate the Returns of the Stocks added.
function calculateReturns(boughtAt, marketPrice, quantity) {
  let totalBoughtAt = boughtAt * quantity;
  let totalMarketPrice = marketPrice * quantity;
  return totalMarketPrice - totalBoughtAt;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;
  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
});

// Endpoint 2: Calculate the Total Returns.
function totalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(totalReturns(stock1, stock2, stock3, stock4).toString());
});

// Endpoint 3: Calculate the Return Percentage.
function calculateReturnPercentage(boughtAt, returns) {
  return (returns * 100) / boughtAt;
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calculateReturnPercentage(boughtAt, returns).toString());
});

// Endpoint 4: Calculate the Total Return Percentage.
function totalReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  res.send(totalReturnPercentage(stock1, stock2, stock3, stock4).toString());
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value.
function checkStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  res.send(checkStatus(returnPercentage).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
