# OctoFit Tracker Frontend

The frontend reads the backend Codespaces host from a Vite environment variable. Create `octofit-tracker/frontend/.env.local` and define:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API calls use:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When it is unset, the app safely falls back to `http://localhost:8000/api`, avoiding `https://undefined-8000...` URLs.

## Development

```bash
npm run dev --prefix octofit-tracker/frontend
```
