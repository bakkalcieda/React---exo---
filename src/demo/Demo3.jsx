export const Demo3 = ({ firstname, hobbies }) => {
    return (
        <div className="chapter">
            <h2 className="text-xl bg-amber-500 text-amber-100">
                Demo3 - Affichage de collection
            </h2>
            <p> Voici les hobbies de {firstname} : </p>
            <ul className="list-round px-8">
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}