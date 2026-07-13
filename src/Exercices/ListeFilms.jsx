import { Film } from "./Film"


export const ListeFilms = () => {

    const films = [
        {
            id : 1 , 
            nom :"VeryBadTrip", 
            affiche : "https://th.bing.com/th/id/OIP.E9NwNlO0qblRE0cBuhzZLwAAAA?w=207&h=295&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3", 
            synopsis : "Dans Very Bad Trip, les amis de Doug, un homme qui se prépare à se marier, se retrouvent dans une situation désespérée après une nuit à Las Vegas. Ils se réveillent sans se souvenir de la veille et doivent faire face à des problèmes comme un tigre dans la salle de bains et un bébé caché dans un placard. Le film suit alors leur quête pour retrouver Doug et comprendre ce qu'ils ont fait la veille.",
            genres : ["Action","comédie"],
            favoris : true
        },
        {
            id : 2,
            nom : 'Titanic',
            affiche : 'https://th.bing.com/th/id/R.b680175d2d0f876f3e09f536b66f8ff3?rik=tqOuszpkV2uy3A&pid=ImgRaw&r=0',
            synopsis : "Le film Titanic raconte l histoire fictive de deux jeunes passagers du paquebot Titanic en avril 1912. L'une, Rose, est une passagère de première classe qui tente de se suicider pour se libérer des contraintes imposées par son entourage, et le second, Jack, un artiste pauvre, est embarqué à la dernière minute en troisième classe pour retourner aux États-Unis. Ils se rencontrent par hasard lors de la tentative de suicide de Rose et vivent une histoire d'amour vite troublée par le naufrage du navire.",
            genres : [ 'Drame', 'Roamnce'],
            favoris : false
        },
        {
            id : 3,
            nom : 'Interstellar',
            affiche : 'https://th.bing.com/th/id/OIP.uiaj_IMaC7h3NoieAhcmVwHaLG?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            // synopsis : "Dans un futur dystopique, une équipe d'astronautes explore un trou de ver pour trouver un nouveau foyer pour l'humanité. Cooper, ancien pilote de la NASA, doit choisir entre rester avec sa famille ou rejoindre une mission risquée pour sauver la race humaine",
            genres  : ['Science-fiction', 'Aventure'],
            favoris : true
        }
    ]

    return (
        <div className="flex gap-8 flex-wrap justify-center">
            {
            films.map(
                (film) => (
                <Film
                key={film.id}
                nom = {film.nom}
                affiche = {film.affiche}
                synopsis={film.synopsis}
                genres = { film.genres}
                favoris={film.favoris}
                />
            )
            )}
        </div>
    )


}