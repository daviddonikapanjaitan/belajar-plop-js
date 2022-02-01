import { render } from "@testing-library/react";

import Component from "path/to/component";

describe("Component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
