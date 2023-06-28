import VscGithubAlt from 'react-icons/vsc'
import GrInstagram from 'react-icons/gr'
import FiTwitter from 'react-icons/fi'

const Footer = () => (
  <div>
    <h1 className="heading">
      COVID19<span className="span-heading">INDIA</span>
    </h1>
    <p className="footer-description">
      we stand with everyone fighting on the front lines
    </p>
    <div className="social-media-icons-container">
      <VscGithubAlt />
      <GrInstagram />
      <FiTwitter />
    </div>
  </div>
)

export default Footer
