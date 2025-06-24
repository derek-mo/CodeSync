'use client';

import CodePanel from "@/components/CodePanel";
import NavBar from "@/components/NavBar";
import OutputPanel from "@/components/OutputPanel";
import { useState } from 'react'

export default function Home() {
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="h-screen w-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1">
        <div className="w-1/2 pl-2 pb-2 pr-1">
          <CodePanel 
            setOutput={setOutput}
            setIsLoading={setIsLoading}
          />
        </div>
        <div className="w-1/2 pr-2 pb-2 pl-1">
          <OutputPanel 
            output={output}
            isLoading={isLoading}
          />
        </div>
      </div>
    </main>
  );
}
