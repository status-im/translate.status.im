# Translate Status into Your Language
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Status is completely open source and made by contributors all over the world. Your translations can help more people utilize this secure, censorship-resistant service.

You can translate the Status app and website into your language with [Lokalise](https://lokalise.co/) and find a list of languages to translate here: https://translate.status.im/.

<br />

## How to help translate?

- **Tutorial (Click the image below)**  

[<img src="https://lh3.googleusercontent.com/7us4vcV44EmMTy7enUCHVtBIxLYjcRub3YqXRxx6IELzE6jrKQsmGmZQR1kq5KNuNlV9Fs3pUhYGb9z2UD_A7kDcJBi1bfuhqyLy5k4ZkcznEMd6eLCBmhOzOznCdwuqUeLgn2tMag=w2400" width="400">](http://bit.ly/translatestatus)

Video (47 seconds) : https://youtu.be/BVEwZfi7SmM


* Step 1 : Go to the [translation landing page](https://translate.status.im/) and click on a button you would like to translate(e.g. App Translation). You are going to sign up for Lokalise to start the translation.

<img src="https://github.com/status-im/translate.status.im/blob/master/src/images/lokalise1.png" width="800">

* Step 2 : You will find the project you applied for. Check out the progress and click the language you would like to translate.

<img src="https://github.com/status-im/translate.status.im/blob/master/src/images/lokalise2.png" width="800">

* Step 3 : There are words and sentences which are used on the Status app or website. Lokalise offers useful online translators (e.g. Google Translatetor) showing suggestions for each of the strings and safely protects variables or string interpolation components that should not be translated. Just start the translation!

<img src="https://github.com/status-im/translate.status.im/blob/master/src/images/lokalise3.png" width="800">

<br />

## Translation Guidelines

- **Translation**  
All languages have a different word order and cutural background. Therefore, we encourage you to translate all the words and sentences into your language in comparison with the actual DApp, website, and etc. Also, you need to be careful when using the online translators that Lokalise offers. For example, [Status](https://dictionary.cambridge.org/dictionary/english/status) itself is an English word so there could be some incorrect translations by the online translators. Please review all the translations carefully before you start translations.
   - Status DApp
     - Donwload: https://status.im/get/
     - Language files: https://github.com/status-im/status-react/tree/develop/translations
   - Status.im website:
     - Homepage: https://status.im/
     - Repo: https://github.com/status-im/status.im
   - Notes:
     - Please don't translate `Empty` in the project It should be a blank.
     - Don't hesitate to ask anything in the chat on the right hand side on Lokalise
     - Check out `unverified` translations first. It means some oudated translations need to be updated.
       <img src="https://lh3.googleusercontent.com/OPU1M51hYIH9GrQ_RJHi6S9cqvsqD4os_S8Lez2qDAbgz0tj4xoVUZaq0yqsrTKlljw4LScFaeLM_2eYYqtE53BregumcxuMoifswcVDlm51YBwiiOS80Kfaj3UPP5SZbABqjRV9=w2400" width="300">
     - You can ask questions through a project chat at the top-right corner.
       <img src="https://lh3.googleusercontent.com/MDjalv5PFSfd0vfRIOyzXnRtKhs9ZyWP7BLR6_u1sP7mEIXmd8zT6g1pUThyR0lXGs_NgDNwpVG9WCm6d2JdFzQvp6Y2df2TZPy9pECAmls78LkqFpZEMz6Cqoaa_oqeUC3s0Gpc1g=w2400" width="300">     
     
     
- **Review**  
All the translations will be reviewd via
   - Status.im homepage : https://dev-lang.status.im/
   - Status DApp : apk(Android) or ipa(iOS) [files for testing](https://github.com/status-im/status-react/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+translation) 
   - Each of the languages will be reviewed by a regional ambassadors or other open source contributors. All the contributors can be a reviewer and decide which one goes live with Lokalise's [translation upvoting](https://docs.lokalise.co/en/articles/1400631-translation-upvoting) feature. To be a reviewer, contact us through 
      - email: translate@status.im 
      - [Status public chat](https://get.status.im/chat/public/status-translate)

- **Progress**  
You can find the progresses on the [translation campaign website](https://translate.status.im/). The translations of a language will be deployed when they are translated more than 90%.

- **Merge**  
If a language is translated more than 90% and reviewed by the community, we are going to submit a pull request [here](https://github.com/status-im/status.im/pulls) with the translated .yml file. You can directly submit a pull request at the link as well.

<br />


## How to add a Language?

Please submit a pull request with the requirements below.

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

* You can find a language code [here](https://www.w3schools.com/tags/ref_language_codes.asp).

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
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<br />

## Translate.status.im Deployment

[Node](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) need to be installed before.

```bash
git clone https://github.com/status-im/translate.status.im.git
cd translate.status.im
```


```bash
yarn install
yarn run build
yarn run deploy
```

or

```bash
yarn install
yarn run start
```
<br />

## CI (Jenkins)

* https://ci.status.im/job/misc/job/translate.status.im/
* https://ci.status.im/job/misc/job/dev-translate.status.im/
