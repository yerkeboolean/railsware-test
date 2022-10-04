import React from "react";
import {
  Title,
  Button,
  Illustration,
  Input,
  Text,
  SocialButtons,
} from "../../components";
import { MainLayout } from "../../layouts";
import LoginImg from "../../assets/images/login-img.svg";

import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <MainLayout>
      <Illustration src={LoginImg} style={{ marginTop: 32 }} />
      <Title text="Welcome back!" style={{ marginTop: 36, marginBottom: 36 }} />
      <Input placeholder="example@email.com" style={{ marginBottom: 36 }} />
      <Input password placeholder="password" />
      <Text align="right">
        <Link to="/reset">Forgot Password?</Link>
      </Text>
      <Button
        style={{ marginTop: 50 }}
        onClick={() => {
          console.log("myButton");
        }}
      >
        Log in
      </Button>
      <Text
        align="center"
        secondary
        style={{ marginTop: 50, marginBottom: 36 }}
      >
        Or connect with social
      </Text>
      <SocialButtons />
    </MainLayout>
  );
}
