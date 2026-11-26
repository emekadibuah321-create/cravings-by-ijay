# Cravings By Ijay Cake Academy (Next.js)

Next.js 15 (App Router) + TypeScript. No database and no backend.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit the content
- `lib/site.ts` - menu items, order options, gallery photos, opening hours, social and store links
- `app/page.tsx` - page sections and text
- `app/globals.css` - colours (light and dark), fonts and layout
- `public/images/` - cake photos (add new ones and list them in `lib/site.ts`)
- `components/OrderForm.tsx` - the order form that opens WhatsApp

## Deploy
Push to GitHub and import the repo on Vercel (framework: Next.js, no settings needed).
