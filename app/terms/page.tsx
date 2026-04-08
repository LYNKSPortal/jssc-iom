export default function Terms() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/90">
            Joint Services Social Club
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These terms and conditions govern your use of the Joint Services Social Club website and 
              your membership with the Club.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Membership</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Membership is subject to eligibility criteria and approval by the Committee. The Club operates 
              under a Constitution that ensures fair and transparent management.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Code of Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All members are expected to conduct themselves in a respectful and appropriate manner that 
              reflects the values of the Club and the wider service community.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms and conditions, please contact us at{' '}
              <a href="mailto:support@jssc.co.im" className="text-primary hover:text-primary-dark">
                support@jssc.co.im
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
