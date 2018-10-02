//        var user = firebase.auth().currentUser;
//    var uid = firebase.auth().currentUser.uid;
// var proRef = firebase.database().ref().child('users').child(uid);
// proRef.on('value', snap => {
//           var userId = snap.child("Username").val();
//     
//        $("#pConUser").append(userId);
//           })


var commentImg = "../imgs/icons/comment.png";

var postRef = firebase.database().ref('userExpData');

postRef.on('value',
    function postData(data) {
        var ukey = data.val();
        var keys = Object.keys(ukey);
        console.log(keys)

        //        $("#pConUser").appendChild(username)


        for (var i = keys.length - 1; i >= 0; i--) {
            var k = keys[i];
            var post = ukey[k].post;
            var usernameid = ukey[k].username;
            var inTime = ukey[k].time;
            console.log(k + " "+ post)
            
//            var valll = post[i].val()
//            console.log(valll[i])
            //            var tInSec = t / 1000;
            //            var tInMin = t / 60;
            //            var tInHr = tInMin / 60;
            //            var tInDays = tInHr / 24;       
            //            console.log("days" + tInDays);
            //            console.log(tInSec)

            var feedC = document.getElementById("feedContainer");
            var inF = document.getElementById("innerF-container");

            var conCDiv = document.createElement("div");
            conCDiv.className = "container";
            conCDiv.id = "conC";
            
            var stylewc = 46894;

            //CE for user info div
            var infoCDiv = document.createElement("div");
            infoCDiv.id = "infoC";
            conCDiv.appendChild(infoCDiv);
            var userDiv = document.createElement("div");
            infoCDiv.appendChild(userDiv);

            var infoH = document.createElement("p", usernameid);
            infoH.id = "userP";
            userDiv.appendChild(infoH);

            //CE for user content
            var postTextCon = document.createElement("div");
            postTextCon.id = "post-text-con";
            postTextCon.className = "container";
            conCDiv.appendChild(postTextCon);

            var postT = document.createElement("div")
            postT.id = "post-t";
            postT.className = "container";

            var innerP = document.createElement("p");
            innerP.id = "inner-p";
            postT.appendChild(innerP);

            var conImgDiv = document.createElement("div")
            conImgDiv.id = "conImg";
            conImgDiv.className = "container";
            postT.append(conImgDiv)

            var img = document.createElement("IMG");
            img.id = "comImg";
            img.setAttribute("src", commentImg);
            conImgDiv.append(img);

            var postInfo = document.createElement("div")
            postInfo.id = "post-info";

            postTextCon.appendChild(postT);

            inF.appendChild(conCDiv);

            inF.insertBefore(conCDiv, conCDiv)

            infoH.append(usernameid);
            innerP.append(post);
         

//                var commentBit = document.getElementById("comImg");
//
//                commentBit.addEventListener('click', e => {
//                    alert("sdasd");
//                })
            
            img.onclick = function () {
//                var user = firebase.auth().currentUser;
//                var idUser = firebase.auth().currentUser.uid;
//                alert(k);
                _oncc();
            };
        }
    },
    function erData(err) {
        console.log("Error")
        console.log(err);
    }
)

function _oncc (){
    alert("adasd");
}