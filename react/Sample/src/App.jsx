import User from "../components/User.jsx";
import { Projects } from "../components/Projects.jsx";
import Manager from "../components/notificationSystem/Manager.jsx";
import PropsParent from "../components/Props Practice/PropsParent.jsx";

function App() {
  const name1 = "Amit";
  const name2 = "Ajay";
  const name3 = "Virat";
  const name4 = "Rohit";
  return (
    <>
      <PropsParent />
      {/* <User name={name1} />
      <User name={name2} />
      <User name={name3} />
      <User name={name4} />
      <Projects />
      <Manager /> */}
    </>
  );
}

export default App;
