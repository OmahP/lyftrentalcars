var clientList;


window.onload = initialize();


function initialize() {

    loadData();

}

function loadData() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "rentalclients.json", true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawData = ajax.responseText;
            clientList = JSON.parse(rawData);
            console.log(clientList);
        }
    }
    ajax.send();
}


function searchClient() {
    var searchValue = document.getElementById('name_search').value;
    var display = "";

    if (searchValue != null && searchValue != "") {

        display += "<tr>";
        display += "<th></th>";
        display += "<th>Last Name</th>";
		display += "<th>First Name</th>";
		display += "</tr>";


    for (var i=0; i<clientList.length; i++){
        var thisClient = clientList[i];
         
        if(thisClient.last_name.startsWith(searchValue)){
            display += "<tr> ";
            display += '<td><input type="radio" name="namelist" value = "'+i+'" onclick="deselect();"</td>';
            display +=  "<td>"+ thisClient.last_name+ "</td>"; 
            display += "<td>" + thisClient.first_name + "</td>"; 
            display += "</tr>";
        }
    }
}
document.getElementById('name_results').innerHTML = display;
}

function deselect(){
   var form =  document.getElementsByTagName("input");
   var namebox = document.querySelector('input[name="namelist"]:checked');
   var index = document.querySelector('input[name="namelist"]:checked').value; 
   for (var c=0; c<form.length; c++){
    if (namebox.checked == true){
        form[c].disabled = false;
var selectedClient = clientList[index];

var lastname = selectedClient.last_name;
var firstname =selectedClient.first_name;
var address =selectedClient.address;
var state =selectedClient.state_prov;
var email =selectedClient.email;
var phone =selectedClient.phone;
document.getElementById('last_name').value =lastname;
document.getElementById('first_name').value =firstname;
document.getElementById('address').value =address ;
document.getElementById('post').value =state;
document.getElementById('client_phone').value =email;
document.getElementById('client_email').value =phone

    }
   }

 }

 function submitOrder() {
    var lastname = document.getElementById('last_name').value 
    var firstname =document.getElementById('first_name').value;
    var address =document.getElementById('address').value;
    var state =document.getElementById('post').value;
    var email =document.getElementById('client_phone').value;
    var phone =document.getElementById('client_email').value ;
    var compact =0;
    var mid =0;
    var lux=0;
    var van=0;
    var roof =0;
    var gps =0;
    var childseat=0;
    var days = document.getElementById('hdmi_quantity').value
    var invoice = "<h2>Invoice</h2>";
	invoice +=  firstname + " ";
	invoice +=  lastname + "<br>";
	invoice +=  address + "<br>";
	invoice +=  state + "<br>";
	invoice +=   email  + "<br>";
	invoice +=  phone + "<br>";
	invoice += "<h3>Your order:</h3>";

    if(document.getElementById('compact').checked ==true){
		compact = 15*days ;
		invoice += "<li>" +"Compact " +" $"+ compact.toFixed(2)+ "<li>" ;
			}
            else if(document.getElementById('mid').checked ==true){
               mid = 10*days ;
                invoice += "<li>" +"Mid-size " +" $"+ mid.toFixed(2)+ "<li>" ;
                    }
                else    if(document.getElementById('lux').checked ==true){
                        lux = 35*days ;
                         invoice += "<li>" +"Luxury " +" $"+ lux.toFixed(2)+ "<li>" ;
                             }
                       else      if(document.getElementById('van').checked ==true){
                                van = 40*days ;
                                 invoice += "<li>" +"Van/Truck" +" $"+ van.toFixed(2)+ "<li>" ;
                                     }
                            if(document.getElementById('c_cheese').checked ==true){
                                roof = 5*days ;
                                 invoice += "<li>" +"Roof Rack or Bicycle Rack  " +" $"+ roof.toFixed(2)+ "<li>" ;
                                     }
                                     if(document.getElementById('c_fruit').checked ==true){
                                        gps= 10 ;
                                         invoice += "<li>" +"GPS  " +" $"+ gps.toFixed(2)+ "<li>" ;
                                             }
                                             if(document.getElementById('c_jam').checked ==true){
                                                childseat= 0 ;
                                                 invoice += "<li>" +"Child Seat  " +" $"+ childseat.toFixed(2)+ "<li>" ;
                                                     }

            var total = compact + mid+lux+van +roof+gps+childseat;	
            invoice += "<p>Total: $"+ total.toFixed(2)+"</p>";
            document.getElementById('invoice').innerHTML=invoice;
 }