
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const CodePlayground = () => {
  const [code, setCode] = useState(`// Welcome to my interactive code playground!
// Try editing this code and run it.

function greet(name) {
  return "Hello, " + name + "!";
}

// Call the function with your name
console.log(greet("Visitor"));

// Try some fun animations
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log("Counter: " + counter);
  if (counter >= 5) {
    clearInterval(interval);
    console.log("Done counting!");
  }
}, 1000);`);
  
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const executeCode = () => {
    setIsRunning(true);
    setOutput([]);
    
    // Create a sandbox to execute the code
    const originalConsoleLog = console.log;
    const logs: string[] = [];
    
    // Override console.log to capture outputs
    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' '));
    };
    
    try {
      // Add timeout to prevent infinite loops
      const timeoutCode = `
        let __execution_timeout = setTimeout(() => {
          throw new Error("Execution timed out (max 5 seconds)");
        }, 5000);
        
        ${code}
        
        clearTimeout(__execution_timeout);
      `;
      
      // Execute the code
      new Function(timeoutCode)();
      
      // Update the output
      setOutput(logs);
    } catch (error) {
      setOutput([...logs, `Error: ${error.message}`]);
    } finally {
      // Restore original console.log
      console.log = originalConsoleLog;
      setIsRunning(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-800 rounded-lg overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-zinc-400 font-mono">JavaScript Playground</div>
        <button
          onClick={executeCode}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-code-green text-white rounded hover:bg-code-green/90 disabled:opacity-50 transition-colors"
        >
          <Play className="h-3 w-3" />
          Run
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-zinc-700">
        <div className="p-4">
          <div className="text-xs text-zinc-400 font-mono mb-2">Code Editor</div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 bg-zinc-800 text-green-400 font-mono text-sm p-2 border border-zinc-700 rounded focus:outline-none focus:border-code-blue focus:ring-1 focus:ring-code-blue"
            spellCheck="false"
          />
        </div>
        
        <div className="p-4 bg-zinc-900">
          <div className="text-xs text-zinc-400 font-mono mb-2">Console Output</div>
          <div className="w-full h-64 bg-black rounded p-3 font-mono text-sm text-white overflow-y-auto">
            {output.length === 0 ? (
              <div className="text-zinc-500 italic">// Run your code to see output here</div>
            ) : (
              output.map((line, index) => (
                <div key={index} className="mb-1">
                  <span className="text-zinc-500 mr-2">&gt;</span>
                  <span className={line.includes('Error') ? 'text-red-400' : 'text-green-300'}>
                    {line}
                  </span>
                </div>
              ))
            )}
            {isRunning && <div className="text-blue-400">Running...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
