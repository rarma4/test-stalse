import Image from 'next/image'
import '../styles/components/navigation.scss'
import OffNavigation from '../components/OffNavigation'
import MenuItens from '../components/MenuItens'
import OMBbLogo from '@/../public/assets/img/favicon.ico'

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image
              src={OMBbLogo}
              alt="logo OMDb"
              width={30}
              height={30}
            />
          </a>
          <a className="navbar-brand logo-header" href="/">OMDb</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-md-auto">
              <MenuItens />
            </ul>
          </div>
        </div>
      </nav>
      <OffNavigation />
    </>
  )
}
