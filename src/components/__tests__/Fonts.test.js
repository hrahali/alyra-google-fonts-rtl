import React from "react"
import { render, waitForElementToBeRemoved } from "@testing-library/react"
import Fonts from "../Fonts"

const mockedData = {
  items: [
    {
      family: "Commissioner",
      variants: ["100"],
      subsets: ["cyrillic"],
      category: "sans-serif",
    },
    {
      family: "Piazzolla",
      variants: ["100"],
      lastModified: "2020-10-08",
      category: "serif",
    },
    {
      family: "Sansita Swashed",
      variants: ["300"],
      subsets: ["latin"],
      category: "display",
    },
    {
      family: "Suwannaphum",
      variants: ["regular"],
      subsets: ["khmer"],
      category: "display",
    },
    {
      family: "Chilanka",
      variants: ["regular"],
      subsets: ["latin", "malayalam"],
      category: "handwriting",
      kind: "webfonts#webfont",
    },
    {
      family: "Sora",
      variants: ["100"],
      subsets: ["latin"],
      category: "sans-serif",
    },
    {
      family: "Staatliches",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      category: "display",
    },
    {
      family: "Piedra",
      variants: ["regular"],
      subsets: ["latin", "latin-ext"],
      category: "display",
    },
    {
      family: "Koulen",
      variants: ["regular"],
      subsets: ["khmer"],
      category: "display",
    },
    {
      family: "Kdam Thmor",
      variants: ["regular"],
      subsets: ["khmer"],
      category: "display",
    },
    {
      family: "Moul",
      variants: ["regular"],
      subsets: ["khmer"],
      category: "display",
    },
    {
      family: "Lemonada",
      variants: ["300"],
      subsets: ["arabic"],
      category: "display",
    },
    {
      family: "Peddana",
      variants: ["regular"],
      subsets: ["latin"],
      category: "serif",
    },
  ],
}

// mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedData),
  })
)

test("<Fonts /> displays loading and switches to fonts list", async () => {
  // initial state
  const { queryByTestId, getAllByTestId } = render(<Fonts />)
  expect(queryByTestId("loading")).toBeTruthy()
  await waitForElementToBeRemoved(() => queryByTestId("loading"))
  // for the simplicity of quering, react-testing-library-specific attribute (data-test-id) is added in ../Fonts.js
  expect(getAllByTestId("font-family").length).toBe(10)
})
