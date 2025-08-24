
function convertToMinutes(time) {

  if (typeof time === "string") {
    const splitIntoParts = time.split(":");
    const hours = parseInt(splitIntoParts[0]);
    const minutes = parseInt(splitIntoParts[1]);
    let totalMinutes;

    //Validate format,must have exactly 2 parts (HH and MM)
    if (splitIntoParts.length !== 2) {
      console.error("Invalid format,must be HH:MM format");
      return false;
    }

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 24 || minutes < 0 || minutes >= 60) {
      console.error("Invalid input,please give the proper input");
      return false;
    }

    totalMinutes = (hours * 60) + minutes;
    console.log(totalMinutes);
    return totalMinutes;

  }
  console.error("Invalid input type");
  return false;

}
convertToMinutes("2:30");