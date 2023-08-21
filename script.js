const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
function hasKey(key) {
    // Define the sampleObject
    let sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

    // Use the hasOwnProperty method to check if sampleObject has the key
    if (sampleObject.hasOwnProperty(key)) {
        // If it does, return true
        return true;
    } else {
        // If it doesn't, return false
        return false;
    }
}
// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
