
    let motAtrouvrer = "bonjour"
    motAtrouvrer = motAtrouvrer;
    let tab1 = motAtrouvrer.split('');
    let tab2 = [];//tableau des lettres entrées 
    for(let lettre of motAtrouvrer){
        tab2.push('*'); 
    }
    let i = 0; //compteur de fautes 

    const guessLetter = () => {
        let lettre = prompt("esseyez une lettre");
        if(tab2.includes(lettre)){
            alert ("vous avez déjà entré cette lettre et vous avez raté " +i+ " fois");
            guessLetter();
        }
        else if(tab1.includes(lettre)){
       
            let ind = tab1.indexOf(lettre);
              while (ind != -1){
                tab2.splice(ind, 1 , lettre);
                ind= tab1.indexOf(lettre, ind + 1); 
              }
             console.log(tab2)
             if (tab1.join('') === tab2.join('')) {
                alert('félicitation vous avez trouvé le mot');
            }
             guessLetter();
        }
        else  {
            i=i+1;
            alert("mauvaise lettre , vous avez raté " +i+ " fois");
            guessLetter();
        } 
    }
    guessLetter();
    console.log(tab1);
   
  



    


        
