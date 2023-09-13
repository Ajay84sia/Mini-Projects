var num = document.querySelectorAll("#keyboard>div");
var disp = document.querySelector("#input");

// console.log(disp); 
for (i = 0; i < num.length; i++) {
    num[i].addEventListener("click", cal);

}


function cal() {
    var tar = event.target.innerText;
    var x = disp.innerText;
    var y = x.slice(0, -1);


    switch (tar) {

        case "C":
            disp.innerText = "";
            break;

        case "=":
            if (x[0] == "/" || x[0] == "*") {
                disp.innerText = "Please check the input";
            } else if (disp.innerText != "") {
                disp.innerText = eval(disp.innerText);
            }
            break;
        case "Back":
            disp.innerText = y;


            break;
        default:
            disp.innerText += tar;
    }

}