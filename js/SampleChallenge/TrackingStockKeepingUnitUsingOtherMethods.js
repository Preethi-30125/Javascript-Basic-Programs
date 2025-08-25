function trackingSKU(stocks) {
    let stats = { totalSkus: 0, deduped: 0, invalid: 0 };
    let validVariants;
    let isValid;
    let trackedStocks;
    let alreadyExists;
    const allVariants = stocks.map(function (product) {
        return product.variants.map(function (variant) {
            return {
                sku: variant.sku,
                color: variant.color,
                size: variant.size,
                price: variant.price,
                stock: variant.stock,
                productId: product.id,
                productName: product.name
            };
        });
    }).reduce(function (combinedVariants, currentVariants) {

        for (let i = 0; i < currentVariants.length; i++) {
            combinedVariants.push(currentVariants[i]);

        }
        return combinedVariants;
    }, []);

    //check if product or variant has missing or invalid data
    validVariants = allVariants.filter(function (valid) {
        isValid = valid.productId && typeof valid.productId === "string" &&
            valid.productName && typeof valid.productName === "string" &&
            valid.sku && typeof valid.sku === "string" &&
            valid.color && typeof valid.color === "string" &&
            valid.size && typeof valid.size === "string" &&
            typeof valid.price === "number" && valid.price > 0 && typeof valid.stock === "number" && valid.stock >= 0;

        if (!isValid) {
            stats.invalid++;
        }
        return isValid;
    });

    stats.totalSkus = allVariants.length;

    trackedStocks = validVariants.reduce(function (combinedVariants, valid) {
        if (!combinedVariants[valid.sku]) {
            // If SKU is seen for the first time, create a new entry
            combinedVariants[valid.sku] = {
                sku: valid.sku,
                productId: [valid.productId],
                name: valid.productName,
                attributes: { color: valid.color, size: valid.size },
                price: valid.price,
                stock: valid.stock
            };
        } else {
            // If SKU already exists, check if this productId is already included
            alreadyExists = false;
            for (let i = 0; i < combinedVariants[valid.sku].productId.length; i++) {
                if (combinedVariants[valid.sku].productId[i] === valid.productId) {
                    alreadyExists = true;
                    break;
                }
            }
            if (!alreadyExists) {
                combinedVariants[valid.sku].productId.push(valid.productId);
            }

            combinedVariants[valid.sku].stock += valid.stock;
            stats.deduped++;
        }
        return combinedVariants;
    }, {});

    console.log("bySku:", trackedStocks);
    console.log("Stats:", stats);
    return { trackedStocks: trackedStocks, stats: stats };
}

trackingSKU([
    {
        id: "p1",
        name: "Cotton T‑Shirt",
        variants: [
            { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 10 },
            { sku: "TS-RED-L", color: "red", size: "L", price: 499, stock: 0 }
        ]
    },
    {
        id: "p2",
        name: "Cotton T‑Shirt",
        variants: [
            { sku: "TS-BLK-M", color: "black", size: "M", price: 549, stock: 2 },
            { sku: "TS-RED-M", color: "red", size: "M", price: 499, stock: 5 }
        ]
    }
]);



