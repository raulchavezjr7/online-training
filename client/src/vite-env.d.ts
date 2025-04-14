/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AWS_API_ASSETS: string;
    readonly VITE_AWS_Cloudfront: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }