import React, {Component} from 'react';
import '../style/auth.css';

class Success extends Component {
    render() {
        return (
            <div>
                <div className="rect">
                    <div className="l-Title">
                        <div className="message">
                            <p>Ура! Замочек прикреплен к мосту!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Success;