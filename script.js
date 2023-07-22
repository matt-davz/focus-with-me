const time = document.getElementsByClassName('time')[0];
const settings = document.getElementsByClassName('settings')[0];
const mixer = document.getElementsByClassName('mixer-container')[0];

function openSettings(){
    settings.style.display = "block";
    time.style.display = "none";
    mixer.style.display = "none";
}

function openMixer(){
    
}

function exit(){
    settings.style.display = "none";
    time.style.display = "flex";
    mixer.style.display = "none";
}
const settingClick = document.getElementsByClassName('setting-contianer')[0];
const exitClick = document.querySelectorAll('.exit-container');

exitClick.forEach(element => {
    element.addEventListener('click', exit);
});
settingClick.addEventListener('click',openSettings);