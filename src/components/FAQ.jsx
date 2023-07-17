import {useState} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

//stylesheet 
import '../styles/FAQ.css';

//data
import FAQData from '../data/FAQ';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="faq-container">
            <h1 className="faq-heading">FAQs</h1>
            <div className='faq-flex'>
                {FAQData.map((item) => (
                    <div className='faq-item' 
                        key={item.id}
                        onClick={() => toggleQuestion(item.id)}
                    >
                        <div className='faq-question-flex'>
                            <div className='faq-question'>{item.question}</div>
                            <AiFillCaretDown size={30} className={`caret-btn ${activeIndex === item.id ? 'rotate' : 'normal'}`}/>
                        </div>
                        {/* {activeIndex === item.id && <div className="faq-answer">{item.answer}</div>} */}
                        <div 
                            className={`faq-answer ${activeIndex === item.id ? 'show' : ''}`}
                        >{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
