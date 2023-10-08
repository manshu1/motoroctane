import React from 'react'
import cardData from '../../Homepage/Structure/subcomponents/cardData';
import VariantsTab from './variantstable';

const variants = () => {
    return (
        <section>
            <div className="label">
                <p className="varienttxt mt-3 fw-bold">
                    <span className="text-wrapper">{cardData[0].title2}</span>
                    <span className="span">&nbsp;</span>
                    <span className="text-wrapper-2">VARIANTS</span>
                </p>
            </div>
            <div>
                <ul className='search_tabs'>
                    <div className='full_tabs_new_varia active'><li>PETROL</li></div>
                    <div className='full_tabs_new_varia'><li>DIESEL</li></div>
                    <div className='full_tabs_new_varia'><li>CNG</li></div>
                    <div className='full_tabs_new_varia'><li>ELECTRIC</li></div>
                    <div className='full_tabs_new_varia'><li>HYBRID</li></div>
                    <div className='full_tabs_new_varia'><li>MANUAL</li></div>
                    <div className='full_tabs_new_varia'><li>AMT</li></div>
                </ul>
            </div>
            <VariantsTab/>
            <VariantsTab/>
            <VariantsTab/>
            <VariantsTab/>
            <VariantsTab/>
            <div className="label d-flex align-items-center justify-content-center">
                <p className="varienttxt1 mt-3 fw-bold">
                    <span className="text-wrapper">ARE WE MISSING</span>
                    <span className="span">&nbsp;</span>
                    <span className="text-wrapper-2">SOMETHING?</span>
                </p>
                <ul className='search_tabs'>
                    <div className='full_tabs_new_varia active'><li>YES</li></div>
                    <div className='full_tabs_new_varia'><li>NO</li></div>
                </ul>
            </div>
        </section>
    )
}

export default variants;