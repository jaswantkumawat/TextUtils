import React, { useState } from 'react'

export default function About() {
    
const [myStyle , setMyStyle] = useState({
    color : "black" ,
    backgroundColor : "white"
})
const toggleStyle =() =>{

        setMyStyle({
            color : "white" ,
            backgroundColor : "grey"
        })
    }
const lightMode =() =>{

        setMyStyle({
            color : "grey" ,
            backgroundColor : "white"
        })
        
}
    return (
        <div className="container" style={myStyle}>
            <h2>About Us </h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            Accordion
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong/>TextUtils is the text editor app created by Jaswant Kumawat using React JS.
                            TextUtils provides many options to customize our text through the buttons.
                            for eg. we can change our text to upercase , lowerCase and apply some styles over the text like: Bold , italic , underline . We have also others options just as to copy text , clear text and remove extra spaces in the text para.
                            We have also put two buttons to enhance our react app of dark mode and light mode , through dark mode we will switch light theme to dark theme and vice versa through light button.

                        </div>
                    </div>
                </div>

            </div>
            <div className="conatiner">
            <button className="btn btn-dark my-2 mx-2" onClick={toggleStyle}>Dark Mode</button>
            <button className="btn btn-light my-2 mx-2" onClick={lightMode}> Light Mode</button>
             </div>
        </div>
        



    )
}
