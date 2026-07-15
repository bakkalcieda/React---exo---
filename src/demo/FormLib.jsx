// Il existe plusieurs librairies pour la gestion de formulaires pour react. Aucune n'est officielle mais la plus utilisée est react-hook-form
// Lien doc : https://react-hook-form.com/
// Pour l'installer dans le projet : npm i react-hook-form

import { useState } from "react";
import { useForm } from "react-hook-form"

export const FormLib = () => {

    // Cette librairie nous donnes accès à une nouvelle hook useForm() qui nous donne accès à plusieurs propriétés et méthodes
    //? - 1) register('nomChamp')
    // Permet d'enregistrer un champs pour obtenir sa valeur au submit
    //? - 2) handleSubmit(callbackSuccess, callbackFail)
    // Méthode qui fait déjà le preventDefault et qui récupère toutes les données du formulaire pour les mettre dans un objet. Elle prend en premier paramètre la fonction à exécuter en cas de formulaire valide et en deuxième, la fonction à exécuter en cas de formulaire invalide
    //? - 3) On peut rajouter au register, des validateurs (validators)
    // Ca se rajoute en 2ème paramètre du register sous forme d'objet 
    // register('nomChamp', { /* validateurs */ })
    //? - 4) Afficher les erreurs grâce à formState
    // On récupère de formState un objet errors qui contient les éventuelles erreurs du formulaire

    const { register, handleSubmit, formState : { errors }  } = useForm({
        // Pour définir les valeurs de départ de votre formulaire
        defaultValues : 
        {
            nbBeer : null,
            typeBeer : '',
            isLegal : false
        },
        // Pour définir comment la détection d'erreurs se fait. Par défaut c'est onSubmit donc il faudra soumettre le formulaire au moins une première fois pour voir nos messages d'erreur. Si on met onChange les messages vont se déclencher chaque fois qu'on modifie le champs
        mode : 'onChange'    
    });

    const [message, setMessage] = useState("");

    const commandBeer = (data) => {
        // data est un objet qui contient toutes les données du formulaire (par convention il s'appelle data mais vous pouvez l'appeler patate, ça marcherait aussi)
        if(data.isLegal) {
            setMessage(`Voici vos ${data.nbBeer} bières ${data.typeBeer}`)
        }
        else {
            setMessage(`HEP HEP HEP, t'as trop cru toi !`)
        }
    }

    return (
        <div className="chapter">
            <h2 className="text-xl bg-rose-400 text-gray-700 px-3 py-2">
                Demo 5 - Les formulaires → Formulaire avec librairie
            </h2>

            <div className="flex gap-6 h-80 py-4">
                <form
                    className="w-1/3 flex flex-col gap-4 bg-white p-4 border border-rose-200"
                    onSubmit={ handleSubmit(commandBeer) }
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nbLib">Combien de bières voulez-vous ?</label>
                        <input
                            className="bg-white p-1 border border-gray-300"
                            id="nbLib"
                            type="number"
                            placeholder="42"
                            { ...register('nbBeer', 
                                { 
                                    valueAsNumber : true, /* pour convertir en nombre à la fin */
                                    required : true, /* si champs requis */
                                    min : 1,
                                    max : 50
                                })}
                        />
                        { errors['nbBeer']?.type === 'required' &&
                            <span className="text-red-800 text-sm">Ce champs est requis</span> }

                        { errors['nbBeer']?.type === 'min' &&
                            <span className="text-red-800 text-sm">Il faut commander au moins 1 bière</span> }

                        { errors['nbBeer']?.type === 'max' &&
                            <span className="text-red-800 text-sm">Ça fait beaucoup là non ?</span> }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="typeLib">Quelle bière voulez-vous ?</label>
                        <select
                            className="bg-white p-1 border border-gray-300"
                            id="typeLib"
                            {... register('typeBeer', 
                                {
                                    required : true
                                }
                            )}
                        >
                            <option value="">Choisissez un type</option>
                            <option value="blonde">Blonde</option>
                            <option value="brune">Brune</option>
                            <option value="ipa">IPA</option>
                        </select>
                        { errors['typeBeer']?.type === 'required' &&
                            <span className="text-red-800 text-sm">Ce champs est requis</span> }
                    </div>

                    <div className="flex gap-2">
                        <input
                            id="confirmLib"
                            type="checkbox"
                            { ...register('isLegal')} 
                        />
                        <label htmlFor="confirmLib">Je confirme avoir 18 ans ou plus</label>
                    </div>

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