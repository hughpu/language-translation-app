/**
 * @jest-environment jsdom
 */
import React from "react";
import { test, describe, jest } from "@jest/globals";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

import App from "./App";

jest.mock('axios');

describe('App', () => {
  test('Snapshot Match', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });

  describe('Components Of App Exists', () => {
    test('Source Text Label Exists', () => {
      render(<App />);
      expect(screen.getByText('Source Chinese:')).toBeInTheDocument();
    })

    test('Target Text Label Exists', () => {
      render(<App />);
      expect(screen.getByText('Target English:')).toBeInTheDocument();
    })

    test('Submit Button Exists', () => {
      render(<App />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    })
  });

  test('Translation Works', async () => {
    const expectTranslatedValue = 'This translator works fine';
    const mockResult = {
      status: 200,
      data: {
        translations: [
          {translatedText: expectTranslatedValue}
        ]
      }
    };

    axios.request.mockImplementationOnce(
      () => Promise.resolve({ data: mockResult })
    );

    render(<App />);
    const sourceInputBox = screen.getByDisplayValue('你好！');
    const submitButton = screen.getByRole('button');

    fireEvent.change(sourceInputBox, { target: { value: '这个翻译器可以很好地工作' }});
    fireEvent.click(submitButton);

    expect(await screen.findByDisplayValue('This translator works fine')).toBeInTheDocument();
  });
});
