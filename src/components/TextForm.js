import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [isItalic, setIsItalic] = useState(false)
    const [isBold, setIsBold] = useState(false)
    const [isUnderline, setIsUnderline] = useState(false)
    const common = {
        fontStyle: isItalic ? 'italic' : 'normal',
        textDecoration: isUnderline ? 'Underline' : 'none',
        fontWeight: isBold ? 'Bold' : 'normal'
    }
    const style = {
        common,
        textAreaStyle: {
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: isUnderline ? 'Underline' : 'none',
            fontWeight: isBold ? 'Bold' : 'normal',
            height: "200px",
            color: props.mode === 'dark' ? 'white' : 'black',
            backgroundColor: props.mode === 'light' ? 'white' : '#343838',
            common
        }
    }
    const changeToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text was changed to Uppercase successfully" , "success")
    };
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text was changed to Lowercase successfully" , "success")
    };
    const Capitalization = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Text's first letter was capatalized successfully" , "success")
    };

    const changeToBold = () => {
        // setStyleType('bold')
        setIsBold((prevState) => !prevState)
        props.showAlert("Text was changed to Bold successfully" , "success")
    };

    const changeToUnderline = () => {
        // setStyleType('underline')
        setIsUnderline((prevState) => !prevState)
        props.showAlert("Text was changed to Underline successfully" , "success")
    };

    const changeToItalic = () => {
        setIsItalic((prevState) => !prevState)
        props.showAlert("Text was changed to Italic successfully" , "success")
    };
    const ClearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text was cleared successfully" , "success")
    };
    const CopyText = () => {
        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text was copied successfully" , "success")
    };
    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed successfully" , "success")
    };


    const handleonchange = (event) => {
        setText(event.target.value);
    };
    return (
        <>
            <div className="conatiner">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="form-floating">
                    <textarea
                        style={style.textAreaStyle}
                        className="form-control"
                        placeholder="Leave a comment here"
                        value={text}
                        onChange={handleonchange}
                        id="mybox"
                    ></textarea>
                </div>
                <button disabled={text.length===0}className="btn btn-dark my-2" onClick={changeToUpperCase}>
                    UPPERCASE
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" onClick={lowerCase}>
                    lowercase
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" onClick={Capitalization}>
                    Capitalization
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" style={{ fontWeight: 800 }} onClick={changeToBold}>
                    BOLD
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" style={{ textDecoration: "Underline" }} onClick={changeToUnderline}>
                    UNDERLINE
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" style={{ fontStyle: "italic" }} onClick={changeToItalic}>
                    ITALIC
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" onClick={CopyText}>
                    COPY TEXT
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" onClick={RemoveExtraSpaces}>
                    REMOVE EXTRA SPACES
                </button>
                <button disabled={text.length===0}className="btn btn-dark my-2 mx-2" onClick={ClearText}>
                    CLEAR TEXT
                </button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{text.split(" ").filter((arr)=>{return arr.length!==0}).length * 0.008} Minutes taken to read this paragarph </p>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
                <p style={style.common}>{text.length > 0 ? text : "Enter text to preview it here"}</p>
            </div>
        </>
    );
}
