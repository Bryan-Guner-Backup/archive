import React from "react";

// Layout encloses everything else in itself for all pages
// children is a function that contains all the pages
// so all basically all pages follow this layout now
export default ({ children }) => (
  <div>
    <h3
      style={{
        textAlign: `center`,
        margin: `1em`,
        padding: `1em`,
        borderBottom: `1px solid lightgrey`,
      }}
    >
      Panda Blog
    </h3>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children()}
    </div>
  </div>
);
