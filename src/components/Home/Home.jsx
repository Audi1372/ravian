import { useState } from "react";

import Main2 from "./Main2";

const Home = () => {
  const [show, setsShow] = useState(false);
  const display = () => {
    setsShow(true);
  };
  return (
    <>
      <section className="home">
        <h1 className="header">Welcome to RAVIAN AI</h1>
        <p>Turn Data into Decisions with our AI Data Scientist.</p>
        <button className="animated-button" onClick={() => display()}>
          Try Here
        </button>
      </section>
      {show && <Main2 />}
    </>
  );
};

export default Home;
