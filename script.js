function convertToHBCB(e){
  e.preventDefault();
  var amount = parseFloat(document.getElementById('amount').value);
  var result = document.getElementById('result');
  if( document.getElementById('amount').value === ''){
    alert("Please, fill in the amount!");
  }else{
    result.innerHTML = 'You\'ve got at least ' + divide(amount) + ' Honey Butter Chicken Biscuits!';
  }
  clearValue();
}

function divide(value){
  return Math.floor (value / 2.79).toFixed(0);
}

function clearValue(){
  document.getElementById('amount').value = '';  
}

document.getElementById('converter').addEventListener('submit', convertToHBCB);