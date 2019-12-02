import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container, List} from 'semantic-ui-react'
import Example from "./example";

const Test = ({ children }) => (
  <Container >
    <List bulleted>
    </List>
    {children}
  </Container>
);
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Test>
    <Example />
  </Test>,
  document.getElementById("root")
);



