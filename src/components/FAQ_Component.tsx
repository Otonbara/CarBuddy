import { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What do I need to rent a car?",
    answer:
      "You need a valid driver’s license, a government-issued ID, and a credit or debit card for payment.",
  },
  {
    question: "Can I rent a car without a credit card?",
    answer:
      "Yes, we accept debit cards as long as they meet certain verification requirements.",
  },
  {
    question: "Is there a mileage limit?",
    answer:
      "Most of our rentals come with unlimited mileage. However, some premium or luxury vehicles may have restrictions.",
  },
  {
    question: "Do you offer airport pickup and drop-off?",
    answer:
      "Yes, we provide 24/7 airport pickup and drop-off services. Please schedule in advance.",
  },
  {
    question: "What happens if I return the car late?",
    answer:
      "Late returns are subject to additional charges. We recommend contacting us in advance if you're running late.",
  },
  {
    question: "Can I extend my rental period?",
    answer:
      "Absolutely. You can extend your rental by contacting our support team before your return time.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
      <div className="flex flex-col lg:flex-row gap-8 mx-auto">
        {/* Questions */}
        <div className="w-full lg:w-1/2 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              onClick={() => toggle(index)}
              className={`p-4 shadow-lg cursor-pointer transition-all duration-200 ${
                activeIndex === index
                  ? "bg-blue-50 border-blue-500 text-blue-700 font-bold"
                  : "bg-white hover:bg-gray-50/80 hover:font-bold"
              }`}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}>
              <div className="flex items-start gap-2 font-[DM_Sans]">
                <QuestionMarkCircleIcon className="w-5 h-5 mt-1 text-blue-500"/>
                <span>{faq.question}</span>
              </div>

              {/* Mobile Dropdown Answer */}
              <div
                className={`lg:hidden mt-2 text-gray-700 font-[Arial] transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "block" : "hidden"
                }`}>
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Side Answer Panel */}
        <motion.div 
          className="hidden lg:block w-full lg:w-1/2 p-6 bg-white/80 shadow-lg font-[Arial] text-black transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}>
          {activeIndex !== null ? (
            <>
              <h3 className="text-2xl font-semibold font-[DM_Sans] mb-4 text-blue-700">
                {faqs[activeIndex].question}
              </h3>
              <p className="font-bold">{faqs[activeIndex].answer}</p>
            </>
          ) : (
            <p className="text-gray-500">Click a question to view the answer</p>
          )}
        </motion.div>
      </div>
  );
}
