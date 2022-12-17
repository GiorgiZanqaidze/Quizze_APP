import React from "react";
import "./IntroPage.css"
import Png1 from "./blobs.png"
import Png2 from "./blobs-1.png"

export default function FirstPage({setPage}) {
    return (
        <>
            <main>
                <div className="center__div">
                    <h1 className="intro-title">ქუიზი</h1>
                    <p>დააჭირეთ ღილაკს დასაწყებად</p>
                    <button onClick={() => setPage('formPage')}>Start Quizze</button>
                    <div className="png1">
                        <img src={Png1} alt="png"/>
                    </div>
                    <div className="png2">
                        <img src={Png2} alt="png"/>
                    </div>
                </div>
            </main>
        </>
    )
}