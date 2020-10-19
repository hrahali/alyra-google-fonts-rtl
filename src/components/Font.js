import React from "react"

const Font = (props) => {
  const { text, family, category, variants, size } = props
  const familyPlus = family.split(" ").join("+")
  return (
    <article className="col-lg-6 mb-3">
      <div className="shadow p-3">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span data-testid="font-family">{family}</span>
          <small data-testid="font-variants-count">{variants.length} variant(s)</small>
        </h2>
        <p>
          <span className="badge bg-dark" data-testid="font-category">{category.toUpperCase()}</span>
        </p>
        <p data-testid="font-style"
          style={{ fontFamily: family, fontSize: `${size}px` }}
          className="sample"
        >
          {text}
        </p>
        <a
          data-testid="font-link"
          rel="noopener noreferrer"
          target="_blank"
          className="text-danger"
          href={`https://fonts.google.com/specimen/${familyPlus}`}
        >
          Voir sur Google Fonts (ouvre un nouveau tab)
        </a>
      </div>
    </article>
  )
}

export default Font
