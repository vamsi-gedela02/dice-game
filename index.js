var randomNumber1=Math.random() * 6 + 1;
randomNumber1=Math.floor(randomNumber1);
var randomNumber2=Math.random() * 6 + 1;
randomNumber2=Math.floor(randomNumber2);



document.lastElementChild.querySelector("div .dice .img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.lastElementChild.querySelector("div .dice .img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
{
    document.lastElementChild.querySelector("h1").innerHTML="&#128681 Player 1 wins";
}
else if(randomNumber2>randomNumber1)
{
    document.lastElementChild.querySelector("h1").innerHTML="Player 2 wins &#128681";
}
else{
    document.lastElementChild.querySelector("h1").innerHTML="Draw!";
}
