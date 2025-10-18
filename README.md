# My Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)

To check if you have Node.js installed, run:
\`\`\`bash
node --version
npm --version
\`\`\`

## Installation

1. **Extract the ZIP file** to your desired location
2. **Open terminal** in the project folder
3. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
   Or if you prefer pnpm:
   \`\`\`bash
   pnpm install
   \`\`\`

## Running the Project

### Development Mode
To run the portfolio locally with hot-reload:
\`\`\`bash
npm run dev
\`\`\`
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:
\`\`\`bash
npm run build
npm start
\`\`\`

## Customizing Your Portfolio

### Edit Your Information

1. **Hero/About Section** - Edit `components/hero.tsx`
   - Change your name, title, and introduction
   - Update social media links

2. **Skills Section** - Edit `components/skills.tsx`
   - Add or remove skills
   - Update skill icons and names

3. **Projects Section** - Edit `components/projects.tsx`
   - Add your projects with descriptions
   - Update project links and tags

4. **About Section** - Edit `components/about.tsx`
   - Write your bio and background
   - Add your stats/metrics

5. **Contact Section** - Edit `components/contact.tsx`
   - Update your email address
   - Add your resume file to the `public` folder

### Add Your Resume

1. Place your resume PDF in the `public` folder
2. Update the filename in `components/contact.tsx` (look for `href="/your-resume.pdf"`)

### Styling

- Colors and design tokens are in `app/globals.css`
- Tailwind CSS is used for styling - modify classes in component files
- The design uses a warm color palette with accent colors

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles and design tokens
├── components/
│   ├── hero.tsx           # Hero/About section
│   ├── skills.tsx         # Skills section
│   ├── projects.tsx       # Projects carousel
│   ├── about.tsx          # About/Bio section
│   ├── contact.tsx        # Contact section
│   └── ui/                # Reusable UI components
├── public/                # Static files (images, resume, etc.)
└── package.json           # Project dependencies
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Click "Deploy"

Your portfolio will be live in minutes!

### Deploy to Other Platforms

- **Netlify** - Connect your GitHub repo and deploy
- **GitHub Pages** - Build and push to gh-pages branch
- **Any Node.js hosting** - Run `npm run build && npm start`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Shadcn/ui** - Component library
- **React Icons** - Icon library

## Troubleshooting

### Port 3000 is already in use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Dependencies not installing
Try clearing npm cache:
\`\`\`bash
npm cache clean --force
npm install
\`\`\`

### Build errors
Make sure you're using Node.js v18 or higher:
\`\`\`bash
node --version
\`\`\`

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Happy coding! 🚀
