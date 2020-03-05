import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class LangCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardItem: null,
        }
    }
    
    handleRemoveContentButton(event) {
        if (this.props.didHandleRemove) {
            this.props.didHandleRemove(this.props.card)
        }
    }

    setCardStateOnProps() {
        const { card } = this.props
        this.setState({
            cardItem: card
        })
    }

    componentDidMount() {
        this.setCardStateOnProps()
    }

    componentDidUpdate(prevProps, prevState, snapshop) {
        if (this.props !== prevProps) {
            this.setCardStateOnProps()
        }
    }

    render(){
        const { cardItem } = this.state
        return (
            <div className="card align-center">
                {cardItem !== null
                    ? 
                    <div className="padding-top-20">
                        <p className="language-title">{cardItem.lang_en}</p>
                        <p className="language-name">{cardItem.lang}</p>
                        <a href={cardItem.app} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
                        <a href={cardItem.website} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.website-application" defaultMessage="Status.im Website Translation" /></p></a>
                    </div>
                    : ''}
            </div>
        );
    }

}

export default LangCard;