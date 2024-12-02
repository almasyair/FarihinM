function Porotofolio() {
  return (
    <>
      <div className="main-container">
        <div className="nav">
          <div className="logos">
            <a href="/about">
              <img src="../images/homeIkon.png" alt="Home Icon" /></a>
          </div>
          <nav>
            <ul>
              <li><a href="/about">About me</a></li>
              <li><a href="#portfolios">Portofolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a href="/resume.pdf" target="_blank">
                  <button className="btn">Resume</button>
                </a>
              </li>
            </ul>
          </nav>

          <div className="burger">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>
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
                  <h4>Gojek Deskop</h4>
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
                  <div>Prototype</div>
                </div>
                <p>Saya sengaja membuat tampilan ini untuk mengasah skill saya di figma.
                </p>
              </div>
            </div>
            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="../images/projek1.png"
                  alt=""
                />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>Gojek Deskop</h4>
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
                  <div>Prototype</div>
                </div>
                <p>Saya sengaja membuat tampilan ini untuk mengasah skill saya di figma.
                </p>
              </div>
            </div>


            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="../images/projek1.png"
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
                  <div>Vue</div>
                  <div>Contentful</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  eligendi cupiditate asperiores nam, beatae repudiandae expedita
                  fugit, quos dicta ut unde rerum vero repellat vitae.
                </p>
              </div>
            </div>

            <div className="portfolio">
              <div className="portfolio-cover">
                <img
                  src="../images/projek1.png"
                  alt="Portfolio 1"
                />
              </div>
              <div className="portfolio-info">
                <div className="portfolio-title">
                  <h4>Dashboard Admin</h4>
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
                  <div>Materialize</div>
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


      <section id="services">
        <div className="services main-container fade-in">
          <h3 className="pre-title">Services</h3>
          <h1 className="section-title services-title">Specialized In</h1>

          <div className="grid-3">
            <div className="service">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z"
                  />
                </svg>
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Turn what you have in mind of a digital product into reality. For
                any platform you consider.
              </p>
            </div>

            <div className="service">
              <div className="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm0-16c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm-1.577-1.721l-6.423-5.028v-3.352c-.323.066-.658.101-1 .101s-.677-.035-1-.101v3.352l-6.424 5.028c.695.233 1.323.602 1.844 1.093l5.58-4.372 5.579 4.373c.522-.492 1.15-.861 1.844-1.094z"
                  />
                </svg>
              </div>
              <h4>Editing/ Fotography</h4>
              <p>
                Standard designing, building, and implementing your applications
                with documentation.
              </p>
            </div>

            <div className="service">
              <div className="service-icon">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708"
                  />
                </svg>
              </div>
              <h4>Web Development</h4>
              <p>
                Create and maintain your websites and also take care of its
                performance and traffic capacity.
              </p>
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

          <div className="aboutme-right fade-in">
            <img src="../images/contact.png" alt="Person Standing" />
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

  )
}

export default Porotofolio
