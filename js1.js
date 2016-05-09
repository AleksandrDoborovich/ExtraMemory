(function($) {

    var myGoal;
    var enterGoal;
    var mainEl;
    var newEl;
    var checkBut;
    var deleteBut;
    var divTag;

    var pEl;

    //
    myGoal = document.getElementById("inputForm");
    myGoal.addEventListener("keydown", WriteGoal, false);
   
    function WriteGoal() {}

    enterGoal = document.getElementById("enterNewGoal");
    enterGoal.addEventListener("click", AddToPage, false);

    mainEl = document.getElementById("mainElement");

    // 
    // 
    var deleteSelected = $('#deleteSelectedGoals');
    deleteSelected.on('click', DeleteGoals);

    function AddToPage() {
        divTag = document.createElement("div");
        mainEl.appendChild(divTag);
        deleteBut = document.createElement("img");
        deleteBut.src = "image/delete1.png";
        deleteBut.onclick = deleteOne;
        divTag.appendChild(deleteBut);

        checkBut = document.createElement("input");
        checkBut.type = "checkbox";
        checkBut.class = "checkFamily";
        checkBut.onclick = Overline;
        divTag.appendChild(checkBut);

        pEl = document.createElement("span");
        divTag.appendChild(pEl);

        newEl = document.createTextNode(myGoal.value);
        pEl.appendChild(newEl);

        myGoal.value = "";
    }

    function Overline() {
        var ch = document.getElementsByTagName("input");
        var pEl2 = document.getElementsByTagName("span");
        for (var i = 1; i < ch.length; i++) {
            if (ch[i].checked) {
                pEl2[i - 1].style.textDecoration = "line-through"
            } else {
                pEl2[i - 1].style.textDecoration = "none"
            }
        }
    }

    function DeleteGoals() {
        var a = document.getElementsByTagName("input");
        var b = document.getElementsByTagName("div");

        for (var i = 1; i < a.length; i++) {
            if (a[i].checked) {
                mainEl.removeChild(b[i])
            }
        }

    }

    function deleteOne() {
        var b = document.getElementsByTagName("div");
        var num = $('img').index(this);
        mainEl.removeChild(b[num + 1]);
    }
})(jQuery);
