import React from 'react'
import '../styles/CodeEditor.css'

function CodeEditor () {
  return (
    <div className="container border-0">
      <div className="editor-header p-3 flex rounded-t-lg">
        <span className="span1 mr-2"></span>
        <span className="span2 mr-2"></span>
        <span className="span3 mr-2"></span>
      </div>
      <div className="editor px-4 py-4 rounded-b-lg">
        <h1 className="code text-xs lg:text-sm">
          <span className="print">print</span>
          <span className="parentheses">(</span>
          <span className="string font-weight-bold break-words">&quot;Welcome to The Coding Culture&quot;</span>
          <span className="parentheses">)</span>
        </h1>
        <h1 className="code1 text-xs lg:text-sm mt-3">
          <span className="print">print</span>
          <span className="parentheses">(</span>
          <span className="string font-weight-bold">&quot;Talk is Cheap show me the code.&quot;</span>
          <span className="parentheses">)</span>
        </h1>
      </div>
    </div>
  )
}

export default CodeEditor
