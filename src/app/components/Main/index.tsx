import { TranslateLang } from "../TranslateLang";
import { Email } from "../icons/Email";
import { Github } from "../icons/Github";
import { Linkedin } from "../icons/Linkedin";

export function Main() {
  return (
    <div className="max-w-[586px] w-full h-[1920px] p-6">
      <TranslateLang />
      <header className="flex flex-col gap-2 mt-3">
        <h1 className="text-4xl font-medium text-[var(--hint)] leading-tight">
          Hello, I&apos;m Maxwell but you can call me Max 👋🏼
        </h1>
        <h2 className="font-light text-[var(--hint)] text-2xl">
          Software Developer
        </h2>
        <div className="space-y-7 mt-3">
          <p className="font-light text-lg text" translate="yes">
            Always developing beautiful, performant and intuitive interfaces for
            the customer. My goal is to help people have the best experience
            that technology can provide. I currently work with Delphi and have
            extensive knowledge of the web.
          </p>
          <button className="bg-[var(--hint)] max-w-48 w-full p-3 rounded-lg text-white">
            Let&apos;s Talk
          </button>
        </div>
      </header>

      <main className="space-y-10 mt-12">
        <div className="section">
          <h3>Contact</h3>
          <ul className="contacts">
            <li className="contact-item">
              <a
                href="https://www.linkedin.com/in/maxwell-santos-2ab722210/"
                target="_blank"
              >
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="contact-item">
              <a href="https://github.com/Maxwell-Santos" target="_blank">
                <Github />
                <span>GitHub</span>
              </a>
            </li>
            <li className="contact-item">
              <a href="mailto:maxwellalves935@gmail.com" target="_blank">
                <Email />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>Experiences</h3>
          <div className="flex justify-between">
            <div>
              <span className="date">Ago 2022 - Jul 2023</span>
              <span>Simpress</span>
            </div>
            <div>
              <span className="date">Sep 2023 - current</span>
              <span>Alterdata Software</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Education</h3>
          <div className="flex justify-between">
            <div>
              <span className="date">2019 - 2021</span>
              <span>ETEC Dr. Celso Giglio Osasco II</span>
              <span>Technician in System Development</span>
            </div>
            <div>
              <span className="date">2023 - current</span>
              <span>FATEC Pref. Hirant Sanazar</span>
              <span>Multplataform Software Development</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
