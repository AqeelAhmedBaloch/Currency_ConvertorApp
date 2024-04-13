import inquirer from "inquirer";
let loop = true;
while (loop) {
    const currency = {
        PRK: 1, // Base Currency
        KWT: 902.71,
        USD: 0.0036,
        INR: 3.33,
        RND: 0.067,
    };
    const user_answer = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            choices: ["Pakistani Rupee", "Kuwaiti Dinar", "US Doller", "Indian Rupee", "UAE Dirham", "Saudi Riyal"],
            message: "Select your Input Currency : "
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the amount you want to convert : ",
        },
        {
            type: "list",
            name: "currencyOutput",
            choices: ["Pakistani Rupee", "Kuwaiti Dinar", "US Doller", "Indian Rupee", "UAE Dirham", "Saudi Riyal"],
            message: "Select your Output Currency : "
        }
    ]);
    const input = user_answer.currencyInput;
    const output = user_answer.currencyOutput;
    const amount = user_answer.amountInput;
    // PKR to Kuwaiti Dinar & Kwaiti Dinar to PKR
    if (input === "Pakistani Rupee") {
        if (output === "Kuwaiti Dinar") {
            // console.log(`The ${amount.toFixed(2)} Pakistan Rupee is equal to ${(amount / 902.71).toFixed(2)} Kwaiti Dinar`);
            console.log(`The ${amount.toFixed(2)} Pakistan Rupee is equal to ${(amount / currency.KWT).toFixed(2)} Kwaiti Dinar`);
        }
    }
    else if (input === "Kuwaiti Dinar") {
        console.log(`The ${amount.toFixed(2)} Kuwaiti Dinar is equal to ${(amount * currency.KWT).toFixed(2)} Pakistani Rupees`);
    }
    // PKR to US Doller & US Doller to PKR
    if (input === "Pakistani Rupee") {
        if (output === "US Doller") {
            console.log(`The ${amount.toFixed(2)} Pakistan Rupee is equal to ${(amount / 277.95).toFixed(2)} US Doller`);
        }
    }
    else if (input === "US Doller") {
        console.log(`The ${amount.toFixed(2)} US Doller is equal to ${(amount * 277.95).toFixed(2)} Pakistani Rupees`);
    }
    // PKR to Indian Rupees & Indian Rupees to PKR
    if (input === "Pakistani Rupee") {
        if (output === "Indian Rupee") {
            console.log(`The ${amount.toFixed(2)} Pakistan Rupee is equal to ${(amount / 3.32).toFixed(2)} Indian Rupee`);
        }
    }
    else if (input === "Indian Rupee") {
        console.log(`The ${amount.toFixed(2)} Indian Rupee is equal to ${(amount * 3.32).toFixed(2)} Pakistan Rupee`);
    }
    // PKR to Indian Rupees & Indian Rupees to PKR
    if (input === "Pakistani Rupee") {
        if (output === "UAE Dirham") {
            console.log(`The ${amount.toFixed(2)} Pakistan Rupee is equal to ${(amount / 75.69).toFixed(2)} UAE Dirham`);
        }
    }
    else if (input === "UAE Dirham") {
        console.log(`The ${amount.toFixed(2)} UAE Dirham is equal to ${(amount * 75.69).toFixed(2)} Pakistan Rupee`);
    }
    // ----
    // PKR to Indian Rupees & Indian Rupees to PKR
    if (input === "Pakistani Rupee") {
        if (output === "Saudi Riyal") {
            console.log(`The ${amount.toFixed(2)} Pakistan Rupee is equal to ${(amount / 74.10).toFixed(2)} Saudi Riyal`);
        }
    }
    else if (input === "Saudi Riyal") {
        console.log(`The ${amount.toFixed(2)} Saudi Riyal is equal to ${(amount * 74.10).toFixed(2)} Pakistan Rupee`);
    }
}
