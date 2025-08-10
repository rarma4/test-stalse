import '../styles/sections/footer.scss'
import Image from 'next/image'
import RafartLogo from '@/../public/assets/img/rafart-logo.svg'
export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-light" id="footer">
        <footer className="container">
          <div className="row pb-2 pt-4 text-center d-flex justify-content-evenly">
            <div className="col-xl-6 col-md-12 col-xs-1 d-flex justify-content-evenly">
              <p><small>Copyright © OMDB - Teste API via omdbapi.com</small></p>
            </div>
            <div className="col-xl-6 col-md-12 col-xs-1 d-flex justify-content-evenly">
              <p>
                <small>
                  Powered by
                </small>
                <a className="p-2" href="https://www.rafart.com.br/" target="_blank" title="Raf'Art Developer and WebDesign">
                  <Image
                    src={RafartLogo}
                    alt="logo rafart"
                    width={20}
                    height={20}
                  />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
