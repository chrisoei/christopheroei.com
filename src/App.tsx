import React from 'react';
import './App.css';
import { blobURL } from "./common"

const App = () => {
  return (
    <div className="App">
          Please pardon the dust -- I'll put up real content soon.
          <ul>
              <li>
                  <a href={blobURL({
                      sha2_256: "bbfae219246fa05f2e4df0181ca892157e39752ca80ecf6c1992d18c2c42e899",
                      ext: "pdf"
                  })}>Turing Undecidability and the Efficient Market Hypothesis</a>

              </li>
          </ul>
    </div>
  );
}

export default App