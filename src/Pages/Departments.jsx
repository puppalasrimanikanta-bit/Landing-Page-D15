import './Departments.css'

const departments = [
  ['♥', 'Cardiology', 'Prevention, diagnosis and treatment for every kind of heart condition.'],
  ['✦', 'Neurology', 'Specialized care for the brain, spine and nervous system.'],
  ['◌', 'Orthopedics', 'Helping you move comfortably and return to what you love.'],
  ['☼', 'Women’s health', 'Compassionate care through every stage of life.'],
  ['⌁', 'Pediatrics', 'Gentle, expert care for infants, children and adolescents.'],
  ['✚', 'Emergency care', 'Fast, coordinated care whenever the unexpected happens.'],
]

function Departments() {
  return <>
    <section className="departments-hero"><p className="eyebrow">SPECIALTY CARE</p><h1>Expertise for every<br /><em>part of you.</em></h1><p>From everyday wellness to complex conditions, our specialists work together to make your care feel seamless.</p></section>
    <section className="department-content"><aside className="department-side"><p>FIND YOUR CARE</p><a className="selected" href="#specialties">All departments <span>06</span></a><a href="#specialties">Medical specialties</a><a href="#services">Support services</a><div className="side-call"><span>Need help choosing?</span><a href="tel:+91 98888 88888">Call +91 98888 88888</a></div></aside><div className="department-list" id="specialties"><div className="list-intro"><div><p className="eyebrow">OUR DEPARTMENTS</p><h2>Specialized care,<br />thoughtfully connected.</h2></div><p>Explore our centers of excellence and the dedicated teams behind them.</p></div><div className="department-grid">{departments.map(([icon,title,text])=><article className="department-card" key={title}><span className="department-icon">{icon}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}>Learn more <span>→</span></a></article>)}</div></div></section>
    <section className="services-banner" id="services"><div><p className="eyebrow">BEYOND TREATMENT</p><h2>Care that supports your whole life.</h2></div><p>We offer nutrition counseling, rehabilitation, imaging, pharmacy services and patient education—so you have the support you need, all in one place.</p><a href="tel:+91 98888 88888">Talk to our care team →</a></section>
  </>
}
export default Departments