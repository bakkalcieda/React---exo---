import { useState } from "react"

export const IntroForm2 = () => {

    // Pour gérer un formulaire, on doit relier un champs du formulaire avec une valeur de state
    // Option 2 : Faire un state pour tout le formulaire
    const [beerForm, setBeerForm] = useState(
        { 
            nbBeer : null,
            typeBeer : '',
            isLegal : false
        }
    )
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        // Si mon champs modifié n'est pas une checkbox, c'est le value qu'on va récupérer
        if(event.target.type !== 'checkbox') {

            // On appelle la méthode qui modifie notre state en fournissant un objet, composé de l'ancien objet beerForm (...beerForm) mais avec LA modification qu'on veut faire
            setBeerForm( {
                ...beerForm,
                [event.target.name] : event.target.value
            } )
        }
        // Sinon c'est le checked
        else {
           setBeerForm( {
                ...beerForm,
                [event.target.name] : event.target.checked
            } )
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Si toutes les données du formulaire sont bien remplies 
        if(!beerForm.typeBeer || !beerForm.nbBeer || beerForm.nbBeer < 1) {
            setMessage('Veuillez remplir CORRECTEMENT le formulaire !')
        }
        // Si la personne est majeure, on lui affiche ses bières
        else if(beerForm.isLegal) {
            setMessage(`Voici vos ${beerForm.nbBeer} ${beerForm.typeBeer} !`);
        }

        // Sinon, on lui affiche un message d'erreur
        else {
            setMessage('HEP HEP HEP ! T\'as trop cru toi.')
        }
    }

    return (
        <div className="chapter">
            <h2 className="text-xl bg-rose-400 text-gray-700 px-3 py-2">
                Demo 5 - Les formulaire → Introduction aux formulaires
            </h2>

            <div className="flex gap-6 h-80 py-4">
                <form
                    className="w-1/3 flex flex-col gap-4 bg-white p-4 border border-rose-200"
                    onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nb2">Combien de bières voulez-vous ?</label>
                        <input
                            className="bg-white p-1 border border-gray-300"
                            id="nb2"
                            type="number"
                            placeholder="42"
                            value={beerForm.nbBeer}
                            name="nbBeer"
                            onChange={ handleChange }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="type2">Quelle bière voulez-vous ?</label>
                        <select
                            className="bg-white p-1 border border-gray-300"
                            id="type2"
                            value={beerForm.typeBeer}
                            name="typeBeer"
                            onChange={ handleChange }
                        >
                            <option value="">Choisissez un type</option>
                            <option value="blonde">Blonde</option>
                            <option value="brune">Brune</option>
                            <option value="ipa">IPA</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <input
                            id="confirm2"
                            type="checkbox"
                            checked={beerForm.isLegal}
                            name="isLegal"
                            onChange={ handleChange }
                        />
                        <label htmlFor="confirm2">Je confirme avoir 18 ans ou plus</label>
                    </div>

                    {/* Rappel : Un button placé dans une balise form est d'office type submit si rien précisé */}
                    <button className="bg-rose-200 hover:bg-rose-300 text-gray-700 py-2">
                        Commander
                    </button>
                </form>

                <div className="w-2/3 h-full bg-rose-100 flex justify-center items-center border border-rose-200">
                    <p className="text-gray-700 text-lg">{message}</p>
                </div>
            </div>
        </div>
    )
}