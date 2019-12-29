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
	var input=d3.select(".form-control");
	console.log(input);
    var inputText=input.property("value");
	console.log(inputText);
	var filterData=tableData.filter(s=>s["datetime"]===inputText);
	console.log(filterData);
	filterData.forEach(s=>{
	var row=tbody.append("tr");
	Object.entries(s).forEach(([key, value])=>{
	row.append("td").text(value)});
})});
// YOUR CODE HERE!
