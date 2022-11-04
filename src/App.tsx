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
        <div className="app">
            <div className="app-header">
                <div className="app-title">
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
            </div>

            {handleSection()}

        </div>
    );
}

export default App
