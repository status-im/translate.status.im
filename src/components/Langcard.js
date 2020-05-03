import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'rc-progress';

const getProgressForLang = (progressLang, lang) => {
  let rval = progressLang.find(v => v['language_iso'] === lang)
  return rval === undefined ? 0 : (rval['progress'] || 0)
}

const LangCard = (props) => {

    const [cardItem, setCardItem] = useState(null);
    const [progressByLang, setProgressByLang] = useState(null);

    const setCardStateOnProps = () => {
        const { card, progress } = props
        setCardItem(card)
        setProgressByLang(progress)
    }

    useEffect(() => {
        setCardStateOnProps()
    })

    let dapp_progress = 0
    let website_progress = 0

    if ((typeof(progressByLang) !== 'undefined') && (progressByLang !== null) && (progressByLang.length !== 0)) {
        dapp_progress = getProgressForLang(progressByLang[0]['Status DApp'], cardItem.code)
        website_progress = getProgressForLang(progressByLang[1]['Status.im Website'], cardItem.code)
    }
    
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

export default LangCard;
