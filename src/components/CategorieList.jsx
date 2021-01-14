//import react from "react";
import data from "../json/categories.json";
import { Link} from 'react-router-dom';



const CategorieList = () => {
  return(
    <div className="categorie-list-container">
    <h1>Let's Play</h1>
    <div className="main-container">
        {data.categories.map((item, index) => (
          
        <div className="container" key={index}>
        <div className="parent" >
        <Link to="/category"><h3 style={{color : `${item.color}` }}>{item.name.slice(0, 2).toUpperCase()}</h3></Link>
        </div>
        <h2>{item.name.toUpperCase()}</h2>
            </div>
           
      ))}
    </div>
    </div>
  )

}


export default CategorieList;