import { useState } from "react"
import down from '../../assets/down.svg'

const FAQ = () => {

    const [current, setCurrent] = useState(null)

    const toggle = (i) => {
        if (i == current) {
            return setCurrent(null)
        }

        setCurrent(i)
    }

    const faqs = [
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nisi. Nunc et gravida lacus. Integer interdum tincidunt neque ut maximus. Proin molestie dolor eget urna vehicula, lobortis mattis neque sollicitudin'
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nisi. Nunc et gravida lacus. Integer interdum tincidunt neque ut maximus. Proin molestie dolor eget urna vehicula, lobortis mattis neque sollicitudin'
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nisi. Nunc et gravida lacus. Integer interdum tincidunt neque ut maximus. Proin molestie dolor eget urna vehicula, lobortis mattis neque sollicitudin'
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nisi. Nunc et gravida lacus. Integer interdum tincidunt neque ut maximus. Proin molestie dolor eget urna vehicula, lobortis mattis neque sollicitudin'
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nisi. Nunc et gravida lacus. Integer interdum tincidunt neque ut maximus. Proin molestie dolor eget urna vehicula, lobortis mattis neque sollicitudin'
        },
    ]

    return (
        <div className="w-full py-28 px-8 flex flex-col items-center gap-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl bg-gdsc-blue text-[white] font-medium py-4 px-6 rounded-md">Frequently Asked Questions</h1>
            <div className="sm:w-[22rem] lg:w-[28rem] xl:w-[32rem] flex flex-col items-center gap-8">
                {faqs.map((faq, i) => (
                    <div className="bg-gdsc-blue rounded-large shadow-xl overflow-hidden">
                        <div className="w-full bg-[white] p-5 rounded-large flex justify-between" onClick={() => toggle(i)}>
                            <h2 className="text-xl md:text-2xl font-medium text-center text-gdsc-blue">{ faq.question }</h2>
                            <span className="flex items-center justify-center"><img src={down.src} className={current == i ? 'transition-all duration-500 rotate-180' : 'transition-all duration-500'}/></span>
                        </div>
                        <div className={current == i ? 'max-h-screen transition-all duration-700 overflow-hidden' : 'max-h-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden'}>
                            <div className="px-4 py-6">
                                <p className="text-[white] box-border">{ faq.answer }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ