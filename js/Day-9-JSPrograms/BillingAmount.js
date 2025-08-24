function getTotalAmount(storeInventory, userList) {

    let totalBill = 0;
    let storeItem;
    let userItem;

    for (let k = 0; k < storeInventory.length; k++) {
        storeItem = storeInventory[k];
        if (typeof storeItem.item !== "string" || typeof storeItem.price !== "number" || typeof storeItem.quantity !== "number") {
            console.error("Invalid input");
            return false;
        }
    }

    //Loop through each item user wants
    for (let i = 0; i < userList.length; i++) {
        userItem = userList[i];
        if (typeof userItem.item !== "string" || typeof userItem.quantity !== "number") {
            console.error("Invalid input");
            return false;
        }
        // Check if requested quantity is valid
        if (userItem.quantity <= 0) {
            console.error("Invalid quantity " + userItem.quantity + " for " + userItem.item);
            continue;
        }
        let itemfound = false;
        // Loop through store inventory to find match
        for (let j = 0; j < storeInventory.length; j++) {
            const storeItem = storeInventory[j];
            if (userItem.item.toLowerCase() === storeItem.item.toLowerCase()) {
                itemfound = true;
                // Validate store quantity
                if (storeItem.quantity < 0) {
                    console.error("Invalid quantity " + storeItem.quantity + " for " + storeItem.item);
                    continue;
                }
                if (storeItem.price <= 0) {
                    console.error("Invalid price " + storeItem.price + " for " + storeItem.item);
                    break;
                }
                if (storeItem.quantity == 0) {
                    console.error(userItem.item + " is Out of the stock");
                    break;
                }
                let actualQuantity;
                if (userItem.quantity > storeItem.quantity) {
                    actualQuantity = storeItem.quantity;    // store has less quantity

                    console.error("Only " + storeItem.quantity + " of " + userItem.item + " available");
                }
                else {
                    actualQuantity = userItem.quantity;     // store has enough quantity
                }
                totalBill += (actualQuantity * storeItem.price);

                // Deduct purchased quantity from stock if it is purchased by user
                storeItem.quantity -= actualQuantity;
                break;
            }
        }
        if (!itemfound) {
            console.error(userItem.item + " is not found in the store");
        }
    }
    totalBill = parseInt(totalBill * 100) / 100;

    console.log("Total Bill Amount: " + totalBill);
    return totalBill;
}
getTotalAmount([{ item: 'Jam-Apricot', price: 94.11, quantity: 2 },
{ item: 'creamers-10%', price: 49.54, quantity: 3 },
{ item: 'Bread-Wheat', price: 20.25, quantity: 10 }],

    [{ item: 'Jam-Apricot', quantity: 2 },
    { item: 'Creamers-10%', quantity: 4 }
    ]);
