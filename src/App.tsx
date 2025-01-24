import { useEffect } from "react"
import { CriptoSearchForm } from "./components/CriptoSearchForm"
import { useCriptoStore } from "./store"
import { CryptoPriceDisplay } from "./components/CryptoPriceDisplay"

export const App = () => {

  const fetchCryptos = useCriptoStore(state => state.fetchCryptos)


  useEffect(()=>{
    fetchCryptos()
  }, [])

  return (

    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>


      </div>

    </>
  )
}
