(function($) {

    var myGoal;
    var enterGoal;
    var mainEl;
    var newEl;
    var checkBut;
    var deleteBut;
    var divTag;

    var pEl;
    var childEl;

    var Ar=[];
    //
    myGoal = document.getElementById("inputForm");
    myGoal.addEventListener("keydown", WriteGoal, false);
   
    function WriteGoal() {}

    enterGoal = document.getElementById("enterNewGoal");
    enterGoal.addEventListener("click", AddToPage, false);

    mainEl = document.getElementById("mainElement");
    childEl=document.getElementsByClassName("checkFamily");
 

    var ch = document.getElementsByClassName("inputFamily");
    var pEl2 = document.getElementsByClassName("spanFamily");
    // 
    // 
    var deleteSelected = $('#deleteSelectedGoals');
    deleteSelected.on('click', DeleteGoals);

    function AddToPage() {
        divTag = document.createElement("div");
        divTag.className = "checkFamily";
        mainEl.appendChild(divTag);
        deleteBut = document.createElement("img");
        deleteBut.src = "image/delete1.png";
        deleteBut.onclick = deleteOne;
        divTag.appendChild(deleteBut);

        checkBut = document.createElement("input");
        checkBut.type = "checkbox";
        checkBut.className="inputFamily";
        
        checkBut.onclick = Overline;
        divTag.appendChild(checkBut);

        pEl = document.createElement("span");
        pEl.className="spanFamily";
        divTag.appendChild(pEl);

        newEl = document.createTextNode(myGoal.value);
        pEl.appendChild(newEl);

        myGoal.value = "";
    }

    function Overline() {
        
        for (var i = 0; i < ch.length; i++) {
            if (ch[i].checked) {
                pEl2[i].style.textDecoration = "line-through"
            } else {
                pEl2[i].style.textDecoration = "none"
            }
        }
    }

    function DeleteGoals() {
      //  var a = ocument.getElementsByTagName("input");
        //var b = document.getElementsByTagName("div");
        //var a=document.getElementsByClassName("checkFamily");
       
       //console.log (a.length)
        Ar=[];
        
       for (var i = 0; i < childEl.length; i++) {
            if (childEl[i].childNodes[1].checked) {
               Ar.push(i);
                          
            }            
            //console.log (childEl[i].childNodes[1])
           // mainEl.removeChild(childEl[i])
        }

        for (var j = Ar.length; j > 0; j--){
            mainEl.removeChild(childEl[Ar[j-1]])
       }
        
    }

    

    function deleteOne() {
       
    this.parentNode.parentNode.removeChild(this.parentNode);

        //var b = document.getElementById("div");
        //var num = $('img').index(this);
        //mainEl.removeChild(b[num + 1]);
    
    }
})(jQuery);
