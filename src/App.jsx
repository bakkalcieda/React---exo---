import { Demo1 } from "./demo/Demo1"
import { Demo2 } from "./demo/Demo2"
import { Demo3 } from "./demo/Demo3"
import { ListeFilms } from "./Exercices/ListeFilms"
import { CompteurNul } from "./Exercices/CompteurNul"
import  DayNight from "./Exercices/DayNight"
import PierrePapierCiseaux from "./Exercices/PierrePapierCiseaux"
import { IntroForm } from "./demo/IntroForm"
import { IntroForm2 } from "./demo/IntroForm2"
import { FormLib } from "./demo/FormLib"
import { FormulaireEvenement } from "./Exercices/FormulaireEvenement"

function App() {
  
  return (
    <>
    <h1 className="text-3xl font-semibold text-amber-50 bg-amber-700" > Démo REACT </h1> 
    <Demo1  prenom ="Eda" nom="Bakkalci" age ={27}/>
    <Demo1 prenom = "Aude "/>
    <Demo2 firstname = "Eda" havePet ={true} type ='dog'  name ='Vulpa'/>
    <Demo2 firstname = "Thierry" havePet = {false}/>
    <Demo2 firstname = "Aude" havePet ={true} type ='cat'  name ='Soup' imgUrl="/soup.jpg"/>
    <Demo2 firstname = "Mére Michelle " havePet ={true} type ='cat' />
    <Demo3 firstname="Didier" hobbies = {['Pétanque','Le fooot','le pastis','les soirées']} />
    <CompteurNul />
    <h1 className="text-2xl font-ibold text-amber-100 bg-amber-600 justify-center flex gap-4 mb-6">Exercice JOUR et NUIT</h1>
    <DayNight/>
    <h1 className="text-2xl font-ibold text-amber-100 bg-amber-600 justify-center flex gap-4 mb-6"> Exercice  Pierre/Papier/Ciseaux</h1>
    <PierrePapierCiseaux/>
    <h1 className="text-2xl font-ibold text-amber-100 bg-amber-600 justify-center flex gap-4 mb-6"> Ma collection de films </h1>
    <ListeFilms />
    <IntroForm />
    <IntroForm2 />
    <FormLib />
    <FormulaireEvenement/>
    </>

  )
}

export default App