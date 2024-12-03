import React from 'react';
import '../Style/Home.css';
import '../Style/About.css'; // Correct path
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
                        <li><a href="#aboutsme">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                            <li>
                                <a href="/resume.pdf" target="_blank">
                                    <button className="btn">Resume</button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <section id="hero">
                    <div className="hero-left fade-in">
                        <h3 className="pre-title ">Muhammad Farihin Mushawwir</h3>
                        <h1 className="hero-name">UI/UX Designer | Web Development</h1>
                        <p>Saya merupakan seorang UI/UX designer pemula dan web devoleper dengan bahasa pemograman dan tools yang masi dasar, saya sangat menyukai javaScript dan Mysql.
                        </p>
                        <button className="btn-primary" onClick={() => window.location.href = '#skills'}>Selengkapnya</button>
                        <button className="btn-primaryy" onClick={() => window.location.href = '/#contact'}>Contact</button>
                    </div>
                    <div className="aboutme-right fade-in">
                        <img src="../images/logo.png" alt="Person Standing" />
                    </div>
                </section>
                <section id="aboutsme">
                    <div className="aboutsme-left fade-in">
                        <h1 className="hero-name">About me</h1>
                        <h3 className="pre-title ">Muhammad Farihin Mushawwir</h3>
                        <p>Saya merupakan seorang UI/UX Designer pemula dan Web Devoleper dengan bahasa pemograman dan tools yang masi dasar, saya sangat menyukai JavaScript, HTML, CSS.                           </p>
                        <a href="https://drive.google.com/file/d/1BEbPpXrfddn3x8_QUPRID4jk2onLESXX/view?usp=sharing" class="btn-secondary" target="_blank" rel="noopener noreferrer">
                            <button class="btn-secondary-button">Download CV</button>
                        </a>
                    </div>

                    <div className="aboutsme-right fade-in">
                        <img src="../images/ssection.png" alt="Person Standing" />
                    </div>
                </section>
            </div>
            <section id="skills">
                <div class="skills main-container fade-in">
                    <h3 classn="pre-title">Learning Path</h3>
                    <h1 className="section-title">Skills & Education</h1>

                    <div className="skills-grid">
                        <div className="skills-left">
                            <div className="education">
                                <div className="line">
                                    <div></div>
                                </div>
                                <div className="education-info">
                                    <h4 className="education-title">Universitas Muslim Indonesia</h4>
                                    <p>Teknik Informatika</p>
                                    <h4 className="education-years">2023</h4>
                                </div>
                            </div>
                            <div className="education">
                                <div className="line">
                                    <div></div>
                                </div>
                                <div className="education-info">
                                    <h4 className="education-title">MA Arifah</h4>
                                    <p>MIPA</p>
                                    <h4 className="education-years">2022</h4>
                                </div>
                            </div>
                            <div className="education">
                                <div className="line">
                                    <div></div>
                                </div>
                                <div className="education-info">
                                    <h4 className="education-title">SMPN 1 Sungguminasa</h4>
                                    <p>Pelajar</p>
                                    <h4 className="education-years">2019</h4>
                                </div>
                            </div>
                        </div>

                        <div className="skills-right">
                            <p>
                                Selama 2 tahun ini saya mengasah skill saya dangan
                                memanfaatkan teknologi dari bahasa pemograman
                                hingga aplikasi visual, saya gemar mengedit
                                video dan foto sejak saya duduk di bangku smp hingga saat ini.
                            </p>

                            <div className="skills-list">
                                <ul>
                                    <li>React JS</li>
                                    <li>C++</li>
                                    <li>MySql DB</li>
                                    <li>HTML</li>
                                </ul>

                                <ul>
                                    <li>CSS</li>
                                    <li>Figma</li>
                                    <li>Canva</li>
                                    <li>Lightroom</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
        <section id="services">
        <div className="services main-container fade-in">
          <h3 className="pre-title">Services</h3>
          <h1 className="section-title services-title">Specialized In</h1>

          <div className="grid-3">
            <div className="service">
              <div className="service-icon">
              <img src="../images/figma.png" alt="" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
              Membuat tampilan visual dengan aplikasi figma.
              </p>
            </div>
            <div className="service">
              <div className="service-icon">
              <img src="../images/fotography.png" alt="" />
              </div>
              <h4>Fotography</h4>
              <p>
               Menghasilkan foto dan video dengan ekspresif.
              </p>
            </div>
            <div className="service">
              <div className="service-icon">
              <img src="../images/editing.png" alt="" />
              </div>
              <h4>Editing</h4>
              <p>
              Membuat tampilan video dan foto menggunakan color grading ataupun typografi.
              </p>
            </div>
            <div className="service">
              <div className="service-icon">
              <img src="../images/web.png" alt="" />
              </div>
              <h4>Web Development</h4>
              <p>
                Membuat website sederhana hingga website fullstack.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolios">
        <div className="portfolios main-container fade-in">
          <h3 className="pre-title">My Works</h3>
          <h1 className="section-title">Featured Portfolios</h1>

          <div className="grid-3">
            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="../images/projek1.png"
                  alt=""
                />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>Tampilan Gojek</h4>
                  <a href="/" className="portfolio-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags">
                  <div>Figma</div>
                  <div>Canva</div>
                </div>
                <p>Saya sengaja membuat tampilan ini untuk mengasah skill saya melalui aplikasi figma yang bertujuan untuk mendesain tampilan sebelum masuk ke codingan.
                </p>
              </div>
            </div>  
            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="../images/projek2.png"
                  alt=""
                />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>Portofolio Web</h4>
                  <a href="/" className="portfolio-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags">
                  <div>React</div>
                  <div>CSS</div>
                </div>
                <p>Saya sengaja membuat tampilan ini untuk mengasah skill saya di melalui codingan dengan bahasa pemograman dan framework sederhana.
                </p>
              </div>
            </div>
            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="../images/projek3.png"
                  alt="Portfolio 1"
                />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>Landing Page</h4>
                  <a href="/" className="portfolio-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags">
                  <div>Figma</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  eligendi cupiditate asperiores nam, beatae repudiandae expedita
                  fugit, quos dicta ut unde rerum vero repellat vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
