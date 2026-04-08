import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/membership', label: 'Membership' },
    { href: '/events', label: 'Events' },
    { href: '/community', label: 'Community' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-charcoal text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Image 
              src="/dark-logo.png" 
              alt="JSSC Logo" 
              width={400} 
              height={133}
              className="w-[400px] h-auto mb-4 brightness-0 invert mx-auto"
              unoptimized
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              The Joint Services Social Club is an inclusive, member-led social club bringing together serving 
              and veteran members of the Armed Forces, Emergency Services personnel, and those who support the 
              Isle of Man veteran community. We promote comradeship, wellbeing, and community through organised 
              social activities in a friendly and respectful environment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-4">
              <a 
                href="mailto:support@jssc.co.im" 
                className="hover:text-primary transition-colors duration-200"
              >
                support@jssc.co.im
              </a>
            </p>
            <p className="text-gray-300 text-sm mb-4">
              Based at the Manx Legion Club<br />
              Douglas, Isle of Man
            </p>
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.8!2d-4.4794!3d54.1509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA5JzAzLjIiTiA0wrAyOCc0NS44Ilc!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manx Legion Club Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Joint Services Social Club. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/refunds" className="hover:text-primary transition-colors duration-200">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
