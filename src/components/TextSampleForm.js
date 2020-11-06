import React from "react"

const TextSampleForm = ({ text, setText }) => {
  const handleTextareaChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="mb-3">
      <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tapez votre texte
      </label>
      <textarea
        id="text"
        className="form-control"
        value={text}
        onChange={handleTextareaChange}
        data-testid="textarea-text"
      />
    </div>
  )
}

export default TextSampleForm
