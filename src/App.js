import React, { useState, useEffect } from "react";
import { ContentContext } from "./Context/ContentContext";
import defaultImage from "./Assets/heroSec.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaPen, FaArrowLeft } from "react-icons/fa";
import TempPage from "./Components/tempPage";
import TempForm from "./Components/tempForm";

function App() {
  // The default content object
  const [content, setContent] = useState({
    hero: "WEBENEFIC",
    heroImage: defaultImage,
    contentHeading: "Let's Make Your Online Presence Better",
    contentText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate auctor porta. Integer venenatis nisi pulvinar tortor finibus dictum. Duis eu metus eget elit tempor tristique et id sem. Proin eleifend tellus in nisl rhoncus semper. Sed ornare, elit vitae elementum blandit, tortor leo vestibulum lacus, mollis accumsan nibh lectus id erat. Aenean sodales, metus ut sodales luctus, ipsum nunc efficitur libero, quis viverra augue magna vitae nisl. Duis hendrerit elementum velit in posuere. Etiam convallis elementum diam eu mattis. Aenean vitae blandit ipsum. Sed mattis convallis turpis vel venenatis. Phasellus ut hendrerit est. Integer ac posuere arcu. Aliquam vel.",
  });

  //TODO: Store context to the storage
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("content", JSON.stringify(content));
    console.log(JSON.stringify(content));
  };

  //TODO: Access context to the page
  useEffect(() => {
    const localContent = sessionStorage.getItem("content");
    if (localContent) {
      setContent(JSON.parse(localContent));
    }
  }, []);

  return (
    <Router>
      <ContentContext.Provider value={{ content, setContent }}>
        <Switch>
          {/*Hero Section */}

          <Route exact path="/">
            <TempPage />
            <Link id="button" to="/edit">
              <FaPen />
            </Link>
          </Route>
          {/*Content Section */}

          <Route exact path="/edit">
            <TempForm handleSubmit={handleSubmit} />
            <Link id="button" to="/">
              <FaArrowLeft />
            </Link>
          </Route>
        </Switch>
      </ContentContext.Provider>
    </Router>
  );
}

export default App;
