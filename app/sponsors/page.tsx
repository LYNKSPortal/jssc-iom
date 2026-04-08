import Button from '@/components/Button';
import Card from '@/components/Card';

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

          <Card className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-primary mb-4">B&B Furniture</h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              B&B Furniture is a leading Isle of Man furniture retailer, offering quality kitchens, bedrooms, 
              dining and living furniture designed to suit every home. With expert designers, in-house fitters, 
              free island-wide delivery, and flexible 0% finance options, B&B Furniture is committed to helping 
              customers create a home they love.
            </p>

            <div className="bg-grey-50 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-gray-700 italic">
                We extend our sincere gratitude to B&B Furniture for their generous support of the Joint Services 
                Social Club and our community. Their commitment helps us deliver meaningful events and activities 
                that bring our members together.
              </p>
            </div>
          </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Serenity Suites', donation: '2 nights accommodation and breakfast' },
              { name: 'Entertainer', donation: '£15 Voucher' },
              { name: 'Morgan Bakery', donation: '£10 Voucher' },
              { name: 'Harveys Nails', donation: '3 x £30 voucher' },
              { name: 'Anonymous Donor', donation: 'Fishing Rod' },
              { name: 'Utopia', donation: 'Blow Dry Voucher' },
              { name: 'Prime Performance Gym', donation: 'One Month Membership' },
              { name: 'Ticket Hall', donation: '£30 Voucher' },
              { name: 'Kelvins Fishing Tackle', donation: '£50 Voucher' },
              { name: 'Terrace Chip Shop', donation: '£20 Voucher' },
              { name: 'Taste of Italy', donation: '2 x £15 voucher' },
              { name: 'Vanilla Room', donation: 'Blow Dry' },
              { name: 'Element Isle', donation: '£25 Voucher' },
              { name: 'IOM Creameries', donation: 'Cheese Hamper' },
              { name: 'Devereau\'s', donation: 'Box of Kippers' },
              { name: 'Asia Best Choice', donation: 'Hamper' },
              { name: 'Jason Griffiths', donation: '2 x Umbrellas' },
              { name: 'EVF', donation: '£25 Voucher' },
              { name: 'Diao Racing', donation: 'Cap' },
              { name: 'Okells', donation: '2 x Case of Bitter' },
              { name: 'Extreme Arts and Gadgets', donation: 'Signed Print of John McGuinness' },
              { name: 'Curpheys', donation: 'Cabin Bag' },
              { name: 'T G Jones', donation: 'Colouring Pens' },
              { name: '3 Wheeling', donation: 'Clothing, Cap and Pins' },
              { name: 'Metzeler', donation: 'Cap and T shirt' },
              { name: 'Motul', donation: 'Cap, Snood, Cleaning cloth' },
              { name: 'Creg Ny Baa', donation: '£30 Voucher' },
              { name: 'Jackson Racing', donation: 'T Shirt' },
              { name: 'Milenco', donation: 'T Shirt' },
              { name: 'Manx Tattoo', donation: '£20 vouchers and daft ducks' },
              { name: 'Muck Off', donation: 'Products by Muck Off' },
              { name: 'Oakley', donation: 'Cap' },
              { name: 'Silver Spoon Rings', donation: '£65 voucher' },
              { name: 'Vannin Supreme Clean', donation: '3 Hours of Cleaning' },
              { name: 'JSSC Members', donation: 'Personal donations' }
            ].map((donor, index) => (
              <div key={index} className="bg-grey-50 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="font-semibold text-charcoal mb-1">{donor.name}</h4>
                <p className="text-sm text-gray-600">{donor.donation}</p>
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
