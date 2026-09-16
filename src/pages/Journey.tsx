import { useEffect } from "react";

import feynmanImage from "../assets/journey/feynman.png";
import deutschJozsaImage from "../assets/journey/deutsch-jozsa.png";
import shorImage from "../assets/journey/shor.png";
import qecImage from "../assets/journey/qec.png";
import groverImage from "../assets/journey/grover.png";
import shorHardwareImage from "../assets/journey/shor-hardware.png";
import ibmQuantumImage from "../assets/journey/ibm-quantum.png";
import nisqImage from "../assets/journey/nisq.png";
import sycamoreImage from "../assets/journey/sycamore.png";
import backgroundImage from "../assets/journey/background.png";

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
    image: feynmanImage,
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
    image: deutschJozsaImage,
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
    image: deutschJozsaImage,
    imageAlt: "Deutsch–Jozsa quantum algorithm",
    citation:
      '[3] D. Deutsch and R. Jozsa, "Rapid solution of problems by quantum computation," Proc. R. Soc. Lond. A 439, 553–558 (1992).',
    paper: "https://doi.org/10.1098/rspa.1992.0167",
  },
  {
    year: "1994",
    title: "Shor changes the game",
    description:
      "Peter Shor discovered a polynomial-time quantum algorithm for integer factorization and discrete logarithms. Quantum computing suddenly had major implications for cryptography.",
    image: shorImage,
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
    image: qecImage,
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
    image: groverImage,
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
    image: shorHardwareImage,
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
    image: ibmQuantumImage,
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
    image: nisqImage,
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
    image: sycamoreImage,
    imageAlt: "Google Sycamore quantum processor",
    citation:
      '[10] F. Arute et al., "Quantum supremacy using a programmable superconducting processor," Nature 574, 505–510 (2019).',
    paper: "https://www.nature.com/articles/s41586-019-1666-5",
  },
];

export default function Journey() {
  useEffect(() => {
    const elements = document.querySelectorAll(".journey-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("journey-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .journey-page {
          --journey-bg: #050914;
          --journey-text: #f4f7fb;
          --journey-muted: rgba(220, 228, 240, 0.68);
          --journey-line: rgba(157, 177, 205, 0.28);
          --journey-accent: #78a9ff;

          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: var(--journey-bg);
          color: var(--journey-text);
        }

        .journey-background {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(5, 9, 20, 0.28),
              rgba(5, 9, 20, 0.52)
            ),
            url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .journey-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 50% 15%,
              rgba(70, 105, 160, 0.12),
              transparent 38%
            ),
            linear-gradient(
              to bottom,
              rgba(5, 9, 20, 0.08),
              rgba(5, 9, 20, 0.48)
            );
        }

        .journey-content {
          position: relative;
          z-index: 2;
        }

        .journey-hero {
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 24px 100px;
        }

        .journey-hero-inner {
          max-width: 950px;
          margin: 0 auto;
        }

        .journey-kicker {
          margin-bottom: 22px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.85rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(205, 218, 238, 0.7);
        }

        .journey-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3.4rem, 8vw, 7.5rem);
          line-height: 0.92;
          font-weight: 400;
          letter-spacing: -0.045em;
          color: #f7f9fc;
          text-shadow: 0 10px 50px rgba(0, 0, 0, 0.45);
        }

        .journey-subtitle {
          max-width: 700px;
          margin: 34px auto 0;
          font-size: clamp(1rem, 1.7vw, 1.25rem);
          line-height: 1.8;
          color: var(--journey-muted);
        }

        .journey-scroll {
          margin-top: 58px;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(205, 218, 238, 0.55);
        }

        .journey-timeline {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 32px 120px;
        }

        .journey-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            transparent,
            var(--journey-line) 8%,
            var(--journey-line) 92%,
            transparent
          );
        }

        .journey-milestone {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: center;
          min-height: 620px;
          margin-bottom: 30px;
        }

        .journey-milestone:last-child {
          margin-bottom: 0;
        }

        .journey-side {
          min-width: 0;
        }

        .journey-image-side {
          display: flex;
          justify-content: flex-end;
        }

        .journey-text-side {
          display: flex;
          justify-content: flex-start;
        }

        .journey-milestone.reverse .journey-image-side {
          order: 2;
          justify-content: flex-start;
        }

        .journey-milestone.reverse .journey-text-side {
          order: 1;
          justify-content: flex-end;
        }

        .journey-image-frame {
          position: relative;
          width: min(100%, 500px);
          padding: 12px;
          background: rgba(245, 247, 250, 0.96);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.38),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          transform: rotate(-1deg);
        }

        .journey-milestone.reverse .journey-image-frame {
          transform: rotate(1deg);
        }

        .journey-image-frame img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .journey-text {
          width: min(100%, 500px);
        }

        .journey-year {
          display: inline-block;
          margin-bottom: 18px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.95rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--journey-accent);
        }

        .journey-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 3.4vw, 3.25rem);
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -0.025em;
          color: #f5f7fb;
        }

        .journey-description {
          margin-top: 24px;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--journey-muted);
        }

        .journey-citation {
          display: inline-block;
          margin-top: 28px;
          max-width: 100%;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(188, 204, 226, 0.72);
          text-decoration: none;
          border-bottom: 1px solid rgba(188, 204, 226, 0.25);
          transition:
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .journey-citation:hover {
          color: #dce8fa;
          border-bottom-color: rgba(220, 232, 250, 0.75);
        }

        .journey-node {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 13px;
          height: 13px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: #b9cbed;
          border: 3px solid var(--journey-bg);
          box-shadow:
            0 0 0 1px rgba(185, 203, 237, 0.45),
            0 0 22px rgba(120, 169, 255, 0.35);
          z-index: 4;
        }

        .journey-node::before {
          content: "";
          position: absolute;
          inset: -7px;
          border: 1px solid rgba(170, 193, 228, 0.18);
          border-radius: 999px;
        }

        .journey-ending {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 180px;
        }

        .journey-ending-inner {
          max-width: 1000px;
        }

        .journey-ending-small {
          margin-bottom: 24px;
          font-size: 0.82rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(205, 218, 238, 0.62);
        }

        .journey-ending-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(4rem, 11vw, 10rem);
          line-height: 0.9;
          font-weight: 400;
          letter-spacing: -0.055em;
          color: #f5f7fb;
          text-shadow: 0 15px 60px rgba(0, 0, 0, 0.45);
        }

        .journey-ending-line {
          width: 80px;
          height: 1px;
          margin: 42px auto 0;
          background: rgba(190, 207, 232, 0.45);
        }

        .journey-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.9s ease,
            transform 0.9s ease;
        }

        .journey-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 900px) {
          .journey-timeline {
            padding-left: 22px;
            padding-right: 22px;
          }

          .journey-spine {
            left: 22px;
          }

          .journey-milestone,
          .journey-milestone.reverse {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 38px;
            min-height: auto;
            margin-bottom: 110px;
            padding-left: 34px;
          }

          .journey-milestone .journey-image-side,
          .journey-milestone.reverse .journey-image-side {
            order: 1;
            justify-content: flex-start;
          }

          .journey-milestone .journey-text-side,
          .journey-milestone.reverse .journey-text-side {
            order: 2;
            justify-content: flex-start;
          }

          .journey-image-frame {
            width: min(100%, 620px);
            transform: rotate(-0.5deg);
          }

          .journey-milestone.reverse .journey-image-frame {
            transform: rotate(0.5deg);
          }

          .journey-text {
            width: min(100%, 680px);
          }

          .journey-node {
            left: 22px;
            top: 25px;
            transform: translate(-50%, 0);
          }
        }

        @media (max-width: 640px) {
          .journey-hero {
            min-height: 82vh;
            padding: 120px 20px 80px;
          }

          .journey-kicker {
            font-size: 0.72rem;
            letter-spacing: 0.2em;
          }

          .journey-subtitle {
            line-height: 1.65;
          }

          .journey-timeline {
            padding: 70px 18px 100px;
          }

          .journey-spine {
            left: 18px;
          }

          .journey-milestone,
          .journey-milestone.reverse {
            padding-left: 28px;
            gap: 28px;
            margin-bottom: 85px;
          }

          .journey-node {
            left: 18px;
            width: 11px;
            height: 11px;
          }

          .journey-image-frame {
            padding: 7px;
          }

          .journey-year {
            font-size: 0.78rem;
            letter-spacing: 0.15em;
          }

          .journey-heading {
            font-size: 2rem;
          }

          .journey-description {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .journey-citation {
            font-size: 0.8rem;
          }

          .journey-ending {
            min-height: 65vh;
            padding: 90px 20px 130px;
          }

          .journey-ending-small {
            font-size: 0.68rem;
            letter-spacing: 0.2em;
          }
        }
      `}</style>

      <div className="journey-page">
        <div className="journey-background" />
        <div className="journey-overlay" />

        <div className="journey-content">
          {/* Hero */}
          <section className="journey-hero">
            <div className="journey-hero-inner journey-reveal">
              <div className="journey-kicker">
                A brief history of quantum computing
              </div>

              <h1 className="journey-title">
                The Journey
                <br />
                of Quantum Computing
              </h1>

              <p className="journey-subtitle">
                From the question of whether nature itself could be simulated
                to the pursuit of fault-tolerant quantum computation.
              </p>

              <div className="journey-scroll">
                Scroll to explore
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="journey-timeline">
            <div className="journey-spine" />

            {milestones.map((milestone, index) => {
              const reverse = index % 2 === 1;

              return (
                <article
                  key={milestone.year}
                  className={`journey-milestone journey-reveal ${
                    reverse ? "reverse" : ""
                  }`}
                >
                  <div className="journey-side journey-image-side">
                    <div className="journey-image-frame">
                      <img
                        src={milestone.image}
                        alt={milestone.imageAlt}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                  <div className="journey-side journey-text-side">
                    <div className="journey-text">
                      <div className="journey-year">{milestone.year}</div>

                      <h2 className="journey-heading">
                        {milestone.title}
                      </h2>

                      <p className="journey-description">
                        {milestone.description}
                      </p>

                      <a
                        href={milestone.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="journey-citation"
                      >
                        {milestone.citation}
                      </a>
                    </div>
                  </div>

                  <div className="journey-node" />
                </article>
              );
            })}
          </section>

          {/* Ending */}
          <section className="journey-ending journey-reveal">
            <div className="journey-ending-inner">
              <div className="journey-ending-small">
                The next frontier
              </div>

              <h2 className="journey-ending-title">
                Towards FTQC
              </h2>

              <div className="journey-ending-line" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}