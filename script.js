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
        prix = "9620014475520";
    else if(prenom == "remy")
        prix = "-25000";
    else if(prenom == "yanis")
        prix = "2100000";
        else if(prenom == "raouf")
        prix = "78000000";
    else if(prenom == "eric")
        prix = "-850000";
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