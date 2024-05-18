## Learn Next Auth(Version 5)

## Getting Started

- First, install dependencies using,
  
  ```bash
  npm install
  ```

- Create a `.env` file at the root of the project folder with the following content:
  
  ```bash
  GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
  GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_ID>
  GITHUB_CLIENT_ID=<YOUR_GITHUB_CLIENT_ID>
  GITHUB_CLIENT_SECRET=<YOUR_GITHUB_CLIENT_ID>
  AUTH_SECRET="Auth Secret"
  ```
- Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.