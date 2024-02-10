"use client";
import React, { useEffect, useState } from "react";

export function TranslateLang() {
  const [language, setLanguage] = useState("pt"); // "pt" or "en"

  useEffect(() => {
    const html = document.querySelector("html");

    if (language == "pt") html!.lang = "pt-br";
    else html!.lang = "en";
  }, [language]);

  return (
    <div className="space-x-5">
      <label
        htmlFor="pt"
        className={`${language == "pt" && "underline text-[var(--hint)]"}`}
        onClick={() => setLanguage("pt")}
      >
        PT-BR
      </label>
      <label
        htmlFor="en"
        className={`${language == "en" && "underline text-[var(--hint)]"}`}
        onClick={() => setLanguage("en")}
      >
        EN-EUA
      </label>
      <input
        type="checkbox"
        id="pt"
        className="invisible"
        checked={language == "pt"}
      />
      <input
        type="checkbox"
        id="en"
        className="invisible"
        checked={language == "en"}
      />
    </div>
  );
}
