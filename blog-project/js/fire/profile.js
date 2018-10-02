var pic = document.getElementById("profilePic");
var infoDiv = document.getElementById("profile-info-div");
var mainBody = document.getElementById("main");
var uploadBtn = document.getElementById("uploadBtn")

function _enterBtnClick() {

    const bDayInput = document.getElementById('bDayInput').value;
    const username = document.getElementById('usernameInput').value;
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;

    function getAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        return age;
        
    }

    if (username.length >= 6) {

        if (age >= 10) {
            var user = firebase.auth().currentUser;
            var uid = firebase.auth().currentUser.uid;
            

            firebase.database().ref().child('users').child(uid).set({
                Username: username,
                Firstname: firstName,
                Lastname: lastName,
                BirthDay: bDayInput,
                UserAge: age,
                time: firebase.database.ServerValue.TIMESTAMP
            });
            firebase.database().ref().child("userPerm").child(uid).set({
                permission: true
            })
        } else {
            alert("you must be 10 years or older to continue")
        }
    } else {
        alert("username must be 6 char or more")
    }
}

function _getData() {

    var user = firebase.auth().currentUser;
    var uid = firebase.auth().currentUser.uid;
    var userRef = firebase.database().ref('users').child(uid);

    userRef.on('value', snap => {
        var username = snap.child("Username").val();

        $("#username").append(username);

        console.log(username);
    });
}



function _btn() {
    
   

    pic.style.marginLeft = "380%";
    uploadBtn.style.marginLeft = "193px";
    pic.style.backgroundColor = "blue";
    infoDiv.style.visibility = "visible";

        var user = firebase.auth().currentUser;
    var uid = firebase.auth().currentUser.uid;

    var userRef = firebase.database().ref('users').child(uid);

    userRef.on('value', snap => {
        var username = snap.child("Username").val();
        email = user.email;

        $("#username").append(username);
        $("#email").append(email);

        console.log(email);
        $("#pConUser").append(username);

    });

    function mouseoverfunc() {
        console.log()
    }

    main.onmouseover = function () {
        mouseoverfunc();
    };

}
