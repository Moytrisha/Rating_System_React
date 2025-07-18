import React, { useState } from "react";

function Rating () {
    const [number,setNumber] = useState([])
    const imgs1 = "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"
    const imgs2 = "https://media.istockphoto.com/id/1421948749/vector/simple-star-vector-black-line-icon-isolated.jpg?s=612x612&w=0&k=20&c=EKleOC6kVhNH7qh2S6ZcVZ4jb7zdrRnCAMtoPfgPdWQ="
    // function Starclr (a) {
    //     if(a==="clr") {
    //         if (number>0) {
    //             for(let i =0; i<number.length;i++) {

    //             }
    //             else {

    //             }
    //         }
    //     }
    // }

    function starclr(e) {
        console.log(e)
        if(!e) {
           setNumber([])
            return
        }
        let updatted= []
        for(let i=1;i<=5;i++) {
            if(i<=e) {
                updatted.push(imgs1)
            }
            else {
                updatted.push(imgs2)
            }
        }
        
        setNumber(updatted)
    }

    return (
        <>
            <div>
                <input type="number" onChange={(e)=>starclr(e.target.value)}></input>
                {number.map((item,index)=><img src={item}/>)}
                
            </div>
        </>
    )
}

export default Rating