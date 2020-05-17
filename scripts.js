const blueBtn = document.querySelector('.btn-spin-blue');
const redBtn = document.querySelector('.btn-danger');
const spinSeedBtn = document.querySelector('.btn-spin-seed');

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
  // check which button we are
  if(btn.classList.contains === 'btn-spin-blue' || btn.classList.contains === 'btn-spin-red'){
    if(btn.innerHTML === 'Spin'){
      btn.innerHTML = 'Stop';
    }
    else if(btn.innerHTML === 'Stop'){
      btn.innerHTML = 'Spin';
    }
  }

  if(btn.classList.contains === 'btn-spin-seed'){//if we are the seed spin btn
    const seedElements = document.querySelectorAll('.flowerContainer ul li');
    seedElements.forEach(function(item, index){
      item.style.animationPlayState = 'pause';
    });
  }
}

function addSeedAnimation(item, index){
  item.classList.add('animateSeed');
  spinSeedBtn.classList.add('active');
  const seedElements = document.querySelectorAll('.seedContainer ul li');

  document.querySelectorAll('.seedContainer ul li').forEach(function(item, index){ item.style.transition = 'top, left 2s ease-in'; item.style.top = '130px'; item.style.left = '40px'; });
}

function pauseSeedAnimation(item, index){
  item.style.animationPlayState = 'pause';
  item.classList.remove('animateSeed');
  spinSeedBtn.classList.remove('active');
}

/* Listen for button click */
spinSeedBtn.addEventListener('click',  function (e){
  const seedElements = document.querySelectorAll('.seedContainer ul li');
  // document.querySelector('.seedContainer').style.opacity = '1';
  //
  // todo - below code not working. always false
  if(spinSeedBtn.classList.contains !== 'active'){//if not active
    console.log('button was not active');
    seedElements.forEach(addSeedAnimation); //begin animation
  }
  else if(spinSeedBtn.classList.contains === 'active'){//if active
    seedElements.forEach(pauseSeedAnimation); //pause animation
    console.log('button was active');
  }

});
