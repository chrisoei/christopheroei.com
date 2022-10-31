import React, { useState } from 'react'
import './App.css'
import { blobURL } from './common'
import { hobbies } from './hobbies'
import { publications } from './publications'
import { socialMedia } from './socialMedia'

const App = () => {
    let [currentPage, setCurrentPage] = useState("publications")

    const handleSection = () => {
        switch (currentPage) {
            case "publications":
                return publications()
                break
            case "socialMedia":
                return socialMedia()
                break
            case "hobbies":
                return hobbies()
                break
            default:
                alert("Bug!")
        }
    }
    return (
        <div className="App">
            <div className="App-header">
                Chris Oei's Page
            </div>
            <div className="nav">
                <div className="nav-item" onClick={() => {setCurrentPage("publications") } }>
                    Publications
                </div>
                <div className="nav-item" onClick={() => {setCurrentPage("socialMedia") } }>
                    Social Media
                </div>
                <div className="nav-item" onClick={() => { setCurrentPage("hobbies") }}>
                    Hobbies
                </div>
            </div>
            
            Please pardon the dust -- I'll put up real content soon.

            {handleSection()}
            

        </div>
    );
}

export default App