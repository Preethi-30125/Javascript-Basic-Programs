function trackingSKU(stocks) {
    let stats = { totalSkus: 0, deduped: 0, invalid: 0 };
    let separatingSku=stocks.map((skus)=>{
        return skus.variants.map((variant)=>({
            id:skus.id,
           sku:variant.sku
        }));
    });
    console.log(separatingSku);
    
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



