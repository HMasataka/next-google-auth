import * as React from "react";
import { useEffect } from "react";

import { css } from "@emotion/react";

import { auth } from "util/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import GoogleButton from "react-google-button";

const HomePage: React.FC = () => {
  const [signIn, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const signInWithGoogle = async () => {
    await signIn();
  };

  return (
    <div css={container}>
      <div css={buttonStyle}>
        <GoogleButton onClick={signInWithGoogle} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
`;

const buttonStyle = css`
  margin-top: 40px;
  width: 240px;
`;

export default HomePage;
