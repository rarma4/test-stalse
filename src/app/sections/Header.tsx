import '../styles/sections/header.scss'

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-primary text-white d-flex justify-content-evenly flex-column header">
        <header className="container">
          <div className="row p-3 text-center ">
            <div className="col-md-2 col-sm-1"></div>
            <div className="col-md-8 col-sm-10 ">
              <h2 className="home-title pb-3"><strong>descubra, avalie e salve seus filmes favoritos!</strong></h2>
              <h2 className="home-subtitle pb-3 text-warning">Explore o mundo do cinema</h2>
            </div>
            <div className="col-md-2 col-sm-1"></div>
          </div>
        </header>
      </div>
    </>
  )
}
