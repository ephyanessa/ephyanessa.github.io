function buttonClicked(clicked_id)
{

  document.getElementById("selected-seat").innerHTML=clicked_id;
}

function routeClick(clicked_id,fare)
{
  document.getElementById("selected-destination").innerHTML=clicked_id;
  document.getElementById("selected-fare").innerHTML= fare + " cedis";
}
/*function nameOfFunction(parameter)
{
  does something
}*/
