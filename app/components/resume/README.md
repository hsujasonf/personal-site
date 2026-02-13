# Resume Components

This directory contains all the modular components that make up the Resume section.

## Component Structure

```
resume/
├── types.ts                  # Shared TypeScript interfaces
├── ContactInfo.tsx           # Contact information and title
├── ProfessionalSummary.tsx   # Professional summary card
├── TechnicalSkills.tsx       # Skills grid (core, mobile, additional)
├── WorkExperience.tsx        # Work experience list with modal logic
├── ExperienceCard.tsx        # Individual experience card
├── ExperienceModal.tsx       # Expanded experience modal
└── README.md                 # This file
```

## Components

### `Resume.tsx` (Parent)
The main resume section that composes all sub-components together.

**Location:** `app/components/Resume.tsx`

**Responsibilities:**
- Layout container
- Composes all resume sub-components

### `ContactInfo.tsx`
Displays the resume title and contact information badges.

**Features:**
- Email (clickable)
- Phone number
- Location
- LinkedIn (clickable)

### `ProfessionalSummary.tsx`
Professional summary card with gradient background.

**Features:**
- Animated hover effects
- Emoji icon
- Localized content

### `TechnicalSkills.tsx`
Three-column grid displaying technical skills by experience level.

**Features:**
- Core Skills (8+ years)
- Mobile Skills (2+ years)
- Additional Skills
- Hover animations on individual skills

### `WorkExperience.tsx`
Manages the work experience section including the expandable modal.

**Responsibilities:**
- Renders experience cards
- Manages modal state (which experience is expanded)
- Prevents body scroll when modal is open

**State:**
- `expandedIndex: number | null` - Tracks which experience is expanded

### `ExperienceCard.tsx`
Individual clickable card for each work experience.

**Props:**
- `experience: Experience` - The experience data
- `onClick: () => void` - Handler when card is clicked

**Features:**
- Company logo
- Job title, company, period
- Hover effects
- Chevron icon

### `ExperienceModal.tsx`
Full-screen modal showing detailed experience information.

**Props:**
- `experience: Experience` - The experience data
- `onClose: () => void` - Handler to close modal

**Features:**
- Sticky header with close button
- Overview section
- Product screenshot (if available)
- Technologies used
- Key achievements
- Responsibilities & impact
- Click outside to close
- Smooth animations

### `types.ts`
Shared TypeScript interfaces used across resume components.

**Exports:**
- `Experience` - Interface for work experience data

## Data Flow

```
messages/en/resume.json
        ↓
    lib/i18n.ts (useResumeTranslations hook)
        ↓
    Resume Components
```

All text content comes from the localized JSON file via the translation hook.

## Styling

- Uses Tailwind CSS utility classes
- Responsive design (mobile-first)
- Dark mode support
- Smooth transitions and animations
- Consistent spacing and typography

## Best Practices

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: Components can be easily reused or modified
3. **Type Safety**: All props and data are typed with TypeScript
4. **Separation of Concerns**: Logic, presentation, and data are separated
5. **Maintainability**: Easy to locate and update specific features

## Adding New Experience

To add a new work experience:

1. Edit `messages/en/resume.json`
2. Add a new entry to the `experience.jobs` array
3. Include all required fields: `id`, `title`, `company`, `logo`, `period`, `highlights`, `detailedInfo`
4. Add company logo to `/public/`
5. Add product screenshot to `/public/` (optional)

No component code changes needed!

## Modifying Styles

Each component is self-contained with its own styles. To modify:

1. Open the specific component file
2. Update the Tailwind classes
3. Changes are isolated and won't affect other components
