
import iconApp from "/icon-app.svg"
import iconError from "/icon-error.svg"
import iconDesign from "/icon-design.svg"
import iconScript from "/icon-script.svg"


type CardProps = {
  title: string
  icon: string
  children: string  // Description
}

function Card({ title, icon, children: description }: CardProps) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt="Application development icon" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  )
}

export default function Services() {
  return (
    <section className="service">
      <h3 className="h3 service-title">What I'm Doing</h3>

      <ul className="service-list">
        <Card title='Application development' icon={iconApp}>
          Professional development of applications for multiple platforms, includes Android and Desktop. 
        </Card>
        
        <Card title='API Design' icon={iconDesign}>
          I architect and develop robust, high-performance APIs that facilitate seamless data exchange for modern applications.
        </Card>

        <Card title='Testing and QA' icon={iconError}>
          Providing professional-level testing and quality assurance to ensure 
          applications are reliable, secure, and perform flawlessly.
        </Card>

        <Card title='Automation scripts' icon={iconScript}>
          Designing and developing custom automation scripts to streamline project workflows, 
          increase efficiency, and reduce manual effort based on specific needs.
        </Card>
      </ul>
    </section>
  )
}