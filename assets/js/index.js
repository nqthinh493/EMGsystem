window.onload = () => {
    console.log(firebase.app().name);
    auth.onAuthStateChanged((user) => {

        console.log(user);
        if (user) {
            if (user.emailVerified) {
                model.currentUser = {
                    displayName: user.displayName,
                    email: user.email
                }
                view.setActiveScreen('MainScreen');
                view.setMessage('welcome_name_user', 'Welcome ' + user.displayName);
            } else {
                view.setActiveScreen('login')
                alert('Please .....')
            }

        } else {
            view.setActiveScreen('login')
        }

    })

}