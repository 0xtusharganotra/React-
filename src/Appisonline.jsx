import React from "react";
import "./App.css";
import useIsOnline from "../custom_hooks/Useisonline";

function App() {
  const { isonline } = useIsOnline();
  return <>{isonline ? <h1>User is online</h1> : <h1>User is offline</h1>}</>;
}

export default App;
