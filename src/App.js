import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Content from "./components/Content";
import Address from "./components/Address";
import Myprojects from "./components/Myprojects";
import Mycourse from "./components/Mycourse";
function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Content />
      <Address />
      <Mycourse />
      <Myprojects />
    </div>
  );
}

export default App;
