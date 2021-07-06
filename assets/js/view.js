const view = {};

view.setMessage = (elementId, message = '') => {
    document.getElementById(elementId).innerText = message;
}

view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'register':
            // mount register screen
            document.getElementById('app').innerHTML = components.register;

            // add already-have-account button listeners
            document.getElementById('already-have-account').addEventListener('click', () => view.setActiveScreen('login'));

            // listen to form submit
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const registerInfo = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                };

                controller.register(registerInfo);
                console.log(registerInfo);
            });


            break;

        case 'login':
            // mount login screen
            document.getElementById('app').innerHTML = components.login;

            // add register button listeners
            document.getElementById('create-account-button').addEventListener('click', () => view.setActiveScreen('register'));

            // add form submit listeners
            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const loginInfo = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                };

                controller.login(loginInfo);
            });
            break;
        case 'ShowProfile':

            document.getElementById('app').innerHTML = components.ShowProfile;
            document.getElementById('Lab').addEventListener('click', (e) => view.setActiveScreen('MainScreen'));
            document.getElementById('EditProfile').addEventListener('click', (e) => view.setActiveScreen('EditProfile'));
            document.getElementById('EditProfile-btn').addEventListener('click', (e) => view.setActiveScreen('EditProfile'));
            document.getElementById('SignOut').addEventListener('click', () => firebase.auth().signOut());
            break;

        case 'EditProfile':

            document.getElementById('app').innerHTML = components.EditProfile;
            document.getElementById('Lab').addEventListener('click', (e) => view.setActiveScreen('MainScreen'));
            document.getElementById('ShowProfile').addEventListener('click', (e) => view.setActiveScreen('ShowProfile'));
            document.getElementById('name-info').innerHTML = ' ';
            document.getElementById('SignOut').addEventListener('click', () => firebase.auth().signOut());
            break;
        case 'MainScreen':
            // mount chat screen
            document.getElementById('app').innerHTML = components.MainScreen;
            // add message form listener
            document.getElementById('Lab').addEventListener('click', (e) => view.setActiveScreen('MainScreen'));
            document.getElementById('ShowProfile').addEventListener('click', (e) => view.setActiveScreen('ShowProfile'));
            document.getElementById('EditProfile').addEventListener('click', (e) => view.setActiveScreen('EditProfile'));

            document.getElementById('SignOut').addEventListener('click', () => firebase.auth().signOut());
            let dataAfterConvertFile;
            const realFileBtn = document.getElementById("lab-upload-data");
            const customBtn = document.getElementById("custom-button");
            const customTxt = document.getElementById("custom-text");

            customBtn.addEventListener("click", function() {
                realFileBtn.click();
            });


            realFileBtn.addEventListener("change", function() {
                if (realFileBtn.value) {
                    customTxt.innerHTML = realFileBtn.value.match(
                        /[\/\\]([\w\d\s\.\-\(\)]+)$/
                    )[1];
                } else {
                    customTxt.innerHTML = "No file chosen, yet.";
                }
            });

            document.getElementById("lab-add-data-btn").addEventListener("click", (e) => {
                e.preventDefault();
                const start = Date.now();
                const inputUploadFile = document.getElementById("lab-upload-data");
                const reader = new FileReader();
                reader.onload = () => {
                    const data = reader.result.split("-----------------------------");
                    data[1] = data[1].replace(" \n", "").split("\n");
                    data[1].pop(); //data[1] la array
                    data[1].shift(); //
                    dataAfterConvertFile = data[1].map((e) => parseFloat(e));
                    console.log(dataAfterConvertFile);
                    view.graphTimeDomain(dataAfterConvertFile);
                    view.graphFrequencyDomain(dataAfterConvertFile);
                    console.log('starting timer...');
                    setTimeout(() => {
                        const millis = Date.now() - start;
                        const ms = millis / 1000
                        console.log(ms)
                    })
                };
                reader.readAsText(inputUploadFile.files[0]);

            });



    }
};