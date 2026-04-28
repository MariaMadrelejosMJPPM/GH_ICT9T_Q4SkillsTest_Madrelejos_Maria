// login authentication
function password() {
    let pass = document.getElementById('password').value;
    let user = document.getElementById('username').value;
    const btn = document.getElementById('btn');


    if (user === 'skibiditoilet69' && pass === 'password10987654321') {
        window.alert('access granted! welcome back, skibiditoilet69');
        window.location.href = "notebooks.html"; } 
    else {
        window.alert('wrong username/password. ' + clickCount + ' attempts left.'); }
    }
// button click count
    let clickCount = 3;

    btn.addEventListener('click', () => {
        clickCount--;

        if (clickCount == -1 ) {
            btn.disabled = true;
        }
    });

// instructions
function instructions() {
    document.getElementById('show').innerHTML = 'stay logged in on this device'
}

// references
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// https://dev.to/codeply/bootstrap-5-sidebar-examples-38pb
//