import React, { useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
const Home = () => {
  const editorRef = useRef(null);
  const [resultValue, setResultValue] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const baseURL = "https://code-converter-9d3d.onrender.com";

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  async function convertCode() {
    const payload = {
      code: editorRef.current.getValue(),
      language: language,
    };

    try {
      const res = await fetch(`${baseURL}/convert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setResultValue(data.result);
    } catch (error) {
      alert(error);
      return "Something went wrong:\n" + error;
    }
  }

  async function debugCode() {
    const payload = {
      code: editorRef.current.getValue(),
    };

    try {
      const res = await fetch(`${baseURL}/debug`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setResultValue(data.result);
    } catch (error) {
      alert(error);
      return "Something went wrong:\n" + error;
    }
  }

  async function checkCode() {
    const payload = {
      code: editorRef.current.getValue(),
    };

    try {
      const res = await fetch(`${baseURL}/quality`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setResultValue(data.result);
    } catch (error) {
      alert(error);
      return "Something went wrong:\n" + error;
    }
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <h1 style={{ color: "cyan", paddingTop: "8px" }}>
          Code Converter App
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "24px",
          }}
        >
          <select
            style={{
              height: "35px",
              width: "150px",
              fontSize: "20px",
              color: "cyan",
              backgroundColor: "grey",
            }}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="TypeScript">TypeScript</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C">C</option>
          </select>
          <button
            style={{
              height: "35px",
              width: "150px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
              color: "cyan",
              backgroundColor: "grey",
            }}
            onClick={convertCode}
          >
            Convert Code
          </button>
          <button
            style={{
              height: "35px",
              width: "150px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
              color: "cyan",
              backgroundColor: "grey",
            }}
            onClick={debugCode}
          >
            Debug Code
          </button>
          <button
            style={{
              height: "35px",
              width: "150px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "20px",
              color: "cyan",
              backgroundColor: "grey",
            }}
            onClick={checkCode}
          >
            Quality Check
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ border: "2px solid white"}}>
          <Editor
            height="75vh"
            width="48vw"
            defaultLanguage="javascript"
            theme="vs-dark"
            onMount={handleEditorDidMount}
          />
        </div>
        <textarea
          style={{
            border: "2px solid white",
            backgroundColor: "black",
            color: "white",
            width: "48vw",
          }}
          cols="100"
          rows="10"
          value={resultValue}
          onChange={(e) => setResultValue(e.target.value)}
        />
      </div>
      <p style={{color:"lightgreen", padding:"10px"}}>Made by <a style={{textDecoration:"none", color:"red"}} href="https://www.linkedin.com/in/ajay-84sia/" target="_blank">Ajay</a> with ❤</p>
    </div>
  );
};

export default Home;
