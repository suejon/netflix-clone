// write a test for input.tsx
import { render, screen } from "@testing-library/react";
import Input from "./input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input id="email" label="Email" onChange={() => {}} value="" />);
    const input = screen.getByLabelText("Email");
    expect(input).toBeInTheDocument();
  });
  it("should render the input with a value", () => {
    render(
      <Input id="email" label="Email" onChange={() => {}} value="test_value" />
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveValue("test_value");
  });
  it("should render the input with a placeholder", () => {
    render(<Input id="email" label="Email" onChange={() => {}} value="" />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("placeholder", " ");
  });
  it("should render the input with a type", () => {
    render(
      <Input
        id="email"
        label="Email"
        onChange={() => {}}
        value=""
        type="email"
      />
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("type", "email");
  });
});
//   it("should call onChange", () => {
//     const onChange = jest.fn();
//     render(
//       <Input
//         id="email"
//         label="Email"
//         onChange={onChange}
//         value=""
//         type="email"
//       />
//     );
//     const input = screen.getByLabelText("Email");


