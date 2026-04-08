import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-charcoal text-white py-24 sm:py-32">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to the Joint Services Social Club
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            Bringing together Armed Forces, Emergency Services, and the Isle of Man veteran community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/apply" variant="primary" className="!bg-white !text-primary hover:!bg-gray-100 hover:!text-primary">
              Apply Now
            </Button>
            <Button href="/events" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
              View Events
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6 text-center">
              About the JSSC
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              The Joint Services Social Club (JSSC) is an inclusive, member-led social club based at the 
              Manx Legion Club in Douglas. It brings together serving and veteran members of the UK and 
              Commonwealth Armed Forces, Emergency Services personnel, and those who support the Island's 
              veteran community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To promote comradeship, wellbeing, and community through organised social activities 
              in a friendly and respectful environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Social Events</h3>
                <p className="text-gray-700">
                  Organise social events throughout the year for members to connect and enjoy together
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Community Space</h3>
                <p className="text-gray-700">
                  Provide a welcoming community space for members to gather and build lasting friendships
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Foster Connections</h3>
                <p className="text-gray-700">
                  Foster connections between service backgrounds and strengthen community bonds
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Become a member of the JSSC and be part of a welcoming community that values comradeship and shared experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/membership" variant="primary" className="!bg-white !text-primary hover:!bg-gray-100 hover:!text-primary">
              Join the Club
            </Button>
            <Button href="/events" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
              Explore Events
            </Button>
            <Button href="/sponsors" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
              Learn About Sponsorship
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
