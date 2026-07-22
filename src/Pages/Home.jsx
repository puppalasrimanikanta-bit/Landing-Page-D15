import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  ['✚', 'Find a doctor', 'Meet specialists who put you at the center of every decision.'],
  ['⌂', 'Our departments', 'Explore comprehensive care for every stage of life.'],
  ['◷', 'Visiting hours', 'Everything you need to plan a comfortable visit.'],
]

function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">COMPASSIONATE CARE, CLOSE TO HOME</p>
        <h1>Care that sees<br /><em>the whole you.</em></h1>
        <p className="hero-text">Exceptional medicine begins with listening. Our teams combine leading expertise with care that feels personal.</p>
        <div className="hero-actions"><a className="primary-btn" href="tel:+91 98888 88888">Find care today <span>→</span></a><Link className="text-btn" to="/departments">Explore departments</Link></div></div>
      <div className="hero-visual"><div className="sun"></div><div className="care-card"><span>24</span><div><b>Hours a day</b><small>Here when you need us</small></div></div><div className="leaf leaf-one"></div><div className="leaf leaf-two"></div></div>
    </section>
    <section className="emergency"><div className="emergency-symbol">+</div><div><strong>Emergency? We’re ready.</strong><p>For life-threatening emergencies, call us now. Our emergency department is open 24/7.</p></div><a href="tel:108" className="emergency-call">Call 108 <span>→</span></a><a href="tel:+91 98888 88888" className="emergency-number">+91 98888 88888</a></section>
    <section className="quick-links" id="care"><div className="section-heading"><p className="eyebrow">HOW CAN WE HELP?</p><h2>Care made easier.</h2></div><div className="service-grid">{services.map(([icon,title,text],i)=><article className="service-card" key={title}><span className="service-number">0{i+1}</span><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p>{title === 'Our departments' ? <Link to="/departments">Learn more →</Link> : <a href="#contact">Learn more →</a>}</article>)}</div></section>
    <section className="trust-strip"><div><strong>45+</strong><span>Years of care</span></div><div><strong>120</strong><span>Expert physicians</span></div><div><strong>24/7</strong><span>Emergency support</span></div><div><strong>4.9/5</strong><span>Patient experience</span></div></section>
  </>
}
export default Home