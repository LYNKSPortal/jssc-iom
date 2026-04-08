import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Community() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Community</h1>
          <p className="text-xl text-white/90">
            Connect with fellow members in our private Facebook group
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Join Our Private Facebook Group</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Stay connected with the JSSC community through our private Facebook group. Share experiences, 
              stay updated on events, and engage with fellow members in a welcoming online space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Stay Connected</h3>
                <p className="text-gray-700">
                  Engage with members, share stories, and build lasting friendships
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Event Updates</h3>
                <p className="text-gray-700">
                  Get real-time notifications about upcoming events and activities
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Private & Secure</h3>
                <p className="text-gray-700">
                  Members-only group ensuring privacy and a safe community space
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <a
              href="https://www.facebook.com/groups/800644827866232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-md font-semibold transition-all duration-200 text-center bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
            >
              Join Our Facebook Group
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Group Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Facebook group is a space for respectful engagement and community building. We ask all members to:
            </p>
            <ul className="space-y-3">
              {[
                'Be respectful and courteous to all members',
                'Keep discussions relevant to the JSSC and our community',
                'Respect privacy - do not share personal information without consent',
                'Follow Facebook Community Standards',
                'Report any concerns to group administrators'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Not on Facebook?</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            You can still stay connected with the JSSC through our events, email updates, and in-person gatherings. 
            Contact us to learn more about staying involved.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
