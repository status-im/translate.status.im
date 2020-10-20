import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import LangData from './langs.json';
import LangCard from './Langcard';
import ClipLoader from "react-spinners/ClipLoader";
import Stats from './Stats';

import { Input, Button } from 'antd';

const { Search } = Input;

const shuffleArray = array => {
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
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      cardList: [],
      isDefault: true,
      progressByLang: [],
      statsByProject: [],
      loading: true,
      keyword: '',
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

    const CORS_PROXY = "https://cors-fix.status.im/";
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
      // console.log(data)
      const progressByLang = [];
      const statsByProject = [];
      data['projects'].forEach(project => { 
        const lang = {};
        // 562366815b97551836b8f1.55149963 is Status app and 831920985cf29a3c550a85.62099336 is Status.im website
        if (project['project_id'] === "562366815b97551836b8f1.55149963" || project['project_id'] === "831920985cf29a3c550a85.62099336") {
          lang[project.name] = project['statistics']['languages'];

          const projectStats = {};
          projectStats.name = project.name;
          projectStats.base_words = project.statistics.base_words;
          projectStats.keys_total = project.statistics.keys_total;
          projectStats.progress_total = project.statistics.progress_total;
          projectStats.contributors = project.statistics.team;

          progressByLang.push(lang);
          statsByProject.push(projectStats);
        }
      })
      this.setState({
        progressByLang: progressByLang,
        statsByProject: statsByProject,
        loading: false,
      })
      })
    })
  }

  handleOnChange(event){
    const keyword = event.target.value.toLowerCase()
    this.setState({
      keyword: keyword,
    })
  }

  filterLanguage(langs, keyword) {
    return langs.filter(card => card.lang_en.toLowerCase().includes(keyword) || card.lang.toLowerCase().includes(keyword))
  }

  render() {
    let langCards = []
    const { cardList, isDefault, progressByLang, statsByProject, loading, keyword } = this.state;

    if (isDefault) {
      if(!loading) {
        const shuffledList = shuffleArray(cardList);
        langCards = this.filterLanguage(shuffledList, keyword).map((item, index) => {
          return (
            <LangCard
              card={item}
              progress={progressByLang}
              key={`car-list-key ${index}`}
            />
          )
        })
      }
    }
    else {
      if (!loading) {
        langCards = this.filterLanguage(cardList,keyword).map((item, index) => {
          return (
            <LangCard
              card={item}
              progress={progressByLang}
              key={`car-list-key ${index}`}
            />
          )
        })
      }
    }

    return loading ? 
      (
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
      )
      : 
      (
        <main>
          <div className="title-center margin-top-80">
            <h1 className="font-weight-400"><FormattedMessage id="main.language" defaultMessage="Languages to Translate" /></h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
            <Search
              className="search-bar"
              placeholder="Search.."
              style={{ width: 300 }}
              size="large"
              onChange={this.handleOnChange}
            />
          </div>

          <div className="align-center margin-bottom-20">
            <Button className="button" onClick={this.toggleSortLang}><FormattedMessage id="main.sort_alphabetical" defaultMessage="Alphabetical" /></Button>
            <Button className="button" onClick={this.toggleListReverse}><FormattedMessage id="main.sort_reverse" defaultMessage="Reverse" /></Button>
          </div>       
          <div className="languages">
            {langCards}
          </div>
          <div>
              <div className="align-center" style={{ margin: '60px 0 80px 0' }}>
                <p><FormattedMessage id="main.addlanguage" defaultMessage="Want to add your Language?" />
                <FormattedMessage id="main.checkoutthis" defaultMessage="Check out this" />
                <a className="blue-anchor" href="https://github.com/status-im/translate.status.im/blob/develop/README.md#translation-guidelines" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" /></a>
                <FormattedMessage id="main.or" defaultMessage="or" /></p>
                <p><a href="mailto:translate@status.im" className="blue-anchor" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.contactus" defaultMessage="Contact us!" /></a></p>
              </div> <br /><br />
          </div>

          <Stats
            data={statsByProject}
          />
        </main>
    );
  }
}

export default Main;
