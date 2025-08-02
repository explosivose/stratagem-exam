
# About

I'm creating a satirical exam for Helldivers 2 players.

https://helldiverstrainingmanual.com/stratagems

## Project Vision

A satirical examination platform that tests Helldivers 2 players on their stratagem knowledge and tactical prowess. The interface should evoke the in-game computer terminals with a militaristic, sci-fi aesthetic reminiscent of the Super Earth democracy.

## Tools & Stack

- **Framework**: Astro.build for static site generation and Alpine.js for interactivity
- **Styling**: Tailwind CSS 4 for responsive, utility-first styling
  - Note that Astro CSS styles are locally scoped and do not affect other pages.
  - Global styles are defined in the `global.css` file.
  - If needed, there is also a `:global` selector for sharing styles with child components.
- **Code Formatting**: Prettier for consistent code style
- **Deployment**: TBD (Vercel/Netlify recommended for Astro)

## Design Requirements

- **Theme**: Helldivers computer interface aesthetic
- **Colors**: Military terminal colors (amber/green on dark backgrounds)
- **Typography**: Monospace fonts for that terminal feel
- **UI Elements**:
  - Retro computer terminal styling
  - Stratagem input sequences
  - Score tracking and leaderboards
  - Timer functionality for timed exams

## Features

- **Stratagem Recognition**: Visual and input-based stratagem identification
- **Difficulty Levels**: Cadet, Veteran, Helldiver difficulty tiers
- **Satirical Elements**: Humorous Super Earth propaganda integration

## Development Commands

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run lint` - Run linting
- `pnpm run format` - Format code with Prettier

## Content Sources

- Official Helldivers 2 stratagem database
- Community tactical guides
- In-game lore and terminology

# important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
ALWAYS prefer Alpine.js for interactivity.
ALWAYS prefer Tailwind CSS for styling.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
