import React, { useState } from "react";

function Rating () {
    
    const imgs1 = "https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg"
    const imgs2 = "https://media.istockphoto.com/id/1421948749/vector/simple-star-vector-black-line-icon-isolated.jpg?s=612x612&w=0&k=20&c=EKleOC6kVhNH7qh2S6ZcVZ4jb7zdrRnCAMtoPfgPdWQ="
    const whitestar= [imgs2,imgs2,imgs2,imgs2,imgs2]
    const [number,setNumber] = useState(whitestar)
    

    function starclr(index,e) {
        console.log()
        let updatted=[]
        if(e==="true") {
        for(let i=0;i<5;i++) {
            if(i<=index) {
                updatted.push(imgs1)
            }
            else {
                updatted.push(imgs2)
            }
        }
         
        setNumber(updatted) 
    }
}

    return (
        <>
            <div>
                {/* <input type="number" onChange={(e)=>starclr(e.target.value)}></input> */}
                {number.map((item,index)=><img src={item} onClick={()=>starclr(index,"true")}/>) }
                {/* {number.map((item,index)=><img src={item}/>)} */}
            </div>
        </>
    )
}

export default Rating