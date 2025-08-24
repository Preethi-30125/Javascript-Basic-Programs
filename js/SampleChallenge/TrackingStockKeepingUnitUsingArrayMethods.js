function trackingStockKeepingUnit(stocks) {
  let trackedStocks = {};
  let stats = { totalSkus: 0, deduped: 0, invalid: 0 };

  for (let i = 0; i < stocks.length; i++) {
    for (let vi = 0; vi < stocks[i].variants.length; vi++) {
      let variant = stocks[i].variants[vi];
      let sku = variant.sku;

      stats.totalSkus += 1;

      //check if product or variant has missing or invalid data

      if (!stocks[i].id || stocks[i].id == "" || !stocks[i].name || stocks[i].name == "" || !sku || sku == "" || !variant || !Array.isArray(stocks[i].variants) || stocks[i].variants.length == 0 || !variant.color || typeof variant.color !== "string" || variant.color == "" || !variant.size || typeof variant.size !== "string" || variant.size == "" || !variant.price || variant.price <= 0 || typeof variant.price !== "number" || variant.price == "" || typeof variant.stock !== "number" || variant.stock < 0) {
        stats.invalid += 1;
        continue;
      }

      // If SKU is seen for the first time, create a new entry

      if (!trackedStocks[sku]) {
        trackedStocks[sku] = {
          sku: sku,
          productId: [stocks[i].id],
          name: stocks[i].name,
          attributes: {
            color: variant.color, size: variant.size,
          },
          price: variant.price,
          stock: variant.stock
        };
      }

      // If SKU already exists, update stock and add new productId if not already present

      else {
        let alreadyExists = false;
        for (let k = 0; k < trackedStocks[sku].productId.length; k++) {
          if (trackedStocks[sku].productId[k] == stocks[i].id) {
            alreadyExists = true;
            break;
          }

        }

        // Add productId if it’s not already in the list
        if (!alreadyExists) {
          trackedStocks[sku].productId[trackedStocks[sku].productId.length] = stocks[i].id;
        }
        trackedStocks[sku].stock += variant.stock;

        stats.deduped += 1;
      }
    }
  }
  console.log("bySku:", trackedStocks);
  console.log("Stats:", stats);
  return { trackedStocks, stats };
}
trackingStockKeepingUnit([
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
