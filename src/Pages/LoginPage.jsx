import React, { useState } from "react";
import Header from "../components/Header";
import "./LoginPage.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginPage() {
  const page = 2;
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function submit(e) {
    return false;
  }

  return (
    <div>
      <Header pageHanlder={page} />
      <div className="titleText">
        로그인할 아이디와 비밀번호를 입력해주세요.
      </div>
      <Form style={{ padding: "8px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          로그인
        </Button>
      </Form>
      {console.log("아이디:")}
    </div>
  );
}
