
export const Demo1 = ({ prenom,nom = 'Beurivé', age}) => {


    return (
        <div> 
            <h2 className="text-xl bg-amber-600 text-amber-100"> Démo 1 - Premier composant </h2>

        <h3> Bienvenu { prenom } {nom}, vous avez {age} ans</h3>



        </div>
    )

}