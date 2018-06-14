// init the jsPDF library
const pdf = new jsPDF();
// select the button
let button = document.getElementById(button-ticket);
// select the input
let input = document.getElementById(input-ticket).value;
// add 'click' event listener for the button
button.addEventListener('click', printPDF)
// actual PDF options
function printPDF() {
		// @param 1 - Coordinate (in units declared at inception of PDF document) against left edge of the page
		// @param 2 - Coordinate (in units declared at inception of PDF document) against upper edge of the page
		// @param 3 - String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
		pdf.text(10, 10, `You have to pay ${input}`);
			     // save the PDF document (downloadable)
			    pdf.save();
		}


function ticketSelected {
  printPDF();
}
