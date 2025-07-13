"use client";

import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCopy } from "@fortawesome/free-solid-svg-icons";
import { executeCode } from "./api";
import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
import { WebsocketProvider } from "y-websocket";
import { MonacoBinding } from "y-monaco";

export default function CodePanel({ setOutput, setIsLoading }) {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const onMount = async (editor, monaco) => {
    editorRef.current = editor;
    console.log(editorRef.current);
    editor.focus();

    // Initialize YJS
    const ydoc = new Y.Doc(); // a collection of shared objects -> text

    // Connect to peers with WebRTC
    // const provider = new WebrtcProvider("test-room", ydoc);
    const provider = new WebsocketProvider(`${location.protocol === 'http:' ? 'ws:' : 'wss:'}//localhost:1234`, 'monaco', ydoc);
    const type = ydoc.getText("monaco");

    provider.on('status', event => {
      console.log('WebSocket status:', event.status); // "connected" or "disconnected"
    });

    // Bind YJS to Monaco
    const binding = new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    );
    console.log(provider.awareness);
  };

  const handleRunCode = async () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      if (!selectedLanguage) {
        setOutput("Please select a language first");
        return;
      }

      if (!code) {
        setOutput("No code to execute");
        return;
      }

      setIsLoading(true);

      try {
        const { run: result } = await executeCode(code, selectedLanguage);
        setOutput(result.output);
      } catch (error) {
        console.error("Error running code:", error);
        setOutput(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }

      console.log("Running code:", code);
    }
  };

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
          <ActionButton icon={faPlay} onClick={handleRunCode} />
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
