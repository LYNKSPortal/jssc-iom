'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Card from '@/components/Card';

export default function Contact() {
  const searchParams = useSearchParams();
  const eventFromUrl = searchParams.get('event');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: eventFromUrl ? 'Event Registration' : 'General Enquiry',
    event: eventFromUrl || '',
    message: '',
  });

  useEffect(() => {
    if (eventFromUrl) {
      setFormData(prev => ({
        ...prev,
        subject: 'Event Registration',
        event: eventFromUrl,
      }));
    }
  }, [eventFromUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">
            Get in touch with the Joint Services Social Club
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you would like to learn more about the Joint Services Social Club, enquire about membership, 
            sponsorship, or upcoming events, we would be pleased to hear from you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our Committee members are happy to assist with general enquiries and provide further information 
            about the Club and its activities.
          </p>

          <Card>
            <h3 className="text-2xl font-bold text-charcoal mb-6">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Event Registration">I would like to join an event</option>
                  <option value="Membership Enquiry">Membership Enquiry</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.subject === 'Event Registration' && (
                <div>
                  <label htmlFor="event" className="block text-gray-700 font-semibold mb-2">
                    Which event would you like to join? *
                  </label>
                  <input
                    type="text"
                    id="event"
                    name="event"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    placeholder="Enter event name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide any additional details..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">How to Contact Us</h2>
          
          <Card className="mb-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Email</h3>
                <a 
                  href="mailto:support@jssc.co.im" 
                  className="text-primary hover:text-primary-dark font-medium transition-colors duration-200 text-lg"
                >
                  support@jssc.co.im
                </a>
              </div>
            </div>
          </Card>

          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-gray-700">
              We aim to respond to enquiries as promptly as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Visit Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The JSSC is hosted from the Manx Legion Club in Douglas, providing a welcoming venue for 
            organised social events and gatherings.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you are considering membership, you may wish to contact us in advance to arrange attending 
            an event or speaking with a Committee representative.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Members are encouraged to stay informed through our newsletters, social media updates, and Club 
            communications to remain engaged with upcoming activities and announcements.
          </p>
          <p className="text-xl text-charcoal font-semibold">
            We look forward to welcoming you to our community.
          </p>
        </div>
      </section>
    </div>
  );
}
