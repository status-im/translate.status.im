# Translate Status into Your Language
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-21-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Status is completely open source and made by contributors all over the world. Your translations can help more people utilize our secure, censorship-resistant service!

We use [Lokalise](https://lokalise.co/) to translate the Status app and website into multiple languages. Find the list of languages to translate here: https://translate.status.im/.

<br />

## How to help translate?

- **Tutorial (Click the image below)**  

[<img src="https://lh3.googleusercontent.com/7us4vcV44EmMTy7enUCHVtBIxLYjcRub3YqXRxx6IELzE6jrKQsmGmZQR1kq5KNuNlV9Fs3pUhYGb9z2UD_A7kDcJBi1bfuhqyLy5k4ZkcznEMd6eLCBmhOzOznCdwuqUeLgn2tMag=w2400" width="400">](http://bit.ly/translatestatus)

Video (47 seconds) : https://youtu.be/BVEwZfi7SmM


* Step 1 : Go to the [translation landing page](https://translate.status.im/) and click a link to start the translation(e.g. Status app translation) in the language card. You need to sign up for Lokalise in advance.

<img src="https://github.com/status-im/translate.status.im/blob/master/src/images/lokalise1.png" width="800">

* Step 2 : You will find a project that needs your help. Check out the progress and click 'WORDS TO DO (new words)` or 'UNVERIFIED (updated words)'.

<img src="https://github.com/status-im/translate.status.im/blob/master/src/images/lokalise2.png" width="800">

* Step 3 : Lokalise offers useful online translators (e.g. Google Translatetor) showing suggestions for each of the strings and safely protects variables or string interpolation components that should not be translated. Let's get it started!

<img src="https://github.com/status-im/translate.status.im/blob/master/src/images/lokalise3.png" width="800">

<br />

## Translation Guidelines

- **Translation**  
All languages have a different word order and cutural background. Therefore, we encourage you to translate all the words and sentences into your language in comparison with the actual Status DApp and website. Also, you need to be careful when using the online translators that Lokalise offers. For example, [Status](https://dictionary.cambridge.org/dictionary/english/status) itself is an English word so it sometimes recognize Status as the English word `status` . Please review all the translations carefully after you make some changes.
   - Status DApp
     - Donwload: https://status.im/get/
     - Languages: https://github.com/status-im/status-react/tree/develop/translations
   - Status.im website:
     - Homepage: https://status.im/
     - Repo: https://github.com/status-im/status.im
   - Notes:
     - Please don't translate `Empty` in the project It should be a blank.
     - Check out the `unverified` translation first. It means some outdated translations need your updates.
       <img src="https://lh3.googleusercontent.com/OPU1M51hYIH9GrQ_RJHi6S9cqvsqD4os_S8Lez2qDAbgz0tj4xoVUZaq0yqsrTKlljw4LScFaeLM_2eYYqtE53BregumcxuMoifswcVDlm51YBwiiOS80Kfaj3UPP5SZbABqjRV9=w2400" width="300">
     
     
- **Review**  
All the translations will be reviewed via dev links
   - Status.im homepage : https://dev-lang.status.im/
   - Status DApp : apk(Android) or ipa(iOS) [files for testing purposes](https://github.com/status-im/status-react/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+translation) 
   - Your translatoins will be reviewed by other ambassadors or other open source contributors. All the contributors can be a reviewer and decide which one goes live through the Lokalise's [translation upvoting](https://docs.lokalise.co/en/articles/1400631-translation-upvoting). To be a reviewer, 
      - email: translate@status.im 
      - [Status public chat](https://join.status.im/status-translate)

- **Progress**  
You can find the progresses on the [translation campaign website](https://translate.status.im/). Your translation will be applied if it is completed more than 90%.

<br />


## How can I add a Language?

Please submit a pull request in accordance with the format below.

1) Add your language in langs.json (https://github.com/status-im/translate.status.im/blob/develop/src/components/langs.json)

* Example:

```bash
    {
        "id": 1,
        "lang_en": "Korean",
        "lang": "한국어",
        "code": "ko",
        "app": "https://lokalise.co/signup/562366815b97551836b8f1.55149963/ko/",
        "website": "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/ko/"
    },
```

* You can find your language code [here](https://www.w3schools.com/tags/ref_language_codes.asp).

<br />

2) Submit your pull request [here](https://github.com/status-im/translate.status.im/pulls).

<br />

## Contributors


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tbenr"><img src="https://avatars2.githubusercontent.com/u/15999009?v=4" width="100px;" alt=""/><br /><sub><b>Enrico Del Fante</b></sub></a><br /><a href="#translation-tbenr" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/MarieQuetil"><img src="https://avatars2.githubusercontent.com/u/56311126?v=4" width="100px;" alt=""/><br /><sub><b>MarieQuetil</b></sub></a><br /><a href="#translation-MarieQuetil" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/shygalchi1234"><img src="https://avatars0.githubusercontent.com/u/52996496?v=4" width="100px;" alt=""/><br /><sub><b>shygalchi1234</b></sub></a><br /><a href="#translation-shygalchi1234" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/stevenSkyZhu"><img src="https://avatars2.githubusercontent.com/u/38955349?v=4" width="100px;" alt=""/><br /><sub><b>stevenSkyZhu</b></sub></a><br /><a href="#translation-stevenSkyZhu" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/dantist01"><img src="https://avatars2.githubusercontent.com/u/47658681?v=4" width="100px;" alt=""/><br /><sub><b>dantist01</b></sub></a><br /><a href="#translation-dantist01" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/kberey"><img src="https://avatars0.githubusercontent.com/u/39163694?v=4" width="100px;" alt=""/><br /><sub><b>Ken Crypto Philippines</b></sub></a><br /><a href="#translation-kberey" title="Translation">🌍</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/jinho-jang-4304a0142/"><img src="https://avatars2.githubusercontent.com/u/41753422?v=4" width="100px;" alt=""/><br /><sub><b>Jinho Jang</b></sub></a><br /><a href="#translation-jinhojang6" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Solexplorer"><img src="https://avatars3.githubusercontent.com/u/50027175?v=4" width="100px;" alt=""/><br /><sub><b>Solexplorer</b></sub></a><br /><a href="#translation-Solexplorer" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/LaloGarza"><img src="https://avatars2.githubusercontent.com/u/33364523?v=4" width="100px;" alt=""/><br /><sub><b>LaloGarza</b></sub></a><br /><a href="#translation-LaloGarza" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/enevve"><img src="https://avatars1.githubusercontent.com/u/61705093?v=4" width="100px;" alt=""/><br /><sub><b>Nicolás V. Villarreal</b></sub></a><br /><a href="#translation-enevve" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/LightLeo21"><img src="https://avatars1.githubusercontent.com/u/51802956?v=4" width="100px;" alt=""/><br /><sub><b>LightLeo21</b></sub></a><br /><a href="#translation-LightLeo21" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Jokyash"><img src="https://avatars1.githubusercontent.com/u/44118299?v=4" width="100px;" alt=""/><br /><sub><b>Jokyash</b></sub></a><br /><a href="#translation-Jokyash" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/wdcho82"><img src="https://avatars0.githubusercontent.com/u/61836410?v=4" width="100px;" alt=""/><br /><sub><b>wdcho82</b></sub></a><br /><a href="#translation-wdcho82" title="Translation">🌍</a></td>
    <td align="center"><a href="http://zplit.net"><img src="https://avatars2.githubusercontent.com/u/49013950?v=4" width="100px;" alt=""/><br /><sub><b>Miguel Morales</b></sub></a><br /><a href="#translation-zplit" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/mercuriosilber"><img src="https://avatars2.githubusercontent.com/u/35112265?v=4" width="100px;" alt=""/><br /><sub><b>mercuriosilber</b></sub></a><br /><a href="#translation-mercuriosilber" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/chtyozi88"><img src="https://avatars2.githubusercontent.com/u/48397079?v=4" width="100px;" alt=""/><br /><sub><b>chtyozi88</b></sub></a><br /><a href="#translation-chtyozi88" title="Translation">🌍</a></td>
    <td align="center"><a href="https://Ethgang.carrd.co"><img src="https://avatars2.githubusercontent.com/u/60158814?v=4" width="100px;" alt=""/><br /><sub><b>Lilsiri.eth</b></sub></a><br /><a href="#translation-Onebotband" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/elanperach"><img src="https://avatars0.githubusercontent.com/u/1174883?v=4" width="100px;" alt=""/><br /><sub><b>Elan P</b></sub></a><br /><a href="#translation-elanperach" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Bild96"><img src="https://avatars2.githubusercontent.com/u/52472445?v=4" width="100px;" alt=""/><br /><sub><b>NASI₿ </b></sub></a><br /><a href="#translation-Bild96" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/albed24"><img src="https://avatars0.githubusercontent.com/u/62461597?v=4" width="100px;" alt=""/><br /><sub><b>Albed</b></sub></a><br /><a href="#translation-albed24" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Minimisthupper"><img src="https://avatars2.githubusercontent.com/u/36794294?v=4" width="100px;" alt=""/><br /><sub><b>Floyd</b></sub></a><br /><a href="#translation-Minimisthupper" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<br />

## Build Translate.status.im

```bash
git clone https://github.com/status-im/translate.status.im.git
cd translate.status.im
```

Development
```bash
yarn install
yarn run start
```

Production
```bash
yarn install
yarn run build
yarn run deploy
```

- This is a simple SPA using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
- All the components except for `Main.js` use [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- Can support `i18n` localization with React-intl.

<br />

## CI (Jenkins)

* https://ci.status.im/job/misc/job/translate.status.im/
* https://ci.status.im/job/misc/job/dev-translate.status.im/

<br />

## Exctract messages 
```
yarn extract:messages
yarn manage:translations

Learn more at https://maksimivanov.com/posts/how-to-localize-react-application-using-react-intl/
```
You can find `en.json` and  `ko.json` in `/src/i18n/locales` supporting multi languages with react-intl.

<br />

## Contact us
- Status public chat: https://join.status.im/status
- Maintainer: [jinhojang6](https://github.com/jinhojang6)
