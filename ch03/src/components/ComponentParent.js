import React, { Component } from 'react';
import ComponentChild from './ComponentChild';
import './css/ComponentParent.css';

class ComponentParent extends Component {
    render() {
        return (
            <div className='ComponentParent'>
                
                <h5>ComponentParent</h5>

                <ComponentChild/>


            </div>
        );
    }
}

export default ComponentParent; 