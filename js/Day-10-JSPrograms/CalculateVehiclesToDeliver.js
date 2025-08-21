function calculateMinimumVehiclesToDeliver(vehicles, parcels) {
  if (!vehicles || !Array.isArray(vehicles) || vehicles.length == 0 || !parcels || !Array.isArray(parcels) || parcels.length == 0) {
    console.error("Invalid input,please give the proper input");
    return false;
  }
  
  let temp;
  let parcelWeight;
  let vehiclesToDeliver;
  let vehicleAdded;
  let deliveredInThisRound;
  let capacity;
  let vehicleCount;

  for (let i = 0; i < vehicles.length - 1; i++) {
    for (let j = 0; j < vehicles.length - 1; j++) {
      if (vehicles[j].weightCapacity < vehicles[j + 1].weightCapacity) {
        temp = vehicles[j];
        vehicles[j] = vehicles[j + 1];
        vehicles[j + 1] = temp;
      }
    }
  }

  for (let k = 0; k < parcels.length; k++) {
    parcelWeight = parcels[k].weight;
    vehiclesToDeliver = parcels[k].location + " (" + parcelWeight + " kg ) : { ";
    vehicleAdded = false;

    // keep looping until parcel delivered
    while (parcelWeight > 0) {
      deliveredInThisRound = false;

      for (let i = 0; i < vehicles.length; i++) {
        capacity = vehicles[i].weightCapacity;
        if (capacity <= parcelWeight) {
          vehicleCount = parseInt(parcelWeight / capacity);

          //  Only show if count > 0
          if (vehicleCount > 0) {
            if (vehicleAdded) {
              vehiclesToDeliver += ", ";
            }
            vehiclesToDeliver += vehicles[i].type + " : " + vehicleCount;
            vehicleAdded = true;
            parcelWeight -= vehicleCount * capacity;
            deliveredInThisRound = true;
          }
        }
      }

      if (!deliveredInThisRound) {
        // cannot fully deliver,then stop
        break;
      }

    }
    if (parcelWeight == 0) {
      vehiclesToDeliver += " }";
      console.log(vehiclesToDeliver);
    }
    else {
      console.log("No suitable vehicle found for " + parcels[k].location);
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