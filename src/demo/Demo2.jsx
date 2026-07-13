
export const Demo2 = ({ firstname, havePet, type,name, imgUrl}) => {
    if (!havePet) {
        return (
            <div>
            <h2 className="text-xl bg-amber-500 text-amber-200"> Demo2 - Affichage conditionnel </h2>
            <p> Bonjour {firstname}, nous sommes désolés d'apprendre que vous n'avez pas de compagnon poilu .</p>
            <a className="text-xl text-blue-400" href="https://www.veeweyde.be"> Cliquez ici pour en adopter un ! </a>
            </div>
        )
    }
    
    return (
        <div>
        <h2 className="text-xl bg-amber-500 text-amber-200"> Demo2 - Affichage conditionnel </h2>
        <p> Bonjour {firstname}, merci de nous présenter votre compagnon .</p>
        
        {/*  fonction avec condition => TERNAIRE  */}
        {
            (type === 'cat') ?
            <span>🐈</span> :
            <span>🐕‍🦺</span>
        }
        {/*  valeur non null ou non undefinded SINON autre chose  */}
        <p> Nom : { name ?? 'Inconu'} </p>
        
        {/*  afficher uniquement si ça existe  */}
        {
            imgUrl && <img className= "w-24" src ={imgUrl} alt={" photo de" + name} />
        }
        
        </div>
    )
}


