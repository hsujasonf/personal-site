# Component Styles

This directory contains CSS modules for shared component styles used throughout the application.

## File Structure

```
styles/
└── shared.module.css    # Reusable component styles
```

## Available CSS Classes

### Headers
- **`headerWithOutline`** - Adds teal outline to large headers (used on Hero, About, Resume)

### Cards
- **`card`** - Basic card with border and rounded corners
- **`cardHoverable`** - Interactive card with hover effects (teal border, shadow)

### Badges
- **`badge`** - Base badge style
- **`badgeClickable`** - Interactive badge with hover effects (for links)
- **`badgeStatic`** - Non-interactive badge (lighter text color)

### Buttons
- **`buttonPrimary`** - Solid button with fill
- **`buttonSecondary`** - Outline button with border

### Skill Tags
- **`skillTag`** - Base skill tag style
- **`skillTagPrimary`** - Black/white background skill tags
- **`skillTagSecondary`** - Gray background skill tags
- **`skillTagOutline`** - Border-only skill tags

### Modal Components
- **`modalOverlay`** - Full-screen dark overlay with blur
- **`modalContent`** - Modal container with border and shadow
- **`modalHeader`** - Sticky modal header
- **`modalCloseButton`** - Close button with hover effect

### Experience Components
- **`experienceLogo`** - Company logo container (16x16)
- **`experienceLogoLarge`** - Larger logo container for modal (20x20)
- **`chevronIcon`** - Chevron arrow with hover effect

## Usage

Import the styles in your component:

```tsx
import styles from './styles/shared.module.css';

const MyComponent = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.headerWithOutline}>Title</h2>
      <button className={styles.buttonPrimary}>Click me</button>
    </div>
  );
};
```

### Combining with Tailwind

You can combine module classes with Tailwind utilities:

```tsx
<div className={`${styles.card} p-6 mb-4`}>
  Content here
</div>
```

## Benefits

1. **Reusability** - Common patterns defined once, used everywhere
2. **Consistency** - All similar components use the same styles
3. **Maintainability** - Update styles in one place
4. **Type Safety** - CSS modules provide autocomplete in TypeScript
5. **Scoped Styles** - CSS modules prevent naming conflicts

## Updating Styles

To modify a component style:

1. Open `shared.module.css`
2. Find the class you want to update
3. Modify the styles
4. All components using that class will automatically update

## Adding New Styles

When adding a new reusable component style:

1. Add the class to `shared.module.css`
2. Use Tailwind's `@apply` directive for utility classes
3. Document it in this README
4. Use it in your components by importing the styles module

Example:

```css
/* In shared.module.css */
.myNewComponent {
  @apply bg-white dark:bg-black p-4 rounded-lg;
  @apply hover:shadow-lg transition-all;
}
```

```tsx
// In your component
import styles from './styles/shared.module.css';

<div className={styles.myNewComponent}>
  Content
</div>
```
