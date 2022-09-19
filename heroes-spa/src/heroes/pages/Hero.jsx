import { useMemo } from "react";
import { useNavigate,Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";


export const Hero = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  //el callback de usememo se va a disparar cada vez que las dependencias cambien, en este caso el id va a cambiar y por lo tanbto me va a traer el nuevo heroe. ¡¡el useMemo recuerda valores!!
  const hero =useMemo( () => getHeroById( id ), [id]) 


  
  
  const onNavigateBack = () => {
    navigate(-1)    
  }
  
  
  if (!hero) {
    return <Navigate to='/marvel' />
  }

   

  return (
    <div className="row mt-5">
      
      <div className="col-4 animate__animated animate__fadeInLeft" >
        <img 
          src={` /assets/heroes/${ id }.jpg`} 
          alt={ hero.superhero} 
          className="img-thumbnail" />
      </div>
      
      
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance}</li>
        </ul>
        <h5 className="mt-5"> Characters </h5>
        <p>{hero.characters}</p>

        <button 
          className="btn btn-outline-primary mt-3"
          onClick={ onNavigateBack }
        >
          Back
        </button>

      </div>




    </div>
  )
}
