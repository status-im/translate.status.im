import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'rc-progress';

const getProgressForLang = (progressLang, lang) => {
  let rval = progressLang.find(v => v['language_iso'] === lang)
  return rval === undefined ? 0 : (rval['progress'] || 0)
};

const getWordsToDoForLang = (progressLang, lang) => {
    const rval = progressLang.find(v => v['language_iso'] === lang);
    return rval === undefined ? 0 : (rval['words_to_do'] || 0);
};

const numberWithCommas = (number) => {
    if (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else return number;
};

const LangCard = (props) => {

    const [cardItem, setCardItem] = useState(null);
    const [progressByLang, setProgressByLang] = useState(null);

    const setCardStateOnProps = () => {
        const { card, progress } = props;
        setCardItem(card);
        setProgressByLang(progress);
    };

    useEffect(() => {
        setCardStateOnProps();
    });

    let dappProgress = null;
    let dappWordsToDo = null;
    let websiteProgress = null;
    let websiteWordsToDo = null;

    if ((typeof(progressByLang) !== 'undefined') && (progressByLang !== null) && (progressByLang.length !== 0)) {
        dappProgress = getProgressForLang(progressByLang[0]['Status DApp'], cardItem.code);
        websiteProgress = getProgressForLang(progressByLang[1]['Status.im Website'], cardItem.code);

        dappWordsToDo = getWordsToDoForLang(progressByLang[0]['Status DApp'], cardItem.code);
        websiteWordsToDo = getWordsToDoForLang(progressByLang[1]['Status.im Website'], cardItem.code);
    }
    
    return (
        <div className="card align-center">
            {cardItem !== null
                ? 
                <div className="padding-top-20">
                    <p className="language-title">{cardItem.lang_en}</p>
                    <p className="language-name">{cardItem.lang}</p>
                    <div style={{ paddingTop: '5px' }}>
                        <p><a href={cardItem.app} target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.app-application" defaultMessage="Status DApp translation" /></a></p>
                        <Line percent={dappProgress} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" style={{ width: '50%'}} /> <span style={{ marginLeft: '20px', fontFamily: 'Roboto'}}>{dappProgress}%</span>
                        <p className="language-words">{numberWithCommas(dappWordsToDo)} words to do</p>
                    </div>
                    <div style={{ paddingTop: '5px' }}>
                        <p><a href={cardItem.website} target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.website-application" defaultMessage="Status.im website translation" /></a></p>
                        <Line percent={websiteProgress} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" style={{ width: '50%'}} /> <span style={{ marginLeft: '20px', fontFamily: 'Roboto'}}>{websiteProgress}%</span>
                        <p className="language-words">{numberWithCommas(websiteWordsToDo)} words to do</p>
                    </div>
                </div>
                : ''}
        </div>
    );

}

export default LangCard;
