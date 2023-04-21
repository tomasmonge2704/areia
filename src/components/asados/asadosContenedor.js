import axios from 'axios';
import { useState,useEffect } from 'react'
import Asados from './asados';
import LoadingSpinner from '../spinner/spinner'
export default function AsadosContenedor(){
    const HOST = "https://areia-backend.onrender.com/";
    let [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function getProds() {
        await axios.get(HOST + "productos").then(response => {
            setProductos(response.data);
            setIsLoading(false)
        })
      }
      getProds()
      }, []);
      return(
        <>
        {isLoading == true ? (<LoadingSpinner/>) : (
        <Asados productos={productos} />)}
        </>
      )
}