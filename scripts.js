const blueBtn = document.querySelector('.btn-primary');
const redBtn = document.querySelector('.btn-danger');

blueBtn.addEventListener('click', function (e){
  const blueElements = document.getElementsByClassName('blue');
  //loop round each blue triangle element and toggle animation class
  for(var i=0; i<blueElements.length; i++){
    blueElements[i].classList.toggle('rotater-360-infinite');
    if( blueElements[i].classList.contains('rotater-360-infinite') ){
      // If we have a rotating animation set the animation delay time
      // So that the animations stagger their starting time.
      blueElements[i].style.animationDelay = i + 's';
    }
  }

  updateBtnView(blueBtn);

  /* Listen for a transition to finish on the last blue triangle element */
  blueElements[blueElements.length-1].addEventListener('animationend', function() {
    // Update the button text
    if(blueBtn.innerHTML === 'Stop'){
       blueBtn.innerHTML = 'Spin';
     }
     // Remove the animation class
     for(var i=0; i<blueElements.length; i++){
       blueElements[i].classList.remove('rotater-360-infinite');
     }
  });
});

redBtn.addEventListener('click', function (e){
  const redElements = document.getElementsByClassName('red');
  //loop round each red triangle element and toggle animation class
  for(var i=0; i<redElements.length; i++){
    redElements[i].classList.toggle('rotater360-infinite');
    if( redElements[i].classList.contains('rotater360-infinite') ){
      // If we have a rotating animation set the animation
      redElements[i].style.animationDelay = i + 's';
    }
  }

  updateBtnView(redBtn);

  /* Listen for a transition to finish on the last red triangle element */
  redElements[redElements.length-1].addEventListener('animationend', function() {
      // Update the button text
      if(redBtn.innerHTML === 'Stop'){
        redBtn.innerHTML = 'Spin';
      }
      // Remove the animation class
      for(var i=0; i<redElements.length; i++){
        redElements[i].classList.remove('rotater360-infinite');
      }
    });
});

/*
Responsible for updating the view text of a button
 */
function updateBtnView(btn){
  if(btn.innerHTML === 'Spin'){
    btn.innerHTML = 'Stop';
  }
  else if(btn.innerHTML === 'Stop'){
    btn.innerHTML = 'Spin';
  }
}
