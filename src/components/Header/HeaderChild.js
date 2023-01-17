import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
const HeaderChild = ({ userInfo }) => {
  const [metr, setMetr] = useState("");
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    var navlist = document.getElementById("navbar");
    if (window.pageYOffset > metr) {
      navlist.classList.add("sticky");
    } else {
      navlist.classList.remove("sticky");
    }
  }
  //////////
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  /////
  useEffect(() => {}, [userInfo]);

  return (
    <header
      id="header"
      ref={(el) => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if (!el) return;

        console.log(el.getBoundingClientRect().bottom); // prints 200px
        setMetr(el.getBoundingClientRect().bottom);
      }}
    >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container fluid>
          <Navbar.Brand href="/">اتو امیر</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">صفحه اصلی</Nav.Link>
              <Nav.Link href="/about">درباره ما</Nav.Link>
            </Nav>
            {userInfo ? (
              <NavDropdown
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/dashboard">
                  داشبورد مدیریت
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">ورود</Nav.Link>
            )}
            <Nav>
              <Nav.Link href="#deets">لیست ماشین ها</Nav.Link>
            </Nav>

            {/* <Nav>
              <Nav.Link href="/login">ورود</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderChild;
