import Button from './Button';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description?: string;
  details?: string[];
}

export default function EventCard({ title, date, time, description, details }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:gap-4 text-white/90">
          <p className="font-semibold">{date}</p>
          <p>{time}</p>
        </div>
      </div>
      <div className="p-6">
        {description && (
          <p className="text-gray-700 mb-4">{description}</p>
        )}
        {details && details.length > 0 && (
          <ul className="space-y-2 mb-6">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        )}
        <Button href={`/contact?event=${encodeURIComponent(title)}`} variant="primary">Join Event</Button>
      </div>
    </div>
  );
}
