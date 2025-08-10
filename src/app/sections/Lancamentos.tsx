import '../styles/sections/lancamentos.scss'
import Lancamento from '../components/Lancamento'

export default function Lancamentos() {
  return (
    <>
      <div className="container-fluid text-white d-flex justify-content-evenly flex-column "  id="lancamentos">
        <div className="container">
          <div className="row mt-4 mb-5">
            <h2 className={`text-center`}>Lancamentos</h2>
            <Lancamento/>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}
