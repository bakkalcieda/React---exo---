export const Film = ({ nom, affiche, synopsis, genres, favoris }) => {
    return (
        <div className="relative w-64 border rounded-lg p-2 shadow-md">
            {favoris && (
                <span className="absolute top-2 right-2 text-red-500 text-2xl">
                    ❤️
                </span>
            )}
            <img className="w-full h-80 object-cover rounded" src={affiche} alt={nom} />
            <h2 className="text-xl font-bold mt-2">{nom}</h2>
            {
            synopsis && 
            <p className="text-sm text-gray-600"> {synopsis} </p>
            }
            <ul className="flex gap-2 flex-wrap">
                {
                genres.map(
                    (genre, index) => (
                    <li key={index} className="bg-gray-200 px-2 py-1 rounded text-xs">
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    )
}