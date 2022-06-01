import React, { useState } from 'react'
import './styles.css'

import funcTest from '../../sisprog-modules/playground'
import { test_memory } from '../../sisprog-modules/simulator'

const CodeInput = () => {
    // const [isFileUpload, setIsFIleUpload] = useState(false)
    
    const handleSubmit = () => {
        test_memory();


        // const codeTextField = document.getElementById("code-input-field")
        // console.log(codeTextField.value)
        // funcTest()
    }   
    
    return (
        <div className='wrapper'>
            <p>Code input</p>
            <textarea id="code-input-field"/>
            <input type="submit" onClick={handleSubmit}/>
        </div>
    )
}

export default CodeInput;