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
        const { cardItem, progress_by_lang } = this.state
        let dapp_progress = 0
        let website_progress = 0
        if ((typeof(progress_by_lang) !== 'undefined') && (progress_by_lang !== null)) {
            dapp_progress = progress_by_lang[0]['Status DApp'].filter(ele => ele['language_iso'] === cardItem.code)[0]['progress']
            website_progress = progress_by_lang[1]['Status.im Website'].filter(ele => ele['language_iso'] === cardItem.code)[0]['progress']
        }

        return (
            <div className="card align-center">
                {cardItem !== null
                    ? 
                    <div className="padding-top-20">
                        <p className="language-title">{cardItem.lang_en}</p>
                        <p className="language-name">{cardItem.lang}</p>
                        <a href={cardItem.app} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="Status app translation" /></p></a>
                        <Line percent={dapp_progress} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" style={{ width: '50%'}} /> <span style={{ marginLeft: '20px', fontFamily: 'Roboto'}}>{dapp_progress}%</span>
                        <a href={cardItem.website} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.website-application" defaultMessage="Status.im website translation" /></p></a>
                        <Line percent={website_progress} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" style={{ width: '50%'}} /> <span style={{ marginLeft: '20px', fontFamily: 'Roboto'}}>{website_progress}%</span>
                    </div>
                    : ''}
            </div>
        );
    }

}

export default LangCard;