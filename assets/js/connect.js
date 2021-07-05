var firebaseConfig = {
    apiKey: "AIzaSyD79JLPr6w-LWrAyXFlppvB-_97JD7DMzE",
    authDomain: "sparc-emg-system.firebaseapp.com",
    databaseURL: "https://sparc-emg-system-default-rtdb.firebaseio.com/",
    projectId: "sparc-emg-system",
    storageBucket: "sparc-emg-system.appspot.com",
    messagingSenderId: "698953805323",
    appId: "1:698953805323:web:193b61650c28ed96bee10e",
    measurementId: "G-1HZP25LWMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var nameV, rollV, secV, genV;

function Ready() {
    nameV = document.getElementById('namebox').value;
    rollV = document.getElementById('rollbox').value;
    secV = document.getElementById('secbox').value;
    genV = document.getElementById('genbox').value;

}
document.getElementById('insert').onclick = function() {
    Ready();
    firebase.database().ref('student/' + rollV).set({
        NameOfStudetn: nameV,
        Rollno: rollV,
        Section: secV,
        Gender: genV

    })
}

document.getElementById('select').onclick = function() {
    Ready();
    firebase.database().ref('student/' + rollV).on('value', function(snapshot) {
        document.getElementById('namebox').value = snapshot.val().NameOfStudetn;
        document.getElementById('secbox').value = snapshot.val().Section;
        document.getElementById('genbox').value = snapshot.val().Gender;
    })


}
document.getElementById('insert').onclick = function() {
    Ready();
    firebase.database().ref('student/' + rollV).update({
        NameOfStudetn: nameV,
        Section: secV,
        Gender: genV

    })
}