/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AWS_API_ASSETS: string;
  readonly VITE_AWS_CLOUDFRONT: string;
  VITE_AWS_COGNITO_AUTH_CONFIG_AUTH: string;
  VITE_AWS_COGNITO_AUTH_CONFIG_ID: string;
  VITE_AWS_COGNITO_AUTH_CONFIG_URI: string;
  VITE_AWS_COGNITO_AUTH_CONFIG_TYPE: string;
  VITE_AWS_COGNITO_AUTH_CONFIG_SCOPE: string;
  VITE_AWS_COGNITO_LOGOUT_ID: string;
  VITE_AWS_COGNITO_LOGOUT_URI: string;
  VITE_AWS_COGNITO_LOGOUT_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
