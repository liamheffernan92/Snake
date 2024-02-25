function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6r2ufVQ1SKe":
        Script1();
        break;
      case "5rv5Kwi4wHv":
        Script2();
        break;
      case "67b7QTKQpKK":
        Script3();
        break;
      case "6kM5BLqisr7":
        Script4();
        break;
      case "68KjlcOT097":
        Script5();
        break;
      case "5s2fbjxHzb8":
        Script6();
        break;
      case "6PB7ymRJBBB":
        Script7();
        break;
      case "6gqg8eo1x1j":
        Script8();
        break;
      case "5nlnsNQNM9H":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //Getting the player
let player = GetPlayer();

player.SetVar("stop", false);
player.SetVar("boo", false);
player.SetVar("direction", "right");
player.SetVar("score", "0");
player.SetVar("xposition", "0");
player.SetVar("yposition", "240");
player.SetVar("foodonx", "0");
player.SetVar("foodony", "0");
}

window.Script2 = function()
{
  //Getting the player
let player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
   player.SetVar("time",sec);
  if (player.GetVar("stop") ==  true) {
    clearInterval(timerId);
    player.SetVar("time","0")
  }
}

//Start the timer
timerId=setInterval(startTimer,200);



let foodonx = player.GetVar("foodonx");

//create random number FOR X
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min) + min) * 60
}

let newfoodonx = randomIntFromInterval(0, 12)

player.SetVar("foodonx", newfoodonx);



//create random number FOR Y
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min) + min) * 60
}

let newfoodony = randomIntFromInterval(0, 9)

player.SetVar("foodony", newfoodony);


//movement FOR X
let food = document.querySelectorAll("[data-acc-text='food']")

gsap.set(food, { x: newfoodonx })


//movement FOR Y
gsap.set(food, { y: newfoodony })
}

window.Script3 = function()
{
  //setup
var snake = document.querySelector("[data-acc-text='snake']");
var snake2 = document.querySelector("[data-acc-text='snake2']");
var snake3 = document.querySelector("[data-acc-text='snake3']");
var snake4 = document.querySelector("[data-acc-text='snake4']");
var snake5 = document.querySelector("[data-acc-text='snake5']");
var snake6 = document.querySelector("[data-acc-text='snake6']");
var snake7 = document.querySelector("[data-acc-text='snake7']");
var snake8 = document.querySelector("[data-acc-text='snake8']");
var snake9 = document.querySelector("[data-acc-text='snake9']");
var snake10 = document.querySelector("[data-acc-text='snake10']");
var snake11 = document.querySelector("[data-acc-text='snake11']");
var snake12 = document.querySelector("[data-acc-text='snake12']");
var snake13 = document.querySelector("[data-acc-text='snake13']");
var snake14 = document.querySelector("[data-acc-text='snake14']");
var snake15 = document.querySelector("[data-acc-text='snake15']");
var snake16 = document.querySelector("[data-acc-text='snake16']");
var snake17 = document.querySelector("[data-acc-text='snake17']");
var snake18 = document.querySelector("[data-acc-text='snake18']");
var snake19 = document.querySelector("[data-acc-text='snake19']");
var snake20 = document.querySelector("[data-acc-text='snake20']");
var snake21 = document.querySelector("[data-acc-text='snake21']");
var snake22 = document.querySelector("[data-acc-text='snake22']");
var snake23 = document.querySelector("[data-acc-text='snake23']");
var snake24 = document.querySelector("[data-acc-text='snake24']");
var snake25 = document.querySelector("[data-acc-text='snake25']");
var snake26 = document.querySelector("[data-acc-text='snake26']");
var snake27 = document.querySelector("[data-acc-text='snake27']");
var snake28 = document.querySelector("[data-acc-text='snake28']");
var snake29 = document.querySelector("[data-acc-text='snake29']");
var snake30 = document.querySelector("[data-acc-text='snake30']");
var snake31 = document.querySelector("[data-acc-text='snake31']");
var snake32 = document.querySelector("[data-acc-text='snake32']");
var snake33 = document.querySelector("[data-acc-text='snake33']");
var snake34 = document.querySelector("[data-acc-text='snake34']");
var snake35 = document.querySelector("[data-acc-text='snake35']");
var snake36 = document.querySelector("[data-acc-text='snake36']");
var snake37 = document.querySelector("[data-acc-text='snake37']");
var snake38 = document.querySelector("[data-acc-text='snake38']");
var snake39 = document.querySelector("[data-acc-text='snake39']");
var snake40 = document.querySelector("[data-acc-text='snake40']");
var snake41 = document.querySelector("[data-acc-text='snake41']");
var snake42 = document.querySelector("[data-acc-text='snake42']");
var snake43 = document.querySelector("[data-acc-text='snake43']");
var snake44 = document.querySelector("[data-acc-text='snake44']");
var snake45 = document.querySelector("[data-acc-text='snake45']");
var snake46 = document.querySelector("[data-acc-text='snake46']");
var finalscore = document.querySelector("[data-acc-text='finalscore']");
var food = document.querySelector("[data-acc-text='food']");
var turf = document.querySelector("[data-acc-text='turf']");

let player = GetPlayer();
let xposition = gsap.getProperty(snake, "x");
let yposition = gsap.getProperty(snake, "y");
let xposition2 = gsap.getProperty(snake2, "x");
let yposition2 = gsap.getProperty(snake2, "y");
let xposition3 = gsap.getProperty(snake3, "x");
let yposition3 = gsap.getProperty(snake3, "y");
let xposition4 = gsap.getProperty(snake4, "x");
let yposition4 = gsap.getProperty(snake4, "y");
let xposition5 = gsap.getProperty(snake5, "x");
let yposition5 = gsap.getProperty(snake5, "y");
let xposition6 = gsap.getProperty(snake6, "x");
let yposition6 = gsap.getProperty(snake6, "y");
let xposition7 = gsap.getProperty(snake7, "x");
let yposition7 = gsap.getProperty(snake7, "y");
let xposition8 = gsap.getProperty(snake8, "x");
let yposition8 = gsap.getProperty(snake8, "y");
let xposition9 = gsap.getProperty(snake9, "x");
let yposition9 = gsap.getProperty(snake9, "y");
let xposition10 = gsap.getProperty(snake10, "x");
let yposition10 = gsap.getProperty(snake10, "y");
let xposition11 = gsap.getProperty(snake11, "x");
let yposition11 = gsap.getProperty(snake11, "y");
let xposition12 = gsap.getProperty(snake12, "x");
let yposition12 = gsap.getProperty(snake12, "y");
let xposition13 = gsap.getProperty(snake13, "x");
let yposition13 = gsap.getProperty(snake13, "y");
let xposition14 = gsap.getProperty(snake14, "x");
let yposition14 = gsap.getProperty(snake14, "y");
let xposition15 = gsap.getProperty(snake15, "x");
let yposition15 = gsap.getProperty(snake15, "y");
let xposition16 = gsap.getProperty(snake16, "x");
let yposition16 = gsap.getProperty(snake16, "y");
let xposition17 = gsap.getProperty(snake17, "x");
let yposition17 = gsap.getProperty(snake17, "y");
let xposition18 = gsap.getProperty(snake18, "x");
let yposition18 = gsap.getProperty(snake18, "y");
let xposition19 = gsap.getProperty(snake19, "x");
let yposition19 = gsap.getProperty(snake19, "y");
let xposition20 = gsap.getProperty(snake20, "x");
let yposition20 = gsap.getProperty(snake20, "y");
let xposition21 = gsap.getProperty(snake21, "x");
let yposition21 = gsap.getProperty(snake21, "y");
let xposition22 = gsap.getProperty(snake22, "x");
let yposition22 = gsap.getProperty(snake22, "y");
let xposition23 = gsap.getProperty(snake23, "x");
let yposition23 = gsap.getProperty(snake23, "y");
let xposition24 = gsap.getProperty(snake24, "x");
let yposition24 = gsap.getProperty(snake24, "y");
let xposition25 = gsap.getProperty(snake25, "x");
let yposition25 = gsap.getProperty(snake25, "y");
let xposition26 = gsap.getProperty(snake26, "x");
let yposition26 = gsap.getProperty(snake26, "y");
let xposition27 = gsap.getProperty(snake27, "x");
let yposition27 = gsap.getProperty(snake27, "y");
let xposition28 = gsap.getProperty(snake28, "x");
let yposition28 = gsap.getProperty(snake28, "y");
let xposition29 = gsap.getProperty(snake29, "x");
let yposition29 = gsap.getProperty(snake29, "y");
let xposition30 = gsap.getProperty(snake30, "x");
let yposition30 = gsap.getProperty(snake30, "y");
let xposition31 = gsap.getProperty(snake31, "x");
let yposition31 = gsap.getProperty(snake31, "y");
let xposition32 = gsap.getProperty(snake32, "x");
let yposition32 = gsap.getProperty(snake32, "y");
let xposition33 = gsap.getProperty(snake33, "x");
let yposition33 = gsap.getProperty(snake33, "y");
let xposition34 = gsap.getProperty(snake34, "x");
let yposition34 = gsap.getProperty(snake34, "y");
let xposition35 = gsap.getProperty(snake35, "x");
let yposition35 = gsap.getProperty(snake35, "y");
let xposition36 = gsap.getProperty(snake36, "x");
let yposition36 = gsap.getProperty(snake36, "y");
let xposition37 = gsap.getProperty(snake37, "x");
let yposition37 = gsap.getProperty(snake37, "y");
let xposition38 = gsap.getProperty(snake38, "x");
let yposition38 = gsap.getProperty(snake38, "y");
let xposition39 = gsap.getProperty(snake39, "x");
let yposition39 = gsap.getProperty(snake39, "y");
let xposition40 = gsap.getProperty(snake40, "x");
let yposition40 = gsap.getProperty(snake40, "y");
let xposition41 = gsap.getProperty(snake41, "x");
let yposition41 = gsap.getProperty(snake41, "y");
let xposition42 = gsap.getProperty(snake42, "x");
let yposition42 = gsap.getProperty(snake42, "y");
let xposition43 = gsap.getProperty(snake43, "x");
let yposition43 = gsap.getProperty(snake43, "y");
let xposition44 = gsap.getProperty(snake44, "x");
let yposition44 = gsap.getProperty(snake44, "y");
let xposition45 = gsap.getProperty(snake45, "x");
let yposition45 = gsap.getProperty(snake45, "y");
let xposition46 = gsap.getProperty(snake46, "x");
let yposition46 = gsap.getProperty(snake46, "y");




//stop game
if (xposition == xposition5 && yposition == yposition5) {
player.SetVar("stop", true)
}
if (xposition == xposition6 && yposition == yposition6) {
player.SetVar("stop", true)
}
if (xposition == xposition7 && yposition == yposition7) {
player.SetVar("stop", true)
}
if (xposition == xposition8 && yposition == yposition8) {
player.SetVar("stop", true)
}
if (xposition == xposition9 && yposition == yposition9) {
player.SetVar("stop", true)
}
if (xposition == xposition10 && yposition == yposition10) {
player.SetVar("stop", true)
}
if (xposition == xposition11 && yposition == yposition11) {
player.SetVar("stop", true)
}
if (xposition == xposition12 && yposition == yposition12) {
player.SetVar("stop", true)
}
if (xposition == xposition13 && yposition == yposition13) {
player.SetVar("stop", true)
}
if (xposition == xposition14 && yposition == yposition14) {
player.SetVar("stop", true)
}
if (xposition == xposition15 && yposition == yposition15) {
player.SetVar("stop", true)
}
if (xposition == xposition16 && yposition == yposition16) {
player.SetVar("stop", true)
}
if (xposition == xposition17 && yposition == yposition17) {
player.SetVar("stop", true)
}
if (xposition == xposition18 && yposition == yposition18) {
player.SetVar("stop", true)
}
if (xposition == xposition19 && yposition == yposition19) {
player.SetVar("stop", true)
}
if (xposition == xposition20 && yposition == yposition20) {
player.SetVar("stop", true)
}
if (xposition == xposition21 && yposition == yposition21) {
player.SetVar("stop", true)
}
if (xposition == xposition22 && yposition == yposition22) {
player.SetVar("stop", true)
}
if (xposition == xposition23 && yposition == yposition23) {
player.SetVar("stop", true)
}
if (xposition == xposition24 && yposition == yposition24) {
player.SetVar("stop", true)
}
if (xposition == xposition25 && yposition == yposition25) {
player.SetVar("stop", true)
}
if (xposition == xposition26 && yposition == yposition26) {
player.SetVar("stop", true)
}
if (xposition == xposition27 && yposition == yposition27) {
player.SetVar("stop", true)
}
if (xposition == xposition28 && yposition == yposition28) {
player.SetVar("stop", true)
}
if (xposition == xposition29 && yposition == yposition29) {
player.SetVar("stop", true)
}
if (xposition == xposition30 && yposition == yposition30) {
player.SetVar("stop", true)
}
if (xposition == xposition31 && yposition == yposition31) {
player.SetVar("stop", true)
}
if (xposition == xposition32 && yposition == yposition32) {
player.SetVar("stop", true)
}
if (xposition == xposition33 && yposition == yposition33) {
player.SetVar("stop", true)
}
if (xposition == xposition34 && yposition == yposition34) {
player.SetVar("stop", true)
}
if (xposition == xposition35 && yposition == yposition35) {
player.SetVar("stop", true)
}
if (xposition == xposition36 && yposition == yposition36) {
player.SetVar("stop", true)
}
if (xposition == xposition37 && yposition == yposition37) {
player.SetVar("stop", true)
}
if (xposition == xposition38 && yposition == yposition38) {
player.SetVar("stop", true)
}
if (xposition == xposition39 && yposition == yposition39) {
player.SetVar("stop", true)
}
if (xposition == xposition40 && yposition == yposition40) {
player.SetVar("stop", true)
}
if (xposition == xposition41 && yposition == yposition41) {
player.SetVar("stop", true)
}
if (xposition == xposition42 && yposition == yposition42) {
player.SetVar("stop", true)
}
if (xposition == xposition43 && yposition == yposition43) {
player.SetVar("stop", true)
}
if (xposition == xposition44 && yposition == yposition44) {
player.SetVar("stop", true)
}
if (xposition == xposition45 && yposition == yposition45) {
player.SetVar("stop", true)
}
if (xposition == xposition46 && yposition == yposition46) {
player.SetVar("stop", true)
}











//fades
let x = player.GetVar("stop");
if (x == true) {
gsap.set(finalscore, { x: 173, y: 191, delay: 0.7 })
}


//remove food
if (x == true) {
gsap.to(food, { opacity: 0, duration: 0, delay: 0.7 })
}

//remove turf
if (x == true) {
gsap.to(turf, { opacity: 0, duration: 0, delay: 0.7 })
}

//remove snake
if (x == true) {
gsap.to(snake, { opacity: 0, duration: 0, delay: 0.7 })
}
if (x == true) {
gsap.to(snake2, { opacity: 0, duration: 0, delay: 0.7  })
}
if (x == true) {
gsap.to(snake3, { opacity: 0, duration: 0, delay: 0.7  })
}
if (x == true) {
gsap.to(snake4, { opacity: 0, duration: 0, delay: 0.7  })
}
if (x == true) {
gsap.to(snake5, { opacity: 0, duration: 0, delay: 0.7  })
}
if (x == true) {
gsap.to(snake6, { opacity: 0, duration: 0, delay: 0.7  })
}
if (x == true) {
gsap.to(snake7, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake8, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake9, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake10, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake11, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake12, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake13, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake14, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake15, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake16, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake17, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake18, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake19, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake20, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake21, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake22, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake23, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake24, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake25, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake26, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake27, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake28, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake29, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake30, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake31, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake32, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake33, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake34, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake35, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake36, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake37, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake38, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake39, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake40, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake41, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake42, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake43, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake44, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake45, { opacity: 0, duration: 0, delay: 0.7   })
}
if (x == true) {
gsap.to(snake46, { opacity: 0, duration: 0, delay: 0.7   })
}
}

window.Script4 = function()
{
  //setup
var snake = document.querySelector("[data-acc-text='snake']");
var snake2 = document.querySelector("[data-acc-text='snake2']");
var snake3 = document.querySelector("[data-acc-text='snake3']");
var snake4 = document.querySelector("[data-acc-text='snake4']");
var snake5 = document.querySelector("[data-acc-text='snake5']");
var snake6 = document.querySelector("[data-acc-text='snake6']");
var snake7 = document.querySelector("[data-acc-text='snake7']");
var snake8 = document.querySelector("[data-acc-text='snake8']");
var snake9 = document.querySelector("[data-acc-text='snake9']");
var snake10 = document.querySelector("[data-acc-text='snake10']");
var snake11 = document.querySelector("[data-acc-text='snake11']");
var snake12 = document.querySelector("[data-acc-text='snake12']");
var snake13 = document.querySelector("[data-acc-text='snake13']");
var snake14 = document.querySelector("[data-acc-text='snake14']");
var snake15 = document.querySelector("[data-acc-text='snake15']");
var snake16 = document.querySelector("[data-acc-text='snake16']");
var snake17 = document.querySelector("[data-acc-text='snake17']");
var snake18 = document.querySelector("[data-acc-text='snake18']");
var snake19 = document.querySelector("[data-acc-text='snake19']");
var snake20 = document.querySelector("[data-acc-text='snake20']");
var snake21 = document.querySelector("[data-acc-text='snake21']");
var snake22 = document.querySelector("[data-acc-text='snake22']");
var snake23 = document.querySelector("[data-acc-text='snake23']");
var snake24 = document.querySelector("[data-acc-text='snake24']");
var snake25 = document.querySelector("[data-acc-text='snake25']");
var snake26 = document.querySelector("[data-acc-text='snake26']");
var snake27 = document.querySelector("[data-acc-text='snake27']");
var snake28 = document.querySelector("[data-acc-text='snake28']");
var snake29 = document.querySelector("[data-acc-text='snake29']");
var snake30 = document.querySelector("[data-acc-text='snake30']");
var snake31 = document.querySelector("[data-acc-text='snake31']");
var snake32 = document.querySelector("[data-acc-text='snake32']");
var snake33 = document.querySelector("[data-acc-text='snake33']");
var snake34 = document.querySelector("[data-acc-text='snake34']");
var snake35 = document.querySelector("[data-acc-text='snake35']");
var snake36 = document.querySelector("[data-acc-text='snake36']");
var snake37 = document.querySelector("[data-acc-text='snake37']");
var snake38 = document.querySelector("[data-acc-text='snake38']");
var snake39 = document.querySelector("[data-acc-text='snake39']");
var snake40 = document.querySelector("[data-acc-text='snake40']");
var snake41 = document.querySelector("[data-acc-text='snake41']");
var snake42 = document.querySelector("[data-acc-text='snake42']");
var snake43 = document.querySelector("[data-acc-text='snake43']");
var snake44 = document.querySelector("[data-acc-text='snake44']");
var snake45 = document.querySelector("[data-acc-text='snake45']");
var snake46 = document.querySelector("[data-acc-text='snake46']");


let player = GetPlayer();


let score = player.GetVar("score");


let xposition = gsap.getProperty(snake, "x");
let yposition = gsap.getProperty(snake, "y");
let xposition2 = gsap.getProperty(snake2, "x");
let yposition2 = gsap.getProperty(snake2, "y");
let xposition3 = gsap.getProperty(snake3, "x");
let yposition3 = gsap.getProperty(snake3, "y");
let xposition4 = gsap.getProperty(snake4, "x");
let yposition4 = gsap.getProperty(snake4, "y");
let xposition5 = gsap.getProperty(snake5, "x");
let yposition5 = gsap.getProperty(snake5, "y");
let xposition6 = gsap.getProperty(snake6, "x");
let yposition6 = gsap.getProperty(snake6, "y");
let xposition7 = gsap.getProperty(snake7, "x");
let yposition7 = gsap.getProperty(snake7, "y");
let xposition8 = gsap.getProperty(snake8, "x");
let yposition8 = gsap.getProperty(snake8, "y");
let xposition9 = gsap.getProperty(snake9, "x");
let yposition9 = gsap.getProperty(snake9, "y");
let xposition10 = gsap.getProperty(snake10, "x");
let yposition10 = gsap.getProperty(snake10, "y");
let xposition11 = gsap.getProperty(snake11, "x");
let yposition11 = gsap.getProperty(snake11, "y");
let xposition12 = gsap.getProperty(snake12, "x");
let yposition12 = gsap.getProperty(snake12, "y");
let xposition13 = gsap.getProperty(snake13, "x");
let yposition13 = gsap.getProperty(snake13, "y");
let xposition14 = gsap.getProperty(snake14, "x");
let yposition14 = gsap.getProperty(snake14, "y");
let xposition15 = gsap.getProperty(snake15, "x");
let yposition15 = gsap.getProperty(snake15, "y");
let xposition16 = gsap.getProperty(snake16, "x");
let yposition16 = gsap.getProperty(snake16, "y");
let xposition17 = gsap.getProperty(snake17, "x");
let yposition17 = gsap.getProperty(snake17, "y");
let xposition18 = gsap.getProperty(snake18, "x");
let yposition18 = gsap.getProperty(snake18, "y");
let xposition19 = gsap.getProperty(snake19, "x");
let yposition19 = gsap.getProperty(snake19, "y");
let xposition20 = gsap.getProperty(snake20, "x");
let yposition20 = gsap.getProperty(snake20, "y");
let xposition21 = gsap.getProperty(snake21, "x");
let yposition21 = gsap.getProperty(snake21, "y");
let xposition22 = gsap.getProperty(snake22, "x");
let yposition22 = gsap.getProperty(snake22, "y");
let xposition23 = gsap.getProperty(snake23, "x");
let yposition23 = gsap.getProperty(snake23, "y");
let xposition24 = gsap.getProperty(snake24, "x");
let yposition24 = gsap.getProperty(snake24, "y");
let xposition25 = gsap.getProperty(snake25, "x");
let yposition25 = gsap.getProperty(snake25, "y");
let xposition26 = gsap.getProperty(snake26, "x");
let yposition26 = gsap.getProperty(snake26, "y");
let xposition27 = gsap.getProperty(snake27, "x");
let yposition27 = gsap.getProperty(snake27, "y");
let xposition28 = gsap.getProperty(snake28, "x");
let yposition28 = gsap.getProperty(snake28, "y");
let xposition29 = gsap.getProperty(snake29, "x");
let yposition29 = gsap.getProperty(snake29, "y");
let xposition30 = gsap.getProperty(snake30, "x");
let yposition30 = gsap.getProperty(snake30, "y");
let xposition31 = gsap.getProperty(snake31, "x");
let yposition31 = gsap.getProperty(snake31, "y");
let xposition32 = gsap.getProperty(snake32, "x");
let yposition32 = gsap.getProperty(snake32, "y");
let xposition33 = gsap.getProperty(snake33, "x");
let yposition33 = gsap.getProperty(snake33, "y");
let xposition34 = gsap.getProperty(snake34, "x");
let yposition34 = gsap.getProperty(snake34, "y");
let xposition35 = gsap.getProperty(snake35, "x");
let yposition35 = gsap.getProperty(snake35, "y");
let xposition36 = gsap.getProperty(snake36, "x");
let yposition36 = gsap.getProperty(snake36, "y");
let xposition37 = gsap.getProperty(snake37, "x");
let yposition37 = gsap.getProperty(snake37, "y");
let xposition38 = gsap.getProperty(snake38, "x");
let yposition38 = gsap.getProperty(snake38, "y");
let xposition39 = gsap.getProperty(snake39, "x");
let yposition39 = gsap.getProperty(snake39, "y");
let xposition40 = gsap.getProperty(snake40, "x");
let yposition40 = gsap.getProperty(snake40, "y");
let xposition41 = gsap.getProperty(snake41, "x");
let yposition41 = gsap.getProperty(snake41, "y");
let xposition42 = gsap.getProperty(snake42, "x");
let yposition42 = gsap.getProperty(snake42, "y");
let xposition43 = gsap.getProperty(snake43, "x");
let yposition43 = gsap.getProperty(snake43, "y");
let xposition44 = gsap.getProperty(snake44, "x");
let yposition44 = gsap.getProperty(snake44, "y");
let xposition45 = gsap.getProperty(snake45, "x");
let yposition45 = gsap.getProperty(snake45, "y");
let xposition46 = gsap.getProperty(snake46, "x");
let yposition46 = gsap.getProperty(snake46, "y");


//movement
gsap.to(snake, { x: xposition + 60, duration: 0 })


if (score > 0) {gsap.set(snake2, { x: xposition, y: yposition })}
if (score > 1) {gsap.set(snake3, { x: xposition2, y: yposition2 })}
if (score > 2) {gsap.set(snake4, { x: xposition3, y: yposition3 })}
if (score > 3) {gsap.set(snake5, { x: xposition4, y: yposition4 })}
if (score > 4) {gsap.set(snake6, { x: xposition5, y: yposition5 })}
if (score > 5) {gsap.set(snake7, { x: xposition6, y: yposition6 })}
if (score > 6) {gsap.set(snake8, { x: xposition7, y: yposition7 })}
if (score > 7) {gsap.set(snake9, { x: xposition8, y: yposition8 })}
if (score > 8) {gsap.set(snake10, { x: xposition9, y: yposition9 })}
if (score > 9) {gsap.set(snake11, { x: xposition10, y: yposition10 })}
if (score > 10) {gsap.set(snake12, { x: xposition11, y: yposition11 })}
if (score > 11) {gsap.set(snake13, { x: xposition12, y: yposition12 })}
if (score > 12) {gsap.set(snake14, { x: xposition13, y: yposition13 })}
if (score > 13) {gsap.set(snake15, { x: xposition14, y: yposition14 })}
if (score > 14) {gsap.set(snake16, { x: xposition15, y: yposition15 })}
if (score > 15) {gsap.set(snake17, { x: xposition16, y: yposition16 })}
if (score > 16) {gsap.set(snake18, { x: xposition17, y: yposition17 })}
if (score > 17) {gsap.set(snake19, { x: xposition18, y: yposition18 })}
if (score > 18) {gsap.set(snake20, { x: xposition19, y: yposition19 })}
if (score > 19) {gsap.set(snake21, { x: xposition20, y: yposition20 })}
if (score > 20) {gsap.set(snake22, { x: xposition21, y: yposition21 })}
if (score > 21) {gsap.set(snake23, { x: xposition22, y: yposition22 })}
if (score > 22) {gsap.set(snake24, { x: xposition23, y: yposition23 })}
if (score > 23) {gsap.set(snake25, { x: xposition24, y: yposition24 })}
if (score > 24) {gsap.set(snake26, { x: xposition25, y: yposition25 })}
if (score > 25) {gsap.set(snake27, { x: xposition26, y: yposition26 })}
if (score > 26) {gsap.set(snake28, { x: xposition27, y: yposition27 })}
if (score > 27) {gsap.set(snake29, { x: xposition28, y: yposition28 })}
if (score > 28) {gsap.set(snake30, { x: xposition29, y: yposition29 })}
if (score > 29) {gsap.set(snake31, { x: xposition30, y: yposition30 })}
if (score > 30) {gsap.set(snake32, { x: xposition31, y: yposition31 })}
if (score > 31) {gsap.set(snake33, { x: xposition32, y: yposition32 })}
if (score > 32) {gsap.set(snake34, { x: xposition33, y: yposition33 })}
if (score > 33) {gsap.set(snake35, { x: xposition34, y: yposition34 })}
if (score > 34) {gsap.set(snake36, { x: xposition35, y: yposition35 })}
if (score > 35) {gsap.set(snake37, { x: xposition36, y: yposition36 })}
if (score > 36) {gsap.set(snake38, { x: xposition37, y: yposition37 })}
if (score > 37) {gsap.set(snake39, { x: xposition38, y: yposition38 })}
if (score > 38) {gsap.set(snake40, { x: xposition39, y: yposition39 })}
if (score > 39) {gsap.set(snake41, { x: xposition40, y: yposition40 })}
if (score > 40) {gsap.set(snake42, { x: xposition41, y: yposition41 })}
if (score > 41) {gsap.set(snake43, { x: xposition42, y: yposition42 })}
if (score > 42) {gsap.set(snake44, { x: xposition43, y: yposition43 })}
if (score > 43) {gsap.set(snake45, { x: xposition44, y: yposition44 })}
if (score > 44) {gsap.set(snake46, { x: xposition45, y: yposition45 })}


let newxposition = xposition + 60;

//return to SL
player.SetVar("xposition",newxposition)

}

window.Script5 = function()
{
  let player = GetPlayer();

let foodonx = player.GetVar("foodonx");

//create random number FOR X
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min) + min) * 60
}

let newfoodonx = randomIntFromInterval(0, 12)


//ensure that food is not hidden by snake





player.SetVar("foodonx", newfoodonx);



//create random number FOR Y
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min) + min) * 60
}

let newfoodony = randomIntFromInterval(0, 9)

player.SetVar("foodony", newfoodony);


//movement FOR X
let food = document.querySelectorAll("[data-acc-text='food']")

gsap.set(food, { x: newfoodonx })


//movement FOR Y
gsap.set(food, { y: newfoodony })



//add to score
let score = player.GetVar("score");
let newscore = score + 1;
player.SetVar("score", newscore);
}

window.Script6 = function()
{
  let player = GetPlayer();

let foodonx = player.GetVar("foodonx");

//create random number FOR X
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min) + min) * 60
}

let newfoodonx = randomIntFromInterval(0, 12)

player.SetVar("foodonx", newfoodonx);



//create random number FOR Y
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min) + min) * 60
}

let newfoodony = randomIntFromInterval(0, 9)

player.SetVar("foodony", newfoodony);


//movement FOR X
let food = document.querySelectorAll("[data-acc-text='food']")

gsap.set(food, { x: newfoodonx })


//movement FOR Y
gsap.set(food, { y: newfoodony })


//add to score
let score = player.GetVar("score");
let newscore = score + 1;
player.SetVar("score", newscore);
}

window.Script7 = function()
{
  //setup
var snake = document.querySelector("[data-acc-text='snake']");
var snake2 = document.querySelector("[data-acc-text='snake2']");
var snake3 = document.querySelector("[data-acc-text='snake3']");
var snake4 = document.querySelector("[data-acc-text='snake4']");
var snake5 = document.querySelector("[data-acc-text='snake5']");
var snake6 = document.querySelector("[data-acc-text='snake6']");
var snake7 = document.querySelector("[data-acc-text='snake7']");
var snake8 = document.querySelector("[data-acc-text='snake8']");
var snake9 = document.querySelector("[data-acc-text='snake9']");
var snake10 = document.querySelector("[data-acc-text='snake10']");
var snake11 = document.querySelector("[data-acc-text='snake11']");
var snake12 = document.querySelector("[data-acc-text='snake12']");
var snake13 = document.querySelector("[data-acc-text='snake13']");
var snake14 = document.querySelector("[data-acc-text='snake14']");
var snake15 = document.querySelector("[data-acc-text='snake15']");
var snake16 = document.querySelector("[data-acc-text='snake16']");
var snake17 = document.querySelector("[data-acc-text='snake17']");
var snake18 = document.querySelector("[data-acc-text='snake18']");
var snake19 = document.querySelector("[data-acc-text='snake19']");
var snake20 = document.querySelector("[data-acc-text='snake20']");
var snake21 = document.querySelector("[data-acc-text='snake21']");
var snake22 = document.querySelector("[data-acc-text='snake22']");
var snake23 = document.querySelector("[data-acc-text='snake23']");
var snake24 = document.querySelector("[data-acc-text='snake24']");
var snake25 = document.querySelector("[data-acc-text='snake25']");
var snake26 = document.querySelector("[data-acc-text='snake26']");
var snake27 = document.querySelector("[data-acc-text='snake27']");
var snake28 = document.querySelector("[data-acc-text='snake28']");
var snake29 = document.querySelector("[data-acc-text='snake29']");
var snake30 = document.querySelector("[data-acc-text='snake30']");
var snake31 = document.querySelector("[data-acc-text='snake31']");
var snake32 = document.querySelector("[data-acc-text='snake32']");
var snake33 = document.querySelector("[data-acc-text='snake33']");
var snake34 = document.querySelector("[data-acc-text='snake34']");
var snake35 = document.querySelector("[data-acc-text='snake35']");
var snake36 = document.querySelector("[data-acc-text='snake36']");
var snake37 = document.querySelector("[data-acc-text='snake37']");
var snake38 = document.querySelector("[data-acc-text='snake38']");
var snake39 = document.querySelector("[data-acc-text='snake39']");
var snake40 = document.querySelector("[data-acc-text='snake40']");
var snake41 = document.querySelector("[data-acc-text='snake41']");
var snake42 = document.querySelector("[data-acc-text='snake42']");
var snake43 = document.querySelector("[data-acc-text='snake43']");
var snake44 = document.querySelector("[data-acc-text='snake44']");
var snake45 = document.querySelector("[data-acc-text='snake45']");
var snake46 = document.querySelector("[data-acc-text='snake46']");

let player = GetPlayer();


let score = player.GetVar("score");


let xposition = gsap.getProperty(snake, "x");
let yposition = gsap.getProperty(snake, "y");
let xposition2 = gsap.getProperty(snake2, "x");
let yposition2 = gsap.getProperty(snake2, "y");
let xposition3 = gsap.getProperty(snake3, "x");
let yposition3 = gsap.getProperty(snake3, "y");
let xposition4 = gsap.getProperty(snake4, "x");
let yposition4 = gsap.getProperty(snake4, "y");
let xposition5 = gsap.getProperty(snake5, "x");
let yposition5 = gsap.getProperty(snake5, "y");
let xposition6 = gsap.getProperty(snake6, "x");
let yposition6 = gsap.getProperty(snake6, "y");
let xposition7 = gsap.getProperty(snake7, "x");
let yposition7 = gsap.getProperty(snake7, "y");
let xposition8 = gsap.getProperty(snake8, "x");
let yposition8 = gsap.getProperty(snake8, "y");
let xposition9 = gsap.getProperty(snake9, "x");
let yposition9 = gsap.getProperty(snake9, "y");
let xposition10 = gsap.getProperty(snake10, "x");
let yposition10 = gsap.getProperty(snake10, "y");
let xposition11 = gsap.getProperty(snake11, "x");
let yposition11 = gsap.getProperty(snake11, "y");
let xposition12 = gsap.getProperty(snake12, "x");
let yposition12 = gsap.getProperty(snake12, "y");
let xposition13 = gsap.getProperty(snake13, "x");
let yposition13 = gsap.getProperty(snake13, "y");
let xposition14 = gsap.getProperty(snake14, "x");
let yposition14 = gsap.getProperty(snake14, "y");
let xposition15 = gsap.getProperty(snake15, "x");
let yposition15 = gsap.getProperty(snake15, "y");
let xposition16 = gsap.getProperty(snake16, "x");
let yposition16 = gsap.getProperty(snake16, "y");
let xposition17 = gsap.getProperty(snake17, "x");
let yposition17 = gsap.getProperty(snake17, "y");
let xposition18 = gsap.getProperty(snake18, "x");
let yposition18 = gsap.getProperty(snake18, "y");
let xposition19 = gsap.getProperty(snake19, "x");
let yposition19 = gsap.getProperty(snake19, "y");
let xposition20 = gsap.getProperty(snake20, "x");
let yposition20 = gsap.getProperty(snake20, "y");
let xposition21 = gsap.getProperty(snake21, "x");
let yposition21 = gsap.getProperty(snake21, "y");
let xposition22 = gsap.getProperty(snake22, "x");
let yposition22 = gsap.getProperty(snake22, "y");
let xposition23 = gsap.getProperty(snake23, "x");
let yposition23 = gsap.getProperty(snake23, "y");
let xposition24 = gsap.getProperty(snake24, "x");
let yposition24 = gsap.getProperty(snake24, "y");
let xposition25 = gsap.getProperty(snake25, "x");
let yposition25 = gsap.getProperty(snake25, "y");
let xposition26 = gsap.getProperty(snake26, "x");
let yposition26 = gsap.getProperty(snake26, "y");
let xposition27 = gsap.getProperty(snake27, "x");
let yposition27 = gsap.getProperty(snake27, "y");
let xposition28 = gsap.getProperty(snake28, "x");
let yposition28 = gsap.getProperty(snake28, "y");
let xposition29 = gsap.getProperty(snake29, "x");
let yposition29 = gsap.getProperty(snake29, "y");
let xposition30 = gsap.getProperty(snake30, "x");
let yposition30 = gsap.getProperty(snake30, "y");
let xposition31 = gsap.getProperty(snake31, "x");
let yposition31 = gsap.getProperty(snake31, "y");
let xposition32 = gsap.getProperty(snake32, "x");
let yposition32 = gsap.getProperty(snake32, "y");
let xposition33 = gsap.getProperty(snake33, "x");
let yposition33 = gsap.getProperty(snake33, "y");
let xposition34 = gsap.getProperty(snake34, "x");
let yposition34 = gsap.getProperty(snake34, "y");
let xposition35 = gsap.getProperty(snake35, "x");
let yposition35 = gsap.getProperty(snake35, "y");
let xposition36 = gsap.getProperty(snake36, "x");
let yposition36 = gsap.getProperty(snake36, "y");
let xposition37 = gsap.getProperty(snake37, "x");
let yposition37 = gsap.getProperty(snake37, "y");
let xposition38 = gsap.getProperty(snake38, "x");
let yposition38 = gsap.getProperty(snake38, "y");
let xposition39 = gsap.getProperty(snake39, "x");
let yposition39 = gsap.getProperty(snake39, "y");
let xposition40 = gsap.getProperty(snake40, "x");
let yposition40 = gsap.getProperty(snake40, "y");
let xposition41 = gsap.getProperty(snake41, "x");
let yposition41 = gsap.getProperty(snake41, "y");
let xposition42 = gsap.getProperty(snake42, "x");
let yposition42 = gsap.getProperty(snake42, "y");
let xposition43 = gsap.getProperty(snake43, "x");
let yposition43 = gsap.getProperty(snake43, "y");
let xposition44 = gsap.getProperty(snake44, "x");
let yposition44 = gsap.getProperty(snake44, "y");
let xposition45 = gsap.getProperty(snake45, "x");
let yposition45 = gsap.getProperty(snake45, "y");
let xposition46 = gsap.getProperty(snake46, "x");
let yposition46 = gsap.getProperty(snake46, "y");


//movement
gsap.set(snake, { x: xposition - 60 })
if (score > 0) {gsap.set(snake2, { x: xposition, y: yposition })}
if (score > 1) {gsap.set(snake3, { x: xposition2, y: yposition2 })}
if (score > 2) {gsap.set(snake4, { x: xposition3, y: yposition3 })}
if (score > 3) {gsap.set(snake5, { x: xposition4, y: yposition4 })}
if (score > 4) {gsap.set(snake6, { x: xposition5, y: yposition5 })}
if (score > 5) {gsap.set(snake7, { x: xposition6, y: yposition6 })}
if (score > 6) {gsap.set(snake8, { x: xposition7, y: yposition7 })}
if (score > 7) {gsap.set(snake9, { x: xposition8, y: yposition8 })}
if (score > 8) {gsap.set(snake10, { x: xposition9, y: yposition9 })}
if (score > 9) {gsap.set(snake11, { x: xposition10, y: yposition10 })}
if (score > 10) {gsap.set(snake12, { x: xposition11, y: yposition11 })}
if (score > 11) {gsap.set(snake13, { x: xposition12, y: yposition12 })}
if (score > 12) {gsap.set(snake14, { x: xposition13, y: yposition13 })}
if (score > 13) {gsap.set(snake15, { x: xposition14, y: yposition14 })}
if (score > 14) {gsap.set(snake16, { x: xposition15, y: yposition15 })}
if (score > 15) {gsap.set(snake17, { x: xposition16, y: yposition16 })}
if (score > 16) {gsap.set(snake18, { x: xposition17, y: yposition17 })}
if (score > 17) {gsap.set(snake19, { x: xposition18, y: yposition18 })}
if (score > 18) {gsap.set(snake20, { x: xposition19, y: yposition19 })}
if (score > 19) {gsap.set(snake21, { x: xposition20, y: yposition20 })}
if (score > 20) {gsap.set(snake22, { x: xposition21, y: yposition21 })}
if (score > 21) {gsap.set(snake23, { x: xposition22, y: yposition22 })}
if (score > 22) {gsap.set(snake24, { x: xposition23, y: yposition23 })}
if (score > 23) {gsap.set(snake25, { x: xposition24, y: yposition24 })}
if (score > 24) {gsap.set(snake26, { x: xposition25, y: yposition25 })}
if (score > 25) {gsap.set(snake27, { x: xposition26, y: yposition26 })}
if (score > 26) {gsap.set(snake28, { x: xposition27, y: yposition27 })}
if (score > 27) {gsap.set(snake29, { x: xposition28, y: yposition28 })}
if (score > 28) {gsap.set(snake30, { x: xposition29, y: yposition29 })}
if (score > 29) {gsap.set(snake31, { x: xposition30, y: yposition30 })}
if (score > 30) {gsap.set(snake32, { x: xposition31, y: yposition31 })}
if (score > 31) {gsap.set(snake33, { x: xposition32, y: yposition32 })}
if (score > 32) {gsap.set(snake34, { x: xposition33, y: yposition33 })}
if (score > 33) {gsap.set(snake35, { x: xposition34, y: yposition34 })}
if (score > 34) {gsap.set(snake36, { x: xposition35, y: yposition35 })}
if (score > 35) {gsap.set(snake37, { x: xposition36, y: yposition36 })}
if (score > 36) {gsap.set(snake38, { x: xposition37, y: yposition37 })}
if (score > 37) {gsap.set(snake39, { x: xposition38, y: yposition38 })}
if (score > 38) {gsap.set(snake40, { x: xposition39, y: yposition39 })}
if (score > 39) {gsap.set(snake41, { x: xposition40, y: yposition40 })}
if (score > 40) {gsap.set(snake42, { x: xposition41, y: yposition41 })}
if (score > 41) {gsap.set(snake43, { x: xposition42, y: yposition42 })}
if (score > 42) {gsap.set(snake44, { x: xposition43, y: yposition43 })}
if (score > 43) {gsap.set(snake45, { x: xposition44, y: yposition44 })}
if (score > 44) {gsap.set(snake46, { x: xposition45, y: yposition45 })}


let newxposition = xposition - 60;


//return to SL
player.SetVar("xposition",newxposition)
}

window.Script8 = function()
{
  //setup
var snake = document.querySelector("[data-acc-text='snake']");
var snake2 = document.querySelector("[data-acc-text='snake2']");
var snake3 = document.querySelector("[data-acc-text='snake3']");
var snake4 = document.querySelector("[data-acc-text='snake4']");
var snake5 = document.querySelector("[data-acc-text='snake5']");
var snake6 = document.querySelector("[data-acc-text='snake6']");
var snake7 = document.querySelector("[data-acc-text='snake7']");
var snake8 = document.querySelector("[data-acc-text='snake8']");
var snake9 = document.querySelector("[data-acc-text='snake9']");
var snake10 = document.querySelector("[data-acc-text='snake10']");
var snake11 = document.querySelector("[data-acc-text='snake11']");
var snake12 = document.querySelector("[data-acc-text='snake12']");
var snake13 = document.querySelector("[data-acc-text='snake13']");
var snake14 = document.querySelector("[data-acc-text='snake14']");
var snake15 = document.querySelector("[data-acc-text='snake15']");
var snake16 = document.querySelector("[data-acc-text='snake16']");
var snake17 = document.querySelector("[data-acc-text='snake17']");
var snake18 = document.querySelector("[data-acc-text='snake18']");
var snake19 = document.querySelector("[data-acc-text='snake19']");
var snake20 = document.querySelector("[data-acc-text='snake20']");
var snake21 = document.querySelector("[data-acc-text='snake21']");
var snake22 = document.querySelector("[data-acc-text='snake22']");
var snake23 = document.querySelector("[data-acc-text='snake23']");
var snake24 = document.querySelector("[data-acc-text='snake24']");
var snake25 = document.querySelector("[data-acc-text='snake25']");
var snake26 = document.querySelector("[data-acc-text='snake26']");
var snake27 = document.querySelector("[data-acc-text='snake27']");
var snake28 = document.querySelector("[data-acc-text='snake28']");
var snake29 = document.querySelector("[data-acc-text='snake29']");
var snake30 = document.querySelector("[data-acc-text='snake30']");
var snake31 = document.querySelector("[data-acc-text='snake31']");
var snake32 = document.querySelector("[data-acc-text='snake32']");
var snake33 = document.querySelector("[data-acc-text='snake33']");
var snake34 = document.querySelector("[data-acc-text='snake34']");
var snake35 = document.querySelector("[data-acc-text='snake35']");
var snake36 = document.querySelector("[data-acc-text='snake36']");
var snake37 = document.querySelector("[data-acc-text='snake37']");
var snake38 = document.querySelector("[data-acc-text='snake38']");
var snake39 = document.querySelector("[data-acc-text='snake39']");
var snake40 = document.querySelector("[data-acc-text='snake40']");
var snake41 = document.querySelector("[data-acc-text='snake41']");
var snake42 = document.querySelector("[data-acc-text='snake42']");
var snake43 = document.querySelector("[data-acc-text='snake43']");
var snake44 = document.querySelector("[data-acc-text='snake44']");
var snake45 = document.querySelector("[data-acc-text='snake45']");
var snake46 = document.querySelector("[data-acc-text='snake46']");

let player = GetPlayer();


let score = player.GetVar("score");


let xposition = gsap.getProperty(snake, "x");
let yposition = gsap.getProperty(snake, "y");
let xposition2 = gsap.getProperty(snake2, "x");
let yposition2 = gsap.getProperty(snake2, "y");
let xposition3 = gsap.getProperty(snake3, "x");
let yposition3 = gsap.getProperty(snake3, "y");
let xposition4 = gsap.getProperty(snake4, "x");
let yposition4 = gsap.getProperty(snake4, "y");
let xposition5 = gsap.getProperty(snake5, "x");
let yposition5 = gsap.getProperty(snake5, "y");
let xposition6 = gsap.getProperty(snake6, "x");
let yposition6 = gsap.getProperty(snake6, "y");
let xposition7 = gsap.getProperty(snake7, "x");
let yposition7 = gsap.getProperty(snake7, "y");
let xposition8 = gsap.getProperty(snake8, "x");
let yposition8 = gsap.getProperty(snake8, "y");
let xposition9 = gsap.getProperty(snake9, "x");
let yposition9 = gsap.getProperty(snake9, "y");
let xposition10 = gsap.getProperty(snake10, "x");
let yposition10 = gsap.getProperty(snake10, "y");
let xposition11 = gsap.getProperty(snake11, "x");
let yposition11 = gsap.getProperty(snake11, "y");
let xposition12 = gsap.getProperty(snake12, "x");
let yposition12 = gsap.getProperty(snake12, "y");
let xposition13 = gsap.getProperty(snake13, "x");
let yposition13 = gsap.getProperty(snake13, "y");
let xposition14 = gsap.getProperty(snake14, "x");
let yposition14 = gsap.getProperty(snake14, "y");
let xposition15 = gsap.getProperty(snake15, "x");
let yposition15 = gsap.getProperty(snake15, "y");
let xposition16 = gsap.getProperty(snake16, "x");
let yposition16 = gsap.getProperty(snake16, "y");
let xposition17 = gsap.getProperty(snake17, "x");
let yposition17 = gsap.getProperty(snake17, "y");
let xposition18 = gsap.getProperty(snake18, "x");
let yposition18 = gsap.getProperty(snake18, "y");
let xposition19 = gsap.getProperty(snake19, "x");
let yposition19 = gsap.getProperty(snake19, "y");
let xposition20 = gsap.getProperty(snake20, "x");
let yposition20 = gsap.getProperty(snake20, "y");
let xposition21 = gsap.getProperty(snake21, "x");
let yposition21 = gsap.getProperty(snake21, "y");
let xposition22 = gsap.getProperty(snake22, "x");
let yposition22 = gsap.getProperty(snake22, "y");
let xposition23 = gsap.getProperty(snake23, "x");
let yposition23 = gsap.getProperty(snake23, "y");
let xposition24 = gsap.getProperty(snake24, "x");
let yposition24 = gsap.getProperty(snake24, "y");
let xposition25 = gsap.getProperty(snake25, "x");
let yposition25 = gsap.getProperty(snake25, "y");
let xposition26 = gsap.getProperty(snake26, "x");
let yposition26 = gsap.getProperty(snake26, "y");
let xposition27 = gsap.getProperty(snake27, "x");
let yposition27 = gsap.getProperty(snake27, "y");
let xposition28 = gsap.getProperty(snake28, "x");
let yposition28 = gsap.getProperty(snake28, "y");
let xposition29 = gsap.getProperty(snake29, "x");
let yposition29 = gsap.getProperty(snake29, "y");
let xposition30 = gsap.getProperty(snake30, "x");
let yposition30 = gsap.getProperty(snake30, "y");
let xposition31 = gsap.getProperty(snake31, "x");
let yposition31 = gsap.getProperty(snake31, "y");
let xposition32 = gsap.getProperty(snake32, "x");
let yposition32 = gsap.getProperty(snake32, "y");
let xposition33 = gsap.getProperty(snake33, "x");
let yposition33 = gsap.getProperty(snake33, "y");
let xposition34 = gsap.getProperty(snake34, "x");
let yposition34 = gsap.getProperty(snake34, "y");
let xposition35 = gsap.getProperty(snake35, "x");
let yposition35 = gsap.getProperty(snake35, "y");
let xposition36 = gsap.getProperty(snake36, "x");
let yposition36 = gsap.getProperty(snake36, "y");
let xposition37 = gsap.getProperty(snake37, "x");
let yposition37 = gsap.getProperty(snake37, "y");
let xposition38 = gsap.getProperty(snake38, "x");
let yposition38 = gsap.getProperty(snake38, "y");
let xposition39 = gsap.getProperty(snake39, "x");
let yposition39 = gsap.getProperty(snake39, "y");
let xposition40 = gsap.getProperty(snake40, "x");
let yposition40 = gsap.getProperty(snake40, "y");
let xposition41 = gsap.getProperty(snake41, "x");
let yposition41 = gsap.getProperty(snake41, "y");
let xposition42 = gsap.getProperty(snake42, "x");
let yposition42 = gsap.getProperty(snake42, "y");
let xposition43 = gsap.getProperty(snake43, "x");
let yposition43 = gsap.getProperty(snake43, "y");
let xposition44 = gsap.getProperty(snake44, "x");
let yposition44 = gsap.getProperty(snake44, "y");
let xposition45 = gsap.getProperty(snake45, "x");
let yposition45 = gsap.getProperty(snake45, "y");
let xposition46 = gsap.getProperty(snake46, "x");
let yposition46 = gsap.getProperty(snake46, "y");


//movement
gsap.set(snake, { y: yposition - 60 })
if (score > 0) {gsap.set(snake2, { x: xposition, y: yposition })}
if (score > 1) {gsap.set(snake3, { x: xposition2, y: yposition2 })}
if (score > 2) {gsap.set(snake4, { x: xposition3, y: yposition3 })}
if (score > 3) {gsap.set(snake5, { x: xposition4, y: yposition4 })}
if (score > 4) {gsap.set(snake6, { x: xposition5, y: yposition5 })}
if (score > 5) {gsap.set(snake7, { x: xposition6, y: yposition6 })}
if (score > 6) {gsap.set(snake8, { x: xposition7, y: yposition7 })}
if (score > 7) {gsap.set(snake9, { x: xposition8, y: yposition8 })}
if (score > 8) {gsap.set(snake10, { x: xposition9, y: yposition9 })}
if (score > 9) {gsap.set(snake11, { x: xposition10, y: yposition10 })}
if (score > 10) {gsap.set(snake12, { x: xposition11, y: yposition11 })}
if (score > 11) {gsap.set(snake13, { x: xposition12, y: yposition12 })}
if (score > 12) {gsap.set(snake14, { x: xposition13, y: yposition13 })}
if (score > 13) {gsap.set(snake15, { x: xposition14, y: yposition14 })}
if (score > 14) {gsap.set(snake16, { x: xposition15, y: yposition15 })}
if (score > 15) {gsap.set(snake17, { x: xposition16, y: yposition16 })}
if (score > 16) {gsap.set(snake18, { x: xposition17, y: yposition17 })}
if (score > 17) {gsap.set(snake19, { x: xposition18, y: yposition18 })}
if (score > 18) {gsap.set(snake20, { x: xposition19, y: yposition19 })}
if (score > 19) {gsap.set(snake21, { x: xposition20, y: yposition20 })}
if (score > 20) {gsap.set(snake22, { x: xposition21, y: yposition21 })}
if (score > 21) {gsap.set(snake23, { x: xposition22, y: yposition22 })}
if (score > 22) {gsap.set(snake24, { x: xposition23, y: yposition23 })}
if (score > 23) {gsap.set(snake25, { x: xposition24, y: yposition24 })}
if (score > 24) {gsap.set(snake26, { x: xposition25, y: yposition25 })}
if (score > 25) {gsap.set(snake27, { x: xposition26, y: yposition26 })}
if (score > 26) {gsap.set(snake28, { x: xposition27, y: yposition27 })}
if (score > 27) {gsap.set(snake29, { x: xposition28, y: yposition28 })}
if (score > 28) {gsap.set(snake30, { x: xposition29, y: yposition29 })}
if (score > 29) {gsap.set(snake31, { x: xposition30, y: yposition30 })}
if (score > 30) {gsap.set(snake32, { x: xposition31, y: yposition31 })}
if (score > 31) {gsap.set(snake33, { x: xposition32, y: yposition32 })}
if (score > 32) {gsap.set(snake34, { x: xposition33, y: yposition33 })}
if (score > 33) {gsap.set(snake35, { x: xposition34, y: yposition34 })}
if (score > 34) {gsap.set(snake36, { x: xposition35, y: yposition35 })}
if (score > 35) {gsap.set(snake37, { x: xposition36, y: yposition36 })}
if (score > 36) {gsap.set(snake38, { x: xposition37, y: yposition37 })}
if (score > 37) {gsap.set(snake39, { x: xposition38, y: yposition38 })}
if (score > 38) {gsap.set(snake40, { x: xposition39, y: yposition39 })}
if (score > 39) {gsap.set(snake41, { x: xposition40, y: yposition40 })}
if (score > 40) {gsap.set(snake42, { x: xposition41, y: yposition41 })}
if (score > 41) {gsap.set(snake43, { x: xposition42, y: yposition42 })}
if (score > 42) {gsap.set(snake44, { x: xposition43, y: yposition43 })}
if (score > 43) {gsap.set(snake45, { x: xposition44, y: yposition44 })}
if (score > 44) {gsap.set(snake46, { x: xposition45, y: yposition45 })}



let newyposition = yposition - 60;


//return to SL
player.SetVar("yposition",newyposition)


if (xposition == xposition5 && yposition == yposition5) {
player.SetVar("stop", true)
}
}

window.Script9 = function()
{
  //setup
var snake = document.querySelector("[data-acc-text='snake']");
var snake2 = document.querySelector("[data-acc-text='snake2']");
var snake3 = document.querySelector("[data-acc-text='snake3']");
var snake4 = document.querySelector("[data-acc-text='snake4']");
var snake5 = document.querySelector("[data-acc-text='snake5']");
var snake6 = document.querySelector("[data-acc-text='snake6']");
var snake7 = document.querySelector("[data-acc-text='snake7']");
var snake8 = document.querySelector("[data-acc-text='snake8']");
var snake9 = document.querySelector("[data-acc-text='snake9']");
var snake10 = document.querySelector("[data-acc-text='snake10']");
var snake11 = document.querySelector("[data-acc-text='snake11']");
var snake12 = document.querySelector("[data-acc-text='snake12']");
var snake13 = document.querySelector("[data-acc-text='snake13']");
var snake14 = document.querySelector("[data-acc-text='snake14']");
var snake15 = document.querySelector("[data-acc-text='snake15']");
var snake16 = document.querySelector("[data-acc-text='snake16']");
var snake17 = document.querySelector("[data-acc-text='snake17']");
var snake18 = document.querySelector("[data-acc-text='snake18']");
var snake19 = document.querySelector("[data-acc-text='snake19']");
var snake20 = document.querySelector("[data-acc-text='snake20']");
var snake21 = document.querySelector("[data-acc-text='snake21']");
var snake22 = document.querySelector("[data-acc-text='snake22']");
var snake23 = document.querySelector("[data-acc-text='snake23']");
var snake24 = document.querySelector("[data-acc-text='snake24']");
var snake25 = document.querySelector("[data-acc-text='snake25']");
var snake26 = document.querySelector("[data-acc-text='snake26']");
var snake27 = document.querySelector("[data-acc-text='snake27']");
var snake28 = document.querySelector("[data-acc-text='snake28']");
var snake29 = document.querySelector("[data-acc-text='snake29']");
var snake30 = document.querySelector("[data-acc-text='snake30']");
var snake31 = document.querySelector("[data-acc-text='snake31']");
var snake32 = document.querySelector("[data-acc-text='snake32']");
var snake33 = document.querySelector("[data-acc-text='snake33']");
var snake34 = document.querySelector("[data-acc-text='snake34']");
var snake35 = document.querySelector("[data-acc-text='snake35']");
var snake36 = document.querySelector("[data-acc-text='snake36']");
var snake37 = document.querySelector("[data-acc-text='snake37']");
var snake38 = document.querySelector("[data-acc-text='snake38']");
var snake39 = document.querySelector("[data-acc-text='snake39']");
var snake40 = document.querySelector("[data-acc-text='snake40']");
var snake41 = document.querySelector("[data-acc-text='snake41']");
var snake42 = document.querySelector("[data-acc-text='snake42']");
var snake43 = document.querySelector("[data-acc-text='snake43']");
var snake44 = document.querySelector("[data-acc-text='snake44']");
var snake45 = document.querySelector("[data-acc-text='snake45']");
var snake46 = document.querySelector("[data-acc-text='snake46']");

let player = GetPlayer();


let score = player.GetVar("score");



let xposition = gsap.getProperty(snake, "x");
let yposition = gsap.getProperty(snake, "y");
let xposition2 = gsap.getProperty(snake2, "x");
let yposition2 = gsap.getProperty(snake2, "y");
let xposition3 = gsap.getProperty(snake3, "x");
let yposition3 = gsap.getProperty(snake3, "y");
let xposition4 = gsap.getProperty(snake4, "x");
let yposition4 = gsap.getProperty(snake4, "y");
let xposition5 = gsap.getProperty(snake5, "x");
let yposition5 = gsap.getProperty(snake5, "y");
let xposition6 = gsap.getProperty(snake6, "x");
let yposition6 = gsap.getProperty(snake6, "y");
let xposition7 = gsap.getProperty(snake7, "x");
let yposition7 = gsap.getProperty(snake7, "y");
let xposition8 = gsap.getProperty(snake8, "x");
let yposition8 = gsap.getProperty(snake8, "y");
let xposition9 = gsap.getProperty(snake9, "x");
let yposition9 = gsap.getProperty(snake9, "y");
let xposition10 = gsap.getProperty(snake10, "x");
let yposition10 = gsap.getProperty(snake10, "y");
let xposition11 = gsap.getProperty(snake11, "x");
let yposition11 = gsap.getProperty(snake11, "y");
let xposition12 = gsap.getProperty(snake12, "x");
let yposition12 = gsap.getProperty(snake12, "y");
let xposition13 = gsap.getProperty(snake13, "x");
let yposition13 = gsap.getProperty(snake13, "y");
let xposition14 = gsap.getProperty(snake14, "x");
let yposition14 = gsap.getProperty(snake14, "y");
let xposition15 = gsap.getProperty(snake15, "x");
let yposition15 = gsap.getProperty(snake15, "y");
let xposition16 = gsap.getProperty(snake16, "x");
let yposition16 = gsap.getProperty(snake16, "y");
let xposition17 = gsap.getProperty(snake17, "x");
let yposition17 = gsap.getProperty(snake17, "y");
let xposition18 = gsap.getProperty(snake18, "x");
let yposition18 = gsap.getProperty(snake18, "y");
let xposition19 = gsap.getProperty(snake19, "x");
let yposition19 = gsap.getProperty(snake19, "y");
let xposition20 = gsap.getProperty(snake20, "x");
let yposition20 = gsap.getProperty(snake20, "y");
let xposition21 = gsap.getProperty(snake21, "x");
let yposition21 = gsap.getProperty(snake21, "y");
let xposition22 = gsap.getProperty(snake22, "x");
let yposition22 = gsap.getProperty(snake22, "y");
let xposition23 = gsap.getProperty(snake23, "x");
let yposition23 = gsap.getProperty(snake23, "y");
let xposition24 = gsap.getProperty(snake24, "x");
let yposition24 = gsap.getProperty(snake24, "y");
let xposition25 = gsap.getProperty(snake25, "x");
let yposition25 = gsap.getProperty(snake25, "y");
let xposition26 = gsap.getProperty(snake26, "x");
let yposition26 = gsap.getProperty(snake26, "y");
let xposition27 = gsap.getProperty(snake27, "x");
let yposition27 = gsap.getProperty(snake27, "y");
let xposition28 = gsap.getProperty(snake28, "x");
let yposition28 = gsap.getProperty(snake28, "y");
let xposition29 = gsap.getProperty(snake29, "x");
let yposition29 = gsap.getProperty(snake29, "y");
let xposition30 = gsap.getProperty(snake30, "x");
let yposition30 = gsap.getProperty(snake30, "y");
let xposition31 = gsap.getProperty(snake31, "x");
let yposition31 = gsap.getProperty(snake31, "y");
let xposition32 = gsap.getProperty(snake32, "x");
let yposition32 = gsap.getProperty(snake32, "y");
let xposition33 = gsap.getProperty(snake33, "x");
let yposition33 = gsap.getProperty(snake33, "y");
let xposition34 = gsap.getProperty(snake34, "x");
let yposition34 = gsap.getProperty(snake34, "y");
let xposition35 = gsap.getProperty(snake35, "x");
let yposition35 = gsap.getProperty(snake35, "y");
let xposition36 = gsap.getProperty(snake36, "x");
let yposition36 = gsap.getProperty(snake36, "y");
let xposition37 = gsap.getProperty(snake37, "x");
let yposition37 = gsap.getProperty(snake37, "y");
let xposition38 = gsap.getProperty(snake38, "x");
let yposition38 = gsap.getProperty(snake38, "y");
let xposition39 = gsap.getProperty(snake39, "x");
let yposition39 = gsap.getProperty(snake39, "y");
let xposition40 = gsap.getProperty(snake40, "x");
let yposition40 = gsap.getProperty(snake40, "y");
let xposition41 = gsap.getProperty(snake41, "x");
let yposition41 = gsap.getProperty(snake41, "y");
let xposition42 = gsap.getProperty(snake42, "x");
let yposition42 = gsap.getProperty(snake42, "y");
let xposition43 = gsap.getProperty(snake43, "x");
let yposition43 = gsap.getProperty(snake43, "y");
let xposition44 = gsap.getProperty(snake44, "x");
let yposition44 = gsap.getProperty(snake44, "y");
let xposition45 = gsap.getProperty(snake45, "x");
let yposition45 = gsap.getProperty(snake45, "y");
let xposition46 = gsap.getProperty(snake46, "x");
let yposition46 = gsap.getProperty(snake46, "y");


//movement
gsap.set(snake, { y: yposition + 60 })
if (score > 0) {gsap.set(snake2, { x: xposition, y: yposition })}
if (score > 1) {gsap.set(snake3, { x: xposition2, y: yposition2 })}
if (score > 2) {gsap.set(snake4, { x: xposition3, y: yposition3 })}
if (score > 3) {gsap.set(snake5, { x: xposition4, y: yposition4 })}
if (score > 4) {gsap.set(snake6, { x: xposition5, y: yposition5 })}
if (score > 5) {gsap.set(snake7, { x: xposition6, y: yposition6 })}
if (score > 6) {gsap.set(snake8, { x: xposition7, y: yposition7 })}
if (score > 7) {gsap.set(snake9, { x: xposition8, y: yposition8 })}
if (score > 8) {gsap.set(snake10, { x: xposition9, y: yposition9 })}
if (score > 9) {gsap.set(snake11, { x: xposition10, y: yposition10 })}
if (score > 10) {gsap.set(snake12, { x: xposition11, y: yposition11 })}
if (score > 11) {gsap.set(snake13, { x: xposition12, y: yposition12 })}
if (score > 12) {gsap.set(snake14, { x: xposition13, y: yposition13 })}
if (score > 13) {gsap.set(snake15, { x: xposition14, y: yposition14 })}
if (score > 14) {gsap.set(snake16, { x: xposition15, y: yposition15 })}
if (score > 15) {gsap.set(snake17, { x: xposition16, y: yposition16 })}
if (score > 16) {gsap.set(snake18, { x: xposition17, y: yposition17 })}
if (score > 17) {gsap.set(snake19, { x: xposition18, y: yposition18 })}
if (score > 18) {gsap.set(snake20, { x: xposition19, y: yposition19 })}
if (score > 19) {gsap.set(snake21, { x: xposition20, y: yposition20 })}
if (score > 20) {gsap.set(snake22, { x: xposition21, y: yposition21 })}
if (score > 21) {gsap.set(snake23, { x: xposition22, y: yposition22 })}
if (score > 22) {gsap.set(snake24, { x: xposition23, y: yposition23 })}
if (score > 23) {gsap.set(snake25, { x: xposition24, y: yposition24 })}
if (score > 24) {gsap.set(snake26, { x: xposition25, y: yposition25 })}
if (score > 25) {gsap.set(snake27, { x: xposition26, y: yposition26 })}
if (score > 26) {gsap.set(snake28, { x: xposition27, y: yposition27 })}
if (score > 27) {gsap.set(snake29, { x: xposition28, y: yposition28 })}
if (score > 28) {gsap.set(snake30, { x: xposition29, y: yposition29 })}
if (score > 29) {gsap.set(snake31, { x: xposition30, y: yposition30 })}
if (score > 30) {gsap.set(snake32, { x: xposition31, y: yposition31 })}
if (score > 31) {gsap.set(snake33, { x: xposition32, y: yposition32 })}
if (score > 32) {gsap.set(snake34, { x: xposition33, y: yposition33 })}
if (score > 33) {gsap.set(snake35, { x: xposition34, y: yposition34 })}
if (score > 34) {gsap.set(snake36, { x: xposition35, y: yposition35 })}
if (score > 35) {gsap.set(snake37, { x: xposition36, y: yposition36 })}
if (score > 36) {gsap.set(snake38, { x: xposition37, y: yposition37 })}
if (score > 37) {gsap.set(snake39, { x: xposition38, y: yposition38 })}
if (score > 38) {gsap.set(snake40, { x: xposition39, y: yposition39 })}
if (score > 39) {gsap.set(snake41, { x: xposition40, y: yposition40 })}
if (score > 40) {gsap.set(snake42, { x: xposition41, y: yposition41 })}
if (score > 41) {gsap.set(snake43, { x: xposition42, y: yposition42 })}
if (score > 42) {gsap.set(snake44, { x: xposition43, y: yposition43 })}
if (score > 43) {gsap.set(snake45, { x: xposition44, y: yposition44 })}
if (score > 44) {gsap.set(snake46, { x: xposition45, y: yposition45 })}



let newyposition = yposition + 60;


//return to SL
player.SetVar("yposition",newyposition)


if (xposition == xposition5 && yposition == yposition5) {
player.SetVar("stop", true)
}
}

};
