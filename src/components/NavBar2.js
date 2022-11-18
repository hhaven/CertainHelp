import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/l2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Link } from "react-router-dom";

export const NavBar2 = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" sticky="top" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

            <Nav.Link href="home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="orgs" className={activeLink === 'orgs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('orgs')}>Organizaciones</Nav.Link>
            <Nav.Link href="pub" className={activeLink === 'pub' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pub')}>Campañas</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'metas' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('metas')}>Metas cumplidas</Nav.Link>
          
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <Link to ="/registro">
                <button className="vvd"><span>Empieza a ayudar</span></button>
              </Link>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
