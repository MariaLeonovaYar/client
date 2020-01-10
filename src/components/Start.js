import React, {Component} from 'react';
import '../style/index.css';
import '../style/css/bootstrap.min.css';

class Start extends Component {
    render() {
        return (
            
            <div className="rect">
                <div className="l-Title">
                    <p>All you need is love!</p>
                </div>
                <div id="l-Text" className="l-Text">
                    <a>Влюбленные оставляют замки на мосту, чтобы символизировать их любовь. 
                        Муниципальные власти снимают их, что нарушает обещание вечной любви.
                        LoveLock здесь, чтобы любовь была вечной. Это просто!</a>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img className="image" src={require('../style/img/сердце.png')}/>
                                </td>
                                <td>
                                    <img className="image" src={require('../style/img/настройки.png')}/>
                                </td>
                                <td>
                                    <img className="image" src={require('../style/img/ключ.png')}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Выбери замочек</p>
                                </td>
                                <td>
                                    <p>Модернизируй его</p>
                                </td>
                                <td>
                                    <p>Повесь свой замочек на мост</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }    

}

export default Start;


