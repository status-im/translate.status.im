import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'rc-progress';


class LangCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardItem: null,
            progress_by_lang: null,
        }
    }
    
    handleRemoveContentButton(event) {
        if (this.props.didHandleRemove) {
            this.props.didHandleRemove(this.props.card)
        }
    }

    setCardStateOnProps() {
        const { card, progress } = this.props
        this.setState({
            cardItem: card,
            progress_by_lang: progress
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
                        <Line percent="10" strokeWidth="4" strokeColor="#2db7f5" style={{ width: '200px'}} />
                        <a href={cardItem.website} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.website-application" defaultMessage="Status.im Website Translation" /></p></a>
                    </div>
                    : ''}
            </div>
        );
    }

}

export default LangCard;