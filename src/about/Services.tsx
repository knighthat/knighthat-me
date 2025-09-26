
import iconApp from "/icon-app.svg"


export default function Services() {
    return (
        <section className="service">
          <h3 className="h3 service-title">What I'm Doing</h3>

          <ul className="service-list">
            <li className="service-item">

              <div className="service-icon-box">
                <img src={iconApp} alt="Application development icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Application development</h4>

                <p className="service-item-text">
                  Professional development of applications for multiple platforms, includes Android and Desktop. 
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/icon-error.svg" alt="Testing and QA icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Testing and QA</h4>

                <p className="service-item-text">
                  Providing professional-level testing and quality assurance to ensure 
                  applications are reliable, secure, and perform flawlessly.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/icon-design.svg" alt="API Design icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">API Design</h4>

                <p className="service-item-text">
                  I architect and develop robust, high-performance APIs that facilitate seamless data exchange for modern applications.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="/icon-script.svg" alt="Automation scripts icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Automation scripts</h4>

                <p className="service-item-text">
                  Designing and developing custom automation scripts to streamline project workflows, 
                  increase efficiency, and reduce manual effort based on specific needs.
                </p>
              </div>

            </li>
          </ul>
        </section>
    )
}