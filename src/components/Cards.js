import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/images/SchedulerAppScreenshot.png';
import img2 from '../assets/images/informedTrades.png';
import img3 from '../assets/images/DW.jpg';

class Cards extends Component {
    render() {
        return(
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card 
                            imgsrc={img1} 
                            title="SchedulerApp" 
                            description='cool' 
                            deployment='https://shalant.github.io/SchedulerApp/'
                            github='https://github.com/shalant/SchedulerApp'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card 
                            imgsrc={img2} 
                            title="InformedTrades" 
                            description='beans'
                            deployment= 'https://shalant.github.io/Informed_Trades/'
                            github= 'https://github.com/shalant/Informed_Trades'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card 
                            imgsrc={img3} 
                            title="DynamicWines" 
                            description='bro' 
                            deployment='https://dynamic-wines.herokuapp.com/'
                            github= 'https://github.com/shalant/dynamicwines2'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;