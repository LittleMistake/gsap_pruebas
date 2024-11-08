import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import './App.css'
import {ScrollTrigger} from "gsap/ScrollTrigger";

function App() {
    useGSAP(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".c", {
                scrollTrigger: {
                    trigger: ".c",
                    start: "center center",
                    end: "center 20%",
                    markers: true,
                    toggleActions: "restart pause reverse pause"
                },
                x: 400,
                rotation: 360,
                duration: 3
            });
        }
    );
    return (
        <div className="App">
            <div className="box a">a</div>
            <div className={"espacio"}></div>
            <div className="box b">b</div>
            <div className={"espacio"}></div>
            <div className="box c">c</div>
            <div className={"espacio"}></div>
            <div className={"espacio"}></div>
            <div className={"espacio"}></div>
        </div>
    )
}

export default App
