
$("#up-input").focus(function() {
    
    var upInput = document.getElementById("up-input");
    
            _textfoc()

        });

$("#up-input").focusout(function(){
    upInput.rows = "3";

   upInput.style.marginTop = "-20px";
});
        
        //text area functions
        function _textfoc() {
            upInput.rows = "5";
//            upInput.style.paddingTop = "1%";
             upInput.style.marginTop = "-45px"
//             upInput.style.paddingBottom = "2%";
            
        }