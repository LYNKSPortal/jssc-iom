import EventCard from '@/components/EventCard';

export default function Events() {
  const events = [
    {
      title: '1950s Rock Evening',
      date: '27 June 2026',
      time: '19:00 – 23:45',
      description: 'Step back in time and enjoy an evening of classic 1950s rock and roll music.',
    },
    {
      title: 'Summer Dining Train',
      date: '21 August 2026',
      time: '18:45 – 22:30',
      description: 'A scenic railway journey combined with a delightful dining experience.',
    },
    {
      title: 'Christmas Event',
      date: '12 December 2026',
      time: '18:30 – 23:30',
      description: 'Celebrate the festive season with fellow members at our annual Christmas gathering.',
      details: [
        'Pre-drinks on arrival',
        '3-course meal',
        'Live entertainment',
        'Great company and festive atmosphere'
      ]
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/90">
            Join us for social gatherings, celebrations, and community activities throughout the year
          </p>
        </div>
      </section>

      <section className="py-16 bg-grey-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our events bring members together to enjoy shared experiences, build friendships, 
              and strengthen our community bonds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                details={event.details}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Members receive regular updates about upcoming events, activities, and Club news. 
            Join the JSSC to never miss out on our community gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/membership"
              className="inline-block px-8 py-3 rounded-md font-semibold transition-all duration-200 text-center bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
            >
              Become a Member
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-md font-semibold transition-all duration-200 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
