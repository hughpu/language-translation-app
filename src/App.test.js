import React from "react";
import { test, describe, expect } from "@jest/globals";
import renderer from "react-test-renderer";

import App from "./App";

describe('App', () => {
  test('Snapshot Match', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  })
})
