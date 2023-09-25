import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { Link, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="headerStyle"
        bg="dark"
        variant="dark"
      >
        <Container className="headerContainer">
          <NavbarBrand href="/home" className="">
            {/* <img
              src={doc}
              height="30"
              width="180"
              className="d-inline-block"
              alt="Logo"
            /> */}
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className=" header_button">
              {/* {show ? (
                <Link
                  to="/home"
                  className={activeLink === "/home" ? "active" : ""}
                >
                  Головна
                </Link>
              ) : null}
              {!show ? (
                <Link
                  to="/login"
                  className={
                    activeLink === "/login"
                      ? "active ms-auto btn enterStyle"
                      : "ms-auto btn enterStyle"
                  }
                >
                  Вхід
                </Link>
              ) : null}
              {show ? (
                <div className="exitMailWrap">
                  <NavDropdown
                    title={`${nameUser} ${surnameUser}`}
                    className="dropSelect"
                  >
                    <span className="mailUser">{mailUser}</span>
                    {show ? (
                      <Link
                        to="/aboutuser"
                        className={activeLink === "/aboutuser" ? "active" : ""}
                      >
                        Налаштування
                      </Link>
                    ) : null}
                    {admin ? (
                      <Link
                        to="/adminpage"
                        className={activeLink === "/adminpage" ? "active" : ""}
                      >
                        Адміністратор
                      </Link>
                    ) : null}
                  </NavDropdown>
                  <span className="exitBtn btn enterStyle" onClick={logOut}>
                    Вийти
                  </span>
                </div>
              ) : null} */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
