
import { useEffect, useRef, useState } from "react";

function App() {
  const [autoPassword, setAutoPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  function generatePassword() {
    let randomPass =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}";

    let pass = "";
    let length = 8;

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * randomPass.length);
      pass += randomPass.charAt(charIndex);
    }

    setAutoPassword(pass);
    setCopied(false);
  }

  function copyToClipboard() {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(autoPassword);
      setCopied(true);

      
      setTimeout(() => setCopied(false), 2000);
    }
  }

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-blue-950 text-amber-100 w-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-lg font-semibold mb-4">
          Auto Password Generator
        </h1>
        <div className="flex">
          <input
            ref={passwordRef}
            className={`w-full p-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:outline-none transition-all ${
              copied ? "bg-blue-700" : "bg-gray-800"
            }`}
            type="text"
            readOnly
            value={autoPassword}
          />
          <button
            className="px-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-800 transition-all"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
       
      </div>
    </div>
  );
}

export default App;
