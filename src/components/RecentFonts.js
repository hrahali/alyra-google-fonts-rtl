import React, { useEffect, useState } from "react"
import Font from "./Font"
import GoogleFontLoader from "react-google-font-loader"

const RecentFonts = (props) => {
  const { text, size } = props
  const [fonts, setFonts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?sort=date&key=${API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("something wrong")
      })
      .then((data) => {
        setFonts(data.items.slice(0, 10))
      })
      .catch((error) => {
        console.log(error.message)
      })
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      {loading ? (
        <p data-testid="loading">Loading</p>
      ) : (
        <>
          {!!fonts.length && (
            <section className="row mb-5">
              <GoogleFontLoader
                fonts={fonts.map((el) => ({
                  font: el.family,
                }))}
                subsets={["latin"]}
              />
              <hr />
              <h2 className="mb-3">
                <span className="badge bg-danger">Le plus récentes !!</span>
              </h2>
              {fonts.map((font) => (
                <Font key={font.family} text={text} size={size} {...font} />
              ))}
            </section>
          )}
        </>
      )}
    </>
  )
}

export default RecentFonts
