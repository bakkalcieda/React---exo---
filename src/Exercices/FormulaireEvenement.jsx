import { useState } from "react";
import { useForm } from "react-hook-form"

export const FormulaireEvenement = () => {

    const { register, handleSubmit, watch,
    formState : { errors} } = useForm ({
        defaultValues : {
            nom :'',
            prenom :'',
            email :'',
            tel:'',
            nbAccompagnants :'',
            regime:'',
            hasAllergies:'',
            allergies:''
        },
        mode: 'onChange'
    }
);

const [recap,setRecap] = useState(null);
// const [hasAllergies,setHasAllergies] = useState(false);

const onSubmit = (data) => {
    setRecap(data);
}

return (
<div className="chapter"> 
    <h2 className="text-xl bg-blue-300 text-gray-700 px-160 py-2"> Exooo 4- Formulaire pariticipation à un événement</h2>
<div className="flex gap-6  py-4">
    <form className="w-1/2 flex flex-col gap-4 bg-white p-4 border border-rose-200" onSubmit={handleSubmit(onSubmit)}> 
{/* ___________________________________________________________ */}

                    {/* ---- NOM ---- */}
{/*___________________________________________________________  */}
    <div className="">
        <label htmlFor="nom">Nom</label>
        <input 
            id="nom"
            className="bg-white p-1 border border-gray-300" {...register('nom', {
                required : 'Le nom est requis',
                maxLength : { value : 100,
                    message :'100 caractères maxxximum'
                    // ou bien faire avec min : 1 max :100//
                }
            }
            )
            }
        />
        {errors.nom && <p className=" text-red-500 text-sm">{errors.nom.message}</p> }
    </div>
{/* ___________________________________________________________ */}

                     {/* PRENOOM */}
{/* ___________________________________________________________ */}

    <div className="">
        <label htmlFor="prenom">Prénom</label>
        <input 
            id="prenom"
            className="bg-white p-1 border border-gray-300" 
            {...register('prenom', 
                {
                required : 'Le prénom est requis',
                maxLength : { value : 100,
                    message :'100 caractères maxxximum'
                    // ou bien faire avec min : 1 max :100//
                }
            }
            )
            }
        />
        {errors.prenom && <p className=" text-red-500 text-sm">{errors.prenom.message}</p> }
    </div>
{/* _____________________________________________________________ */}

                            {/* EMAIL */}
{/* ______________________________________________________________ */}
<div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="bg-white p-1 border border-gray-300"
                            {...register('email', {
                                required: 'L\'email est requis!',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Format d\'email invalide'
                                }
                            }
                        )
                    }
                        />
                        {errors.email && <p className="text-red-500 text-sm">
                            {errors.email.message}</p>}
                    </div>
{/* ___________________________________________________________ */}

                        {/* TELEPHOONE */}
{/*___________________________________________________________  */}
<div className=" flex flex-col gap-1">
    <label htmlFor="tel"> Téléphone </label>
    <input 
            id=" tel"
            className="bg-white p-1 border border-gray-300"
            {...register ('tel')}
    />
</div>
{/* _________________________________________________________ */}

            {/* NOMBRE D'ACCOMPAGNANTS */}
{/*____________________________________________________________  */}

<div className=" flex flex-col gap-1">
    <label htmlFor="nbAccompagnants"> Nombre d'accompagnants</label>
    <input 
            id="nbAccompagnants"
            type="number"
            className="bg-white p-1 border border-gray-300"
            {... register('nbAccompagnants', {
                valueAsNumber : true,
                min : { 
                    value : 0 ,
                    message : 'Minimum 0 accompagnant'
                },
                max : {
                    value : 5,
                    message : 'Maximum 5 accompagnantss'
                }
            })
            }
    />
{errors.nbAccompagnants && <p className="text-red-500 text-sm">
    {errors.nbAccompagnants.message}
</p>
}
</div>

{/* ______________________________________________________________ */}

                    {/* REGIME ALIMENTAIRES */}
{/* ______________________________________________________________ */}
<div>
    <label htmlFor="regime"> Régime alimentaire </label>
    <select 
        id="regime"
        className="bg-white p-1 border border-gray-300"
        {...register('regime',{
            required : 'Le régime alimentaire est requis !'
        }
        )
        }
        >
    <option value="">-- Séléctionnez--</option>
    <option value="Standard">Standard</option>
    <option value="Végétarien">Végétarien</option>
    <option value="Vegan"> Vegan</option>
    <option value="Sans gluten"> Sans gluten</option>
    </select>
        {errors.regime && <p className="text-red-500 text-sm"> 
            {errors.regime.message}
            </p>
        }
</div>

{/* _____________________________________________ */}

                {/* CHECKBOXX ALERGIE */}
{/* ____________________________________________ */}
    
<div className="flex items-center gap-2">
                <input
                        id="hasAllergies"
                        type="checkbox"
                    {...register('hasAllergies', 
                        // {
                        //         onChange: (e) => setHasAllergies(e.target.checked)
                        //     }
                        )
                    }
                        />
                    <label htmlFor="hasAllergies"> Présence d'alléergie</label>
</div>
{/* ALERGIE champ / liste */}
{watch('hasAllergies') && (
    <div className=" flex flex-col gap-1">
        <label htmlFor="allergies"> Liste des allergies</label>
        <input 
                id="allergies"
                className="bg-white p-1 border border-gray-300"
                {...register('allergies', {
                    validate :(value) => {
                        if
                            (watch('hasAllergies') && !value.trim()) {
                                return(
                                'Vous avez ooublié de mettre la liste de vos allergies'
                                );
                            }
                                return (
                                        true
                                );
                    }
                }
                ) 
                }
                />
                    {errors.allergies && 
                    <p className="text-red-500 text-sm">
                        {errors.allergies.message}
                    </p>
                    }
    </div>
)}
<button type="submit" className=" bg-rose-300 text-white py-2 px-4 mt-2 hover:bg-rose-400"> Valider la réservation </button>
    </form>

</div>

</div>
)

}