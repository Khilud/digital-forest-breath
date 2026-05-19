## Changes

### 1. Header logo (`src/components/site/Header.tsx`)

- Shift logo slightly to the left by adding right padding/margin on the logo link (e.g. `ml-4 md:ml-6`).
- Increase logo size: from `h-20 md:h-24` → `h-24 md:h-28` (scrolled state from `h-14` → `h-16`).
- Keep the header container `max-w-7xl px-6 flex items-center justify-between` so nav stays right-aligned and vertically centered with the larger logo.

### 2. Home hero headline (`src/routes/index.tsx`)

Current:

```
[script small] The breath
of the forest        ← big serif
```

New:

```
[script small] The breath of the
Forest               ← big serif (only "Forest" stays big)
```

- "The breath of the" → rendered in the **same small script style/size** as the current "The breath" (font-script, accent color, text-3xl md:text-5xl).
- "Forest" → rendered in the **same big serif style/size** as the current "of the forest" (font-serif, text-5xl md:text-7xl lg:text-8xl).

No other content, colors, or layout changes.