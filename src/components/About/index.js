import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class About extends Component {
  state = {
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
  }
}
export default About
