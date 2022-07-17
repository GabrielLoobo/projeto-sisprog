import React, { useRef } from 'react'
import './styles.css'
import './variables.css'
import {
    Button,
    CodeInput,
    Tab
} from '../Components'
import Controller from '../sisprog-modules/controller'

const HomeScreen = () => {

    const controller = new Controller();
    
    return (
        <div className='screen'>
            <div>

                <Tab 
                    active
                    label={'Editor'}
                    onClick={() => {
                        console.log('Tab click')
                    }}
                />
                <CodeInput />
                <Button
                    onClick={() => {
                        const rawInputCode = document.getElementById('code-input-field').value;
                        controller.setupExecution(rawInputCode)
                    }}
                    label={'Setup Execution'}
                />
            </div>
            <div>
                <p>aaaa</p>
            </div>
        </div>
    )
}

export default HomeScreen