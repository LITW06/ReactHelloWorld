import React from 'react';
import { render } from 'react-dom';
import HelloReact from "./HelloReact";

render(<HelloReact name="John" times={2} />, document.getElementById('root'));