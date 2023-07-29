import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input id="email" label="Email" value="" />);
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });

  it("should render the input with a value", () => {
    render(
      <Input id="email" label="Email" value="test_value" />
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveValue("test_value");
  });

  it("should render the input with a placeholder", () => {
    render(<Input id="email" label="Email" value="" />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("placeholder", " ");
  });

  it("should render the input with a type", () => {
    render(
      <Input
        id="email"
        label="Email"
        value=""
        type="email"
      />
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("should call onChange", () => {
    const onChange = jest.fn();
    render(
      <Input
        id="email"
        label="Email"
        onChange={onChange}
        value=""
        type="email"
      />
    );
    const input = screen.getByLabelText("Email");

    // react overrides the input value setter. So we need to use the native input value setter
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, 'some value');

    input.dispatchEvent(new Event("input", { bubbles: true }));
    expect(onChange).toHaveBeenCalled();
  });
});


