function insert_Row() {
  // https://www.w3schools.com/jsref/met_table_insertrow.asp#:~:text=The%20insertRow()%20method%20creates,method%20to%20remove%20a%20row.
  var table = document.getElementById("sampleTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}