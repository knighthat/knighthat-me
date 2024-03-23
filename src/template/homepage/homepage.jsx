import './homepage.css'


export function HomePage() {

  const gotoPage = () => {
    window.location.href = 'https://inv.knighthat.me';
  }

  return (
      <>
        <div id={"header-background"}></div>
        <div className={"logo-section flex-row-wrap-center"}>
          <div className={"flex-row-wrap-center logo-container"}>
            <span
                id={"logo"}
                className={"pure-menu-heading overflow-wrap"}>KNIGHT HAT</span>
          </div>
        </div>
        <div className={"features-section flex-row-wrap-center"}>
          <div className={"cards-layout"}>
            <div className={"feature-card pure-u-1"}>
              <div className={"feature-card-background"} onClick={gotoPage}>
                <img className={"feature-card-icon"} src='/invidious-192x192.png' alt={"invidious logo"}/>
                <div className={"feature-card-description"}>
                  <h2 className={"feature-card-description-title"}>Invidious</h2>
                  <p className={"feature-card-description-description"}>Privacy focused front-end for Youtube</p>
                </div>
              </div>
            </div>
            <div className={"feature-card pure-u-1"}>
              <div className={"feature-card-background"} onClick={gotoPage}>
                <img className={"feature-card-icon"} src='/invidious-192x192.png' alt={"invidious logo"}/>
                <div className={"feature-card-description"}>
                  <h2 className={"feature-card-description-title"}>Invidious</h2>
                  <p className={"feature-card-description-description"}>Privacy focused front-end for Youtube</p>
                </div>
              </div>
            </div>
            <div className={"feature-card pure-u-1"}>
              <div className={"feature-card-background"} onClick={gotoPage}>
                <img className={"feature-card-icon"} src='/invidious-192x192.png' alt={"invidious logo"}/>
                <div className={"feature-card-description"}>
                  <h2 className={"feature-card-description-title"}>Invidious</h2>
                  <p className={"feature-card-description-description"}>Privacy focused front-end for Youtube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}