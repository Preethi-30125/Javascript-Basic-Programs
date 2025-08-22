function trackingStockKeepingUnit(stocks) {
  let trackedStocks = {};
  let stats = { totalSkus: 0, deduped: 0, invalid: 0 };

  for (let i = 0; i < stocks.length; i++) {
    for (let vi = 0; vi < stocks[i].variants.length; vi++) {
      let variant = stocks[i].variants[vi];
      let sku = variant.sku;

      stats.totalSkus += 1;

      if (!stocks[i].id || stocks[i].id == "" || !stocks[i].name || stocks[i].name == "" || !sku || sku == "" || !variant || variant == [] || !variant.color || variant.color == "" || !variant.size || variant.size == "" || !variant.price || variant.price == "") {
        stats.invalid += 1;
        continue;

      }
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

      else {
        let alreadyExists = false;
        for (let k = 0; k < trackedStocks[sku].productId.length; k++) {
          if (trackedStocks[sku].productId == stocks[i].id) {
            alreadyExists = true;
            break;
          }

        }
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
