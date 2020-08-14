function convertToHBCB(e){
  e.preventDefault();
  var amount = parseFloat(document.getElementById('amount').value);
  var result = document.getElementById('result');
  if( document.getElementById('amount').value === ''){
    alert("Please, fill in the amount!");
  }else{
    result.innerHTML = 'You\'ve got at least ' + divide(amount) + ' Honey Butter Chicken Biscuits! <br> <form action="https://whataburger.com/ordering/startorder"><input class="cta-select-form" type="submit" value="ORDER NOW" /><br><br></form>';
  }
/*   var parent    = document.getElementById('images'),
    imagePath = 'https://staging.howmanyhoneybutterchickenbiscuits.com/img/HoneyButterChickenBiscuitsmall.png',
    img;
if (parent.children.length > 0) {
  for (i = 0; i < parent.children.length; i = i){parent.children[0].remove()}
}

for (var i = 0; i < divide(amount); i++) {
    img = new Image();
    img.src = imagePath;

    parent.appendChild(img);
} */
  clearValue();
}

function divide(value){
  return Math.floor (value / 2.79).toFixed(0);
}

function clearValue(){
  document.getElementById('amount').value = '';  
}

document.getElementById('converter').addEventListener('submit', convertToHBCB);