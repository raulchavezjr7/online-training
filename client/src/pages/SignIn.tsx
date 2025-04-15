// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export const SignIn = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<number>>;
}) => {

  const auth = useAuth();
console.log(auth)
  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_AWS_COGNITO_LOGOUT_ID;
    const logoutUri = import.meta.env.VITE_AWS_COGNITO_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_AWS_COGNITO_LOGOUT_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          setUser(0);
          auth.signinRedirect();
        }}
      >
        Sign in
      </button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
};

//   return (
//     <div>
//       <a href="#">login</a>
//       SignIn
//       <Button
//         onClick={(e) => {
//           setUser(parseInt((e.target as HTMLElement).innerText));
//         }}
//       >
//         <Link className="nav-link-small" to="/home">
//           0
//         </Link>
//       </Button>
//       <Button
//         onClick={(e) => {
//           setUser(parseInt((e.target as HTMLElement).innerText));
//         }}
//       >
//         <Link className="nav-link-small" to="/home">
//           1
//         </Link>
//       </Button>
//       <Button
//         onClick={(e) => {
//           setUser(parseInt((e.target as HTMLElement).innerText));
//         }}
//       >
//         <Link className="nav-link-small" to="/home">
//           2
//         </Link>{" "}
//       </Button>
//       <Button
//         onClick={(e) => {
//           setUser(parseInt((e.target as HTMLElement).innerText));
//         }}
//       >
//         <Link className="nav-link-small" to="/home">
//           3
//         </Link>
//       </Button>
//       <Button
//         onClick={(e) => {
//           setUser(parseInt((e.target as HTMLElement).innerText));
//         }}
//       >
//         <Link className="nav-link-small" to="/home">
//           4
//         </Link>
//       </Button>
//     </div>
//   );
// };
