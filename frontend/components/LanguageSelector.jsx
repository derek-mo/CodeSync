"use client";

import React, { useState } from "react";
import { LANGUAGE_OPTIONS } from "@/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const languages = Object.entries(LANGUAGE_OPTIONS);

export default function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full items-center gap-2 justify-between rounded-md p-3 h-8 text-sm font-semibold text-white hover:bg-neutral-700 cursor-pointer"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLanguage ? selectedLanguage.label : "Select Language"}
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 z-10 mt-1 w-32 origin-top-right rounded-md bg-neutral-800 border-1 border-neutral-600"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {" "}
          <div className="p-1" role="none">
            {languages.map(([key, languageOption]) => (
              <div
                key={key}
                className="px-3 py-2 text-sm text-white rounded-sm hover:bg-neutral-700 cursor-pointer"
                onClick={() => {
                  console.log(
                    "Selected language:",
                    languageOption.label,
                    "Value:",
                    languageOption.value
                  );
                  onLanguageChange(languageOption);
                  setIsOpen(false);
                }}
              >
                {languageOption === selectedLanguage ? (
                    <span className="font-semibold text-blue-400">{languageOption.label}</span>
                ) : <span className="font-medium">{languageOption.label}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
