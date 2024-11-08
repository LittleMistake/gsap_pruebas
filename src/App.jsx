import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import './App.css'
import { TextPlugin } from "gsap/TextPlugin";

function App() {
    useGSAP(() => {
            gsap.registerPlugin(TextPlugin)
            gsap.defaults({ease: "none"});
            const animacion = gsap.timeline({ repeatDelay: 1});
            if (animacion.isActive()){return;}
            const animacionFadeout = animacion.to("h1 span", {text: " con más texto de prueba", duration: 2, opacity: 1})
            animacionFadeout.to("h1 span", {opacity:0})
        }
    );
    return (
        <div className="App">
            <div className="wrapper">
                <h1>Texto de prueba, <span></span></h1>
            </div>
        </div>
    )
}

export default App
