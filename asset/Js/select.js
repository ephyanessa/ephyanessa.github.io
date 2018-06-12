function buttonClicked(clicked_id)
{

  document.getElementById("selected-seat").innerHTML=clicked_id;
}

function routeClick(clicked_id,fare,destination_time)
{
  document.getElementById("selected-destination").innerHTML=clicked_id;
  document.getElementById("selected-fare").innerHTML= fare + " cedis";
  var time = document.getElementById(destination_time);
  var index=time.selectedIndex;
  document.getElementById("selected-time").innerHTML=time.options[index].text;
}
/*function nameOfFunction(parameter)
{
  does something
}*/
