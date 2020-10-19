import React from "react"
import { render, cleanup, fireEvent } from '@testing-library/react'
import TextSampleForm from "../TextSampleForm"

afterEach(cleanup)

const setText = jest.fn();
const text = 'hello !'
const newText = 'hello world'

test('<FontSizeSlider />', () => {
  const { getByTestId } = render(<TextSampleForm text={text} setText={setText} />)
  const textarea = getByTestId('textarea-text')
  expect(textarea.value).toBe(text)
  fireEvent.change(textarea, {
    target: { value: newText },
  });

  expect(setText).toHaveBeenCalledTimes(1);
  expect(setText).toHaveBeenCalledWith(newText);

})
