import React,{useState} from "react";
import ReactDom from "react-dom";
import "./Test.css"

function Test() {
    const [text, setText] = useState("");

    const onInputChange = event => {  
      
        setText(event.target.value);
       
    };

    return (
    <div className="wrapper">
        <div className="main">
            <div className="Test">
                <input type="text" value={text} onChange={onInputChange}/>
            <div>{text}</div>
        </div>
    </div>
</div>
    );
}
export default Test;

