import React from "react";
import { Illustration, Title, Input, Button, Text } from "../../components";
import { MainLayout } from "../../layouts";
import ForgotPasswordImg from "../../assets/images/forgot-password-img.svg";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  return (
    <MainLayout>
      <Illustration src={ForgotPasswordImg} />
      <Title
        text="Forgot Password"
        style={{ marginTop: 36, marginBottom: 36 }}
      />
      <Input placeholder="example@email.com" style={{ marginBottom: 36 }} />
      <Button
        onClick={() => {
          console.log("myButton");
        }}
      >
        Reset
      </Button>

      <Text align="center" secondary style={{ marginTop: 200 }}>
        Already have an account? <Link to="/"> Login here</Link>
      </Text>
    </MainLayout>
  );
}
