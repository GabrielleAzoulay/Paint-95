
var selectedColor  = 0;
var beenClicked=0;
var arr =["","black", "blue","darkorchid","mediumpurple","aqua","lawngreen", "green", "brown","red","darkorange","hotpink","yellow"];

function init(){
    //creation input
    var first=document.createElement("div");
    first.classList.add("prem");
    // width
    var inputWidth=prompt("Enter the width of the canvas, a multiple of 10 if please");
    console.log(inputWidth);
    var inputHeight=prompt("Enter the height of the canvas, a multiple of 10 if please");

    //Creation de la bar de menu
    var d=document.createElement('div');
    d.id="colors-holder";
    d.className="colors-menu";
    document.body.appendChild(d);

    // bar menu couleurs

    var colorsHolder = document.getElementById("colors-holder");
    for (var i = 1; i <= arr.length-1; i++){
        var newColor = document.createElement("div");
        newColor.classList.add("size");
        newColor.style.backgroundColor=arr[i];
        newColor.classList.add("clickable");
        newColor.id =i;
        colorsHolder.appendChild(newColor);
    }
    // creation de la gomme
    var newDiv = document.createElement("div");
    newDiv.classList.add("gomme_picture");
    var eraser = document.createElement("img");
    eraser.src = "./Images/gomme.png";
    eraser.classList.add("size");
    eraser.classList.add("clickable");
    eraser.id = "gomme" ;
    newDiv.appendChild(eraser);
    colorsHolder.appendChild(newDiv);

    // creation du bouton clear screen
    var newDiv2 = document.createElement("div");
    newDiv2.classList.add("gomme_picture");
    var clearScreen = document.createElement("img");
    clearScreen.src = "./Images/clearScreen.png";
    clearScreen.classList.add("size");
    clearScreen.classList.add("clickable");
    clearScreen.id = "clearScreen" ;
    clearScreen.addEventListener("click",clear);
    newDiv2.appendChild(clearScreen);
    colorsHolder.appendChild(newDiv2);



    // Creation du CANVAS
    var d2=document.createElement('div');
    d2.id = "colors-canvas";
    d2.className="canvas";
    // d2.style.width="500px";
    d2.style.width=inputWidth;
    // d2.style.height="500px";
    d2.style.height=inputHeight;
    document.body.appendChild(d2);


    // on cree chaque pixel du canvas
    var pixelCanvas=document.getElementById("colors-canvas");
    for(var i=1;i<=(inputHeight/10);i++){
        var newLigne =document.createElement("div");
        newLigne.classList.add("ligne");
        newLigne.id="l"+i;
        for(var j=1;j<=(inputWidth/10);j++){
            var box = document.createElement("div");
            box.classList.add("pixel");
            box.classList.add("clickable");
            box.id= "c"+i+j;
            newLigne.appendChild(box);
        }
        pixelCanvas.appendChild(newLigne);
    }


    var allColors = document.getElementsByClassName("size");
    for (var i = 0; i < allColors.length; i++){
        allColors[i].addEventListener("click",selectColor);
    }
    var colorsCanvas = document.getElementsByClassName("pixel");
    for(var j=0;j<colorsCanvas.length;j++) {

        colorsCanvas[j].addEventListener("mousedown", clickDown);
        colorsCanvas[j].addEventListener("mousemove", postColor);
        colorsCanvas[j].addEventListener("mouseup",clickUp);

    }



}



function selectColor(e){
    selectedColor = e.target.id;

}

function clickDown(e){
    beenClicked=1;
}
function clickUp(e){
    beenClicked=0;
}

function postColor(e){
    var colorsCanvas = e.target;
    console.log(colorsCanvas);
    if(beenClicked===1) {


        if (selectedColor == 0) {
            alert("please choose a color first!");
            return;
        }
        if (selectedColor === "gomme") {
            colorsCanvas.style.backgroundColor = "white";
        }

        colorsCanvas.style.backgroundColor = arr[selectedColor];
    }


}

function clear(){
    // debugger;
    var clearScreen1 = document.getElementsByClassName("pixel");
    for(var h=0;h<=clearScreen1.length;h++) {
        clearScreen1[h].style.backgroundColor = "white";

    }

}