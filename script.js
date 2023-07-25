const time = document.getElementsByClassName('time')[0];
const settings = document.getElementsByClassName('settings')[0];
const mixer = document.getElementsByClassName('mixer-container')[0];

function openSettings(){
    settings.style.display = "block";
    time.style.display = "none";
    mixer.style.display = "none";
}

function openMixer(){
    settings.style.display = "none";
    time.style.display = "none";
    mixer.style.display = "block";
}

const timersBtn = document.getElementById('timers-button');
const timersOptions = document.getElementById('timers-options');
const alertsBtn = document.getElementById('alerts-button')
const alertsOptions = document.getElementById('alerts-options');

function openTimers(){
    timersBtn.style.textDecoration = "underline";
    alertsBtn.style.textDecoration = "none";
    timersOptions.style.display = "flex";
    alertsOptions.style.display= "none";
}

timersBtn.addEventListener('click',openTimers);

function openAlerts(){
    timersBtn.style.textDecoration = "none";
    alertsBtn.style.textDecoration = "underline";
    timersOptions.style.display = "none";
    alertsOptions.style.display= "flex";
}

alertsBtn.addEventListener('click',openAlerts);

function exit(){
    settings.style.display = "none";
    time.style.display = "flex";
    mixer.style.display = "none";
}
const settingClick = document.getElementsByClassName('setting-contianer')[0];
const exitClick = document.querySelectorAll('.exit-container');
const mixerClick = document.getElementsByClassName('mixer')[0];

exitClick.forEach(element => {
    element.addEventListener('click', exit);
});
settingClick.addEventListener('click',openSettings);
mixerClick.addEventListener('click',openMixer)


// on-off toggle //

const toggles = document.querySelectorAll('.on-off-toggle');

toggles.forEach(element => {
    element.addEventListener('click', (event) => {
      const clickedElement = event.target;
      const parentToggle = clickedElement.closest('.on-off-toggle');
      
      if (parentToggle) {
        const circle = parentToggle.querySelector('.circle');
        const off = parentToggle.querySelector('.off');
        
        if (parentToggle.dataset.toggled === "false") {
          // Initial state or state: OFF
          circle.style.order = "2";
          off.style.order = "1";
          off.style.marginRight = "0";
          off.style.marginLeft = "0.5rem";
          off.innerHTML = "On"
          parentToggle.style.backgroundColor = "#1C85E5";
          parentToggle.dataset.toggled = "true";
        } else {
          // State: ON
          circle.style.order = "1";
          off.style.order = "2";
          off.style.marginRight = "0.5rem";
          off.style.marginLeft = "0";
          off.innerHTML = "Off"
          parentToggle.style.backgroundColor = "var(--background-gray)";
          parentToggle.dataset.toggled = "false";
        }
      }
    });
  });

  const musicContainer = document.querySelector('.music-container');

  musicContainer.addEventListener('click', (event) => {
      const isPopoutClicked = event.target.closest('.popout');
      if (!isPopoutClicked) {
          musicContainer.classList.toggle('active');
          const toggleValue = musicContainer.getAttribute('data-toggle') === 'false' ? 'true' : 'false';
          musicContainer.setAttribute('data-toggle', toggleValue);
      }

      
  });



// drop down menu //
document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");
    if (isDropDownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    } 


});


const dropDownContent = document.querySelectorAll('.dropdown-content')

dropDownContent.forEach((elm) => {
    elm.addEventListener('click', content => {
        const clickedElement = content.target.closest('.dropdown-content');
        clickedElement.classList.add('active');

        let currentDropDown = content.target.closest('.dropdown-content.active');
        document.querySelectorAll('.dropdown-content.active').forEach(element => {
        if (element === currentDropDown) return;
        element.classList.remove('active');
        })
    })
})


const volume = document.querySelectorAll('.volume');

volume.forEach(elm => {
    elm.addEventListener('mousemove', event => {
        const currentSlider = event.target.closest('.volume');
        let x = currentSlider.value;
        let color = `linear-gradient(90deg, white ${x}%, #B5B5B5 ${x}%)`
        currentSlider.style.background = color;
    });
    elm.addEventListener('touchmove', event => {
      const currentSlider = event.target.closest('.volume');
      let x = currentSlider.value;
      let color = `linear-gradient(90deg, white ${x}%, #B5B5B5 ${x}%)`
      currentSlider.style.background = color;
  });
});

const playButton = document.getElementById('play');
const bars = document.querySelectorAll('.bar')
playButton.addEventListener('click', play => {
  const button = play.target;
  if(button.classList.contains('play')){
    button.classList.remove('play');
    button.classList.add('pause');
  } else {
    button.classList.add('play');
    button.classList.remove('pause');
  }

  bars.forEach(elm => {
    
    if(elm.classList.contains('animate')){
        elm.classList.remove('animate')
    } else {
        elm.classList.add('animate')
    }
    
  })
})

const speakerButton = document.getElementById('speaker');

speakerButton.addEventListener('click', speaker => {
  const button = speaker.target;
  if(button.classList.contains('sound-icon')){
    button.classList.remove('sound-icon');
    button.classList.add('mute');
  } else {
    button.classList.add('sound-icon');
    button.classList.remove('mute');
  }
  
})

