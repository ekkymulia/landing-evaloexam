'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function NavbarLanding() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [subMenuArray, setSubMenuArray] = useState([]);
  const [subMenuTextArray, setSubMenuTextArray] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size and update isMobile state
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 991);
  };

  useEffect(() => {
    // Check screen size on initial render
    checkScreenSize();

    // Set up a resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const showSubMenu = (hasChildren) => {
    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuArray((prev) => [...prev, subMenu.id]);
    setSubMenuTextArray((prev) => [
      ...prev,
      hasChildren.querySelector(".drop-trigger").textContent,
    ]);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
  };

  const handleMenuClick = (e) => {
    if (!isMenuActive) return;

    const hasChildren = e.target.closest(".nav-item-has-children");
    if (hasChildren) {
      showSubMenu(hasChildren);
    }
  };

  const handleGoBack = () => {
    // Logic to handle submenu navigation when going back
  };

  return (
    <header className="site-header bg-white is--white py-3 fixed top-0 w-full z-40">
      <div className="container-default">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          <a href="/" className="flex gap-2 items-center">
            <Image src={`/images/evaloexam-logo.jpeg`} alt="" width="48" height="48" />
            <p className="text-2xl font-bold text-black">EvaloExam</p>
          </a>
          <div className="menu-block-wrapper">
            {/* Menu Overlay */}
            <div
              className={`menu-overlay ${isMenuActive ? "active" : ""}`}
              onClick={toggleMenu}
            />
            <nav
              className={`menu-block ${isMenuActive ? "active" : ""}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div className="go-back" onClick={handleGoBack}>
                  <i className="fa-solid fa-angle-left" />
                </div>
                <div className="current-menu-title" />
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  ×
                </div>
              </div>
              <ul className="site-menu-main" onClick={handleMenuClick}>
                <li className="nav-item nav-item-has-children">
                  <a href="/" className="nav-link-item drop-trigger">
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link-item">
                    Tentang Kami
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/pricing" className="nav-link-item">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Header User Event */}
          <div className="flex items-center gap-6">
            {/* <a
              href="/api/auth/signin?callbackUrl=http%3A%2F%2Fexamai.web.id%3A3000%2Fcheck-profile"
              className="btn-text hidden hover:text-cyan-400 sm:inline-block"
            >
              Masuk akun lain
            </a> */}
            <a
              href="https://examai.web.id"
              className="btn is-black btn-animation group hidden rounded sm:inline-block"
            >
              <span>Masuk ke Aplikasi</span>
            </a>

            {/* Responsive Offcanvas Menu Button */}
            <div className="block lg:hidden">
              <button
                id="openBtn"
                className="hamburger-menu mobile-menu-trigger"
                onClick={toggleMenu}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
