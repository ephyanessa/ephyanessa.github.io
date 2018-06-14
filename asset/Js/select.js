function buttonClicked(clicked_id)
{

  document.getElementById("selected-seat").innerHTML=clicked_id;
}

function routeClick(clicked_id,fare,destination_time,destination_company)
{
  document.getElementById("selected-destination").innerHTML=clicked_id;
  document.getElementById("selected-fare").innerHTML= fare + " cedis";
  var time = document.getElementById(destination_time);
  var index=time.selectedIndex;
  document.getElementById("selected-time").innerHTML=time.options[index].text;
  var company = document.getElementById(destination_company);
  var index=company.selectedIndex;
  document.getElementById("selected-company").innerHTML=company.options[index].text;
}

// init the jsPDF library
const pdf = new jsPDF();
// select the button
let button = document.getElementById('button-ticket');
// select the input
let input = document.getElementById('input-ticket').value;

// actual PDF options
function printPDF() {
		// @param 1 - Coordinate (in units declared at inception of PDF document) against left edge of the page
		// @param 2 - Coordinate (in units declared at inception of PDF document) against upper edge of the page
		// @param 3 - String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
		pdf.text(10, 10, `You have to pay ${input.value}$`);
			     // save the PDF document (downloadable)
			    pdf.save();
		}

function ticketSelected() {
  printPDF();
}

/*function nameOfFunction(parameter)
{
  does something
}*/
