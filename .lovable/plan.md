The current `src/assets/logo-borgo.png` has a fern leaf that's too tall — it spans the full height of the wordmark. In the reference screenshot, the leaf is roughly the height of just the "MUSOLINO" line (about 50–60% of the current leaf's height) and sits to the left of the wordmark, vertically centered.

### Fix
Use `imagegen--edit_image` on the existing `src/assets/logo-borgo.png` to:
- Shrink the gold fern leaf so it matches the height of the "MUSOLINO" capitals (as in the reference)
- Keep the leaf's exact shape, gold color, and left-side position
- Leave everything else unchanged: "Borgo" script, "MUSOLINO" caps, gold rule + diamonds, "FOREST EXPERIENCE" tagline, all cream/ivory color, transparent background

No code changes — only the asset is regenerated.