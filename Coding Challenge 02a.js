let productName = ("Custom Soccer Ball") ;
let costPerUnit = 25;
let basePrice = 35;
let discountRate = 0.05;
let salesTaxRate = 0.1;
let fixedMonthlyCost = 150

let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit

let isProfitablePerUnit = profitPerUnit > 0
let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit)

console.log("Product Name: " + productName)

console.log("Discounted Price: $" + discountedPrice)
console.log("Final Price With Tax: $" + finalPriceWithTax)
console.log("Proft Per Unit: $" + profitPerUnit)
console.log("Is Profitable Per Unit: " + isProfitablePerUnit)
console.log("Break Even Units: " + breakEvenUnits)
