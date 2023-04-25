function toFCFA(){
    var amount=prompt("Enter amount in USD");
    if(amount==""){
        alert("You have not entered any amount!");
    }
    else{
        var usd=parseInt(amount);
        var FCFA=550;
        var ex=usd*FCFA;
        alert("the amount in FCFA is "+ex);
    }
}

function todollar(){
    var amount=prompt("Enter amount in FCFA");
    if(amount==""){
        alert("you have not entered any amount!");
    }
    else{
        var usd=parseInt(amount);
        var FCFA=550;
        var ex=usd/FCFA;
        alert("the amount is USD is "+ex);
    }
}