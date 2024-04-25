var formulaire = document.getElementById('contact');
formulaire.addEventListener('submit',function(event){
    event.preventDefault();
    alert("Opération effectuée");
    formulaire.reset();
});

document.querySelector('.scroll-left').addEventListener(
    'click',function(){document.querySelector('.gallery').scrollBy({
left: -100,
behavior:'instant'
    });
});

document.querySelector('.scroll-right').addEventListener(
    'click',function(){document.querySelector('.gallery').scrollBy({
left: 100,
behavior:'instant'
    });
});
