import Promo from "../promo";
import Sidepanel from "../sidepanel";
import About from "../about";
import Resume from "../resume";
import Skills from "../skills";
import Projects from "../projects/Projects";
import Contacts from "../contacts";


function App() {
  return (
    <div>
        <Sidepanel />
        <Promo />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contacts />
    </div>
  );
}

export default App;
