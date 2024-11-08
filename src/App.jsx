import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import './App.css'
import { TextPlugin } from "gsap/TextPlugin";

function App() {
    useGSAP(() => {
        gsap.registerPlugin(TextPlugin)
        gsap.registerEffect({
            name:"cambioTexto",
            effect: (targets, config) => {
                let tl = gsap.timeline({delay:config.delay});
                tl.to(targets, {opacity:0, duration:config.duration / 2});
                tl.add(()=> targets[0].innerText = config.text);
                tl.to(targets, {opacity:1, duration:config.duration});
                return tl;
            },
            defaults: {duration: 1, ease: "none"},
            extendTimeline: true
        })
        const tl = gsap.timeline({repeatDelay:1});
        tl.cambioTexto("h1 span", {text: "y ahora cambiamos el texto", delay: 2})
        tl.cambioTexto("h1 span", {text: "y lo volvemos a cambiar", delay: 2})
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
