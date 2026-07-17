console.log("Processing Payment...");

const payment = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Payment Successful");
    }, 4000);
});

payment.then((message) => {
    console.log(message);
});