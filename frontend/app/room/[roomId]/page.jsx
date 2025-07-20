"use client";

import CodePanel from "@/components/editor/CodePanel";
import OutputPanel from "@/components/editor/OutputPanel";
import { useState } from "react";

export default function Room({  }) {
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="h-full w-full flex flex-col mt-2">
      <div className="flex flex-1">
        <div className="w-1/2 pl-2 pb-2 pr-1">
          <CodePanel setOutput={setOutput} setIsLoading={setIsLoading} />
        </div>
        <div className="w-1/2 pr-2 pb-2 pl-1">
          <OutputPanel output={output} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
}
