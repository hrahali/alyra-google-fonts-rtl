import React from "react"
import { render, cleanup, waitForElement } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import Fonts from "../Fonts"
import useGoogleFonts from "../../hooks/useGoogleFonts"

global.fetch = require('jest-fetch-mock');

const data = {
  kind: "webfonts#webfontList",
  items: [{ "family": "Commissioner", "variants": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subsets": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "version": "v1", "lastModified": "2020-10-08", "category": "sans-serif", "kind": "webfonts#webfont" }, { "family": "Piazzolla", "variants": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subsets": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "version": "v3", "lastModified": "2020-10-08", "category": "serif", "kind": "webfonts#webfont" }, { "family": "Sansita Swashed", "variants": ["300", "regular", "500", "600", "700", "800", "900"], "subsets": ["latin", "latin-ext", "vietnamese"], "version": "v1", "lastModified": "2020-09-29", "category": "display", "kind": "webfonts#webfont" }, { "family": "Suwannaphum", "variants": ["regular"], "subsets": ["khmer"], "version": "v14", "lastModified": "2020-07-23", "category": "display", "kind": "webfonts#webfont" }, { "family": "Chilanka", "variants": ["regular"], "subsets": ["latin", "malayalam"], "version": "v6", "lastModified": "2020-07-23", "category": "handwriting", "kind": "webfonts#webfont" }, { "family": "Sora", "variants": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subsets": ["latin", "latin-ext"], "version": "v1", "lastModified": "2020-07-13", "category": "sans-serif", "kind": "webfonts#webfont" }, { "family": "Staatliches", "variants": ["regular"], "subsets": ["latin", "latin-ext"], "version": "v5", "lastModified": "2020-09-25", "category": "display", "kind": "webfonts#webfont" }, { "family": "Piedra", "variants": ["regular"], "subsets": ["latin", "latin-ext"], "version": "v9", "lastModified": "2020-09-02", "category": "display", "kind": "webfonts#webfont" }, { "family": "Koulen", "variants": ["regular"], "subsets": ["khmer"], "version": "v14", "lastModified": "2020-07-23", "category": "display", "kind": "webfonts#webfont" }, { "family": "Kdam Thmor", "variants": ["regular"], "subsets": ["khmer"], "version": "v9", "lastModified": "2020-10-08", "category": "display", "kind": "webfonts#webfont" }, { "family": "Moul", "variants": ["regular"], "subsets": ["khmer"], "version": "v12", "lastModified": "2020-07-23", "category": "display", "kind": "webfonts#webfont" }, { "family": "Lemonada", "variants": ["300", "regular", "500", "600", "700"], "subsets": ["arabic", "latin", "latin-ext", "vietnamese"], "version": "v11", "lastModified": "2020-06-26", "category": "display", "kind": "webfonts#webfont" }, { "family": "Peddana", "variants": ["regular"], "subsets": ["latin", "telugu"], "version": "v8", "lastModified": "2020-07-23", "category": "serif", "kind": "webfonts#webfont" }]
}

test('useGoogleFonts', async () => {
  fetch.mockResponseOnce(JSON.stringify(data))
  const { loading, fonts } = useGoogleFonts()
  expect(loading).toBeTruthy()
})