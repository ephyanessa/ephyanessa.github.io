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





// actual PDF options
function printPDF() {
    // init the jsPDF library
    const pdf = new jsPDF();



    // select the input
    let destination = document.getElementById("selected-destination").innerHTML;
    let fare = document.getElementById("selected-fare").innerHTML;
    let time = document.getElementById("selected-time").innerHTML;
    let company = document.getElementById("selected-company").innerHTML;
    let seat = document.getElementById("selected-seat").innerHTML;

    // @param 1 - Coordinate (in units declared at inception of PDF document) against left edge of the page
    // @param 2 - Coordinate (in units declared at inception of PDF document) against upper edge of the page
    // @param 3 - String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
    var imgData = 'data:image/jpeg;base64,'+ Base64.encode('asset/Images/original logo.png');
    pdf.addImage(imgData, 'png', 100, 10, 100px, 100px);
    pdf.setFontSize(60);
    pdf.text(70, 30, `TicketEX`);
    pdf.setFontSize(10);
    pdf.text(90, 40, `www.TicketEX.com`);
    pdf.setFontSize(20);
    pdf.text(70, 50, `Selected Route: ${destination}`);
    pdf.text(70, 60, `Fare: ${fare}`);
    pdf.text(70, 70, `Time: ${time}`);
    pdf.text(70, 80, `Company: ${company}`);
    pdf.text(70, 90, `Seat: ${seat}`);


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
