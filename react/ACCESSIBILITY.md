# Accessibility Improvements (WCAG 2.1 AA)

## Semantic & ARIA
- Added `role="dialog"` and `aria-modal="true"` to modal.
- Used `aria-labelledby` and `aria-describedby` for modal headings & content.
- Timeline markers now have `role="button"`, `tabIndex="0"`, and `aria-label` for screen readers.
- Active timeline marker uses `aria-current="true"`.

## Keyboard Navigation
- Timeline markers navigable via Tab + Arrow keys.
- Modal traps focus inside when open.
- Modal closable with Escape key.
- Focus returns to the triggering marker on close.

## Contrast
- Verified text vs. background contrast meets WCAG AA (≥ 4.5:1).
- Adjusted link color to #4EA1F3 for better contrast.

## Other
- Close button in modal has `aria-label="Close dialog"`.
- Headings are hierarchical and descriptive.

✅ Meets WCAG 2.1 AA guidelines.
