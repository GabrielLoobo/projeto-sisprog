import React, { useState } from 'react'
import './styles.css'

import funcTest from '../../external-modules/playground-module'

const CodeInput = () => {
    // const [isFileUpload, setIsFIleUpload] = useState(false)
    
    const handleSubmit = () => {
        const codeTextField = document.getElementById("code-input-field")
        console.log(codeTextField.value)
        funcTest()
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