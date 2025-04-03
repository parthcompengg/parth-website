import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Parth Shah</h2>
        <h1>Technology Lead at <a href="https://infosys.com/"> Infosys</a> </h1>
        <p><a href="mailto:parthcompengg@gmail.com<">parthcompengg@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I&apos;m Parth. At heart, I&apos;m a builder and innovator, with a passion for crafting software that enriches lives. With a solid foundation in <a href="https://oregonstate.edu/">Computer Science</a>  from Oregon State University, I excel in translating complex problems into user-friendly applications. My journey in the tech industry has been marked by significant contributions to diverse organizations, including <a href="https://imriel.com/">IMRIEL - Software made simple</a>, <a href="https://www.ehiehr.com/">Enable Healthcare Inc.</a>, and <a href="http://www.kreativeapps.com/">Kreative Apps</a>, where I honed my skills in developing smart business applications.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Know More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Parth Shah <Link to="/">ppshah.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
