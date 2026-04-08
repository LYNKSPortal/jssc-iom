import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Membership() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-xl text-white/90">
            Join our welcoming community of service personnel and veterans
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Membership Eligibility</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Membership of the Joint Services Social Club (JSSC) is open to individuals connected to the 
            uniformed services and the wider service community on the Isle of Man.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As a member-led social club, we aim to be inclusive while maintaining our core focus on comradeship, 
            shared experience, and mutual respect among those who serve or have served.
          </p>

          <div className="bg-grey-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Who Can Join?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Serving Members of HM Forces',
                'Veterans of HM Forces (even those that eat crayons ;) )',
                'Both Serving Military and Veterans from other countries living on the Isle of Man',
                'Police',
                'Joint Services Control Room',
                'Fire Brigade',
                'Ambulance Service',
                'Royal National Lifeboat Institution (RNLI)',
                'Coast Guard',
                'Civil Defence',
                'Emergency Medical Staff* (e.g. A&E Doctors / Nurses)',
                'Those that greatly support the above communities*'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm mt-4 italic">
              *Each application will be assessed separately by the committee.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">What is included in your membership?</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left font-semibold">What's Included?</th>
                  <th className="p-4 text-center font-semibold">Paid Membership</th>
                  <th className="p-4 text-center font-semibold">Pay As You Go Membership</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'Legion Membership*', paid: 'Yes', payg: 'No' },
                  { item: 'Christmas Dinner', paid: 'Yes', payg: 'No' },
                  { item: 'Summer Event', paid: 'Yes', payg: 'No' },
                  { item: 'Discounted / Free Events ^', paid: 'Yes', payg: 'No' },
                  { item: 'Affordability', paid: 'Yes', payg: 'Yes' },
                  { item: 'Vote at AGM', paid: 'Yes', payg: 'No' },
                  { item: 'Enjoy great discounts through the Year', paid: 'Yes', payg: 'No' },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-grey-50' : 'bg-white'}>
                    <td className="p-4 border-t border-gray-200">{row.item}</td>
                    <td className="p-4 border-t border-gray-200 text-center font-semibold text-green-600">{row.paid}</td>
                    <td className="p-4 border-t border-gray-200 text-center font-semibold text-red-600">{row.payg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary mb-6">
            <p className="text-lg font-bold text-charcoal mb-4">
              The membership is currently £60 per year and is staying the same for 26/27 as well.
            </p>
            <p className="text-gray-700">
              The membership HAS NOT increased since the club was started in 2020.
            </p>
          </div>

          <div className="bg-grey-50 rounded-lg p-6 space-y-3">
            <p className="text-gray-700">
              <strong>*Legion membership for 2027</strong> is available to those that pay JSSC membership for 26/27 in full in July or August 2026. However this offer may be extended to those joining after this time.
            </p>
            <p className="text-gray-700">
              <strong>^Membership will include</strong> the Christmas Dinner, Summer Event and at least 2 more free or subsidised events each Membership year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">How to Join</h2>
          
          <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8">
            <p className="text-lg font-semibold text-charcoal">
              Membership year runs from <span className="text-primary">1 August to 31 July</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Contact the Club</h3>
                  <p className="text-gray-700">
                    Reach out to us via email to express your interest in joining
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Confirm Eligibility</h3>
                  <p className="text-gray-700">
                    Verify that you meet the membership criteria
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Complete Registration</h3>
                  <p className="text-gray-700">
                    Fill out the membership registration form
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Pay Subscription</h3>
                  <p className="text-gray-700">
                    Complete your annual membership payment
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            As a member, you can attend events, participate in Club life, and take part in meetings to help 
            shape the future of the JSSC.
          </p>

          <div className="bg-grey-50 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              The Joint Services Social Club can be found on Facebook and on the web at{' '}
              <a href="https://jssc.co.im" className="text-primary hover:text-primary-dark font-semibold">jssc.co.im</a>, 
              there you will see all our activities listed as well as putting your name down for events.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button href="/apply" variant="primary">
              Apply for Membership
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">Upcoming Events</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left font-semibold">What's On</th>
                  <th className="p-4 text-center font-semibold">Cost - Paid Member</th>
                  <th className="p-4 text-center font-semibold">Cost - Pay As You Go</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { event: '2nd May, 10am, Breakfast at the Sugar Bush Cafe', paidCost: 'Free', paygCost: '£13' },
                  { event: 'May / June, TT Drinks, Bushey\'s Tent, Douglas', paidCost: 'Entry Fee Paid', paygCost: 'N/A' },
                  { event: '27th June, 1950\'s Night - Including Bar Games, Dinner, Pre Drinks, Band and Dancers', paidCost: 'Free', paygCost: '£15' },
                  { event: '21st August, Spanish Dining Train - 3 Course Meal and return train fair to', paidCost: '£27 (£20 discount)', paygCost: '£47' },
                  { event: 'September / October, Axe Throwing and Food', paidCost: 'TBC', paygCost: 'TBC' },
                  { event: '12th December, Christmas Black Tie Casino Night. Including drinks, dinner and entertainment', paidCost: 'Free', paygCost: '£30' },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-grey-50' : 'bg-white'}>
                    <td className="p-4 border-t border-gray-200">{row.event}</td>
                    <td className="p-4 border-t border-gray-200 text-center font-semibold text-green-600">{row.paidCost}</td>
                    <td className="p-4 border-t border-gray-200 text-center font-semibold text-primary">{row.paygCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary text-center">
            <p className="text-gray-700 mb-2">
              These are our planned current events until December 2026, to keep an eye on other things that may be added to the calendar please check out our{' '}
              <a href="https://www.facebook.com/groups/800644827866232" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">
                Facebook page - Joint Services Social Club - Isle of Man
              </a>{' '}
              or the web page{' '}
              <a href="https://jssc.co.im" className="text-primary hover:text-primary-dark font-semibold">jssc.co.im</a>.
            </p>
            <p className="text-gray-700 mt-4">
              If you would like to plan an event please contact one of the Committee.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Continuing Your Membership</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Membership of the Joint Services Social Club is renewed annually to ensure the Club remains active, 
            engaged, and member-focused.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Renewing your membership helps sustain our organised social events, community activities, and the 
            smooth running of the Club.
          </p>

          <h3 className="text-2xl font-bold text-charcoal mb-6">How to Renew</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Members will be notified when renewals are due. To renew your membership:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
                  1
                </div>
                <h4 className="text-xl font-semibold text-charcoal mb-3">Confirm Your Details</h4>
                <p className="text-gray-700">
                  Ensure your contact information is up to date.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
                  2
                </div>
                <h4 className="text-xl font-semibold text-charcoal mb-3">Pay the Annual Subscription</h4>
                <p className="text-gray-700">
                  Membership fees should be paid by the stated renewal date using the methods advised by the Committee.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
                  3
                </div>
                <h4 className="text-xl font-semibold text-charcoal mb-3">Continue Enjoying Club Activities</h4>
                <p className="text-gray-700">
                  Once renewed, you remain eligible to attend events, vote at meetings, and participate fully in Club life.
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-gray-700">
              If you are unsure about your renewal status, please contact the Committee for clarification.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Supporting the Club</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a volunteer-led organisation operating from the Manx Legion Club on the Isle of Man, the JSSC relies 
            on the continued support of its members.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Your renewal ensures that we can:
          </p>

          <div className="bg-grey-50 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              {[
                'Maintain a welcoming and inclusive social environment',
                'Organise quality events and gatherings',
                'Uphold strong governance and community standards',
                'Continue fostering comradeship across the Island\'s service community'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 font-bold">–</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary text-center">
            <p className="text-lg text-charcoal font-semibold">
              We thank you for your ongoing support and commitment to the Club.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
