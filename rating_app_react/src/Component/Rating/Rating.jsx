import React, { useState } from "react";

function Rating () {
    
    const imgs1 = "https://static.vecteezy.com/system/resources/previews/004/903/818/non_2x/emoji-sad-face-crying-free-vector.jpg"
    const imgs2 = "https://i.pinimg.com/736x/af/31/6c/af316c5c9febee1e974b9bf96fc66293.jpg"
    const imgs3 = "https://static.vecteezy.com/system/resources/previews/002/592/172/non_2x/smile-emoji-pop-art-line-style-icon-free-vector.jpg"
    const [input,setInput] = useState("")
    const [number,setNumber] = useState()
    

    function emojichange(e) {
        setInput(e)
        if(1<=e && e<=40) {
            setNumber(imgs1)
        }
        else if (41<=e && e<=70) {
            setNumber(imgs2)
        }
        else {
            setNumber(imgs3)
        }
    }


    return (
        <>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" id="myRange" onChange={(e)=>emojichange(e.target.value)}/>
                <div>{input}</div>
                <img src={number}/>
            </div>

        </>
    )
}

export default Rating