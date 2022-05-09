document.getElementById('name').addEventListener('input', onInput);
document.getElementById('age').addEventListener('input', onInput);
const dict = new Map();


function onInput(){
    let estimation = document.getElementById("estimation");

    let prenom = document.getElementById('name').value.toLowerCase()
        .replace("é","e").replace("è","e").replace("à","a");

    let age = document.getElementById('age').value;

    let prix = "" + 0;

    if(prenom == "eden")
        prix = "∞";
    else if(prenom == "remy")
        prix = "-250000";
    else if(prenom == "yanis")
        prix = "210";
    else if(prenom == "eric")
        prix = "-450000";
    else{
        if(dict.has(prenom + age)){
            prix = dict.get(prenom + age);
        }
        else{
            let rand = Math.round(Math.random() * 1000000)/100.0;
            dict.set(prenom + age, rand);
            prix = rand;
        }
    }

    estimation.innerHTML = "Estimation : " + prix + " €";
}