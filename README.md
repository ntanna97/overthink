# OVERTHINK — Four minds. One AI. Zero chill.

An eight-round cooperative/competitive AI party game. Built with Next.js App Router, TypeScript, Tailwind, and optional Supabase Postgres rooms. 45 seeded prompts and 192 role cards. **Solo mode requires no keys**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000, then select **Play now with bots**. No account is needed.

## Multiplayer setup

1. Create a Supabase project; run `supabase/schema.sql` in its SQL Editor.
2. Copy `.env.example` to `.env.local` and set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (from the Supabase project's server API keys).
3. **Do not put the service key in a NEXT_PUBLIC_ variable or commit `.env.local`.** RLS blocks client access; all room mutations use server-only API routes and compare-and-swap SQL.
4. Restart `npm run dev`; click **Create multiplayer room**. Share its URL or four-letter code.
5. Host starts once there are 3–6 players (humans or bots). All players use their own phones. Room views poll every 1.5 seconds. On refresh, the per-room httpOnly seat cookie reconnects the player.
6. Deploy to Vercel with the same environment variables and apply the SQL to your production Supabase instance.

Server validates submitted cards, tokens, votes, phases and role state. The database uses atomic version checks to prevent conflicting client updates. Timers are based on absolute server timestamps and advance when the next request arrives; **for production hard real-time expiry, add a scheduled worker/cron to tick idle rooms**. No service keys are delivered to browsers. Mid-game joins are not implemented. Host migration is not implemented. Server clock state is authoritative but bots currently act immediately.

## OpenAI integration

Optional `/api/ai` route requests a 1–2 sentence response with a 3.9-second timeout and a template fallback. `OPENAI_API_KEY` remains server-side. This route is independently callable but **not yet wired into the room's authoritative verdict**; the game uses deterministic text by default. Full moderation and model-based Shift Review remain future work. Never claim this is a complete OpenAI integration.

## Content and balancing

- `content/prompts.json`: prompts, Lean and hidden Trap.
- `content/cards/{role}.json`: editable voice decks.
- `lib/gameConfig.ts`: game timing, Coherence, Insight, bot settings.
- `lib/engine.ts`: shared rules and resolver for solo and server multiplayer.

## Verification and remaining work

This version adds real Supabase room infrastructure, server-validated room interactions, a lobby, code/link invites, browser reconnect, and a fuller contest-oriented UI path. It is **not** yet a verified 5/5 contest submission. Critical remaining items: production build and multi-browser QA, complete special ability implementations (targeting, Wildcard, Callback, Déjà Vu), robust no-reuse deck exhaustion, AI moderation, live full AI answers, 60-second guided tutorial, analytics, share image, timer scheduling, host migration and bot disconnect substitution. The game depends on correctly configured Supabase for multiplayer.

## Contest entry

Prepare a 1200 × 630 cover image, public deployed URL, project description and working demonstration before submission. Review the official deadline and eligibility independently.
