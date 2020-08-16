import React, { useContext } from "react";
import { ContentContext } from "../Context/ContentContext";

const TempPage = () => {
  const context = useContext(ContentContext);

  return (
    <div>
      {/*Hero Section */}

      <img id="image" alt="Hero Section" src={context.content?.heroImage} />
      <h1 className="display-4 hero">{context.content?.hero}</h1>

      {/*Content Section */}

      <div id="content">
        <h1 className="display-4">{context.content?.contentHeading}</h1>
        <p>{context.content?.contentText}</p>
      </div>
    </div>
  );
};

export default TempPage;
