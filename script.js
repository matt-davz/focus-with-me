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