import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TextSampleForm from "../TextSampleForm"

const setText = jest.fn()
const text = "hello !"
const newText = "hello world"

test("<FontSizeSlider />", () => {
  render(<TextSampleForm text={text} setText={setText} />)
  const textarea = screen.getByLabelText(/votre texte/i)
  expect(textarea.value).toBe(text)
  fireEvent.change(textarea, {
    target: { value: newText },
  })

  expect(setText).toHaveBeenCalledTimes(1)
  expect(setText).toHaveBeenCalledWith(newText)
})
