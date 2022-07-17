import React from 'react'
import './styles.css'
import {
    CodeInput
} from '../Components'
import Controller from '../sisprog-modules/controller'

const HomeScreen = () => {

    const controller = new Controller();
    return (
        <div className='screen'>
            <CodeInput />
            <button
            onClick={() => {
                console.log('click');
                controller.setupExecution('aaaa')
            }}
            >Start</button>
        </div>
    )
}

export default HomeScreen