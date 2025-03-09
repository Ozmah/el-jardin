import About from "./About";
import Home from "./Home";

const Content = ({ activeSection }) => {
  const sectionsMap = {
    home: Home,
    about: About,
  };
  const SectionComponent = sectionsMap[activeSection];
  return <SectionComponent />;
};
export default Content;
