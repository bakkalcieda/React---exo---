import { useState } from "react"

export const IntroForm = () => {

    // Pour gérer un formulaire, on doit relier un champs du formulaire avec une valeur de state
    // Option 1 : Faire un state par champs
    const [nbBeer, setNbBeer] = useState();
    const [typeBeer, setTypeBeer] = useState('');
    const [isLegal, setIsLegal] = useState(false);

    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Si toutes les données du formulaire sont bien remplies 
        if(!typeBeer || !nbBeer || nbBeer < 1) {
            setMessage('Veuillez remplir CORRECTEMENT le formulaire !')
        }
        // Si la personne est majeure, on lui affiche ses bières
        else if(isLegal) {
            setMessage(`Voici vos ${nbBeer} ${typeBeer} !`);
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
                        <label htmlFor="nb">Combien de bières voulez-vous ?</label>
                        <input
                            className="bg-white p-1 border border-gray-300"
                            id="nb"
                            type="number"
                            placeholder="42"
                            value={nbBeer}
                            onChange={(event) => { setNbBeer(event.target.value) }}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="type">Quelle bière voulez-vous ?</label>
                        <select
                            className="bg-white p-1 border border-gray-300"
                            id="type"
                            value={typeBeer}
                            onChange={(event) => { setTypeBeer(event.target.value) }}
                        >
                            <option value="">Choisissez un type</option>
                            <option value="blonde">Blonde</option>
                            <option value="brune">Brune</option>
                            <option value="ipa">IPA</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <input
                            id="confirm"
                            type="checkbox"
                            value={isLegal}
                            onChange={(event) => { setIsLegal(event.target.checked) }}
                        />
                        <label htmlFor="confirm">Je confirme avoir 18 ans ou plus</label>
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