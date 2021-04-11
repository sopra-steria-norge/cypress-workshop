import { shallow } from "enzyme";
import Statistics from "../../components/Statistics";

describe("Statistics", () => {
  it("should render", () => {
    const props = {
      totalStats: {
        confirmed: 2,
        deaths: 2,
      },
    };

    const wrapper = shallow(<Statistics {...props} />);

    expect(wrapper.exists()).toEqual(true);
  });

  it("should render with correct props", () => {
    const newProps = {
      totalStats: {
        confirmed: 3,
        deaths: 2,
      },
    };
    
    const wrapper = shallow(<Statistics {...newProps} />);

    expect(
      wrapper.find('div.statistic-block')
      .first()
      .children()
      .last()
      .contains(newProps.totalStats.confirmed.toString())
    ).toEqual(true);

    expect(
      wrapper.find('div.statistic-block')
      .last()
      .children()
      .last()
      .contains(newProps.totalStats.deaths.toString())
    ).toEqual(true);
  });
});
