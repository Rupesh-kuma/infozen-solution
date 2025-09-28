import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// ✅ Swiper & FontAwesome CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import "./HeroSlider.css"; // 👈 CSS ko alag file me rakha hai (neeche diya hai)

const HeroSlider = () => {
    useEffect(() => {
        // === Activate Slide ===
        const activateSlide = (slide) => {
            if (!slide) return;

            const img = slide.querySelector(".fx-hero-1-slider-item-img img");
            if (img) {
                // Reset first (without transition)
                img.style.transition = "none";
                img.style.setProperty("--_i", "15%");
                img.style.setProperty(
                    "--_g",
                    "0% / 37% 45% no-repeat linear-gradient(#fff 0 0)"
                );
                img.style.filter = "blur(5px)";
                img.style.transform = "translateX(150px)";

                // Force reflow (important for restarting animation)
                void img.offsetWidth;

                // Animate to final state
                img.style.transition = "all 1s ease";
                img.style.setProperty("--_i", "0%");
                img.style.setProperty(
                    "--_g",
                    "0% / 50.1% 50.1% no-repeat linear-gradient(#fff 0 0)"
                );
                img.style.filter = "blur(0)";
                img.style.transform = "translateX(0)";
            }

            // === TEXT animation (with delays) ===
            setTimeout(() => {
                slide.querySelectorAll(".split-line > div").forEach((el, i) => {
                    el.style.transitionDelay = `${0.3 + i * 0.2}s`;
                    el.style.transform = "translateY(0)";
                });

                const span1 = slide.querySelector(".fx-hero-1-slider-item-pera span");
                if (span1) {
                    span1.style.transitionDelay = "1.2s";
                    span1.style.transform = "translateY(0)";
                }

                const span2 = slide.querySelector(".fx-hero-1-slider-item-btn span");
                if (span2) {
                    span2.style.transitionDelay = "1.5s";
                    span2.style.transform = "translateY(0)";
                }
            }, 100);
        };

        // === Deactivate Slide ===
        const deactivateSlide = (slide) => {
            if (!slide) return;

            const img = slide.querySelector(".fx-hero-1-slider-item-img img");
            if (img) {
                img.style.transition = "none";
                img.style.setProperty("--_i", "15%");
                img.style.setProperty(
                    "--_g",
                    "0% / 37% 45% no-repeat linear-gradient(#fff 0 0)"
                );
                img.style.filter = "blur(5px)";
                img.style.transform = "translateX(150px)";
                void img.offsetWidth;
                img.style.transition = "all 0.5s ease";
            }

            slide.querySelectorAll(".split-line > div").forEach((el) => {
                el.style.transitionDelay = "0s";
                el.style.transform = "translateY(100%)";
            });

            const span1 = slide.querySelector(".fx-hero-1-slider-item-pera span");
            if (span1) {
                span1.style.transitionDelay = "0s";
                span1.style.transform = "translateY(100%)";
            }

            const span2 = slide.querySelector(".fx-hero-1-slider-item-btn span");
            if (span2) {
                span2.style.transitionDelay = "0s";
                span2.style.transform = "translateY(100%)";
            }
        };

        // === Swiper Event Binding ===
        const swiperEl = document.querySelector(".fx-hero-1-slider")?.swiper;
        if (swiperEl) {
            swiperEl.on("init", function () {
                activateSlide(this.slides[this.activeIndex]);
            });
            swiperEl.on("slideChangeTransitionStart", function () {
                this.slides.forEach((slide, index) => {
                    if (index !== this.activeIndex) deactivateSlide(slide);
                });
            });
            swiperEl.on("slideChangeTransitionEnd", function () {
                activateSlide(this.slides[this.activeIndex]);
            });
        }
    }, []);


    return (
        <div className="fx-hero-1-area">
            <Swiper
                className="fx-hero-1-slider"
                modules={[Pagination, Autoplay, EffectFade]}
                speed={50}
                effect="fade"
                loop={true}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
                {/* ✅ Slide 1 */}
                <SwiperSlide>
                    <div className="fx-hero-1-slider-item">
                        <div className="fx-hero-1-slider-item-img">
                            <img
                                src="https://html.themexriver.com/forgex/assets/img/hero/h1-img-3.png"
                                alt="Slide 1"
                            />
                        </div>
                        <div className="fx-hero-1-slider-item-content">
                            <h6 className="fx-hero-1-slider-item-number">
                                <span>01</span>
                                <span>/</span>
                                <span>04</span>
                            </h6>
                            <h1 className="fx-hero-1-slider-item-title">
                                <div className="split-line"><div>Innovative</div></div>
                                <div className="split-line"><div>Solutions for</div></div>
                                <div className="split-line"><div>Modern</div></div>
                                <div className="split-line"><div>Industries</div></div>
                            </h1>
                            <p className="fx-hero-1-slider-item-pera">
                                <span>Cutting-edge solutions to elevate your industry.</span>
                            </p>
                            <div className="fx-hero-1-slider-item-btn">
                                <span>
                                    <a class="btn_main" href="#">
                                        <span class="btn-wrap">
                                            <span class="btn-text1">Let’s Talk With Us</span>
                                            <span class="btn-text2">Let’s Talk With Us</span>
                                        </span>
                                    </a>

                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* ✅ Slide 2 */}
                <SwiperSlide>
                    <div className="fx-hero-1-slider-item">
                        <div className="fx-hero-1-slider-item-img">
                            <img
                                src="https://html.themexriver.com/forgex/assets/img/hero/h1-img-2.png"
                                alt="Slide 2"
                            />
                        </div>
                        <div className="fx-hero-1-slider-item-content">
                            <h6 className="fx-hero-1-slider-item-number">
                                <span>02</span>
                                <span>/</span>
                                <span>04</span>
                            </h6>
                            <h1 className="fx-hero-1-slider-item-title">
                                <div className="split-line"><div>Smart</div></div>
                                <div className="split-line"><div>Engineering</div></div>
                                <div className="split-line"><div>For</div></div>
                                <div className="split-line"><div>Industries</div></div>
                            </h1>
                            <p className="fx-hero-1-slider-item-pera">
                                <span>Advanced engineering solutions for tomorrow.</span>
                            </p>
                            <div className="fx-hero-1-slider-item-btn">
                                <span>
                                    <a class="btn_main" href="#">
                                        <span class="btn-wrap">
                                            <span class="btn-text1">Let’s Talk With Us</span>
                                            <span class="btn-text2">Let’s Talk With Us</span>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* ✅ Pagination */}
            <div className="fx-hero-1-pagination swiper-pagination"></div>
        </div>
    );
};

export default HeroSlider;
