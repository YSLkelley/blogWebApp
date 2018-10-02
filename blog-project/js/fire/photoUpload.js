//var picUpload = document.getElementById("picUpload")
//var uploader = document.getElementById("uploader")
////var profilePicFile;
////
////
////profilePicFile = event.target.files[0];
////
////user = firebase.auth().currentUser;
////
////userUid = firebase.auth().currentUser.uid;
////
//////$("#picUpload").on("change", function (event) {
//////    profilePicFile = event.target.files[0];
//////});
////
////function ppUpload() {
////    var filename = profilePicFile.name;
////    var storageRef = firebase.storage().ref('/profilePictures/' + userUid + '/activePicture');
////    var uploadTask = storageRef.put(profilePicFile);
////
////    uploadTask, on('state_changed', function (snapshot) {
////
////    }, function (error) {
////        console("not");
////    }, function () {
////
//////        var postKey = firebase.database.ref('Profile/' + userUid + '/picture').push().key;
////        var downloadURL = uploadTask.snapshot.downloadURL;
////        console.log(downloadURL)
////        
////    });
////}
//
//
////picUpload.addEventListener("change", function (e) {
//    
//
//    
//    
//    function uploadPic(){ 
//        
//    var storageRef = firebase.storage().ref('profilePicture/' + user.uid + '/pic/' + file.name);
//        var task = storageRef.put(file);
////    var task = storageRef.put(file);
////
////    task.on('state_changed',
////        function progress(snapshot) {
////            var percentaeg = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
////            uploader.value = percentaeg;
////        },
////        function error(err) {
////
////        },
////        function complete() {
////
////        }
////    )
//}
//    
////})