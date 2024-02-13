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
    console.log(teamMembers[i].nome);
    console.log(teamMembers[i].ruolo);
    console.log(teamMembers[i].foto);



}


//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
// per stampare tutte le prorpietà del'oggetto
const listElement = document.querySelector("ul");

for(let i = 0; i < teamMembers.length; i++){
    const newObject = teamMembers[i];

    let newText = "";

    for( let key in newObject){
        /* console.log(newObject[key]); */
        /* console.log(key + ": " + newObject[key]); */
       /*  console.log(`${key}: ${newObject[key]} `) */
       newText += `${key}: ${newObject[key]} `
       console.log(newText);
    }
    listElement.innerHTML += `<li>${newText}</li>`;
}