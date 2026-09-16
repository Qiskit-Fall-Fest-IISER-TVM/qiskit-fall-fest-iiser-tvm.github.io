import React, { useEffect, useRef, useState } from "react";

interface Milestone {
    year: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    citation: string;
    paper: string;
}

const milestones: Milestone[] = [
    {
        year: "1981 / 1982",
        title: "Can nature be simulated efficiently?",
        description:
            "Richard Feynman pointed out that simulating quantum systems with classical computers becomes increasingly difficult. He proposed using quantum systems themselves as computational devices.",
        image: "/assets/journey/feynman.png",
        imageAlt: "Richard Feynman and quantum simulation",
        citation:
            '[1] R. P. Feynman, "Simulating Physics with Computers," Int. J. Theor. Phys. 21, 467–488 (1982).',
        paper: "https://doi.org/10.1007/BF02650179",
    },

    {
        year: "1985",
        title: "The universal quantum computer",
        description:
            "David Deutsch formalized the idea of a universal quantum computer and showed how quantum mechanics could provide a general computational framework.",
        image: "/assets/journey/deutsch.png",
        imageAlt: "David Deutsch and the universal quantum computer",
        citation:
            '[2] D. Deutsch, "Quantum Theory, the Church–Turing Principle and the Universal Quantum Computer," Proc. R. Soc. A (1985).',
        paper: "https://doi.org/10.1098/rspa.1985.0070",
    },

    {
        year: "1992",
        title: "Quantum algorithms emerge",
        description:
            "The Deutsch–Jozsa algorithm provided an early example of a problem for which a quantum computer can require dramatically fewer queries than a deterministic classical computer.",
        image: "/assets/journey/deutsch-jozsa.png",
        imageAlt: "Deutsch Jozsa quantum algorithm",
        citation:
            '[3] D. Deutsch and R. Jozsa, "Rapid solution of problems by quantum computation," Proc. R. Soc. Lond. A 439, 553–558 (1992).',
        paper: "https://doi.org/10.1098/rspa.1992.0167",
    },

    {
        year: "1994",
        title: "Shor changes the game",
        description:
            "Peter Shor discovered a polynomial-time quantum algorithm for integer factorization and discrete logarithms. Quantum computing suddenly had major implications for cryptography.",
        image: "/assets/journey/shor.png",
        imageAlt: "Peter Shor and Shor's algorithm",
        citation:
            '[4] P. W. Shor, "Algorithms for Quantum Computation: Discrete Logarithms and Factoring," FOCS (1994).',
        paper: "https://dblp.org/rec/conf/focs/Shor94",
    },

    {
        year: "1995 / 1996",
        title: "Can quantum information survive?",
        description:
            "Shor and Steane showed that quantum information can be encoded redundantly so that errors can be detected and corrected without directly measuring the quantum information itself.",
        image: "/assets/journey/qec.png",
        imageAlt: "Quantum error correction",
        citation:
            '[5] P. W. Shor, "Scheme for Reducing Decoherence in Quantum Computer Memory," Phys. Rev. A 52, R2493 (1995).',
        paper: "https://doi.org/10.1103/PhysRevA.52.R2493",
    },

    {
        year: "1996 / 1997",
        title: "Searching with interference",
        description:
            "Lov Grover introduced a quantum search algorithm that finds a marked item in an unstructured database using roughly the square root of the number of queries.",
        image: "/assets/journey/grover.png",
        imageAlt: "Lov Grover and quantum search",
        citation:
            '[6] L. K. Grover, "A Fast Quantum Mechanical Algorithm for Database Search," Phys. Rev. Lett. 79, 325 (1997).',
        paper: "https://doi.org/10.1103/PhysRevLett.79.325",
    },

    {
        year: "2001",
        title: "Shor reaches the laboratory",
        description:
            "Vandersypen and collaborators experimentally realized Shor's algorithm using a seven-qubit nuclear magnetic resonance quantum computer to factor 15.",
        image: "/assets/journey/shor-hardware.png",
        imageAlt: "Experimental realization of Shor's algorithm",
        citation:
            '[7] L. M. K. Vandersypen et al., "Experimental realization of Shor’s quantum factoring algorithm using nuclear magnetic resonance," Nature 414, 883–887 (2001).',
        paper: "https://www.nature.com/articles/414883a",
    },

    {
        year: "2016",
        title: "Quantum computing enters the cloud",
        description:
            "IBM launched the IBM Quantum Experience, allowing researchers, students, and enthusiasts to run quantum circuits on real quantum processors through the cloud.",
        image: "/assets/journey/ibm-quantum.png",
        imageAlt: "IBM Quantum Experience",
        citation:
            '[8] IBM Quantum, "The IBM Quantum Experience and the early years of cloud quantum computing," (2016).',
        paper: "https://www.ibm.com/quantum/blog/quantum-five-years",
    },

    {
        year: "2018",
        title: "Welcome to the NISQ era",
        description:
            "John Preskill described the emerging era of Noisy Intermediate-Scale Quantum devices: machines large enough to explore quantum computation, but still constrained by noise and limited circuit depth.",
        image: "/assets/journey/nisq.png",
        imageAlt: "NISQ era and quantum processor",
        citation:
            '[9] J. Preskill, "Quantum Computing in the NISQ era and beyond," Quantum 2, 79 (2018).',
        paper: "https://doi.org/10.22331/q-2018-08-06-79",
    },

    {
        year: "2019",
        title: "Can a quantum computer outperform a classical one?",
        description:
            "Google's Sycamore processor performed a specific random-circuit sampling experiment that Google reported as beyond practical classical simulation at the time, marking an important experimental milestone in quantum computing.",
        image: "/assets/journey/sycamore.png",
        imageAlt: "Google Sycamore quantum processor",
        citation:
            '[10] F. Arute et al., "Quantum supremacy using a programmable superconducting processor," Nature 574, 505–510 (2019).',
        paper: "https://www.nature.com/articles/s41586-019-1666-5",
    },
];


const Journey: React.FC = () => {

    const [visibleItems, setVisibleItems] =
        useState<Set<number>>(new Set());

    const itemRefs =
        useRef<(HTMLElement | null)[]>([]);


    /* ============================================================
       SCROLL REVEAL
    ============================================================ */

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const index = Number(
                        (entry.target as HTMLElement).dataset.index
                    );

                    setVisibleItems((previous) => {

                        const next = new Set(previous);

                        next.add(index);

                        return next;
                    });

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.15,
            }
        );


        itemRefs.current.forEach((element) => {

            if (element) {
                observer.observe(element);
            }

        });


        return () => observer.disconnect();

    }, []);


    return (

        <div className="journey-page">

            {/* ==================================================
                BACKGROUND
            ================================================== */}

            <div className="journey-background" />

            <div className="background-overlay" />


            {/* ==================================================
                NAVIGATION
            ================================================== */}

            <nav className="journey-navbar">

                <a
                    href="/"
                    className="journey-brand"
                >

                    <span className="brand-dot" />

                    <span>
                        QISKIT FALL FEST
                        <span className="brand-divider">
                            ·
                        </span>
                        IISER TVM
                    </span>

                </a>


                <div className="journey-nav-links">

                    <a href="/">
                        Home
                    </a>

                    <a href="#journey">
                        Journey
                    </a>

                    <a href="#ftqc">
                        FTQC
                    </a>

                </div>

            </nav>



            {/* ==================================================
                HERO
            ================================================== */}

            <section className="journey-hero">

                <div className="hero-kicker">
                    A BRIEF HISTORY
                </div>


                <h1>

                    The Journey of

                    <span>
                        Quantum Computing
                    </span>

                </h1>


                <div className="hero-divider">

                    <span />

                    <i />

                    <span />

                </div>


                <p>
                    From Feynman's question about simulating nature
                    to the pursuit of fault-tolerant quantum computers,
                    the story of quantum computing is a journey through
                    ideas, algorithms, experiments, and the struggle
                    against noise.
                </p>


                <div className="hero-scroll">

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <div className="scroll-line" />

                </div>

            </section>



            {/* ==================================================
                HISTORICAL JOURNEY
            ================================================== */}

            <main
                className="journey-container"
                id="journey"
            >

                {/* Central timeline */}

                <div className="timeline-line" />


                {milestones.map((milestone, index) => {

                    /*
                     * index 0,2,4,6,8
                     *
                     * IMAGE | TEXT
                     *
                     * index 1,3,5,7,9
                     *
                     * TEXT | IMAGE
                     */

                    const reverse =
                        index % 2 === 1;

                    const visible =
                        visibleItems.has(index);


                    return (

                        <article
                            key={`${milestone.year}-${index}`}
                            ref={(element) => {
                                itemRefs.current[index] =
                                    element;
                            }}
                            data-index={index}
                            className={`
                                milestone
                                ${reverse ? "reverse" : ""}
                                ${visible ? "show" : ""}
                            `}
                        >

                            {/* ==================================
                                TIMELINE NODE
                            ================================== */}

                            <div className="timeline-node">

                                <span />

                            </div>


                            {/* ==================================
                                IMAGE
                            ================================== */}

                            <div className="milestone-visual">

                                <div className="image-frame">

                                    <img
                                        src={milestone.image}
                                        alt={milestone.imageAlt}
                                        loading="lazy"
                                    />

                                </div>

                            </div>


                            {/* ==================================
                                INFORMATION
                            ================================== */}

                            <div className="milestone-info">

                                <div className="milestone-year">
                                    {milestone.year}
                                </div>


                                <h2>
                                    {milestone.title}
                                </h2>


                                <p className="milestone-description">
                                    {milestone.description}
                                </p>


                                {/* Citation */}

                                <a
                                    href={milestone.paper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="citation"
                                    aria-label={`Open reference for ${milestone.title}`}
                                >
                                    {milestone.citation}
                                </a>

                            </div>

                        </article>
                    );

                })}

            </main>



            {/* ==================================================
                TOWARDS FTQC
            ================================================== */}

            <section
                className="ftqc-section"
                id="ftqc"
            >

                <div className="ftqc-glow" />


                <div className="ftqc-kicker">
                    THE NEXT FRONTIER
                </div>


                <h2>

                    Towards

                    <span>
                        FTQC
                    </span>

                </h2>


                <div className="ftqc-divider">

                    <span />

                    <i />

                    <span />

                </div>


                <p>
                    The journey does not end with noisy quantum
                    processors. The long-term goal is fault-tolerant
                    quantum computing: reliable logical qubits,
                    error-corrected operations, and quantum circuits
                    deep enough to tackle problems beyond the reach
                    of classical computation.
                </p>

            </section>



            {/* ==================================================
                FOOTER
            ================================================== */}

            <footer className="journey-footer">

                <div className="footer-line" />

                <p>
                    A visual journey through the history of
                    quantum computing
                </p>

                <span>
                    Qiskit Fall Fest · IISER Thiruvananthapuram
                </span>

            </footer>



            {/* ==================================================
                STYLES
            ================================================== */}

            <style>{`

                /* =================================================
                   GLOBAL
                ================================================= */

                * {
                    box-sizing: border-box;
                }


                html {
                    scroll-behavior: smooth;
                }


                body {
                    margin: 0;

                    background: #020711;
                }


                .journey-page {
                    position: relative;

                    min-height: 100vh;

                    overflow: hidden;

                    color: #f4f7ff;

                    font-family:
                        Inter,
                        system-ui,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        sans-serif;
                }


                /* =================================================
                   BACKGROUND
                ================================================= */

                .journey-background {
                    position: fixed;

                    inset: 0;

                    z-index: -10;

                    background-image:
                        url("/assets/journey/background.png");

                    background-size: cover;

                    background-position: center;

                    background-repeat: no-repeat;

                    transform: scale(1.03);
                }


                .background-overlay {
                    position: fixed;

                    inset: 0;

                    z-index: -9;

                    background:
                        linear-gradient(
                            180deg,
                            rgba(1, 7, 18, 0.30) 0%,
                            rgba(1, 7, 18, 0.54) 42%,
                            rgba(1, 5, 14, 0.82) 100%
                        );

                    pointer-events: none;
                }


                /* =================================================
                   NAVBAR
                ================================================= */

                .journey-navbar {
                    position: fixed;

                    top: 0;
                    left: 0;
                    right: 0;

                    height: 74px;

                    padding: 0 6vw;

                    display: flex;

                    align-items: center;

                    justify-content: space-between;

                    z-index: 100;

                    background:
                        rgba(1, 6, 16, 0.68);

                    border-bottom:
                        1px solid
                        rgba(255,255,255,0.08);

                    backdrop-filter:
                        blur(16px);

                    -webkit-backdrop-filter:
                        blur(16px);
                }


                .journey-brand {
                    display: flex;

                    align-items: center;

                    gap: 11px;

                    color:
                        rgba(255,255,255,0.9);

                    font-size: 0.76rem;

                    font-weight: 600;

                    letter-spacing:
                        0.08em;

                    text-decoration: none;
                }


                .brand-dot {
                    width: 8px;
                    height: 8px;

                    flex-shrink: 0;

                    border-radius: 50%;

                    background: #78c5ff;

                    box-shadow:
                        0 0 10px #78c5ff,
                        0 0 22px
                        rgba(80,170,255,0.65);
                }


                .brand-divider {
                    margin: 0 8px;

                    color:
                        rgba(255,255,255,0.3);
                }


                .journey-nav-links {
                    display: flex;

                    align-items: center;

                    gap: 30px;
                }


                .journey-nav-links a {
                    color:
                        rgba(255,255,255,0.55);

                    font-size: 0.76rem;

                    text-decoration: none;

                    transition:
                        color 0.25s ease;
                }


                .journey-nav-links a:hover {
                    color: white;
                }


                /* =================================================
                   HERO
                ================================================= */

                .journey-hero {
                    min-height: 100vh;

                    padding:
                        140px 25px
                        90px;

                    display: flex;

                    flex-direction: column;

                    justify-content: center;

                    align-items: center;

                    text-align: center;
                }


                .hero-kicker {
                    margin-bottom: 30px;

                    color: #7ec8ff;

                    font-size: 0.7rem;

                    font-weight: 600;

                    letter-spacing:
                        0.35em;
                }


                .journey-hero h1 {
                    margin: 0;

                    max-width: 1000px;

                    font-family:
                        Georgia,
                        "Times New Roman",
                        serif;

                    font-size:
                        clamp(3.5rem, 8vw, 7.5rem);

                    font-weight: 400;

                    line-height: 0.96;

                    letter-spacing:
                        -0.045em;

                    color: white;
                }


                .journey-hero h1 span {
                    display: block;

                    margin-top: 8px;

                    background:
                        linear-gradient(
                            100deg,
                            #ffffff 15%,
                            #a7dbff 52%,
                            #4baeff 100%
                        );

                    -webkit-background-clip: text;

                    background-clip: text;

                    color: transparent;
                }


                .hero-divider {
                    display: flex;

                    align-items: center;

                    justify-content: center;

                    gap: 12px;

                    width: 180px;

                    margin:
                        42px 0 30px;
                }


                .hero-divider span {
                    height: 1px;

                    flex: 1;

                    background:
                        rgba(110,190,255,0.45);
                }


                .hero-divider i {
                    width: 6px;
                    height: 6px;

                    flex-shrink: 0;

                    border-radius: 50%;

                    background: #83ceff;

                    box-shadow:
                        0 0 12px #83ceff;
                }


                .journey-hero > p {
                    max-width: 680px;

                    margin: 0;

                    color:
                        rgba(232,242,255,0.66);

                    font-size: 0.96rem;

                    line-height: 1.9;

                    font-weight: 300;
                }


                .hero-scroll {
                    margin-top: 70px;

                    display: flex;

                    flex-direction: column;

                    align-items: center;

                    gap: 12px;

                    color:
                        rgba(255,255,255,0.38);

                    font-size: 0.61rem;

                    letter-spacing:
                        0.27em;
                }


                .scroll-line {
                    width: 1px;

                    height: 46px;

                    background:
                        linear-gradient(
                            to bottom,
                            rgba(120,200,255,0.7),
                            transparent
                        );
                }


                /* =================================================
                   JOURNEY CONTAINER
                ================================================= */

                .journey-container {
                    position: relative;

                    max-width: 1400px;

                    margin: 0 auto;

                    padding:
                        70px 6vw
                        80px;
                }


                /* =================================================
                   CENTRAL TIMELINE
                ================================================= */

                .timeline-line {
                    position: absolute;

                    top: 0;
                    bottom: 0;

                    left: 50%;

                    width: 1px;

                    transform:
                        translateX(-50%);

                    background:
                        linear-gradient(
                            to bottom,
                            transparent,
                            rgba(90,180,255,0.5) 5%,
                            rgba(90,180,255,0.5) 95%,
                            transparent
                        );

                    box-shadow:
                        0 0 15px
                        rgba(70,160,255,0.2);
                }


                /* =================================================
                   MILESTONE
                ================================================= */

                .milestone {
                    position: relative;

                    min-height: 650px;

                    display: grid;

                    grid-template-columns:
                        minmax(0, 1fr)
                        minmax(0, 1fr);

                    gap: 90px;

                    align-items: center;

                    margin-bottom: 75px;

                    opacity: 0;

                    transform:
                        translateY(50px);

                    transition:
                        opacity 0.9s ease,
                        transform 0.9s ease;
                }


                .milestone.show {
                    opacity: 1;

                    transform:
                        translateY(0);
                }


                /* =================================================
                   TIMELINE NODE
                ================================================= */

                .timeline-node {
                    position: absolute;

                    left: 50%;
                    top: 50%;

                    width: 18px;
                    height: 18px;

                    transform:
                        translate(-50%, -50%);

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    border:
                        1px solid
                        rgba(125,204,255,0.9);

                    border-radius: 50%;

                    background:
                        #061223;

                    box-shadow:
                        0 0 0 6px
                        rgba(76,167,255,0.07),

                        0 0 25px
                        rgba(76,167,255,0.45);

                    z-index: 10;
                }


                .timeline-node span {
                    width: 5px;
                    height: 5px;

                    border-radius: 50%;

                    background: #8bd2ff;

                    box-shadow:
                        0 0 9px #8bd2ff;
                }


                /* =================================================
                   IMAGE
                ================================================= */

                .milestone-visual {
                    display: flex;

                    justify-content: center;

                    align-items: center;
                }


                .image-frame {
                    position: relative;

                    width:
                        min(100%, 590px);

                    overflow: hidden;

                    border-radius: 7px;

                    background:
                        rgba(3,10,20,0.55);

                    box-shadow:
                        0 35px 80px
                        rgba(0,0,0,0.5),

                        0 0 0 1px
                        rgba(255,255,255,0.08);

                    transition:
                        transform 0.5s ease,
                        box-shadow 0.5s ease;
                }


                .image-frame::after {
                    content: "";

                    position: absolute;

                    inset: 0;

                    pointer-events: none;

                    background:
                        linear-gradient(
                            135deg,
                            rgba(130,210,255,0.05),
                            transparent 45%
                        );
                }


                .image-frame:hover {
                    transform:
                        translateY(-8px);

                    box-shadow:
                        0 45px 100px
                        rgba(0,0,0,0.58),

                        0 0 35px
                        rgba(70,165,255,0.12);
                }


                .image-frame img {
                    display: block;

                    width: 100%;

                    height: auto;

                    object-fit: contain;
                }


                /* =================================================
                   MILESTONE TEXT
                ================================================= */

                .milestone-info {
                    max-width: 530px;
                }


                .milestone-year {
                    margin-bottom: 18px;

                    color: #7bc7ff;

                    font-size: 0.72rem;

                    font-weight: 600;

                    letter-spacing:
                        0.28em;
                }


                .milestone-info h2 {
                    margin:
                        0 0 24px;

                    color: #ffffff;

                    font-family:
                        Georgia,
                        "Times New Roman",
                        serif;

                    font-size:
                        clamp(2rem, 3.2vw, 3.25rem);

                    font-weight: 400;

                    line-height: 1.1;

                    letter-spacing:
                        -0.025em;
                }


                .milestone-description {
                    margin:
                        0 0 24px;

                    color:
                        rgba(231,241,253,0.67);

                    font-size: 0.92rem;

                    line-height: 1.9;

                    font-weight: 300;
                }


                /* =================================================
                   CITATION
                ================================================= */

                .citation {
                    display: block;

                    max-width: 510px;

                    color:
                        rgba(170,207,235,0.62);

                    font-family:
                        Georgia,
                        "Times New Roman",
                        serif;

                    font-size: 0.72rem;

                    line-height: 1.65;

                    text-decoration: none;

                    transition:
                        color 0.25s ease,
                        opacity 0.25s ease;
                }


                .citation:hover {
                    color: #91cfff;

                    text-decoration:
                        underline;

                    text-decoration-color:
                        rgba(145,207,255,0.45);

                    text-underline-offset: 4px;
                }


                /* =================================================
                   LEFT → RIGHT
                   
                   IMAGE | TEXT
                ================================================= */

                .milestone:not(.reverse)
                    .milestone-visual {

                    grid-column: 1;
                    grid-row: 1;
                }


                .milestone:not(.reverse)
                    .milestone-info {

                    grid-column: 2;
                    grid-row: 1;

                    padding-left: 25px;
                }


                /* =================================================
                   RIGHT → LEFT
                   
                   TEXT | IMAGE
                ================================================= */

                .milestone.reverse
                    .milestone-visual {

                    grid-column: 2;
                    grid-row: 1;
                }


                .milestone.reverse
                    .milestone-info {

                    grid-column: 1;
                    grid-row: 1;

                    justify-self: end;

                    padding-right: 25px;

                    text-align: right;
                }


                .milestone.reverse
                    .citation {

                    margin-left: auto;
                }


                /* =================================================
                   FTQC SECTION
                ================================================= */

                .ftqc-section {
                    position: relative;

                    min-height: 78vh;

                    display: flex;

                    flex-direction: column;

                    justify-content: center;

                    align-items: center;

                    text-align: center;

                    padding:
                        140px 25px;

                    overflow: hidden;
                }


                .ftqc-glow {
                    position: absolute;

                    width: 750px;
                    height: 750px;

                    border-radius: 50%;

                    background:
                        radial-gradient(
                            circle,
                            rgba(55,155,255,0.14),
                            rgba(0,0,0,0) 68%
                        );

                    pointer-events: none;
                }


                .ftqc-kicker {
                    position: relative;

                    margin-bottom: 28px;

                    color: #8bcfff;

                    font-size: 0.7rem;

                    font-weight: 600;

                    letter-spacing:
                        0.35em;
                }


                .ftqc-section h2 {
                    position: relative;

                    margin: 0;

                    font-family:
                        Georgia,
                        "Times New Roman",
                        serif;

                    font-size:
                        clamp(4rem, 10vw, 9rem);

                    font-weight: 400;

                    line-height: 0.9;

                    letter-spacing:
                        -0.05em;

                    color: white;
                }


                .ftqc-section h2 span {
                    display: block;

                    margin-top: 12px;

                    background:
                        linear-gradient(
                            100deg,
                            #ffffff 0%,
                            #b6e1ff 48%,
                            #4eaeff 100%
                        );

                    -webkit-background-clip: text;

                    background-clip: text;

                    color: transparent;

                    text-shadow:
                        0 0 60px
                        rgba(80,175,255,0.15);
                }


                .ftqc-divider {
                    position: relative;

                    width: 170px;

                    display: flex;

                    align-items: center;

                    gap: 12px;

                    margin:
                        42px 0 32px;
                }


                .ftqc-divider span {
                    flex: 1;

                    height: 1px;

                    background:
                        rgba(100,190,255,0.5);
                }


                .ftqc-divider i {
                    width: 7px;
                    height: 7px;

                    flex-shrink: 0;

                    border-radius: 50%;

                    background: #82ccff;

                    box-shadow:
                        0 0 15px #82ccff;
                }


                .ftqc-section > p {
                    position: relative;

                    max-width: 670px;

                    margin: 0;

                    color:
                        rgba(231,241,253,0.6);

                    font-size: 0.94rem;

                    line-height: 1.9;

                    font-weight: 300;
                }


                /* =================================================
                   FOOTER
                ================================================= */

                .journey-footer {
                    padding:
                        50px 25px
                        60px;

                    text-align: center;

                    background:
                        rgba(0,3,10,0.72);

                    border-top:
                        1px solid
                        rgba(255,255,255,0.07);
                }


                .footer-line {
                    width: 60px;

                    height: 1px;

                    margin:
                        0 auto 25px;

                    background: #68b9ff;

                    box-shadow:
                        0 0 12px
                        rgba(100,190,255,0.5);
                }


                .journey-footer p {
                    margin:
                        0 0 8px;

                    color:
                        rgba(255,255,255,0.42);

                    font-size: 0.7rem;

                    letter-spacing:
                        0.04em;
                }


                .journey-footer span {
                    color:
                        rgba(120,195,255,0.6);

                    font-size: 0.67rem;

                    letter-spacing:
                        0.08em;
                }


                /* =================================================
                   TABLET
                ================================================= */

                @media (max-width: 1000px) {

                    .journey-container {
                        padding-left: 4vw;
                        padding-right: 4vw;
                    }


                    .milestone {
                        gap: 55px;
                    }


                    .milestone-info h2 {
                        font-size: 2.25rem;
                    }

                }


                /* =================================================
                   MOBILE
                ================================================= */

                @media (max-width: 760px) {

                    .journey-navbar {
                        height: 64px;

                        padding:
                            0 5vw;
                    }


                    .journey-nav-links {
                        display: none;
                    }


                    .journey-brand {
                        font-size: 0.68rem;
                    }


                    .journey-hero {
                        min-height: 90vh;

                        padding:
                            120px 25px
                            70px;
                    }


                    .hero-kicker {
                        font-size: 0.58rem;

                        letter-spacing:
                            0.25em;
                    }


                    .journey-hero h1 {
                        font-size:
                            clamp(3rem, 14vw, 5rem);
                    }


                    .journey-hero > p {
                        font-size: 0.85rem;

                        line-height: 1.75;
                    }


                    /* -----------------------------------------
                       Mobile timeline
                    ----------------------------------------- */

                    .journey-container {
                        padding:
                            50px 25px
                            80px 48px;
                    }


                    .timeline-line {
                        left: 18px;

                        transform:
                            translateX(-50%);
                    }


                    .milestone {
                        display: block;

                        min-height: 0;

                        margin-bottom: 95px;
                    }


                    .timeline-node {
                        left: -30px;

                        top: 12px;

                        width: 15px;
                        height: 15px;

                        transform:
                            translateX(-50%);
                    }


                    /*
                     * On mobile every milestone becomes:
                     *
                     * IMAGE
                     * TEXT
                     *
                     * This avoids cramped alternating columns.
                     */

                    .milestone-visual,
                    .milestone.reverse
                        .milestone-visual {

                        display: block;

                        margin-bottom: 32px;
                    }


                    .milestone:not(.reverse)
                        .milestone-visual,

                    .milestone.reverse
                        .milestone-visual {

                        grid-column: auto;
                        grid-row: auto;
                    }


                    .milestone:not(.reverse)
                        .milestone-info,

                    .milestone.reverse
                        .milestone-info {

                        padding: 0;

                        max-width: none;

                        text-align: left;

                        grid-column: auto;
                        grid-row: auto;

                        justify-self: auto;
                    }


                    .milestone.reverse
                        .citation {

                        margin-left: 0;
                    }


                    .milestone-year {
                        font-size: 0.64rem;

                        margin-bottom: 12px;
                    }


                    .milestone-info h2 {
                        font-size: 2rem;

                        margin-bottom: 18px;
                    }


                    .milestone-description {
                        font-size: 0.85rem;

                        line-height: 1.8;

                        margin-bottom: 22px;
                    }


                    .citation {
                        font-size: 0.68rem;

                        line-height: 1.6;
                    }


                    /* -----------------------------------------
                       FTQC
                    ----------------------------------------- */

                    .ftqc-section {
                        min-height: 65vh;

                        padding:
                            100px 25px;
                    }


                    .ftqc-section h2 {
                        font-size:
                            clamp(4rem, 18vw, 7rem);
                    }


                    .ftqc-section > p {
                        font-size: 0.84rem;
                    }

                }


                /* =================================================
                   SMALL MOBILE
                ================================================= */

                @media (max-width: 420px) {

                    .journey-container {
                        padding-left: 43px;
                        padding-right: 18px;
                    }


                    .timeline-line {
                        left: 17px;
                    }


                    .timeline-node {
                        left: -26px;
                    }


                    .journey-hero h1 {
                        font-size: 3.15rem;
                    }


                    .milestone-info h2 {
                        font-size: 1.85rem;
                    }


                    .citation {
                        font-size: 0.65rem;
                    }

                }

            `}</style>

        </div>
    );
};


export default Journey;