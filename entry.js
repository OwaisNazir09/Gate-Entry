
// Check if entryDetails exists in localStorage and initialize the array

window.onload = function() {
alert("Hello! This is an alert message.");
};


var entryDetails = JSON.parse(localStorage.getItem('entryDetails')) || [];



// Function to store entry details locally
function storeEntryDetails() {
// Get input values
var visitorId = document.getElementById("Visitor_id").value;
var visitorName = document.getElementById("Visito_name").value;
var remark = document.getElementById("Remarks").value;

// Create an object to hold the entry details
var entry = {
visitorId: visitorId,
visitorName: visitorName,
remark: remark
};

// Add the entry details to the array
entryDetails.push(entry);

// Store the updated entryDetails array in localStorage
localStorage.setItem('entryDetails', JSON.stringify(entryDetails));

// Clear input fields
document.getElementById("Visitor_id").value = "";
document.getElementById("Visito_name").value = "";
document.getElementById("Remarks").value = "";


}

// Function to print entry details
// Function to print entry details in columns
function printEntryDetails() {
    var outputDiv = document.getElementById("output_data");
    outputDiv.innerHTML = "<p>Outpass details:</p>";

    // Create a container for the entries with a class for styling
    var entryContainer = document.createElement("div");
    entryContainer.classList.add("entry-container");

    // Iterate through entryDetails array and print each entry
    entryDetails.forEach(function(entry, index) {
        var entryDiv = document.createElement("div");
        entryDiv.classList.add("entry-item");
        entryDiv.innerHTML = "<p>Entry " + (index + 1) + ":      Visitor ID - " + entry.visitorId + ",      Visitor Name - " + entry.visitorName + ", Remark - " + entry.remark + "</p>";
        entryContainer.appendChild(entryDiv);
    });

    // Append the entry container to the outputDiv
    outputDiv.appendChild(entryContainer);
}


function deleteAllEntries() {
    // Clear the entryDetails array
    entryDetails = [];
    entryDetailsstudents  = [];
    
    // Clear the localStorage
    localStorage.removeItem('entryDetails');
    localStorage.removeItem('entryDetailsstudents');
    
    // Re-render the list of entries
    printEntryDetails();
}


//********************************************************************************************************** */

//created a new array to store students data


var entryDetailsstudents = JSON.parse(localStorage.getItem('entryDetailsstudents')) || [];

function inputfunction() {
    // Get input values
    var MUR = document.getElementById("MUR").value;
    var Passno = document.getElementById("Passno").value;
    var chooseBar = document.getElementById("chooseBar").value;
    var Room_no = document.getElementById("Room_no").value;
    
    // Create an object to hold the entry details
    var studententry = {
        MUR: MUR,
        Passno: Passno,
        chooseBar: chooseBar,
        Room_no: Room_no
    };


// Add the entry details to the array
entryDetailsstudents.push(studententry);

// Store the updated entryDetails array in localStorage
localStorage.setItem('entryDetailsstudents', JSON.stringify(entryDetailsstudents));

// Clear input fields
document.getElementById("MUR").value = "";
document.getElementById("Passno").value = "";
document.getElementById("chooseBar").value = "";
document.getElementById("Room_no").value = "";

}
function STUDENTDETAILS() {
    
    var outputDiv = document.getElementById("output_data");
    outputDiv.innerHTML = "<p>Student details:</p>";

    // Iterate through entryDetailsstudents array and print each entry
    entryDetailsstudents.forEach(function(studentEntry, index) {
        var entryDiv = document.createElement("div");
        entryDiv.classList.add("entry-item");
        entryDiv.innerHTML = "<p>Entry " + (index + 1) + ": MUR - " + studentEntry.MUR + ", Passno - " + studentEntry.Passno + "    Hostel - " + studentEntry.chooseBar + " Room_no - " + studentEntry.Room_no + "</p>";
        outputDiv.appendChild(entryDiv);
    });

    // Append the entry container to the outputDiv
    outputDiv.appendChild(entryContainer);

}