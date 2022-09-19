import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'

import { useForm } from "../../hook/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";


export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const { q = '' } = queryString.parse( location.search ) //separa cada parte del query y me lo devuelve obj.. siempre me va a devolver un string

  const hero = getHeroesByName( q )

  const showSearch = (q.length === 0) //esta condicion regresa un true o un false
  const showError =  (q.length > 0) && hero.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    
    navigate(`?q=${ searchText }`)
  }

  return (
    <>

      <div className="row mt-5">
      
      <div className="col-5">
        
       
        <form onSubmit={onSearchSubmit}>
          <input 
            type="text"
            placeholder="search a hero"
            className="form-control"
            name='searchText'
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button className="btn btn-outline-info mt-2">
            Search
          </button>

        </form>

      </div>
      
      <div className="col-7">
        <div className="alert alert-primary animate__animated animate__fadeIn" 
             style={{ display: showSearch ? '' : 'none'}}   
        >
          Search a hero
        </div>

        <div 
          className="alert alert-danger animate__animated animate__fadeIn" 
          style={{ display: showError ? '' : 'none'}}
        >
         <b>{q}</b>  <b> not found</b>
        </div>
        
        {
          hero.map( hero => (
            <HeroCard key={hero.id} {...hero}/>
            ))
        }
       

      </div>



      </div>
    
    </>
  )
}
