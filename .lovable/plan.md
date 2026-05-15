## Changes

### 1. Regenerate logo (`src/assets/logo-borgo.png`)
Use `imagegen--edit_image` with the user's uploaded reference (`Screenshot_2026-05-14_at_14.04.56.png`) to produce a new logo on a transparent background:
- "Borgo" (script) and "MUSOLINO" (serif caps) — both in the same cream/ivory color as MUSOLINO in the reference
- Gold fern leaf on the left — same size, same gold color, unchanged
- Tagline changed from "FOREST COUNTRY EXPERIENCE" to "FOREST EXPERIENCE", in the same cream/ivory color
- Transparent background, same overall layout

### 2. Remove "Home" nav item (`src/components/site/Header.tsx`)
- Delete the `{ to: "/", label: "Home" }` entry from the `nav` array
- Logo already links to `/` via the existing `<Link to="/">`, so clicking it navigates home
- Removing Home will let the remaining items (Experiences, Rooms, Dining & Bar, Events, About, Contact) center more evenly

No other files affected.