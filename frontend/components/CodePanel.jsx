"use client";

import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCopy } from "@fortawesome/free-solid-svg-icons";
import { executeCode } from "./api";

export default function CodePanel({ setOutput, setIsLoading }) {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleRunCode = async () => {
      if (editorRef.current) {
          const code = editorRef.current.getValue();
          if (!code) {
            setOutput("No code to execute");
            return;
          }

          if (selectedLanguage === "Select Language") {
            setOutput("Please select a language first");
            return;
          }

          setIsLoading(true);

          try {
              const {run: result} = await executeCode(code, selectedLanguage);
              setOutput(result.output)
          }
          catch (error) {
              console.error("Error running code:", error);
              setOutput(`Error: ${error.message}`);
          }
          finally {
            setIsLoading(false);
          }

          console.log("Running code:", code);
      }
  }

  const handleCopyCode = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      navigator.clipboard
        .writeText(code)
        .then(() => {
          console.log("Code copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy code: ", err);
        });
    }
  };

  const ActionButton = ({ icon, onClick }) => (
    <button
      className="hover:bg-neutral-700 size-8 flex items-center justify-center rounded-md text-white cursor-pointer"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <div className="bg-stone-900 p-2 flex-shrink-0 flex justify-between items-center">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
        <div className="flex space-x-2 px-3">
          <ActionButton icon={faPlay} onClick={handleRunCode}/>
          <ActionButton icon={faCopy} onClick={handleCopyCode} />
        </div>
      </div>
      <div className="grow">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          language={selectedLanguage}
          defaultValue="// Write your code here"
          theme="vs-dark"
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
          options={{
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
}
