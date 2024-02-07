import React, { useState } from "react";
import style from "./style.module.css";
export default function Popover({ list, children }) {
    // list.lenght
    const maxHeight = (list.length * 50) + 20
    console.log("maxHeight", maxHeight);

    // let popWidth = 209
    // let popHeight = 252

    // console.log("Screen width: " + screenWidth);
    // console.log("Screen height: " + screenHeight);
    // console.log("screenWidth > screenHeight", screenWidth > screenHeight);
    // console.log("OUR POP SISE::::Width (209px)Height (252px)");
    // console.log("list", list);

    // clientX : 487
    // clientY: 699
    // screenX : 452
    // screenY: 650

    const [isClicked, setIsCkicked] = useState(false)

    const handleClick = (e) => {
        let screenWidth = window.screen.width
        let screenHeight = window.screen.height;
        let finalStyle = { display: 'flex' }
        let elementWidth = e.screenX;
        let totalWidth = screenWidth - elementWidth;
        let elmentHeight = e.screenY;
        let totalHeight = screenHeight - elmentHeight;
        console.log("elementWidth", elementWidth);
        if (isClicked) return setIsCkicked(false)
        if (totalWidth > 210) {
            finalStyle.left = 25;
            // return setIsCkicked({ bottom: 25, left: 40, position: "absolute" })
        }
        else {
            finalStyle.right = 25;
            // setIsCkicked({ bottom: 25, right: 40, position: "absolute" })

        }

        if (totalHeight > maxHeight) {
            finalStyle.top = 25

            // setIsCkicked({ bottom: 25, right: 40, position: "absolute" })

        } else {
            finalStyle.bottom = 25
        }

        setIsCkicked(finalStyle)
        // console.log("elementWidth", elementWidth);
        // console.log("e", e)

        // setIsCkicked({ bottom: 25, right: 40, position: "absolute" })

    }
    return (
        <div style={{ position: "relative", width: 'fit-content' }}>
            <button onClick={handleClick}>
                {children}
            </button>
            {!isClicked ? ""

                : <div className={style.Popover} style={isClicked}>
                    <ul >
                        {list?.map?.(item => (
                            <li onClick={item.onClick} className="list-item" key={item.text}>
                                <span className="icon">{item.icon}</span>
                                <span className="text">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}


//לעצב לפי פיגמה
//  LI => hight => list. lenght * 50px 
