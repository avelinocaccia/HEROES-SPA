import { useMemo } from "react"
import { getHeroByPublisher } from "../helpers/getHeroByPublisher"
import { HeroCard } from "./HeroCard"


export const HeroList = ({ publisher }) => {
    
  //se usa el customHook useMemo, porque en caso de que algo cambie en el componente padre de HeroList, eso haria que la funcion getHeroByPublisher se vuelva a ejecutar nuevamente sin este requerir ningun cambio  
  const heroes =useMemo( ()=> getHeroByPublisher( publisher ), [publisher]) 
    
  return (
      <>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
          {
            heroes.map( (heroe) => {
              return(
                <HeroCard 
                  key={heroe.id}
                  {...heroe}
                /> 
              ) 
            })
          }
        </div>
      </>
  )
}




















//  const heroes = [
//     {
//         'id': 'dc-batman',
//         'superhero':'Batman', 
//         'publisher':'DC Comics', 
//         'alter_ego':'Bruce Wayne',
//         'first_appearance':'Detective Comics #27',
//         'characters':'Bruce Wayne'
//     },
//     {
//         'id': 'dc-superman',
//         'superhero':'Superman', 
//         'publisher':'DC Comics', 
//         'alter_ego':'Kal-El',
//         'first_appearance':'Action Comics #1',
//         'characters':'Kal-El'
//     },
//     {
//         'id': 'dc-flash',
//         'superhero':'Flash', 
//         'publisher':'DC Comics', 
//         'alter_ego':'Jay Garrick',
//         'first_appearance':'Flash Comics #1',
//         'characters':'Jay Garrick, Barry Allen, Wally West, Bart Allen'
//     },
//     {
//         'id': 'dc-green',
//         'superhero':'Green Lantern', 
//         'publisher':'DC Comics', 
//         'alter_ego':'Alan Scott',
//         'first_appearance':'All-American Comics #16',
//         'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
//     }
//   ]