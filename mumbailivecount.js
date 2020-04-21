var request = new XMLHttpRequest()

request.open('GET', 'https://api.covid19india.org/state_district_wise.json', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    cnfinmum =  data.Maharashtra.districtData.Mumbai.confirmed
    //add to map
    document.getElementById("confirmcase").innerHTML =cnfinmum
    var x = document.getElementById("snackbar")
        // Remove the show class from DIV
        x.className = x.className.replace("show", "");
        console.log("loading stop");
  } else {

    // refresh
    
  }
}

request.send()
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

date = year + "/" + month + "/" + day;
//document.getElementById("updatedate").innerHTML =date
