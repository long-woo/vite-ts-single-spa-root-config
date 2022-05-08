/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_OUTDIR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}