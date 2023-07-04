function transposeMatrix() {
  var rows = parseInt(document.getElementById("rows").value);
  var columns = parseInt(document.getElementById("columns").value);
  var matrixInput = document.getElementById("matrix").value;
  var matrixRows = matrixInput.split(/\s+|,/);
  var matrix = [];

  // Parse the input matrix
  var count = 0;
  for (var i = 0; i < rows; i++) {
    var row = [];

    for (var j = 0; j < columns; j++) {
      var value = parseInt(matrixRows[count]);

      if (!isNaN(value)) {
        row.push(value);
      }

      count++;
    }

    matrix.push(row);
  }

  var resultDiv = document.getElementById("result");

  if (matrix.length === columns && matrix[0].length === rows) {
    var transpose = getTranspose(matrix);
    resultDiv.innerHTML = "Transpose matrix:<br>" + matrixToTable(transpose);
  } else {
    resultDiv.textContent = "Transpose is not possible with the current row and column combination.";
  }
}

function getTranspose(matrix) {
  var rows = matrix.length;
  var columns = matrix[0].length;
  var transpose = [];

  for (var i = 0; i < columns; i++) {
    var row = [];

    for (var j = 0; j < rows; j++) {
      row.push(matrix[j][i]);
    }

    transpose.push(row);
  }

  return transpose;
}

function matrixToTable(matrix) {
  var rows = matrix.length;
  var columns = matrix[0].length;
  var table = "<table>";

  for (var i = 0; i < rows; i++) {
    table += "<tr>";

    for (var j = 0; j < columns; j++) {
      table += "<td>" + matrix[i][j] + "</td>";
    }

    table += "</tr>";
  }

  table += "</table>";
  return table;
}
