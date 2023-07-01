// Get references to the input elements and the result input
var arrInput = document.getElementById('arr1');
var addValueInput = document.getElementById('add_value');
var removeValueInput = document.getElementById('remove_value');
var resultInput = document.getElementById('merge-result');

function add_remove() {

  var arr = arrInput.value.split(',').map(Number);
  var addValue = Number(addValueInput.value);
  var removeValue = Number(removeValueInput.value);


  if (!isNaN(addValue)) {
    arr.push(addValue);
  }


  if (!isNaN(removeValue)) {
    var index = arr.indexOf(removeValue);
    if (index !== -1) {
      arr.splice(index,1);
    }
  }


  resultInput.value = arr.join(', ');
}
