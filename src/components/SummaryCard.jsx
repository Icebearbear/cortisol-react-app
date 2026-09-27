import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../page/Dashboards";

function SummaryCard(){
    const {items} = useContext(UserContext);
    return (
        <div style={{display: "flex" , padding: "10px"}}>
            {items.length !== 0 ? 
            items.map((item, index) => (
                <div key={index} style={{padding: "20px", border: '1px solid #ccc', borderRadius: '10px'}}>
                    <p>Title: {item.title}</p>
                    <p>Value: {item.value} {item.unit}</p>
                </div>
            )) 
            : <></>
        }
        </div>
    )
}

export default SummaryCard;