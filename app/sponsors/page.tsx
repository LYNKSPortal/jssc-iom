import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';

export default function Sponsors() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl text-white/90">
            Supporting our community and making our events possible
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Main Sponsor</h2>
          </div>

          <div className="mb-8 rounded-lg shadow-md p-6" style={{ backgroundColor: '#2B273E' }}>
            <div className="text-center mb-6">
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/b-and-b-logo.jpg" 
                  alt="B&B Furniture Logo" 
                  width={200} 
                  height={100}
                  className="w-[200px] h-auto"
                  unoptimized
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">B&B Furniture</h3>
            </div>
            
            <p className="text-lg text-white leading-relaxed mb-6">
              B&B Furniture is a leading Isle of Man furniture retailer, offering quality kitchens, bedrooms, 
              dining and living furniture designed to suit every home. With expert designers, in-house fitters, 
              free island-wide delivery, and flexible 0% finance options, B&B Furniture is committed to helping 
              customers create a home they love.
            </p>

            <div className="bg-white/10 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-white italic">
                We extend our sincere gratitude to B&B Furniture for their generous support of the Joint Services 
                Social Club and our community. Their commitment helps us deliver meaningful events and activities 
                that bring our members together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Generous Donations</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We are incredibly grateful to the following businesses and individuals who have generously donated 
              prizes and support to our events and activities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Serenity Suites',
              'Entertainer',
              'Morgan Bakery',
              'Harveys Nails',
              'Anonymous Donor',
              'Utopia',
              'Prime Performance Gym',
              'Ticket Hall',
              'Kelvins Fishing Tackle',
              'Terrace Chip Shop',
              'Taste of Italy',
              'Vanilla Room',
              'Element Isle',
              'IOM Creameries',
              'Devereau\'s',
              'Asia Best Choice',
              'Jason Griffiths',
              'EVF',
              'Diao Racing',
              'Okells',
              'Extreme Arts and Gadgets',
              'Curpheys',
              'T G Jones',
              '3 Wheeling',
              'Metzeler',
              'Motul',
              'Creg Ny Baa',
              'Jackson Racing',
              'Milenco',
              'Manx Tattoo',
              'Muck Off',
              'Oakley',
              'Silver Spoon Rings',
              'Vannin Supreme Clean',
              'JSSC Members'
            ].map((donor, index) => (
              <div key={index} className="bg-grey-50 rounded-lg p-4 border-l-4 border-primary text-center">
                <h4 className="font-semibold text-charcoal">{donor}</h4>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary/10 rounded-lg p-8 border-l-4 border-primary">
            <p className="text-lg text-charcoal font-semibold">
              Thank you to all our generous donors for supporting the JSSC community!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Become a Sponsor</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Sponsorship helps the Club deliver events and support community activity. By partnering with the JSSC, 
              you'll be supporting a respected organisation that serves the Armed Forces, Emergency Services, 
              and veteran community on the Isle of Man.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Brand Visibility</h3>
              <p className="text-gray-700">
                Gain exposure to our engaged community of service personnel, veterans, and their families
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Community Engagement</h3>
              <p className="text-gray-700">
                Connect with a dedicated community that values loyalty, service, and mutual support
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Event Recognition</h3>
              <p className="text-gray-700">
                Receive acknowledgment at Club events and through our communications channels
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Respected Association</h3>
              <p className="text-gray-700">
                Align your brand with a well-regarded local organisation with strong community ties
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/contact" variant="primary">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
