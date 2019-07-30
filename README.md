# Translate Status into Your Language

Status is completely open source and made by contributors all over the world. Your translations can help more people utilize this secure, censorship-resistant service.

You can translate the Status app and website into your language with [Lokalise](https://lokalise.co/) and find a list of languages that can be translated on this website: https://translate.status.im/.

<br />

## How to help translate?

* Step 1 : Go to the [translation landing page](https://translate.status.im/) and click on a button you would like to translate(e.g. App Translation). You are going to sign up for Lokalise to start the translation.

<img src="https://github.com/status-im/translate.status.im/blob/develop/src/images/lokalise1.png" width="800">

* Step 2 : You will find the project you applied for. Check out the progress and click the language you would like to translate.

<img src="https://github.com/status-im/translate.status.im/blob/develop/src/images/lokalise2.png" width="800">

* Step 3 : There are words and sentences which are used on the Status app or website. Lokalise offers useful online translators (e.g. Google Translatetor) showing suggestions for each of the strings and safely protects variables or string interpolation components that should not be translated. Just start the translation!

<img src="https://github.com/status-im/translate.status.im/blob/develop/src/images/lokalise3.png" width="800">

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


- **Review**  
Each of the languages will be reviewed by a regional ambassadors or other open source contributors. All the contributors can be a reviewer and decide which one goes live with Lokalise's [translation upvoting](https://docs.lokalise.co/en/articles/1400631-translation-upvoting) feature. To be a reviewer, contact us through 
  - email: translate@status.im 
  - [Status public chat](https://get.status.im/chat/public/status-translate)

- **Progress**  
You can find the progresses on the [translation campaign website](https://translate.status.im/). The translations of a language will be deployed when they are translated more than 90%.

- **Merge**  
If a language is 100% translated and reviewed by the community, we are going to submit a pull request [here](https://github.com/status-im/status.im/pulls) with the translated .yml file. You can directly submit a pull request at the link as well.

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

* Korean : Hanjun Ryu, Jay, Donghak Shin, Dongkyu Lee, Cheol O Choi, Jiyoung Lee, Taeseung Lee, Wondeuk Cho

* Chinese : James Huang, Steven Zhu, KrisWooo, 武华森

* Japanese : Jokyash

* Russian : Loran

* French : Gwenael NZE DE SOUZA, muten85

* German : Jurgen Schmiddi

* Italian : Davide Mantesso

* Dutch : Raven Lynx

* Farsi : Ahmad 

* Portuguese(Brazil) : Luana Fragoso, Felipe Plattek 



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
