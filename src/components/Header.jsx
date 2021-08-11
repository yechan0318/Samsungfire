import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { BsFillPersonFill, BsList } from "react-icons/bs";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export default function Header(props) {
  const [login, setlogin] = useState(false);
  const moveToLoginPage = () => {
    document.location.href = "/LoginPage";
  };
  const moveToMainPage = () => {
    document.location.href = "/ ";
  };
  const page = props.pageHanlder;
  useEffect(() => {
    setlogin(window.document.location.pathname === "/LoginPage");
  }, []);

  return (
    <div className="header">
      <Container className="RowPadding-10 fontW">
        <Row>
          <Col>
            <Button
              onClick={moveToLoginPage}
              size="sm"
              variant="outline-primary"
              style={{
                color: "white",
                borderColor: "white",
                display: page === 2 ? "none" : "",
              }}
            >
              로그인
            </Button>{" "}
          </Col>
          <Col
            onClick={moveToMainPage}
            xs={5}
            className="headerName"
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            {login ? "로그인" : "삼성화재"}
            <IoChevronDownCircleOutline
              style={{ fontSize: "18px" }}
            ></IoChevronDownCircleOutline>
          </Col>
          <Col style={{ padding: "3px", textAlign: "center" }}>
            <BsFillPersonFill className="font-size-24"></BsFillPersonFill>{" "}
            <BsList
              className="font-size-27"
              style={{ paddingTop: "2px", display: page === 2 ? "none" : "" }}
            ></BsList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
