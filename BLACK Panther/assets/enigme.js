const answer = document.getElementById('reponse')
function repondre(reponse){
    if (reponse) {
        let currentEnigme = window.location.pathname.split('_')[1].split('.')[0];
        let nextEnigme = parseInt(currentEnigme)+ 1;
    
        window.location.href = "enigme_1." + nextEnigme + ".html";
    } else {
        alert("Désole,vous avez echoué!"); 
    } 
}