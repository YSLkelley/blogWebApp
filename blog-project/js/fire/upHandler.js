var banner = document.getElementById("banner");
var uploadF = document.getElementById("upload-form")
var uploadBtn = document.getElementById("upload")
var closeBtn = document.getElementById("closeLoad")
var feedCon = document.getElementById("feedContainer")
var upInput = document.getElementById("up-input");

banner.style.visibility = "hidden";
closeBtn.style.visibility = "hidden";

uploadBtn.addEventListener('click', e => {
    banner.style.visibility = "visible";
    banner.style.paddingTop = "40px";
    banner.style.paddingBottom = "80px";

    uploadBtn.style.visibility = "hidden";
    closeBtn.style.visibility = "visible";

    feedCon.style.marginTop = "25px";
    closeBtn.style.marginTop = "12px";
    closeBtn.style.paddingRight = "128px";
    //    uploadBtn.innerHTML = "X"
})

function closeUploadDiv() {
    banner.style.visibility = "hidden";
    banner.style.paddingTop = "0px";
    banner.style.paddingBottom = "0px";

    feedCon.style.marginTop = "0px";
    closeBtn.style.marginTop = "0px";
    closeBtn.style.paddingRight = "0px";

    uploadBtn.style.visibility = "visible";
    closeBtn.style.visibility = "hidden"
}

var enterBtn = document.getElementById("#enter");

enter.addEventListener('click', e => {
    var input = upInput.value;
    var uid = firebase.auth().currentUser.uid;
    var ukey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    if (input.trim() == '') {
        alert("input can not be empty");
    } else {
        var userRef = firebase.database().ref('users').child(uid);
        userRef.on('value', snap => {
            
            var username = snap.child("Username").val();          
            name = username;
        });
        var time = firebase.database.ServerValue.TIMESTAMP;

        var userInputRef = firebase.database().ref().child("userExp").child(ukey).child("userPost").set({
            userInput: input,
            time: time,
            ukey: ukey,
            userID: uid
        })
        var inputDataRef = firebase.database().ref().child("userExpData").child(ukey).set({
            username: name,
            post: input,
            time: time,
            ukey: ukey
        })
        
        
        
        alert("your post has been updataed");
        

    }
})