/* 
ESERCIZIO:
Utilizzando i dati forniti:
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: 
"nome", "ruolo" e "foto".

Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
Angela Lopez	 Social Media Manager 	 angela-lopez-social-media-manager.jpg
Scott Estrada	 Developer	             scott-estrada-developer.jpg
Barbara Ramos	 Graphic Designer	     barbara-ramos-graphic-designer.jpg


 */
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg",
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "walter-gordon-office-manager.jpg",
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg",
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "scott-estrada-developer.jpg",
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer	",
        foto : "barbara-ramos-graphic-designer.jpg",
    },

]
console.log(teamMembers);

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.


for(let i = 0; i < teamMembers.length; i++){

   /*  console.log(teamMembers[i].nome);
    console.log(teamMembers[i].ruolo);
    console.log(teamMembers[i].foto); */
    /* 
    const actualMember = teamMembers[i]
    console.log(acqtualMember.nome)
    console.log(acqtualMember.ruolo)
    console.log(acqtualMember.foto)
    */


}   


//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
// per stampare tutte le prorpietà del'oggetto
/* const memberElement = document.querySelector("#member");

for(let i = 0; i < teamMembers.length; i++){
    //apro una lista in pagina
    const listElement = document.createElement("ul");
    const newObject = teamMembers[i];
   
    for( let key in newObject){
       console.log(`${key}: ${newObject[key]} `);
       //memberElement.innerHTML += `<li>${key}: ${newObject[key]}</li>`;
       const listItemsElement = document.createElement("li");
       listItemsElement.innerText +=`${key}: ${newObject[key]}`
       listElement.append(listItemsElement);
    }
    console.log(listElement);
  
    //aggiungo gli elementi alla lista
    memberElement.append(listElement);
} */

//BONUS 1:
//Trasformare la stringa foto in una immagine effettiva
    // se la key è la foto ci aggiungo un elemento <img> in pagina
   // const listItemElement = document.createElement("li");
   const memberElement = document.querySelector("#member");

   for(let i = 0; i < teamMembers.length; i++){
       //apro una lista in pagina
       const listElement = document.createElement("ul");
       const newObject = teamMembers[i];
      
       for( let key in newObject){

           const listItemsElement = document.createElement("li");

            if(key != 'foto'){
                listItemsElement.innerText +=`${key}: ${newObject[key]}`
                
            }else{
                //crearmi elemento img
                const listImageElement = document.createElement("img");
                //console.log(listImageElement)
                listImageElement.src = "./img/" +newObject.foto;
                listImageElement.alt = "immagine membro";
                listItemsElement.append(listImageElement);;
            } 
            
            listElement.append(listItemsElement);
       }
       console.log(listElement);
     
       //aggiungo gli elementi alla lista
       memberElement.append(listElement);
   }
/*     if (key != 'foto'){
        listItemElement.innerHTML = `${key}: ${newObject[key]} `;
       // listItemElement.append(listElement);
    } else{
        const listImageElement = document.createElement("img");
        //specifico il percordo relativo partendo dal file index.html
        listImageElement.src = "./img" + newObject.foto;
        //imposto l'attributom tag
        listImageElement.alt = "immagine membro";
        listItemElement.append(listImageElement);
    }
    listElement.append(listImageElement); */

//BONUS 2:
//Organizzare i singoli membri in card/schede
