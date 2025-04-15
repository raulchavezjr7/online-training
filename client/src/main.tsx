import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_AWS_COGNITO_AUTH_CONFIG_AUTH,
  client_id: import.meta.env.VITE_AWS_COGNITO_AUTH_CONFIG_ID,
  redirect_uri: import.meta.env.VITE_AWS_COGNITO_AUTH_CONFIG_URI,
  response_type: import.meta.env.VITE_AWS_COGNITO_AUTH_CONFIG_TYPE,
  scope: import.meta.env.VITE_AWS_COGNITO_AUTH_CONFIG_SCOPE,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);
