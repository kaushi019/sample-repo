var n,c=0;
var numbers=[];
for(let i=0;i<90;i++)
  numbers[i]=i+1;
function numgenerator(){
    //n = Math.floor((Math.random() * 90) + 1);
    n = numbers[Math.floor(Math.random() * numbers.length)];
    if(numbers.includes(n)){
      document.getElementById("numdis").innerHTML=n;
      var index = numbers.indexOf(n);
      numbers.splice(index, 1);
      boardnum(n);
      c++;
    }
    if(c==90){
      alert("Game is Completed !!")
      alert("Press Clear Board, to start a New Game")
    }
}
function boardnum(n){
    var m = "n"+ n;
    var string = getRandomColor()
    document.getElementById(m).style.backgroundColor=string;
}

function clearboard(){
  document.getElementById("numdis").innerHTML="";
  for(let i=0;i<90;i++){
    numbers[i]=i+1;
    var x = "n" + numbers[i];
    document.getElementById(x).style.backgroundColor="white";
  }
  c=0;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }