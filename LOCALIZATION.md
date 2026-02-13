# Localization Setup

This project uses a simple localization system to organize content separately from components.

## Structure

```
messages/
  en/
    resume.json       # Resume section content
lib/
  i18n.ts            # Translation utilities
```

## How It Works

1. **Content Files**: All text content is stored in JSON files under `messages/en/`
2. **Translation Hook**: Use `useResumeTranslations()` from `@/lib/i18n` to access translations
3. **Type Safety**: TypeScript provides autocomplete and type checking for all translation keys

## Usage Example

```tsx
import { useResumeTranslations } from '@/lib/i18n';

export default function MyComponent() {
  const t = useResumeTranslations();
  
  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.summary.content}</p>
    </div>
  );
}
```

## Adding New Translations

### For Resume Section

Edit `messages/en/resume.json` to add or modify content:

```json
{
  "title": "Resume",
  "contact": {
    "email": "your@email.com"
  }
}
```

### For New Sections

1. Create a new JSON file: `messages/en/your-section.json`
2. Add import in `lib/i18n.ts`:
   ```ts
   import yourSectionMessages from '@/messages/en/your-section.json';
   
   export function useYourSectionTranslations() {
     return yourSectionMessages;
   }
   ```
3. Use in your component:
   ```tsx
   import { useYourSectionTranslations } from '@/lib/i18n';
   ```

## Adding More Languages

To add a new language (e.g., Spanish):

1. Create directory: `messages/es/`
2. Copy `messages/en/resume.json` to `messages/es/resume.json`
3. Translate all values (keep keys the same)
4. Update `lib/i18n.ts` to support language switching

## Benefits

- **Separation of Concerns**: Content is separate from UI logic
- **Easy Updates**: Change text without touching component code
- **Type Safety**: TypeScript ensures you don't have typos in translation keys
- **Future-Ready**: Easy to add multiple languages later
- **Collaboration**: Non-technical team members can update JSON files
