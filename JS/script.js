let darkMode = document.querySelector('#darkModeToggle');
let body = document.querySelector('body');

// listens for change in state
darkMode.addEventListener('change', function(){
    body.classList.toggle('dark-mode');
});


