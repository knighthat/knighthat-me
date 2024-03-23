import './404.css'

function Footer() {
  return (
      <footer className={"notfound-err-footer"}>
        Content is a modified version of <a href="https://colorlib.com/wp/template/colorlib-error-404-8/">Colorlib Error
        404 V8</a>
      </footer>
  )
}

export default function Err404() {
  return (
      <>
        <div id={"notfound-board"}>
          <div>
            <div className={"pure-u-1"}>
              <div className={"pure-menu-heading notfound-error-code"}>
                <h1>4<span>0</span>4</h1>
              </div>
            </div>
            <div className={"pure-u-1"}>
              <div className={"pure-u-1 notfound-error-description"}>
                <p>The page you are looking for might have been removed had its name changed or is temporarily
                  unavailable.</p>
              </div>
            </div>
            <div className={"pure-u-1 notfound-homepage-button-container"}>
              <a href='/'>home page</a>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}