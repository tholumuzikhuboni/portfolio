
import React, { useState, useEffect } from 'react';
import { Play, Save, Copy, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const CodePlayground = () => {
  const defaultCode = `// Welcome to my interactive code playground!
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
}, 1000);`;

  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [savedSnippets, setSavedSnippets] = useState<{name: string, code: string}[]>([]);

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

  const saveSnippet = () => {
    const snippetName = prompt("Name your code snippet:");
    if (snippetName) {
      setSavedSnippets([...savedSnippets, { name: snippetName, code }]);
      toast.success(`Saved snippet: ${snippetName}`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  const resetCode = () => {
    if (confirm('Reset code to default?')) {
      setCode(defaultCode);
      toast.info('Code reset to default');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-black/20 border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-zinc-300 font-mono">JavaScript Playground</div>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-zinc-800/70 text-zinc-200 rounded hover:bg-zinc-700/70 transition-colors"
            title="Copy code"
          >
            <Copy className="h-3 w-3" />
          </button>
          <button
            onClick={saveSnippet}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-zinc-800/70 text-zinc-200 rounded hover:bg-zinc-700/70 transition-colors"
            title="Save snippet"
          >
            <Save className="h-3 w-3" />
          </button>
          <button
            onClick={resetCode}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-zinc-800/70 text-zinc-200 rounded hover:bg-zinc-700/70 transition-colors"
            title="Reset code"
          >
            <Trash2 className="h-3 w-3" />
          </button>
          <button
            onClick={executeCode}
            disabled={isRunning}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors",
              isRunning 
                ? "bg-code-blue/50 text-white/50 cursor-not-allowed" 
                : "bg-code-blue text-white hover:bg-code-blue/80"
            )}
          >
            <Play className="h-3 w-3" />
            Run
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Code Editor Side */}
        <div className="relative group">
          {/* Line Numbers */}
          <div className="absolute top-10 left-2 text-xs font-mono text-zinc-500 select-none pointer-events-none">
            {code.split('\n').map((_, i) => (
              <div key={i} className="h-6 text-right pr-2">{i + 1}</div>
            ))}
          </div>
          
          <div className="p-4 bg-zinc-900/50 h-full min-h-[400px]">
            <div className="text-xs text-zinc-400 font-mono mb-2 flex justify-between items-center">
              <span>Code Editor</span>
              <span className="text-zinc-500 text-[10px]">Press Run to execute</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[360px] bg-transparent pl-8 text-green-400 font-mono text-sm p-2 border-0 focus:outline-none focus:ring-0 resize-none"
              spellCheck="false"
              style={{ lineHeight: "1.5rem" }}
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-code-blue/5 to-code-purple/5 opacity-20 pointer-events-none"></div>
        </div>
        
        {/* Console Output Side */}
        <div className="p-4 bg-black/50 min-h-[400px] border-l border-white/10">
          <div className="text-xs text-zinc-400 font-mono mb-2 flex justify-between items-center">
            <span>Console Output</span>
            {isRunning && <span className="text-code-blue animate-pulse">Running...</span>}
          </div>
          <div className="w-full h-[360px] bg-black/50 backdrop-blur-md rounded p-3 font-mono text-sm text-white overflow-y-auto border border-white/10">
            {output.length === 0 ? (
              <div className="text-zinc-500 italic flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="mb-2 opacity-50">
                    <span className="inline-block w-12 h-12 rounded-full border-2 border-code-blue/30 border-t-code-blue animate-spin"></span>
                  </div>
                  <div>// Run your code to see output here</div>
                </div>
              </div>
            ) : (
              output.map((line, index) => (
                <div key={index} className="mb-1 px-2 py-0.5 hover:bg-white/5 rounded">
                  <span className="text-zinc-500 mr-2">&gt;</span>
                  <span className={cn(
                    line.includes('Error') 
                      ? 'text-red-400' 
                      : 'text-green-300'
                  )}>
                    {line}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
      {/* Saved Snippets Drawer */}
      {savedSnippets.length > 0 && (
        <div className="p-4 bg-black/30 border-t border-white/10">
          <div className="text-xs text-zinc-400 font-mono mb-2">Saved Snippets</div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {savedSnippets.map((snippet, index) => (
              <button
                key={index}
                onClick={() => setCode(snippet.code)}
                className="px-3 py-1.5 text-xs whitespace-nowrap bg-zinc-800/50 text-zinc-300 rounded hover:bg-zinc-700/50 transition-colors"
              >
                {snippet.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodePlayground;
