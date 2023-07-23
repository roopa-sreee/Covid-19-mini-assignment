import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

import FaqItem from '../FaqItem'

import './index.css'

class About extends Component {
  state = {
    isLoading: true,
    faqsList: [],
  }

  componentDidMount() {
    this.getFaqsList()
  }

  getFaqsList = async () => {
    const faqsApiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }
    const response = await fetch(faqsApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const faqs = data.faq
      console.log(faqs)
      this.setState({faqsList: faqs, isLoading: false})
    }
  }

  render() {
    const {isLoading, faqsList} = this.state
    return (
      <div className="about-container" data-testid="aboutRouteLoader">
        {isLoading ? (
          <div className="loading-class" data-testid="aboutRouteLoader">
            <Loader type="Oval" color="#007BFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <Header />
            <div className="about-route-container">
              <h1 className="about-heading">About</h1>
              <p className="about-last-update">
                Last Updated on march 28th 2021.
              </p>
              <h2 className="side-heading">
                Covid-19 vaccines be ready for distribution
              </h2>
              <ul
                className="faqs-list-container"
                data-testid="faqsUnorderedList"
              >
                {faqsList.map(eachFaq => (
                  <FaqItem key={eachFaq.qno} faqDetails={eachFaq} />
                ))}
              </ul>
            </div>
            <Footer />
          </>
        )}
      </div>
    )
  }
}
export default About
