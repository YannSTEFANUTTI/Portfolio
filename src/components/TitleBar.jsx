import React from "react";

const TitleBar = () => {
return (
    <div className="titleBar">
    <div className="logos">
        <img src="src/assets/img/GitHub.png" alt="Github" />
        <img src="src/assets/img/react.png" alt="React" />
        <img src="src/assets/img/JS.png" alt="JS" />
        <img src="src/assets/img/html.png" alt="html" />
        <img src="src/assets/img/CSS.png" alt="css" />
        <img src="src/assets/img/node.png" alt="node" />
        <img src="src/assets/img/EX.png" alt="Express" />
        <img src="src/assets/img/sql.png" alt="sql" />
        <img src="src/assets/img/ps.png" alt="PS" />
        <img src="src/assets/img/AI.png" alt="AI" />
        <img src="src/assets/img/AE.png" alt="AE" />
    </div>
    <a
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
    >
        <h1>Yann Stefanutti</h1>
        <p>Développeur Full Stack</p>
    </a>
    </div>
);
};

export default TitleBar;
