/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

tools:
-arrey
-for
-let/const
-``
-${}
-
*/

//Mileston 0: arrey con i membri del team come oggetti
const members_of_team = [
    //Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    //Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    //Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    //Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    //Scott Estrada	Developer	scott-estrada-developer.jpg
    {
        nome: 'Scott',
        ruolo: 'Estrada	Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    //Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];
//console.log(members_of_team[0]);

const member_row_ele = document.querySelector('#team .row');

//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < members_of_team.length; i++) {
    //console.log(members_of_team[i]);
    const member = members_of_team[i]
    //console.log(member);

    const member_markup = `
    <div class="col">
        <div class="card">
            <img class="card-img-top" src="${member.foto}" alt="">
            <div class="card-body">
                <h3>${member.nome}</h3>
                <p>${member.ruolo}</p>
            </div>
        </div>
    </div>
    
    `
    // inserisci i nostri membri prima che la row chiude
    member_row_ele.insertAdjacentHTML('beforeend', member_markup);

}

//let string_img = 'wayne-barnett-founder-ceo.jpg';
//let img_element = document.createElement('img');
//img_element.src = string_img
//document.querySelector(".immagine").appendChild(img_element);


/* 
-ciclo for per prendere un sigolo elemento
-insertadjacent se voglio prendere una singola card o una singola cosa
-
*/