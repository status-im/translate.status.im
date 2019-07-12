import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import LangData from './langs.json';
import LangCard from './langcard';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.toggleSortLang = this.toggleSortLang.bind(this)
    this.state = {
      cardList: [],
      isOldestFirst: true
    }
  }

  sortByLang() {
    const { cardList } = this.state
    let newCardList = cardList.sort((a,b)=> {
      if (a.lang < b.lang) { return -1; }
      if (a.lang > b.lang) { return 1; }
      return 0;
    });

    this.setState({
      cardList: newCardList
    })
  }

  toggleSortLang(event) {
    this.sortByLang();
  }

  toggleListReverse(event) {
    const { cardList } = this.state
    let newCardList = cardList.reverse()
    this.setState({
      cardList: newCardList
    })
  }

  componentDidMount() {
    const cardList = LangData;
    this.setState({
      isOldestFirst: true,
      cardList: cardList
    })
  }

  render() {
    const { cardList } = this.state;
    const shuffledCards = shuffleArray(cardList);

    return (

        <main>

          <div className="title-center">
            <h1><FormattedMessage id="main.language" defaultMessage="Languages to Translate" /></h1>
          </div>

          <div className="align-center margin-bottom-20">
            <button className="button" onClick={this.toggleSortLang}><FormattedMessage id="main.sort_alphabetical" defaultMessage="Alphabetical Order" /></button>
            <button className="button" onClick={this.toggleListReverse}><FormattedMessage id="main.sort_reverse" defaultMessage="Reverse Order" /></button>
          </div>

          

          <div className="languages">

          {shuffledCards.map((item, index) => {
            return <LangCard
            card = {item}
            key={`car-list-key ${index}`}
            />
          })}


          </div>
          
          <div>

              <div className="align-center">
                <p><FormattedMessage id="main.addlanguage" defaultMessage="Want to add your Language?" />
                <FormattedMessage id="main.checkoutthis" defaultMessage="Check out this" />
                <a href="https://github.com/status-im/translate.status.im/blob/develop/README.md#translation-guidelines" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" /></a>
                <FormattedMessage id="main.and" defaultMessage="and" /></p>
                <p><a href="https://github.com/status-im/translate.status.im" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest" defaultMessage="Submit a pull request to this Github repository" /></a></p>
              </div> <br /><br />

              <div className="align-center">
                <p><FormattedMessage id="main.tracklanguage" defaultMessage="Track the translation progress" /></p>
                <p><a href="https://lokalise.co/public/562366815b97551836b8f1.55149963/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.app-translation" defaultMessage="Status app translation" /></a></p>
                <p><a href="https://lokalise.co/public/831920985cf29a3c550a85.62099336/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.website-translation" defaultMessage="Status.im website translation" /></a></p>              
              </div>

          </div>

        </main>

    );
  }
}

export default Main;
