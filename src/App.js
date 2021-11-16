import "react-datepicker/dist/react-datepicker.css"; // css import 
import ButtonAction from "./components/buttonAction/buttonAction";

import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ButtonAction />
    </div>
  );
}

export default App;