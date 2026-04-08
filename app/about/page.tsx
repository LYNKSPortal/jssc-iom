import Button from '@/components/Button';
import Card from '@/components/Card';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About the JSSC</h1>
          <p className="text-xl text-white/90">
            A member-led social organisation for the Armed Forces and Emergency Services community
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary mb-8 text-center">
            <p className="text-lg font-semibold text-charcoal">
              Patron: His Excellency Lt General Sir John Lorimer KCB DSO MBE
            </p>
          </div>

          <h2 className="text-3xl font-bold text-charcoal mb-6">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Joint Services Social Club (JSSC) - Isle of Man is a social club for:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Serving and Veteran members of the UK and Commonwealth Armed Forces residing on the Isle of Man',
              'Past and Present members of the Emergency Services residing on the Isle of Man',
              'Those who work with or within the Isle of Man Veteran Community on a case-by-case basis',
              'The JSSC is hosted by the Manx Legion Club in Douglas.'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">History</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Club was established to provide a dedicated social space for those connected to uniformed services 
            on the Isle of Man. It has grown into a respected and inclusive organisation while maintaining strong 
            links to the veteran community.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Mission and Values</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">Mission Statement</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To promote and continue the spirit of comradeship whilst serving in the Armed Forces and Emergency 
              Services through organised social functions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-4">Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Inclusion', 'Respect', 'Community', 'Shared experience', 'Wellbeing'].map((value) => (
                <div key={value} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-lg text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Club Overview</h2>
          <ul className="space-y-4">
            {[
              'The JSSC is first and foremost a Social Club, it is not a charity',
              'Associate Club membership may be granted to those who work for, or within the Veteran Community on the Isle of Man. Such applications will be reviewed by the Committee on a case-by-case basis',
              'There is no discrimination with regards to Armed Service, Emergency Service rank, cap badge, political party, sectarianism, sex, sexual orientation, disability, nationality, ethnicity, religion, or other beliefs – discrimination will not be tolerated',
              'Members shall be allowed guests at the discretion of the Committee',
              'Members and their guests are to always ensure good conduct, or they may be asked to leave the function and in addition, may have their membership suspended or terminated',
              'Membership year is from 1st August to 31st July the following year and costs £60 subject to review at Annual General Meetings (AGM)',
              'Membership subscriptions for the following year are payable in full by 01 August, in exceptional circumstances this may be by instalments with agreement by the Committee',
              'Individuals shall not be eligible to participate in any social activity or vote in general meetings unless the applicable subscription has been paid by the due date and/or membership has been agreed by the Committee',
              'Members can submit suggestions on improvements to the running of the JSSC to the Committee for review',
              'Members should report any grievance on the running of the club or complaint about a member or guest to the Committee for investigation and resolution'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Social Activities and Communications</h2>
          <p className="text-gray-700 mb-4">
            Social Activities and other Matters will be advertised on one or more of the following:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Joint Services Social Club – Isle of Man Facebook Group',
              'British Military & Veterans Isle of Man Facebook Group',
              'Douglas Manx Legion Club JSSC Notice Board',
              'JSSC website: www.jssc.co.im',
              'Other locations may be used that are deemed appropriate'
            ].map((item, index) => (
              <li key={index} className="flex items-start ml-6">
                <span className="text-primary mr-3">○</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {[
              'Social Activities and other Matters may be sent via email on request',
              'A newsletter will be produced at regular intervals and distributed electronically via email to all members and advertised as above',
              'Members can suggest Club Social Activities to the Committee - the Committee cannot do it alone'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Constitution</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Club operates under a Constitution that ensures fair and transparent management.
          </p>

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
                  'An elected Officer can hold two roles',
                  'The elected Officers along with two non-role members will form the Committee',
                  'Officers and the two non-role members will be elected annually at the Annual General Meeting (AGM). All Committee will retire each year but will be eligible for re-election',
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
                Agenda to each Committee member not less than seven days in advance of the meeting.
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
                  <span className="text-gray-700"><strong>Full:</strong> Annual membership with free or discounted event access.</span>
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

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Social Events and Communications</h2>
          
          <div className="space-y-8">
            <Card>
              <p className="text-gray-700 mb-4">
                Every member is welcome to propose or organise social gatherings.
              </p>
              <p className="text-gray-700 mb-4">
                Members may bring non-members to events as guests at the PAYG cost where appropriate.
              </p>
              <p className="text-gray-700 mb-2">
                Social events and related matters will be published but not limited to the following platforms:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Joint Services Social Club – Isle of Man Facebook Group',
                  'British Military & Veterans Isle of Man Facebook Group',
                  'Douglas Manx Legion Club JSSC Notice Board',
                  'JSSC website: www.jssc.co.im'
                ].map((platform) => (
                  <li key={platform} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{platform}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700">
                Members unable to access these platforms should notify the Secretary to facilitate alternative arrangements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Club Policies</h2>
          
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Discrimination and Misconduct</h3>
              <p className="text-gray-700 mb-4">
                The Club enforces a non-discrimination policy, ensuring equal treatment for all regardless of service, 
                rank, affiliation, identity, disability, or beliefs.
              </p>
              <p className="text-gray-700 mb-4">
                Members and guests must always behave appropriately.
              </p>
              <p className="text-gray-700">
                Misconduct including bringing the club into disrepute, may result in removal from events and possible 
                suspension or termination of membership.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Grievances and Complaints</h3>
              <p className="text-gray-700">
                Grievances and complaints about club operations, members, or guests should be reported to a Club Officer 
                for investigation and resolution.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Meetings and Finances</h2>
          
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Annual General Meeting</h3>
              <ul className="space-y-3">
                {[
                  'Annual General Meeting (AGM) will be convened by the Secretary who shall issue a Calling Notice and Agenda to each Club member not less than seven days in advance of the AGM',
                  'All paid members for the following club year have the right to vote'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Extraordinary General Meeting</h3>
              <ul className="space-y-3">
                {[
                  'An Extraordinary General Meeting (EGM) can be called by the Committee or by a written request to the Committee',
                  'The EGM shall be called by the Secretary and held at a time and place to be determined within twenty-one days of such a request',
                  'The EGM shall only consider the business specified in the request'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Finances</h3>
              <ul className="space-y-3">
                {[
                  'The club\'s Treasurer will be responsible for the finances of the club',
                  'The financial year of the club will run from 01 August to 31 July of the following year',
                  'A Bank Account will be opened in the name of the JSSC and will require two signatures on any cheque or other bank document except paying in slips',
                  'The Treasurer will update the Committee on the Clubs financial position at each Committee meeting and present a statement of the Clubs financial position at the AGM',
                  'No member shall derive any financial benefit from the Club, except for payment of reasonable expenses',
                  'No money will be paid out in the name of the Club without a receipt being presented'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Amendments to the Constitution</h3>
              <p className="text-gray-700">
                Any changes to this Constitution must be agreed by at least two-thirds of those members present and 
                voting at any AGM or EGM.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Get Involved</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Club is run by volunteers who are passionate about serving the community. Members are 
            encouraged to join the Committee to help organise events and shape the Club's future.
          </p>
          <Button href="/contact" variant="primary">
            Contact the Committee
          </Button>
        </div>
      </section>
    </div>
  );
}
