import React from 'react'
import './App.css'
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
                <li>
                    <a href="https://www.linkedin.com/in/oeichris/">My LinkedIn page</a>
                </li>
            </ul>

            One of my hobbies is 3D printing. Here's a little project for something you can use to attach a carabiner to a belt.
            I use it to hold my keys: <a href={blobURL({
                sha2_256: "0520269efad016fc44af5af44b6ef776d104bddd169aefe327bddcf6520da8ef",
                ext: "jpg"
            })}>Belt_Attachment_13_example.jpg</a>.
            <ul>
                <li>
                    The source file: <a href={blobURL({
                        sha2_256: "e26d618a8be31497ccf0cfc95e5bafc4c6754081903d57d9c82652e63548e47f",
                        ext: "scad"
                    })}>Belt_Attachment_13.scad</a>. You'll need <a href="https://openscad.org/">OpenSCAD</a> 
                    (free as in speech and free as in beer) to convert this to a STL file; alternatively, you can use the STL file below.
                </li>
                <li>
                    <a href={blobURL({
                        sha2_256: "c25b604dbe410f5c107229ec83cf3b9b6bb82d8d178d6be42f541a8f3ba8c737",
                        ext: "stl"
                    })}>Belt_Attachment_13.stl</a>
                </li>
            </ul>
        </div>
    );
}

export default App