import React from 'react'
import '../styles/CodeEditor.css'

function CodeEditor () {
  return (
    <div className="container border-0 mt-5">
      <div className="editor-header py-2">
        <span className="span1 mr-2 ml-2"></span>
        <span className="span2 mr-2"></span>
        <span className="span3 mr-2"></span>
      </div>
      <div className="editor px-4 py-4">
        <h1 className="code"><span className="print">print</span>(<span className="string font-weight-bold">&quot;Welcome to The Coding Culture&quot;</span>)</h1>
        <h1 className="code1 mt-3"><span className="print">print</span>(<span className="string font-weight-bold">&quot;Talk is Cheap show me the code.&quot;</span>)</h1>
      </div>
    </div>
  )
}

export default CodeEditor
