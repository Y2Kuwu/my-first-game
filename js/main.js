//init
//bool for x or O
const tableDefault = document.getElementById("board");
//var xOrO = document.getElementById();
//btnX.addEventListener('click' , function(evn){
//const playerX = document.createElement("");
const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const btn3 = document.getElementById("b3");
const btn4 = document.getElementById("b4");
const btn5 = document.getElementById("b5");
const btn6 = document.getElementById("b6");
const btn7 = document.getElementById("b7");
const btn8 = document.getElementById("b8");
const btn9 = document.getElementById("b9");
//let randChoice = Math.random();
//randChoice *= buttonChoices.length;
//randChoice *= Math.floor(randChoice);
const newBox1 = document.getElementById("boxS1");
const newBox2=  document.getElementById("boxS2");
const newBox3 = document.getElementById("boxS3");
const newBox4 = document.getElementById("boxS4");
const newBox5 = document.getElementById("boxS5");
const newBox6 = document.getElementById("boxS6");
const newBox7 = document.getElementById("boxS7");
const newBox8 = document.getElementById("boxS8");
const newBox9 = document.getElementById("boxS9");
let boxSelect = [newBox1,newBox2,newBox3,newBox4,newBox5,newBox6,newBox7,newBox8,newBox9];

// var btnArray = {
// win0 : 0,
// }
// var winnerConditions = {
// win : 1
// };
//const btnArray = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
let playerChoice;
let playerActive;
let digiChoice;
// function playerVComp(playerDec){
// if(playerDec = "X"){
//     digi = "O"; 
       
// }
// else if (playerDec = "O"){
//     digi = "X";
//     return digi;
// }

function humanVComp(digi){
return digi;
}
function terminatorChoice(termChoice, sel) //makeMark)   //add function to listeners
{
    
    for(let matchChoice = 0; matchChoice <= termChoice.length; matchChoice++)
    {    
    var randChoice = Math.floor(Math.random()*termChoice.length);
    //var match = Math.floor(Math.random()*sel.length);
    const choice = termChoice[randChoice];
    //boxSelect[randChoice].innerHTML = !playerChoice;
    const mark = sel[randChoice];
    if (termChoice[randChoice].style.display === "none") {
        termChoice[randChoice].display = "block";
      } else {
        termChoice[randChoice].style.display = "none";
        sel[randChoice].innerHTML = humanVComp(digiChoice);
        machine.push(mark);
        //alert(mark);
        checkScore(machine, human);
   return choice, mark; //, mark;
      }
    }
}
let buttonChoices = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];

const championNums = 
[
[9,3,6],
[9,1,5],
[8,2,5],
[6,1,8],
[7,1,4],
[9,7,8],
[6,4,5],
[3,1,2],
]
let human = [];
let machine = [];

function checkScore(m ,h){
championNums.forEach(function(nums, index){
    if(championNums == m)
    {
        return alert("MACHINE WINS");
    }
    else if(championNums == h)
    {
        return alert("HUMANITY WINS");
    }

})
};

// function checkScore(bolts , bones){
// for(let it =0; it < championNums.length; it++)
// for(let bb =0; bb < bolts.length; bb++)
// {
//     if(championNums[it] == bolts[bb])
//     {
//         alert("MACHINE WINS");
//         return bb;
//     }
//     else if(championNums[it] == bones[it])
//     {
//         alert("HUMANITY WINS");
//         return bb;
//     }
// }

// }


const setXO = document.getElementById("wrapper");

const x = document.getElementById("xButton");
x.addEventListener("click" ,function()    //set x to user
{

if (setXO.style.display === "none") {     
    setXO.style.display = "block";
  } else {
    setXO.style.display = "none";
    digiChoice = "O";
    humanVComp(digiChoice);
    return playerChoice = "X";
  }
});
const o = document.getElementById("oButton");     //set o to user
o.addEventListener("click" ,function()
{
    if (setXO.style.display === "none") {
        setXO.style.display = "block";
      } else {
        setXO.style.display = "none";
        digiChoice = "X";
        humanVComp(digiChoice);
        return playerChoice = "O";
      }
});

btn1.addEventListener("click" ,function(){
    if (btn1.style.display === "none") {
        btn1.style.display = "block";
      } else {
        btn1.style.display = "none";
        newBox1.innerHTML = playerChoice;
        human.push(1);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn2.addEventListener("click" ,function(){
    if (btn2.style.display === "none") {
        btn2.style.display = "block";
      } else {
        btn2.style.display = "none";
        newBox2.innerHTML = playerChoice;
        human.push(2);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn3.addEventListener("click" ,function(){
    if (btn3.style.display === "none") {
        btn3.style.display = "block";
      } else {
        btn3.style.display = "none";
        newBox3.innerHTML = playerChoice;
        human.push(3);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn4.addEventListener("click" ,function(){
    if (btn4.style.display === "none") {
        btn4.style.display = "block";
      } else {
        btn4.style.display = "none";
        newBox4.innerHTML = playerChoice;
        human.push(4);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn5.addEventListener("click" ,function(){
    if (btn5.style.display === "none") {
        btn5.style.display = "block";
      } else {
        btn5.style.display = "none";
        newBox5.innerHTML = playerChoice;
        human.push(5);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn6.addEventListener("click" ,function(){
    if (btn6.style.display === "none") {
        btn6.style.display = "block";
      } else {
        btn6.style.display = "none";
        newBox6.innerHTML = playerChoice;
        human.push(6);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn7.addEventListener("click" ,function(){
    if (btn7.style.display === "none") {
        btn7.style.display = "block";
      } else {
        btn7.style.display = "none";
        newBox7.innerHTML = playerChoice;
        human.push(7);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn8.addEventListener("click" ,function(){
    if (btn8.style.display === "none") {
        btn8.style.display = "block";
      } else {
        btn8.style.display = "none";
        newBox8.innerHTML = playerChoice;
        human.push(8);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});
btn9.addEventListener("click" ,function(){
    if (btn9.style.display === "none") {
        btn9.style.display = "block";
      } else {
        btn9.style.display = "none";
        newBox9.innerHTML = playerChoice;
        human.push(9);
        checkScore(machine, human);
        terminatorChoice(buttonChoices, boxSelect);
      }
});


//
//const xSymbol;
//const ySymbol;
//what data do we want:
//player has made decision bool / comps turn
//where has player made decision / 9 possible
//player win or lose 
//what is a win
//what is a lose

//const box;
//const xSquare;
//const oSquare;



// let player = 0;
// let comp = 0;

// function userXorO(choose){
// if(choose = "x" || "X"){
// player = 1;
// comp = 0;
// }
// else if(choose = "o" || "O"){
// player = 0;
// comp = 1;
// }
// else {


// }
// }



//conditions that lead to init are tie, lose, win


// function boardStart(){
// const boardBlank 
//  = [box9, box7, box8,
//     box3, box1, box2,
//     box6, box5, box4]
//  }



//container for wins  // map//
// let topLeft,topMiddle,topRight,
// middleLeft,middleMiddle,middleRight,
// bottomLeft,bottomMiddle,bottomRight;



// const winnerConditions = [
// [topLeft,topMiddle,topRight],
// [middleLeft,middleMiddle,middleRight],
// [bottomLeft,bottomMiddle,bottomRight],
// [topLeft,middleLeft,bottomLeft],
// [topMiddle,middleMiddle,bottomMiddle],
// [topRight,middleRight,bottomRight],
// [topRight,middleMiddle,bottomLeft],
// [topLeft,middleMiddle,bottomRight]
// ];


//if player or comp choose 1 of these combos == win
//message

//}
//

// 1) Define required constants

// 2) Define required variables used to track the state of the game
//game start == false

//start button pushed:
    //start button triggers
    //creation of board
        //trigger user selection below
    //new box prompting user to select x or o
        //button pushed:
        //game started from false to true
        //waits for user input 

        //square selected //shape placed //location mapped
        //rand comp decision  //shaped placed/ location mapped

//player selects x or o
//points are zero


// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
//  4.1) Initialize the state variables
//  4.2) Render those values to the page
//  4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button

//replay == default 
//default == square shape <h1?> <class name= mainSquare>
//







/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

/*----- app's state (variables) -----*/





//     for (let t1 = 0; t1 < boxSelect.length; t1++)
//     for (let t2 = 0; t2 < buttonChoices.length; t2++)
//     {
//         buttonChoices[t2] === boxSelect[t1];
        
//     }
// }
    //return randChoice[Math.floor(buttonChoices.length * Math.random())];
   // return randChoice;