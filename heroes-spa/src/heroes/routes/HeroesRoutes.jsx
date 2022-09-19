import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage } from "../pages/DcPage"
import { Hero  } from "../pages/Hero"
import { MarvelPage } from "../pages/MarvelPage"
import { Search } from "../pages/Search"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={ <MarvelPage />}/>
                <Route path="dc" element={ <DcPage />}/>
                
                <Route path="search" element={ <Search />}/> //que aparezca en el navbar
                <Route path="hero/:id" element={ <Hero />}/>
                
            
                
                {/*en caso de una ruta erronea me dirijo a la page marvel */}
                <Route path="/" element={ <Navigate to="/marvel" />} />


            </Routes>
        </div>

    
    
    </>
  )
}
