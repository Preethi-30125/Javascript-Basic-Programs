function calculateMinimumVehiclesToDeliver(vehicles, parcels) {
  if(!vehicles || !Array.isArray(vehicles) || vehicles.length==0 || !parcels || !Array.isArray(parcels) || parcels.length==0){
    console.error("Invalid input,please give the proper input");
    return false;
  }
  for (let k = 0; k < parcels.length; k++) {
    let parcelWeight = parcels[k].weight;
    for (let i = 0; i < vehicles.length; i++) {
      if(typeof vehicles[i].weightCapacity !== "number" || vehicles[i].weightCapacity<=0 || typeof vehicles[i].type !=="string" || typeof parcels[k].location !== "string" || typeof parcelWeight !== "number" || parcelWeight<=0 ){
          continue;
      }
      //How many times this primary vehicle can be used
      let vehicleCount = parseInt(parcelWeight / vehicles[i].weightCapacity);
      let remainingWeight = parcelWeight % vehicles[i].weightCapacity;
      //Parcel perfectly divisible, only this vehicle is needed
      if (remainingWeight == 0) {
        console.log(parcels[k].location + " ( " + parcelWeight + " kg ) : " + " { " + vehicles[i].type + " : " + vehicleCount + " }");
      }
      else {
        for (let j = 0; j < vehicles.length; j++) {
          if ((vehicleCount * vehicles[i].weightCapacity) + vehicles[j].weightCapacity == parcelWeight) {
            let extraVehicleCount = 1; 
            console.log(parcels[k].location + " ( " + parcelWeight + " kg ) : " + " { " + vehicles[i].type + " : " + vehicleCount  + ", " +
      vehicles[j].type + " : " + extraVehicleCount + " }");
          }
        }
      }

    }
  }

}
calculateMinimumVehiclesToDeliver([
  { type: 'cycle', weightCapacity: 1 },
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
], [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
]);