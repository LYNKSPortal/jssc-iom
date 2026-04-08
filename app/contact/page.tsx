import Card from '@/components/Card';

export default function Contact() {
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
