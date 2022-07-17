import React, { useState } from 'react';
import AngleLeft from '../../Assets/angle-left.js'
import AngleRight from '../../Assets/angle-right.js'
import './styles.css';

const Memory = (props) => {
    const { memory } = props;
    console.log(memory)
    const [addressOffset, setAddressOffset] = useState(0)
    const memorySection = memory.slice(addressOffset, addressOffset+20);
    
    const lowerLimit = 0;
    const upperLimit = memory.length-1;

    const parseIntToHex = (intValue) => {
        return '0x' + intValue.toString(16).toUpperCase();
    }

    return (
        <div className='mem-wrapper'>
            <div className='mem-header'>
                <p className='mem-title'>Memória</p>
            </div>
            <div className='mem-body'>
                <div className='mem-row'>
                    <p className='mem-title' style={{paddingBottom:15}}>Endereço</p>
                    <p className='mem-title' style={{paddingBottom:15}}>Dados</p>
                </div>
                {memorySection.map((item, index) => {
                    console.log(item, index)
                    return (
                        <div className='mem-row'>
                            <p>{parseIntToHex(addressOffset + index)}</p>
                            <p>{parseIntToHex(item)}</p>
                        </div>
                    )
                })}
            </div>
            <div className='mem-footer'>
                <div
                    className='mem-footer-icon'
                    onClick={() => {
                        if(addressOffset-20 >= lowerLimit){
                            setAddressOffset(addressOffset-20)
                        }
                    }}
                >
                    <AngleLeft color={'var(--primary)'}/>
                </div>
                <div
                    className='mem-footer-icon'
                    onClick={() => {
                        if(addressOffset+20 <= upperLimit){
                            setAddressOffset(addressOffset+20)
                        }
                    }}
                >
                    <AngleRight color={'var(--primary)'}/>
                </div>
            </div>
        </div>
    )
}

export default Memory;