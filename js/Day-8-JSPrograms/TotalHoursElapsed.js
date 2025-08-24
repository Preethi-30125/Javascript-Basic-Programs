function calculateTotalHoursElapsed(startingTime, endingTime) {
    function toMinutes(timeString) {

        if (typeof timeString !== "string") {
            return null;
        }

        //split input into "HH:MM" , "AM/PM"
        const splitIntoParts = timeString.split(" ");
        // Extract hours and minutes from the first part "HH:MM"
        const time = splitIntoParts[0].split(":");
        let hours = parseInt(time[0]);
        const minutes = parseInt(time[1]);
        const meridian = splitIntoParts[1].toUpperCase();

        if (splitIntoParts.length !== 2) {
            return null;
        }

        if (meridian !== "AM" && meridian !== "PM" || time.length !== 2 || isNaN(hours) || isNaN(minutes) || hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
            return null;
        }

        // Convert PM times to 24-hour format (except 12 PM which is already correct)
        if (meridian === "PM" && hours !== 12) {
            hours += 12;
        }

        // Convert 12 AM (midnight) to 0 hours
        if (meridian === "AM" && hours === 12) {
            hours = 0;
        }
        return hours * 60 + minutes;
    }

    // Convert start and end times into minutes
    const startingMinute = toMinutes(startingTime);
    const endingMinute = toMinutes(endingTime);
    // Calculate the difference in minutes
    const totalMinutesDifference = (endingMinute - startingMinute + 1440) % 1440;
    const elapsedHours = parseInt(totalMinutesDifference / 60);
    const elapsedMinutes = totalMinutesDifference % 60;
    let elapsedTime;


    // If either time is invalid, stop execution
    if (startingMinute == null || endingMinute == null) {
        console.error("Invalid time,please give the proper time");
        return false;
    }

    elapsedTime = elapsedHours + " Hour";
    if (elapsedHours !== 1) {
        elapsedTime += "s";
    }
    if (elapsedMinutes > 0) {
        elapsedTime += " " + elapsedMinutes + " Minutes";
    }
    console.log(elapsedTime);
    return elapsedTime;
}
calculateTotalHoursElapsed("12:00 AM", "2:50 PM");