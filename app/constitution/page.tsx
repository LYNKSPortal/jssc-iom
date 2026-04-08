import Card from '@/components/Card';

export default function Constitution() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Constitution</h1>
          <p className="text-xl text-white/90">
            The Club operates under a Constitution that ensures fair and transparent management
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Officers of the Club</h3>
              <p className="text-gray-700 mb-4">
                Elected officers of the JSSC shall be:
              </p>
              <ul className="space-y-2 mb-6">
                {['President', 'Vice-President', 'Secretary', 'Treasurer', 'Event Co-ordinator'].map((role) => (
                  <li key={role} className="flex items-start ml-6">
                    <span className="text-primary mr-3">○</span>
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  'An elected Officer can hold more than one role',
                  'The elected Officers will form the Committee',
                  'Officers will be elected annually at the Annual General Meeting (AGM). All Committee will retire each year but will be eligible for re-election',
                  'If the post of any officer becomes vacant after such an election, the remaining members shall have the power to fill the vacancy until the next AGM or hold an Extraordinary General Meeting (EGM) to elect a replacement',
                  'The President or nominated representative shall Chair all meetings'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Committee Meetings</h3>
              <p className="text-gray-700">
                Committee meetings will be convened by the Secretary of the club who shall issue a Calling Notice and 
                Agenda to each Committee member in advance of the meeting.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Eligibility for Membership</h3>
              <p className="text-gray-700 mb-4">
                Membership is available to individuals residing on the Isle of Man who have either previously served 
                or are currently serving in the UK or Commonwealth Armed Forces, the Royal Fleet Auxiliary Service, 
                or the Blue Light Emergency Services and professionals working in emergency medicine at the discretion 
                of the committee. This includes Civil Defence, Coastguards, and the Royal National Lifeboat Institution.
              </p>
              <p className="text-gray-700 mb-4">
                Associate membership is open to anyone who actively supports these groups, subject to approval by the Committee.
              </p>
              <p className="text-gray-700 font-semibold">
                The membership year runs from 01 August to 31 July of the following year.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Membership Levels</h3>
              <p className="text-gray-700 mb-4">There are two levels of membership:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Paid:</strong> Annual membership with free or discounted event access.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Basic:</strong> Pay as you go (PAYG).</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                Note: Some social events may not be eligible for free or discounted participation. Annual membership 
                fee is subject to review at AGMs.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Application for Membership</h3>
              <p className="text-gray-700 mb-4">
                Only eligible applicants will be accepted. Acceptance into the JSSC Facebook Group does not constitute 
                formal membership in the Club.
              </p>
              <p className="text-gray-700 mb-2">Applications for membership can be submitted via:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    the JSSC website:{' '}
                    <a href="https://www.jssc.co.im" className="text-primary hover:text-primary-dark font-semibold">
                      www.jssc.co.im
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">
                    Email:{' '}
                    <a href="mailto:support@jssc.co.im" className="text-primary hover:text-primary-dark font-semibold">
                      support@jssc.co.im
                    </a>
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
