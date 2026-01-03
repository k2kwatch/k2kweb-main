
// cursor làm và del dùng dc ;))
// như c
// Code wjth me, github.com/skeletonzz
//skelentzt

const originalDebugger = window.eval;
Object.defineProperty(window, "eval", {
  value: function (code: string) {
    if (typeof code === "string" && code.includes("debugger")) {
      code = code.replace(/debugger\s*;?/g, "");
      code = code.replace(/[\s\n]*debugger[\s\n]*/g, "");
    }
    return originalDebugger.call(this, code);
  },
  writable: false,
  configurable: false,
});

const originalFunction = window.Function;
(window as any).Function = function (...args: string[]) {
  const code = args[args.length - 1];
  if (typeof code === "string" && code.includes("debugger")) {
    const newCode = code.replace(/debugger\s*;?/g, "").replace(/[\s\n]*debugger[\s\n]*/g, "");
    args[args.length - 1] = newCode;
  }
  return originalFunction.apply(this, args);
};

const originalConsoleDebug = console.debug;
console.debug = function (...args: any[]) {
};

const debuggerInterceptor = () => {
  const originalEval = eval;
  (window as any).eval = function (code: string) {
    if (typeof code === "string") {
      code = code.replace(/\bdebugger\s*;?/g, "");
      code = code.replace(/debugger\s*;?\s*/g, "");
    }
    return originalEval.call(this, code);
  };
};

const bypassDevToolsDetection = () => {
  
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = function (...args: any[]) {
    try {
      return originalGetComputedStyle.apply(this, args);
    } catch (e) {
      return {} as CSSStyleDeclaration;
    }
  };

  const originalToString = Function.prototype.toString;
  Function.prototype.toString = function () {
    if (this === debuggerInterceptor || this === bypassDevToolsDetection) {
      return "function() { [native code] }";
    }
    return originalToString.call(this);
  };
};

// Initialize bypasses
if (typeof window !== "undefined") {
  debuggerInterceptor();
  bypassDevToolsDetection();
  
  // Also try to prevent debugger on iframe load (limited effectiveness for cross-origin)
  document.addEventListener("DOMContentLoaded", () => {
    // Override any postMessage handlers that might inject debugger
    const originalPostMessage = window.postMessage;
    window.postMessage = function (message: any, targetOrigin: string) {
      if (typeof message === "string" && message.includes("debugger")) {
        return; // Block messages containing debugger
      }
      return originalPostMessage.call(this, message, targetOrigin);
    };
  });
}

export {};

