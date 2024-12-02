import React from 'react';
import '../Style/Home.css'; // Correct path
function Home() {
    const navSlide = () => {
        const burger = document.querySelector(".burger");
        const navlist = document.querySelector("nav");

        burger.addEventListener("click", () => {
        navlist.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
        } );
    }
    return (
        <>
            <div className="main-container">
                <div className="nav">
                    <div className="logo">
                        <a href="/">FaRs.</a>
                    </div>
                    <nav>
                        <ul>
                            <li><a onClick={() => window.location.href = '/about'} href="#/about">Services</a></li>
                            <li><a onClick={() => window.location.href = '/about'} href="#/about">Portfolio</a></li>
                            <li><a onClick={() => window.location.href = '/about'} href="#/about">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li>
                                <a href="/resume.pdf" target="_blank">
                                    <button className="btn">Resume</button>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div  className="burger">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                </div>
                <section id="hero">
                    <div className="hero-left fade-in">
                        <h3 className="pre-title ">Muhammad Farihin Mushawwir</h3>
                        <h1 className="hero-name">UI/UX Designer | Web Development</h1>
                        <p>Saya merupakan seorang UI/UX designer pemula dan web devoleper dengan bahasa pemograman dan tools yang masi dasar, saya sangat menyukai javaScript dan Mysql.
                        </p>
                        <button className="btn-primary" onClick={() => window.location.href = '/about'}>Selengkapnya</button>
                        <button className="btn-primaryy" onClick={() => window.location.href = '/#contact'}>Contact</button>
                    </div>
                    <div className="aboutme-right fade-in">
                        <img src="../images/logo.png" alt="Person Standing" />
                    </div>

                </section>

            </div>
            <section id="contact">
                <div className="contact main-container">
                    <div className="contact-left">
                        <form
                            action="https://formspree.io/f/xnnqlpka"
                            method="POST"
                            class="contact-form"
                        >
                            <div>
                                <input type="text" placeholder="Name" name="name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" name="email" />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <div>
                                <button className="btn-submit">Send Message</button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-right">
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z"
                                    />
                                </svg>
                            </div>
                            <div className="contact-item-detail">
                                <h4>Address</h4>
                                <p>Makassar, Sulawesi Selatan</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"
                                    />
                                </svg>
                            </div>
                            <div className="contact-item-detail">
                                <h4>Phone</h4>
                                <p>0812345678</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
                                    />
                                </svg>
                            </div>
                            <div className="contact-item-detail">
                                <h4>Email</h4>
                                <p>mfarihinmushawwir@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <footer>
                <div className="footer-icons">
                    <a href="#">
                        <h1>FaRs.</h1>
                        <p>Muhammad Farihin Mushawwir</p>
                        <p>Teknik Informatika</p>
                    </a>
                </div>
                <p>&#169; 2024 - Made by FarihinM</p>
            </footer>

        </>
    );
}

export default Home;
