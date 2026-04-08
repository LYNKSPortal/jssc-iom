import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-md font-semibold transition-all duration-200 text-center';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
    secondary: 'bg-charcoal text-white hover:bg-[#1a1a1a] shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
