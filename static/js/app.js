// from data.js
// ver1
var tableData = data;
var tbody=d3.select("tbody");
console.log(tbody);
tableData.forEach(s=>{
	var row=tbody.append("tr");
	Object.entries(s).forEach(([key, value])=>{
	row.append("td").text(value)});
});
var button=d3.select("#filter-btn");

button.on("click", function() {
	tbody.html("");
	var inputDatetime=d3.select("#datetime").property("value");
	var inputCity=d3.select("#city_observed").property("value");
	var inputState=d3.select("#state_observed").property("value");
	var inputCountry=d3.select("#country_observed").property("value");
	var inputShape=d3.select("#shape_observed").property("value");
	console.log(inputDatetime);
	console.log(inputCity);
	var inputTextArray=[inputDatetime,inputCity,inputState,inputCountry,inputShape];
	var index=[];
	for (var i=0; i<inputTextArray.length;i++) {
		if (inputTextArray[i]!=="") {
			console.log(i);
			index.push(i);
	}};
	console.log(index);
	var filterArray=[s=>s["datetime"]===inputDatetime,s=>s["city"]===inputCity,s=>s["state"]===inputState,s=>s["country"]===inputCountry,s=>s["shape"]===inputShape];
	var fliters=index.map(s=>filterArray[s]);
	var filterResults=tableData;
	fliters.forEach(f=>filterResults=filterResults.filter(f));
	filterResults.forEach(s=>{
	var row=tbody.append("tr");
	Object.entries(s).forEach(([key, value])=>{
	row.append("td").text(value)});
})});
// YOUR CODE HERE!
