import React from "react";
import { shallow } from "enzyme";
import Statistics from "../../components/Statistics";

const props = {
  totalStats: {
    confirmed: 2,
    deaths: 2,
  },
};

describe("Statistics", () => {
  it("renders", () => {
    const wrapper = shallow(<Statistics {...props} />);

    expect(wrapper.exists()).toEqual(true);
  });

  it("renders correct props", () => {
    const newProps = {
      totalStats: {
        confirmed: 3,
        deaths: 2,
      },
    };
    const wrapper = shallow(<Statistics {...newProps} />);
    //todo check for new props
    expect(wrapper.exists()).toEqual(true);
  });
});
