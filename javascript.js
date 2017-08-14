var sessLen = parseInt(document.getElementById('sessionLength').textContent) // SESSION TIME
var breakLen = parseInt(document.getElementById('breakLength').textContent) // BREAK TIME
var stage = 0 //TRACKS THE CURRENT STAGE OF ANIMATION

function breakDec () {
  // DECREMENT BREAK TIME
  if (breakLen > 0) {
    breakLen--
  }
  document.getElementById('breakLength').innerHTML = breakLen.toString()
}

function breakInc () {
  // INCREMENT BREAK TIME
  breakLen++
  document.getElementById('breakLength').innerHTML = breakLen.toString()
}

function sessionDec () {
  // DECREMENT SESSIONS TIME
  if (sessLen > 0) {
    sessLen--
  }
  document.getElementById('sessionLength').innerHTML = sessLen.toString()
}

function sessionInc () {
  // INCREMENT SESSION TIME
  sessLen++
  document.getElementById('sessionLength').innerHTML = sessLen.toString()
}

function start () {
  // START THE ANIMATION
  var path = document.querySelector('#container > svg > path:last-child')
  stage = 1
  bar.setText('WORK')
  path.setAttribute('stroke', '#80CFA9')
  bar.animate(
    1,
    {
      duration: sessLen * 1000
    },
    function () {
      stage = 2
      bar.setText('BREAK')
      path.setAttribute('stroke', '#80A1C1')
      bar.animate(
        0,
        {
          duration: breakLen * 1000
        },
        function () {
          bar.setText('')
          stage = 0
        }
      )
    }
  )
}

function stop () {
  // STOP THE ANIMATION
  if (stage === 2) {
    // IF ANIMATION IS IN BREAK RESET IT
    reset()
  }
  bar.stop() // ELSE STOP IT
}

function reset () {
  // RESETS ANIMATION
  bar.set(0)
  bar.setText('')
}

var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 6,
  easing: 'linear',
  duration: 5000,
  color: '#CAB1BD',
  trailWidth: 1,
  svgStyle: null
})
