# Joint Services Social Club (JSSC) Website

A modern, responsive Next.js website for the Joint Services Social Club based in Douglas, Isle of Man.

## About the Project

This website serves the Joint Services Social Club, an inclusive, member-led social organisation that brings together serving and veteran members of the UK and Commonwealth Armed Forces, Emergency Services personnel, and those who support the Island's veteran community.

## Features

- **Modern Design**: Clean, professional design with a red, white, and black color palette
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Accessible**: Built with semantic HTML and accessibility best practices
- **Fast Performance**: Optimized Next.js application with server-side rendering
- **Easy Navigation**: Clear site structure with intuitive navigation

## Pages

- **Home**: Hero section, club introduction, purpose statement, and call-to-action
- **About**: Club history, mission, values, governance, and committee information
- **Membership**: Eligibility criteria, joining process, and renewal information
- **Events**: Upcoming events with detailed event cards
- **Sponsors**: Sponsor recognition and sponsorship opportunities
- **FAQ**: Expandable frequently asked questions
- **Contact**: Contact information and location details
- **Terms & Privacy**: Legal pages (placeholder content)

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd jssc
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
jssc/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── faq/               # FAQ page
│   ├── membership/        # Membership page
│   ├── privacy/           # Privacy policy page
│   ├── sponsors/          # Sponsors page
│   ├── terms/             # Terms & conditions page
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Button.tsx         # Button component
│   ├── Card.tsx           # Card component
│   ├── EventCard.tsx      # Event card component
│   ├── Footer.tsx         # Footer component
│   └── Header.tsx         # Header with navigation
└── public/                # Static assets

```

## Color Palette

The website uses a professional red, white, and black color scheme:

- **Primary Red**: `#c41e3a`
- **Dark Red**: `#8b1a2e`
- **Light Red**: `#dc2f4a`
- **Charcoal**: `#2d2d2d`
- **Soft Grey**: `#f5f5f5`
- **Off White**: `#fafafa`

## Components

### Reusable Components

- **Button**: Flexible button component with primary, secondary, and outline variants
- **Card**: Clean card component for content sections
- **EventCard**: Specialized card for displaying event information
- **Header**: Responsive navigation header with mobile menu
- **Footer**: Site footer with links and contact information

## Customization

### Updating Content

Content can be easily updated by editing the respective page files in the `app/` directory. Each page is a TypeScript React component with clearly structured sections.

### Styling

The color scheme and design tokens are defined in `app/globals.css`. Tailwind CSS classes are used throughout for consistent styling.

### Adding Pages

To add a new page:
1. Create a new folder in `app/` with the page name
2. Add a `page.tsx` file in that folder
3. Update the navigation links in `components/Header.tsx` and `components/Footer.tsx`

## Contact

For questions about the website or the JSSC:

**Email**: support@jssc.im

**Location**: Manx Legion Club, Douglas, Isle of Man

## License

This project is built for the Joint Services Social Club.

---

Built with ❤️ for the Armed Forces, Emergency Services, and veteran community of the Isle of Man.
