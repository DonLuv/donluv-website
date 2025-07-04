/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  // Add other VITE_ environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
