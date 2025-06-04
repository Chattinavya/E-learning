import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const defaultCode = {
  html: `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello from HTML!</h1>
  </body>
</html>`,
  css: `body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
}
h1 {
  color: #007acc;
}`,
  js: `console.log("Hello from JS!");`
};

export default function RealTimeEditor() {
  const [activeTab, setActiveTab] = useState('html');
  const [code, setCode] = useState(defaultCode);
  const [srcDoc, setSrcDoc] = useState('');

  const handleEditorChange = (value) => {
    setCode((prev) => ({
      ...prev,
      [activeTab]: value || ''
    }));
  };

  const runCode = () => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${code.css}</style>
        </head>
        <body>
          ${code.html}
          <script>
            try {
              ${code.js}
            } catch (e) {
              document.body.innerHTML += '<pre style="color:red;">' + e + '</pre>';
            }
          <\/script>
        </body>
      </html>
    `;
    setSrcDoc(html);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Tabs + Run Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#1f1f1f',
        padding: '10px 20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}>
        <div>
          {['html', 'css', 'js'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 16px',
                marginRight: '10px',
                background: activeTab === tab ? '#007acc' : '#2c2c2c',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: activeTab === tab ? 'bold' : 'normal',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          onClick={runCode}
          style={{
            padding: '10px 18px',
            background: '#e53935', // RED BUTTON
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#c62828'}
          onMouseOut={(e) => e.currentTarget.style.background = '#e53935'}
        >
          Run ▶
        </button>
      </div>

      {/* Editor + Preview */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Editor
          height="100%"
          width="50%"
          language={activeTab === 'js' ? 'javascript' : activeTab}
          value={code[activeTab]}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
            scrollbar: { verticalScrollbarSize: 6 }
          }}
        />

        <iframe
          title="Live Preview"
          style={{
            width: '50%',
            height: '100%',
            border: 'none',
            background: '#fff',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)'
          }}
          srcDoc={srcDoc}
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}
