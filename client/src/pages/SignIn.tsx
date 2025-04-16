import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useAuth } from "react-oidc-context";

export const SignIn = () => {
  const auth = useAuth();
  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_AWS_COGNITO_LOGOUT_ID;
    const logoutUri = import.meta.env.VITE_AWS_COGNITO_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_AWS_COGNITO_LOGOUT_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div></div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <CustomButton
        onClick={() => {
          auth.removeUser().then(() => {
            signOutRedirect();
          });
        }}
      >
        Sign Out
      </CustomButton>
    );
  }

  return (
    <CustomButton
      onClick={() => {
        auth.signinRedirect();
      }}
    >
      Sign In
    </CustomButton>
  );
};

const CustomButton = styled(Button)({
  color: "#f7f9f6",
  fontFamily: '"Inter", sans-serif',
  fontOpticalSizing: "auto",
  fontStyle: "normal",
  fontSize: "inherit",
  "&:hover": {
    backgroundColor: "#f7f9f615",
  },
}) as typeof Button;
