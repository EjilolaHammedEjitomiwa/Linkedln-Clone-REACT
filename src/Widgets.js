import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Widgets.css";
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widget_article_left">
          <FiberManualRecordIcon />
        </div>
        <div className="widget_article_right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedln News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React is back", "news subtitle")}
      {newsArticle("Covid 19 vaccine", "New vaccine detected")}
    </div>
  );
}

export default Widgets;
