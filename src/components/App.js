import React, { Component } from 'react';
import wow from '../assets/images/wow.jpg';
import Styles from './App.css'

export class App extends Component {
    render() {
        return (
            <div className={Styles.App}>
                My React Boiler Plate!!!!123
                <div className={Styles.ImgWrapper}>
                    <img src={wow} alt="image-missing" />
                </div>
            </div>
        )
    }
}

export default App
