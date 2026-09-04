# Claude API Integration (Background Setup)

This branch adds infrastructure for Claude API integration to the THEUNOiA website. **No active features use it yet** — it's ready in the background.

## What's included

- **`src/lib/claude-client.ts`** — Server-side Claude client initialization and helpers
- **`src/app/api/claude/chat/route.ts`** — API endpoint ready to receive requests
- **`src/hooks/useClaudeChat.ts`** — Client-side React hook for calling the endpoint (future use)
- **`.env.local.example`** — Environment configuration template
- **`package.json`** — Added `@anthropic-ai/sdk` dependency

## To activate

1. **Get an API key** from [console.anthropic.com](https://console.anthropic.com/)
2. **Copy `.env.local.example` to `.env.local`** and add your key:
   ```bash
   cp .env.local.example .env.local
   ```
3. **Edit `.env.local`:**
   ```env
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   CLAUDE_MODEL=claude-3-5-sonnet-20241022
   CLAUDE_MAX_TOKENS=1024
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```

## Using it

### Server-side only

```typescript
import { askClaude } from "@/lib/claude-client";

const response = await askClaude(
  "Your question",
  "Optional system prompt"
);
console.log(response.content); // Claude's response
```

### Client component (when ready)

```tsx
import { useClaudeChat } from "@/hooks/useClaudeChat";

export function MyComponent() {
  const { sendMessage, loading, response, error } = useClaudeChat({
    systemPrompt: "You are a helpful assistant for THEUNOiA students."
  });

  const ask = async () => {
    await sendMessage("What skills should I learn?");
  };

  return (
    <>
      <button onClick={ask} disabled={loading}>Ask Claude</button>
      {response && <p>{response.content}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
```

## Environment variables

| Variable | Default | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | — | **Required.** Your Claude API key. |
| `CLAUDE_MODEL` | `claude-3-5-sonnet-20241022` | Model to use. |
| `CLAUDE_MAX_TOKENS` | `1024` | Max response length. |

## Notes

- The client is **server-side only**; calling it in a browser will throw an error.
- The API endpoint (`/api/claude/chat`) is ready but not yet wired to any UI.
- The `useClaudeChat` hook is ready for future features.
- **Never commit `.env.local`** (already in `.gitignore`).

## Next steps

When you're ready to use Claude:

1. Create a component that uses `useClaudeChat`
2. Add it to a page or section
3. Test with your API key
4. Update this branch or create a PR

---

**Branch:** `feature/claude-integration` on `professionalgptier/THEUNOiA-WebPage`
