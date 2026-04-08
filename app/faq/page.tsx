'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-grey-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-charcoal pr-4">{question}</span>
        <svg
          className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'Who can join the JSSC?',
      answer: 'Membership is open to serving and veteran Armed Forces members, Emergency Services personnel, emergency medicine professionals (at the discretion of the Committee), and people connected to the Island\'s veteran community.'
    },
    {
      question: 'Where is the Club based?',
      answer: 'The JSSC is based at the Manx Legion Club in Douglas, Isle of Man. This provides a welcoming venue for our social events and gatherings.'
    },
    {
      question: 'Is the JSSC a charity?',
      answer: 'No, the JSSC is not a charity. It operates as a member-led social club managed by an elected Committee on behalf of its members.'
    },
    {
      question: 'How do I join?',
      answer: 'New members can contact the Club via email at support@jssc.im to begin the application process. You\'ll need to confirm your eligibility, complete registration, and pay the annual subscription.'
    },
    {
      question: 'How do I renew membership?',
      answer: 'Membership is renewed annually by confirming your details are up to date and paying the annual subscription. The membership year runs from 1 August to 31 July.'
    },
    {
      question: 'What events does the Club organise?',
      answer: 'The JSSC organises a variety of social events throughout the year, including dining experiences, entertainment evenings, seasonal celebrations, and community gatherings. Members receive regular updates about upcoming events.'
    },
    {
      question: 'Can I join the Committee?',
      answer: 'Yes! The Club welcomes members who want to get involved in organising events and shaping the Club\'s future. Contact us to learn more about Committee opportunities.'
    },
    {
      question: 'How can my business become a sponsor?',
      answer: 'We welcome sponsorship enquiries from businesses that want to support our community. Sponsors receive brand visibility, event recognition, and association with a respected local organisation. Contact us at support@jssc.im to discuss sponsorship opportunities.'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">
            Find answers to common questions about the JSSC
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">
              We're here to help. Get in touch with us and we'll be happy to answer any questions you may have.
            </p>
            <a
              href="mailto:support@jssc.co.im"
              className="inline-block px-8 py-3 rounded-md font-semibold transition-all duration-200 text-center bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
