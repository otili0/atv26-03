import React from 'react'
import style from "./Tecnologies.module.css"
import Menu from "./components/Menu"

export const Tecnologies = () => {
    return (
        <div className={style["wrap-tec"]}>
            <Menu />
            <div className={style["wrap-boxTec"]}>
                <h1>React  de cria</h1>
                <img src="src\assets\img\React.png" alt="icon" style={{ width: '110px', height: '110px' }} />
            </div>
            <div className={style["wrap-boxTec"]}>
                <h1>Vite reliquia</h1>
                <img src="src\assets\img\Vite.png" alt="icon" style={{ width: '110px', height: '110px' }} />
            </div>
            <div className={style["wrap-boxTec"]}>
                <h1>Axios de cria</h1>
                <img src="src\assets\img\axios-icon.svg" alt="icon" style={{ width: '110px', height: '110px' }} />
            </div>
            <div className={style["wrap-boxTec"]}>
                <h1>R. Router Dom</h1>
                <img src="src\assets\img\react-router-dom.png" alt="icon" style={{ width: '110px', height: '110px' }} />
            </div>
            <div className={style["wrap-boxTec"]}>
                <h1>Npm de bandido</h1>
                <img src="src\assets\img\npmjs-icon.svg" alt="icon" style={{ width: '110px', height: '110px' }} />
            </div>
            <div className={style["wrap-boxTec"]}>
                <h1> Node.js</h1>
                <img src="src\assets\img\nodejs-icon.svg" alt="icon" style={{ width: '110px', height: '110px' }} />
            </div>
        </div>
    )
}
