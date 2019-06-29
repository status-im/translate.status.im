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
All languages have a different word order and cutural background. Therefore, we encourage you to translate all the words and sentences into your language in comparison with the actual DApp, website, and etc. Also, you need to be careful when using the online translators that Lokalise offers. For example, [Status](https://dictionary.cambridge.org/dictionary/english/status) itself is an English word so there could be some incorrect translation if you don't look over it.

- **Review**  
Each of the languages will be reviewed by a regional ambassadors or other open source communities. Do you want to be a reviewer? Contact us through email: translate@status.im

- **Progress**  
You can find the progresses on the [translation campaign website](https://translate.status.im/)

- **Merge**  
If a language is 100% translated and reviewed by the community, we are going to submit a pull request [here](https://github.com/status-im/status.im/pulls) with the translated .yml file. You can directly submit a pull request at the link as well.

<br />


## How to add a Language?

Please submit a pull request with the requirements below.

1) .json (https://github.com/status-im/translate.status.im/blob/develop/src/components/langs.json)

* For example

```bash
    {
        "id": 1,
        "lang": "Korean",
        "code": "ko",
        "langFlag": "korea.png",
        "app": "https://lokalise.co/signup/562366815b97551836b8f1.55149963/ko/",
        "website": "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/ko/"
    },
```

You can find a language code [here](https://www.w3schools.com/tags/ref_language_codes.asp).

<br />

2) A national flag image : https://github.com/status-im/translate.status.im/tree/develop/src/images/flags

<br />


## Deployment

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

## CI

* https://ci.status.im/job/misc/job/translate.status.im/
* https://ci.status.im/job/misc/job/dev-translate.status.im/
