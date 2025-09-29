import { Link } from "react-router-dom";


export default function HambNav(){
  return(
    <div  className="absolute  bg-black p-3 text-center">
      <ul>
        <li><Link to="/" className="text-sm ">Início</Link></li>
        <li><Link to="/series" className="text-sm ">Séries</Link></li>
        <li><Link to="/movies" className="text-sm ">Filmes</Link></li>
        <li><Link to="/myList" className="text-sm ">Minha Lista</Link></li>
      </ul>
    </div>
  )
}