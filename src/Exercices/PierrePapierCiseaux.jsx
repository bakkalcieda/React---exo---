import { useState } from 'react';
function PierrePapierCiseaux () {
const [ resulat,setResulat] = useState ("");

const choix = ['Pierre','Feuille','Ciseaux'];

const bat = {
    Pierre :"Ciseaux",
    Feuille :"Pierre",
    Ciseaux : "Feuille"
};
function jouer (choixJoueur) {
    const choixOrdi = choix [Math.floor(Math.random()* 3)];

    const issue = choixJoueur === choixOrdi
    ? "Egalitéé !!"
    : bat [choixJoueur] === choixOrdi
    ? "T'as gagnééé yess !"
    : "Tuyas perduu loooser ";
        setResulat (`Toi : ${choixJoueur} | Ordi : ${choixOrdi} -> ${issue} `);
}
return (
    <div style={{ textAlign: "center", marginTop: "20px", marginBottom :"20px"}}>
        {/* <h2> Pierre -Papier -Ciseaux</h2> */}
        <button  className='cursor-pointer' onClick={() => jouer("Pierre")}> Pierre 🪨</button>
        <button className = 'cursor-pointer' onClick={() => jouer("Papier")}> Papier 🗒️</button>
        <button  className = 'cursor-pointer'onClick={() => jouer("Ciseaux")}> Ciseaux ✂️</button>
        <p> {resulat}</p>
    </div>
)
}
export default PierrePapierCiseaux;