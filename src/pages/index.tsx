import * as React from "react";
import { useState, useEffect } from "react";

import { css } from "@emotion/react";

import { auth } from "util/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const HomePage: React.FC = () => {
  const [signInWithEmail, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loading) {
      return;
    }
    console.log(user);
  }, [user]);

  const submit = async () => {
    await signInWithEmail(email, password);
  };

  return (
    <div css={container}>
      <div css={inputContainer}>
        <input css={emailInput} name="email" type="email" placeholder="メールアドレス" onChange={(e) => setEmail(e.target.value)} />
        <input css={passwordInput} name="password" type="password" placeholder="パスワード" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button css={buttonStyle} onClick={submit}>
        登録
      </button>
    </div>
  );
};

const container = css`
  display: flex;
  flex-direction: column;
`;

const inputContainer = css`
  display: flex;
  flex-direction: row;
`;

const emailInput = css`
  height: 40px;
  width: 140px;
  border-radius: 20px;
  padding: 0 8px;
  font-size: var(--input-font-size);
`;

const passwordInput = css`
  height: 40px;
  width: 140px;
  border-radius: 20px;
  padding: 0 8px;
  font-size: var(--input-font-size);
`;

const buttonStyle = css`
  margin-top: 40px;
  width: 140px;
`;

export default HomePage;
