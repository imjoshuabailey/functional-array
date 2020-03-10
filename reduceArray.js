const Orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

function reduction(arr) {
    let added = 0
    for (i=0; i < arr.length; i++) {
        added = added + arr[i].amount
    }
    return added
}

console.log(reduction(Orders))
let initialValue = 0
const addedOrders = Orders.reduce(myFunc, initialValue);

function myFunc(total, num) {
    return total + num.amount;
}

console.log(addedOrders)