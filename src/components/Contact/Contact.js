import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='open'><p>I’m open to internships / full-time front-end opportunities.</p> 
      <p>Feel free to reach out.</p>
      </div>
      <a href={`mailto:${contact.email}`} target='_blank' rel='noopener noreferrer'>
        <span type='button' className='btn btn--outline'>
          reach me.
        </span>
      </a>
    </section>
  )
}

export default Contact
