import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {answer, question} = faqDetails

  return (
    <>
      <li className="faq-item">
        <p className="about-question">{question}</p>
        <p className="answer">{answer}</p>
      </li>
    </>
  )
}

export default FaqItem
