import React, { useState } from 'react';
import './styles.css';

const Registers = (props) => {
    const { RD, PC } = props;

    const parseIntToHex = (intValue) => {
        return '0x' + intValue.toString(16).toUpperCase();
    }

    return (
        <div className='reg-wrapper'>
            <div className='reg-header'>
                <p className='reg-title'>Registradores</p>
            </div>
            <div className='reg-body'>
                <div className='reg-row'>
                    <p className='reg-title' style={{paddingBottom:15}}>Label</p>
                    <p className='reg-title' style={{paddingBottom:15}}>Dados</p>
                </div>
                <div className='reg-row'>
                    <p className='reg-title' style={{paddingBottom:15}}>RD</p>
                    <p className='reg-title' style={{paddingBottom:15}}>{parseIntToHex(RD)}</p>
                </div>
                <div className='reg-row'>
                    <p className='reg-title' style={{paddingBottom:15}}>PC</p>
                    <p className='reg-title' style={{paddingBottom:15}}>{parseIntToHex(PC)}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Registers;