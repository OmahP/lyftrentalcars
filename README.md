# lyftrentalcars
This is a web application written with HTML, CSS, JavaScript and JSON
I used the VS code , please run the HTML page with LiveServer extension
The rental.html page has the following functionality:
A search field and a car rental form. The car rental form will be un-editable until a client is found and selected. 
The ‘search’ field will search ‘rentalclient.json’ by last name. As you enter letters, the search function will find and display all the clients whose last names start with those letters. 
Example: If you enter ‘B’, all the clients with a last name’ that starts with ‘B’ will be displayed. When you type ‘Br’ all the clients with a last name’ that starts with ‘Br’ are displayed.
You can then select a client from the list. This ‘event’ will make the ‘car rental’ form editable.
After a client is selected, the client information will be displayed in the ‘car rental’ form. E.g. last name, first name, address, state/prov, email and phone.
The client can then choose to rent a vehicle. The rental choices are: 

**Compact	$15/day
Mid-size	$20/day
Luxury		$35/day
Van/Truck	$40/day
Options: Roof Rack or Bicycle Rack extra $5/day
	   GPS extra $10
	   Child Seat free******
     
The client can rent from 1 to 30 days.
After this information is selected, the total of the rental is calculated and the complete client and rental information will be displayed on the page.
