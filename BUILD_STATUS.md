# Build status

This ZIP contains the complete source project for the Shri Andavar Clear Sight website.

Verified locally:
- TypeScript/TSX source parsing: PASS
- JSON parsing: PASS
- Route/component source is present
- Nine launch page renderer is implemented

Not verified in this container:
- `npm install` / `next build` because the environment cannot reach the npm registry.
- Browser visual QA because dependencies could not be installed.
- Production Anek Tamil WOFF2 files could not be fetched in this environment; `public/fonts/README.md` documents the exact files to place there before launch. The CSS uses a Tamil-capable system fallback until those licensed local files are added.

The source is intentionally kept dependency-light and follows the chosen Next.js App Router + TypeScript + Tailwind CSS 4 + next-intl architecture.
