var n;
var numbers=[];
function numgenerator(){
    n = Math.floor((Math.random() * 90) + 1);
    if(!numbers.includes(n)){
        numbers.push(n);
        document.getElementById("numdis").innerHTML=n;
        boardnum(n);
    }
}
function boardnum(n){
    var m = "n"+ n;
    document.getElementById(m).style.backgroundColor="green";
}