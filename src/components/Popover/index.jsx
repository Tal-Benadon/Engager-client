import React, { useState } from "react";
import style from "./style.module.css";

export default function Popover({ list, children, fnName, }) {
    const maxHeight = (list.length * 50) + 20
    const [isClicked, setIsClicked] = useState(false)

    let finalFunction = {  }
    // finalFunction.onMouseLeave = () => setIsClicked(false)
    if (fnName === "onClick")
        finalFunction.onClick = handleClick
    else if (fnName === "onOver") {   
        finalFunction.onMouseEnter = handleClick
    }
    else if (fnName === "onRight")
        finalFunction.onContextMenu = handleClick

    function handleClick(e) {
        e.preventDefault()
        let screenWidth = window.screen.width
        let screenHeight = window.screen.height;
        let finalStyle = { display: 'flex' }
        let elementWidth = e.screenX;
        let totalWidth = screenWidth - elementWidth;
        let elmentHeight = e.screenY;
        let totalHeight = screenHeight - elmentHeight;

        if (isClicked) return setIsClicked(false)

        if (totalWidth > 210) finalStyle.left = 15;

        else finalStyle.right = -10;

        if (e.pageY > 100) finalStyle.bottom = 15;

        else if (totalHeight > maxHeight) finalStyle.top = 15

        else finalStyle.bottom = -10

        setIsClicked(finalStyle)
    }

    return (
        <div className={style.mainIcon} {...finalFunction} >
            <button className={style.children} >
                {children}
            </button>
            {!isClicked ? null :
                (<div className={style.Popover} style={isClicked} onMouseLeave={()=>setIsClicked(false)} >
                    <ul >
                        {list?.map?.(item => (
                            <li className={item.color === "red" ? style.red : style.green}
                                onClick={item.onClick} key={item.text} >
                                <span className={style.icon}>{item.icon}</span>
                                <span className={style.text}>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>)
            }
        </div>
    );
}



// SVG
