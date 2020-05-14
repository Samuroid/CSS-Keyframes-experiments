const blueBtn = document.querySelector('.btn-primary')

blueBtn.addEventListener('click', function (e){
  var blueElements = document.getElementsByClassName('blue');
  for(var i=0; i<blueElements.length; i++){
    blueElements[i].classList.toggle('rotater-360-infinite');
  }
  if( blueBtn.innerHTML === 'Spin' ){
    blueBtn.innerHTML = 'Stop';
  }
  else if(blueBtn.innerHTML === 'Stop'){
    blueBtn.innerHTML = 'Spin';
  }
})

function addClass(item, index){
  console.log(item);
}
