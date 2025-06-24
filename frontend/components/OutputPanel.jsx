import React from 'react'

export default function OutputPanel({ output, isLoading }) {
  return (
    <div className="text-white h-full flex flex-col rounded-lg overflow-hidden">
        <div className="flex-shrink-0 p-4 bg-neutral-700 font-semibold text-sm">
            Output
        </div>
        <div className="flex-grow p-4 bg-neutral-800 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Executing code...</span>
            </div>
          ) : (
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {output ? output : "Error executing"}
            </pre>
          )}
        </div>
    </div>
  )
}
