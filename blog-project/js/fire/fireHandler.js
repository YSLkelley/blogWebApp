const passwordConfirmInput = document.getElementById('passwordConfirmInput');
const passwordInput = document.getElementById('passwordInput');
const EmailInput = document.getElementById('emailInput');

const submitbtn = document.getElementById('submitbtn');

//for user login

const loginBtn = document.getElementById("login-btn");
const loginInputEmail = document.getElementById("userLoginEmail");
const loginInputPassword = document.getElementById("userLoginPassword");


function _checkData() {

    if (user) {


        var user = firebase.auth().currentUser;
        var uid = firebase.auth().currentUser.uid;
        var dataRef = firebase.database().ref('userPerm').child(uid);

        dataRef.on('value', snap => {
            var perm = snap.child("permission").val()

            console.log(perm);

            if (perm != true) {
                console.log("no")
            } else if (perm = true) {
                document.getElementById("overlay").style.visibility = "hidden";

                console.log("yes")
            }
        });
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {

        uid = firebase.auth().currentUser.uid;
        //                       window.location = '../profile/profileInfo.html';
        //     window.location = '../profile/profileInfo.html';
        window.location = '../profile/profile.html';

        console.log("loged in")
        if (auth.currentUser.emailVerified == true) {
            //            window.location = '../profile/profileInfo.html';
            _getUsername()
            var uid = firebase.auth().currentUser.uid;
            var userRef = firebase.database().ref('users').child(uid);

            userRef.on('value', snap => {
                var username = snap.child("Username").val();

                $("#username").append(username);
            });


        } else if (auth.currentUser.emailVerified == false) {
            console.log("plase verifie email");

            alert("Email is not verified")
            window.location = '../profile/profileError.html';

            document.getElementById("mod").classList.remove("_modOverlay")

        }
    } else if (user == null) {
        console.log("user is logged out");
    }
});

//    login method
if (loginBtn) {
    loginBtn.addEventListener('click', e => {

        const loginEmailValue = loginInputEmail.value
        const loginPasswordValue = loginInputPassword.value
        //    
        //    var user = firebase.auth().currentUser;
        //    var user = firebase.auth().currentUser:

        var user = firebase.auth().currentUser;

        firebase.auth().signInWithEmailAndPassword(loginEmailValue, loginPasswordValue).then(function (user) {
                console.log("user SS");
            })
            .catch(function (error) {
                console.log(error);
            });

    })
}

//const userDataRef = firebase.database().ref().child('userData')

//        sign method 
if (submitbtn) {
    submitbtn.addEventListener('click', e => {

        var passwordErrorMessage = "Passwords you entered do not match";

        //Check if password match

        const pass = passwordInput.value;
        const passComfirm = passwordConfirmInput.value;

        if (pass !== passComfirm) {
            alert(passwordErrorMessage)
            console.log("password do not match")
        } else if (pass.length >= 8) {

            const email = emailInput.value;

            firebase.auth().fetchSignInMethodsForEmail(email).then((provider) => {
                if (provider.length === 0) {

                    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {

                        var user = firebase.auth().currentUser;
                        var uid = firebase.auth().currentUser.uid;

                        user.sendEmailVerification().then(function () {
                            // Email sent.
                            console.log("sent to " + email)
                        }).catch(function (error) {
                            alert("email could not be sent plase try again")
                        });

                        user.updateEmail(email).then(function () {
                            console.log(email)

                        }).catch(function (error) {
                            // An error happened.
                            console.log(error.message);
                        });
                    })

                } else {
                    alert("Email already in use")
                }
            })
        } else {
            alert("password must be 8 characters or more")
        }
    });
}
//        end sign method
//        end sign method



//        email resend method
function resendEmailVerification() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.
        console.log("sent")
        alert("another verification email has been sent!")
    }).catch(function (error) {
        // An error happened.
    });

}

function logoutUser() {
    firebase.auth().signOut()
        .then(function () {
            window.location = '/blog-project/registration/mainSign.html';

        })
        .catch(function (error) {
            // An error happened
        });
}

function _onload() {

    var user = firebase.auth().currentUser;
    var uid = firebase.auth().currentUser.uid;

    const valE = document.getElementById("btnIn").value;

    firebase.database().ref().child('users').child(uid).set({
        value: valE
    })
    console.log(valE)
}


var user = firebase.auth().currentUser;
if (user) {

    var uid = firebase.auth().currentUser.uid;
    var userRef = firebase.database().ref('users').child(uid);
    userRef.on('value', snap => {
        var username = snap.child("Username").val();

        $("#username").append(username);

        $("#username").append("<p>" + username + "</p><p> " + username + "</p> <br>");
    })
}