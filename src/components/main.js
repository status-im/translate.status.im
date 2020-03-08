import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import LangData from './langs.json';
import LangCard from './langcard';
import ClipLoader from "react-spinners/ClipLoader";

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
      isDefault: true,
      progress_by_lang: [],
      loading: true
    }
  }

  sortByLang() {
    const { cardList } = this.state
    let newCardList = cardList.sort((a,b)=> {
      if (a.lang_en < b.lang_en) { return -1; }
      if (a.lang_en > b.lang_en) { return 1; }
      return 0;
    });

    this.setState({
      cardList: newCardList,
    })
  }

  toggleSortLang(event) {
    this.setState({
      isDefault: false
    })
    this.sortByLang();
  }

  toggleListReverse(event) {
    this.setState({
      isDefault: false
    })
    const { cardList } = this.state
    let newCardList = cardList.reverse()
    this.setState({
      cardList: newCardList,
    })
  }

  componentDidMount() {
    const cardList = LangData;
    const shuffledList = shuffleArray(cardList);
    this.setState({
      cardList: cardList,
      shuffledList: shuffledList
    })

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.lokalise.com/api2/projects?filter_team_id=175441"
    fetch(CORS_PROXY + url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Token': 'f1a59805d56f87ef46c2562dcd707f7e45103241',
            "X-Requested-With": "XMLHttpRequest"
          },
    })
    .then(response => {
      response.json().then((data) => {
      const progress_by_lang = [];
      data['projects'].forEach(project => { 
        const lang = {};
        if (project['project_id'] === "562366815b97551836b8f1.55149963" || project['project_id'] === "831920985cf29a3c550a85.62099336") {
          lang[project.name] = project['statistics']['languages']
          progress_by_lang.push(lang);
        }
      })
      this.setState({
        progress_by_lang: progress_by_lang,
        loading: false,
      })
      // console.log(this.state.progress_by_lang)
      })
    })
  }

  render() {
    var langCards = []
    var { cardList, isDefault, progress_by_lang, loading } = this.state;

    if (isDefault) {
      if(!loading) {
        var shuffledList = shuffleArray(cardList);
        langCards = shuffledList.map((item, index) => {
          return <LangCard
            card={item}
            progress={progress_by_lang}
            key={`car-list-key ${index}`}
          />
        })
      }
    }
    else {
      if (!loading) {
        langCards = cardList.map((item, index) => {
          return <LangCard
            card={item}
            progress={progress_by_lang}
            key={`car-list-key ${index}`}
          />
        })
      }
    }

    return loading ? 
    <main>
      <div className="title-center margin-top-80">
        <ClipLoader
          size={100}
          color={"#123abc"}
          loading={loading}
        />
        <h1>Please wait..</h1>
      </div>
    </main>
    : 
    (
        <main>
          <div className="title-center margin-top-80">
            <h1><FormattedMessage id="main.language" defaultMessage="Languages to Translate" /></h1>
          </div>
          <div className="align-center margin-bottom-20">
            <button className="button" onClick={this.toggleSortLang}><FormattedMessage id="main.sort_alphabetical" defaultMessage="Alphabetical Order" /></button>
            <button className="button" onClick={this.toggleListReverse}><FormattedMessage id="main.sort_reverse" defaultMessage="Reverse Order" /></button>
          </div>       
          <div className="languages">
            {langCards}
          </div>
          <div>
              <div className="align-center" style={{ margin: '60px 0 80px 0' }}>
                <p><FormattedMessage id="main.addlanguage" defaultMessage="Want to add your Language?" />
                <FormattedMessage id="main.checkoutthis" defaultMessage="Check out this" />
                <a href="https://github.com/status-im/translate.status.im/blob/develop/README.md#translation-guidelines" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" /></a>
                <FormattedMessage id="main.and" defaultMessage="and" /></p>
                <p><a href="https://github.com/status-im/translate.status.im" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest" defaultMessage="Submit a pull request to this Github repository" /></a></p>
              </div> <br /><br />
          </div>
        </main>
    );
  }
}

export default Main;
