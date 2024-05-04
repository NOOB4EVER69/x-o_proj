test.onclick = function worked() {
    if (document.getElementById("turn").innerText == "x" && document.getElementById("test").innerText == "0") {
        document.getElementById("test").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test").style.color = "orange"
        win()
    } else if (document.getElementById("turn").innerText == "o" && document.getElementById("test").innerText == "0") {
        document.getElementById("test").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test").style.color = "cyan"
        win()
    }
}


test1.onclick = function worked1() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test1").innerText == "0") {
        document.getElementById("test1").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test1").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test1").innerText == "0") {
        document.getElementById("test1").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test1").style.color = "orange"
        win()
    }
}


test2.onclick = function worked2() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test2").innerText == "0") {
        document.getElementById("test2").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test2").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test2").innerText == "0") {
        document.getElementById("test2").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test2").style.color = "orange"
        win()
    }
}

test3.onclick = function worked3() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test3").innerText == "0") {
        document.getElementById("test3").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test3").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test3").innerText == "0") {
        document.getElementById("test3").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test3").style.color = "orange"
        win()
    }
}



test4.onclick = function worked4() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test4").innerText == "0") {
        document.getElementById("test4").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test4").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test4").innerText == "0") {
        document.getElementById("test4").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test4").style.color = "orange"
        win()
    }
}



test5.onclick = function worked5() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test5").innerText == "0") {
        document.getElementById("test5").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test5").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test5").innerText == "0") {
        document.getElementById("test5").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test5").style.color = "orange"
        win()
    }
}


test6.onclick = function worked6() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test6").innerText == "0") {
        document.getElementById("test6").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test6").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test6").innerText == "0") {
        document.getElementById("test6").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test6").style.color = "orange"
        win()
    }
}



test7.onclick = function worked7() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test7").innerText == "0") {
        document.getElementById("test7").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test7").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test7").innerText == "0") {
        document.getElementById("test7").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test7").style.color = "orange"
        win()
    }
}



test8.onclick = function worked8() {

    if (document.getElementById("turn").innerText == "o" && document.getElementById("test8").innerText == "0") {
        document.getElementById("test8").innerText = `o`
        document.getElementById("turn").innerText = `x`
        document.getElementById("test8").style.color = "cyan"
        win()
    } else if (document.getElementById("turn").innerText == "x" && document.getElementById("test8").innerText == "0") {
        document.getElementById("test8").innerText = `x`
        document.getElementById("turn").innerText = `o`
        document.getElementById("test8").style.color = "orange"
        win()
    }
}





function win() {

    var x = document.getElementById("test").innerText
    var x1 = document.getElementById("test1").innerText
    var x2 = document.getElementById("test2").innerText
    var x3 = document.getElementById("test3").innerText
    var x4 = document.getElementById("test4").innerText
    var x5 = document.getElementById("test5").innerText
    var x6 = document.getElementById("test6").innerText
    var x7 = document.getElementById("test7").innerText
    var x8 = document.getElementById("test8").innerText

    // add score :/
    // var sc_x = document.getElementById("x-sc").innerText = 0
    // var sc_o = document.getElementById("o-sc").innerText = 0




    if (document.getElementById("test").innerText == "x" && document.getElementById("test4").innerText == "x" && document.getElementById("test8").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test8").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test").innerText == "x" && document.getElementById("test1").innerText == "x" && document.getElementById("test2").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test").style.color = "green"
        document.getElementById("test1").style.color = "green"
        document.getElementById("test2").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test").innerText == "x" && document.getElementById("test3").innerText == "x" && document.getElementById("test6").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test").style.color = "green"
        document.getElementById("test3").style.color = "green"
        document.getElementById("test6").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test1").innerText == "x" && document.getElementById("test4").innerText == "x" && document.getElementById("test7").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test1").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test7").style.color = "green"
        score_x++;
        updateScore_x()
        document.getElementById("turn").innerText = ""
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test2").innerText == "x" && document.getElementById("test5").innerText == "x" && document.getElementById("test8").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test2").style.color = "green"
        document.getElementById("test5").style.color = "green"
        document.getElementById("test8").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test2").innerText == "x" && document.getElementById("test4").innerText == "x" && document.getElementById("test6").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test2").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test6").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test3").innerText == "x" && document.getElementById("test4").innerText == "x" && document.getElementById("test5").innerText == "x") {
        document.getElementById("winer").innerText = "x won"
        document.getElementById("test3").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test5").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    } else if (document.getElementById("test6").innerText == "x" && document.getElementById("test7").innerText == "x" && document.getElementById("test8").innerText == "x") {
        document.getElementById("winer").innerText = "  x won"
        document.getElementById("test6").style.color = "green"
        document.getElementById("test7").style.color = "green"
        document.getElementById("test8").style.color = "green"
        score_x++;
        document.getElementById("turn").innerText = ""
        updateScore_x()
        document.getElementById("res").style.visibility = "visible"
    }

    else if (document.getElementById("test").innerText == "o" && document.getElementById("test4").innerText == "o" && document.getElementById("test8").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test8").style.color = "green"
        score_o++;
        document.getElementById("turn").innerText = ""
        updateScore_o()
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test").innerText == "o" && document.getElementById("test1").innerText == "o" && document.getElementById("test2").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test").style.color = "green"
        document.getElementById("test1").style.color = "green"
        document.getElementById("test2").style.color = "green"
        score_o++;
        document.getElementById("turn").innerText = ""
        updateScore_o()
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test").innerText == "o" && document.getElementById("test3").innerText == "o" && document.getElementById("test6").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test").style.color = "green"
        document.getElementById("test3").style.color = "green"
        document.getElementById("test6").style.color = "green"
        score_o++;
        updateScore_o()
        document.getElementById("turn").innerText = ""
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test1").innerText == "o" && document.getElementById("test4").innerText == "o" && document.getElementById("test7").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test1").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test7").style.color = "green"
        score_o++;
        document.getElementById("turn").innerText = ""
        updateScore_o()
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test2").innerText == "o" && document.getElementById("test5").innerText == "o" && document.getElementById("test8").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test2").style.color = "green"
        document.getElementById("test5").style.color = "green"
        document.getElementById("test8").style.color = "green"
        score_o++;
        document.getElementById("turn").innerText = ""
        updateScore_o()
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test2").innerText == "o" && document.getElementById("test4").innerText == "o" && document.getElementById("test6").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test2").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test6").style.color = "green"
        score_o++;
        updateScore_o()
        document.getElementById("turn").innerText = ""
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test3").innerText == "o" && document.getElementById("test4").innerText == "o" && document.getElementById("test5").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test3").style.color = "green"
        document.getElementById("test4").style.color = "green"
        document.getElementById("test5").style.color = "green"
        score_o++;
        updateScore_o()
        document.getElementById("turn").innerText = ""
        document.getElementById("res").style.visibility = "visible"

    } else if (document.getElementById("test6").innerText == "o" && document.getElementById("test7").innerText == "o" && document.getElementById("test8").innerText == "o") {
        document.getElementById("winer").innerText = "o won"
        document.getElementById("test6").style.color = "green"
        document.getElementById("test7").style.color = "green"
        document.getElementById("test8").style.color = "green"
        score_o++;
        updateScore_o()
        document.getElementById("res").style.visibility = "visible"
        document.getElementById("turn").innerText = ""

    } else if (x == "0" || x1 == "0" || x2 == "0" || x3 == "0" || x4 == "0" || x5 == "0" || x6 == "0" || x7 == "0" || x8 == "0") {
        console.log("keep playing :/")

    } else {
        document.getElementById("winer").innerText = "tie"
        document.getElementById("turn").innerText = ""
        document.getElementById("res").style.visibility = "visible"
    }
}


res.onclick = function res() {
    document.getElementById("test").innerText = "0"
    document.getElementById("test1").innerText = "0"
    document.getElementById("test2").innerText = "0"

    document.getElementById("test3").innerText = "0"
    document.getElementById("test4").innerText = "0"
    document.getElementById("test5").innerText = "0"

    document.getElementById("test6").innerText = "0"
    document.getElementById("test7").innerText = "0"
    document.getElementById("test8").innerText = "0"

    document.getElementById("test").style.color = "whitesmoke"
    document.getElementById("test1").style.color = "whitesmoke"
    document.getElementById("test2").style.color = "whitesmoke"

    document.getElementById("test3").style.color = "whitesmoke"
    document.getElementById("test4").style.color = "whitesmoke"
    document.getElementById("test5").style.color = "whitesmoke"

    document.getElementById("test6").style.color = "whitesmoke"
    document.getElementById("test7").style.color = "whitesmoke"
    document.getElementById("test8").style.color = "whitesmoke"

    if (document.getElementById("turn").innerText == "o") {
        document.getElementById("turn").innerText = "x"
        document.getElementById("winer").innerText = "turn"
    } else {
        document.getElementById("turn").innerText = "x"
        document.getElementById("winer").innerText = "turn"
    }
    document.getElementById("res").style.visibility = "hidden"
}



let score_x = 0;
let score_o = 0;



function updateScore_x() {
    document.getElementById("x-sc").textContent = score_x;
    console.log("im x score " + score_x)
}





function updateScore_o() {
    document.getElementById("o-sc").textContent = score_o;
    console.log("im o score " + score_o)

}







rest.onclick = function reset_game() {
    history.go(0)

}