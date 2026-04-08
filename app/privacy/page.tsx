export default function Privacy() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
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
              The Joint Services Social Club is committed to protecting your privacy and handling your 
              personal data responsibly.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect information necessary for membership administration, event organisation, and 
              Club communications. This may include your name, contact details, and service background.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your information is used solely for Club administration, member communications, and event 
              organisation. We do not share your personal data with third parties without your consent.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We take appropriate measures to protect your personal information and maintain its confidentiality.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-8">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about this privacy policy, please contact us at{' '}
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
