import React from 'react';
import Heading from "./components/Heading";
import Card from "./components/Card";

import seaCardPicture from './img/nat-5.jpg';
import forestCardPicture from './img/nat-6.jpg';
import snowCardPicture from './img/nat-7.jpg';
import Popup from "./Popup";

const seaCard = {
    CardPic: {
        backgroundImage: `linear-gradient(
                    to right bottom, rgba(255, 185, 0, .55), rgba(255, 119, 48, .55)), url(${seaCardPicture})`
    },
    CardBack: {
        backgroundImage: `linear-gradient(to right bottom, #ffb900, #ff7730)`,
    },
    CardTitle: 'The sea explorer',
    CardDetails: ['3 day tour', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'],
    CardValue: '$297',
};

const forestCard = {
    CardPic: {
        backgroundImage: `linear-gradient(
                    to right bottom, rgba(165, 255, 87, .55), rgba(0, 162, 75, .55)), url(${forestCardPicture})`
    },
    CardBack: {
        backgroundImage: `linear-gradient(to right bottom, #a5ff57, #00a24b)`,
    },
    CardTitle: 'The forest hiker',
    CardDetails: ['7 day tour', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
    CardValue: '$497',
};

const snowCard = {
    CardPic: {
        backgroundImage: `linear-gradient(
                    to right bottom, rgba(186, 69, 213, .55), rgba(0, 163, 180, .55)), url(${snowCardPicture})`
    },
    CardBack: {
        backgroundImage: `linear-gradient(to right bottom, #BA45D5, #00A3B4)`,
    },
    CardTitle: 'The snow adventurer',
    CardDetails: ['5 day tour', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'],
    CardValue: '$897',
};



class Tours extends React.Component {

    state = {displayPopup: false};

    renderPopup = () => {
        return (
            <div>
                <Popup onClick={(event) => {
                    event.preventDefault();
                    this.setState({displayPopup: false})
                }}/>
            </div>
        );
    };

    buttonPopup = (event) => {
        this.setState({displayPopup: true })
    };

    renderContent() {
        return (
            <section className="section-tours" id="tours">
                <div className="u-center-text u-margin-bottom-huge">
                    <Heading title="Most popular tours"/>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <Card back={seaCard.CardBack} pic={seaCard.CardPic}
                              title={seaCard.CardTitle} details={seaCard.CardDetails}
                              price={seaCard.CardValue} popup={() => this.buttonPopup}/>
                    </div>
                    <div className="col-1-of-3">
                        <Card back={forestCard.CardBack} pic={forestCard.CardPic}
                              title={forestCard.CardTitle} details={forestCard.CardDetails}
                              price={forestCard.CardValue}/>
                    </div>
                    <div className="col-1-of-3">
                        <Card back={snowCard.CardBack} pic={snowCard.CardPic}
                              title={snowCard.CardTitle} details={snowCard.CardDetails}
                              price={snowCard.CardValue}/>
                    </div>
                </div>

                <div className="u-center-text">
                    <button onClick={this.buttonPopup} className='card__btn btn btn--blue'>Discover all tours</button>
                </div>

            </section>
        );
    };

    render() {

        if(this.state.displayPopup){
            return ([this.renderPopup(), this.renderContent()]);
        }

        return this.renderContent();
    }
}

export default Tours;