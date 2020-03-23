import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'rc-progress';

const getProgressForLang = (progressLang, lang) => {
  let rval = progressLang.find(v => v['language_iso'] === lang)
  return rval != undefined ? rval['progress'] : 0
}

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
        const lang = cardItem.code
        let dapp_progress = getProgressForLang(progress_by_lang[0]['Status DApp'], lang)
        let website_progress = getProgressForLang(progress_by_lang[1]['Status.im Website'], lang)
        
        return (
            <div className="card align-center">
                {cardItem !== null
                    ? 
                    <div className="padding-top-20">
                        <p className="language-title">{cardItem.lang_en}</p>
                        <p className="language-name">{cardItem.lang}</p>
                        <p><a href={cardItem.app} target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.app-application" defaultMessage="Status app translation" /></a></p>
                        <Line percent={dapp_progress} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" style={{ width: '50%'}} /> <span style={{ marginLeft: '20px', fontFamily: 'Roboto'}}>{dapp_progress}%</span>
                        <p><a href={cardItem.website} target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.website-application" defaultMessage="Status.im website translation" /></a></p>
                        <Line percent={website_progress} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" style={{ width: '50%'}} /> <span style={{ marginLeft: '20px', fontFamily: 'Roboto'}}>{website_progress}%</span>
                    </div>
                    : ''}
            </div>
        );
    }

}

export default LangCard;
