import { useState } from "react";
import "../Styles/App.css";
import MainContent from "./MainContent";
import SignUpOrLogIn from "./SignUpOrLogIn";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  return (
    <>
      {isUserLogged ? (
        <MainContent />
      ) : (
        <SignUpOrLogIn setIsUserLogged={setIsUserLogged} />
      )}
    </>
  );
}

export default App;
