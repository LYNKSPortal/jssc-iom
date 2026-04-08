import Card from '@/components/Card';

export default function Refunds() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Refund and Cancellation Policy</h1>
          <p className="text-xl text-white/90">
            Joint Services Social Club
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">1. Purpose</h2>
            <p className="text-gray-700 leading-relaxed">
              This Refund and Cancellation Policy outlines the terms under which members or participants 
              may request refunds or cancel their bookings for events, memberships, or activities organized 
              by the Joint Services Social Club. Our goal is to ensure transparency and fairness while 
              maintaining the club's operational efficiency.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">2. Membership Refund Policy</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <div>
                  <strong className="text-gray-900">Initial Membership Fees:</strong>
                  <span className="text-gray-700"> Membership fees are non-refundable once payment is processed, 
                  except in cases of administrative error or extenuating circumstances (e.g., medical emergencies).</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <div>
                  <strong className="text-gray-900">Renewals:</strong>
                  <span className="text-gray-700"> Membership renewals are final and non-refundable. Members are 
                  encouraged to review renewal reminders. Once payment is made this is non-refundable.</span>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">3. Event/Activity Cancellation by the Club</h2>
            <p className="text-gray-700 mb-4">
              If the club cancels an event or activity, participants will be notified promptly.
            </p>
            <p className="text-gray-700 mb-2">Participants will have the option to:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-primary mr-3">○</span>
                <span className="text-gray-700">Receive a full refund of the event/activity fee.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">○</span>
                <span className="text-gray-700">Use the amount as credit towards an upcoming event or membership.</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">4. Event/Activity Cancellation by Participants</h2>
            <p className="text-gray-700">
              These are not refundable (except in exceptional circumstances); however, they may be transferred 
              to another paid member where the event is included in the membership fee. If the event is chargeable 
              this may be transferred to a Pay as You Go or Paid Member.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">5. Refund Processing</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-gray-700">
                  Refunds will be processed within 30 days of receiving a valid request.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-gray-700">
                  Refunds will be issued by bank transfer or credit towards a future event or the next year's membership.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">6. Non-Refundable Items</h2>
            <p className="text-gray-700">
              Donations, merchandise purchases, and certain special event fees are non-refundable unless 
              explicitly stated otherwise.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">7. Amendments to the Policy</h2>
            <p className="text-gray-700">
              The club reserves the right to amend this policy at any time. Members and participants will be 
              notified of significant changes.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <h2 className="text-2xl font-bold text-charcoal mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For refund or cancellation requests, please contact us at:{' '}
              <a 
                href="mailto:support@jssc.co.im" 
                className="text-primary hover:text-primary-dark font-semibold"
              >
                support@jssc.co.im
              </a>
            </p>
            <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary mt-6">
              <p className="text-gray-700 italic">
                This policy ensures fairness while supporting the smooth operation of the Joint Services Social Club. 
                Thank you for your understanding and cooperation!
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
