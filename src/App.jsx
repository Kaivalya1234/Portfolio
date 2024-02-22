import styles from "./App.module.css";
import { Heroine } from "./components/Heroine/Heroine";
import { Navbar } from "./components/Navbar/Navbar";
import { About} from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Heroine  />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;