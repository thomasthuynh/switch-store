import React from "react";

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
      <div className="highlightImg">{icon}</div>
      <h3 className="highlightTitle">{title}</h3>
      <p className="highlightPara">{para}</p>
    </div>
  );
};

export default Highlight;
