(function($) {

    var myGoal;
    var enterGoal;
    var mainEl;
    var newEl;
    var checkBut;
    var deleteBut;
    var divTag;

    var spanEl;
    var childEl;

    var ArIndex=[];

    var check;
    var spanElDom;
    
    //
    myGoal = document.getElementById("inputForm");
    myGoal.addEventListener("keydown", WriteGoal, false);
   
    function WriteGoal() {}

    enterGoal = document.getElementById("enterNewGoal");
    enterGoal.addEventListener("click", AddToPage, false);

    mainEl = document.getElementById("mainElement");
    childEl=document.getElementsByClassName("checkFamily");
 

    check = document.getElementsByClassName("inputFamily");
    spanElDom = document.getElementsByClassName("spanFamily");
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

        spanEl = document.createElement("span");
        spanEl.className="spanFamily";
        divTag.appendChild(spanEl);

        newEl = document.createTextNode(myGoal.value);
        spanEl.appendChild(newEl);

        myGoal.value = "";
    }

    function Overline() {
        
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked) {
                spanElDom[i].style.textDecoration = "line-through"
            } 
            else {
                spanElDom[i].style.textDecoration = "none"
            }
        }
    }

    function DeleteGoals() {
  
        ArIndex=[];
        
       for (var i = 0; i < childEl.length; i++) {
            if (childEl[i].childNodes[1].checked) {
               ArIndex.push(i);
            }            
        }

        for (var j = ArIndex.length; j > 0; j--) {
            mainEl.removeChild(childEl[ArIndex[j-1]])
        }
        
    }

    

    function deleteOne() {
       
        this.parentNode.parentNode.removeChild(this.parentNode);

    }
})(jQuery);
