# Contribute to the Status translations

Status is completely open source and made by contributors all over the world.
Your translations can help more people utilize this secure, censorship-resistant service.

* Website URL: https://translate.status.im/

## How can I add a Language?

Please submit a pull request with a .json and national flag image.

1) .json (translate.status.im/src/components/langs.json)

* e.g.

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

You can find a language code here: https://www.w3schools.com/tags/ref_language_codes.asp


2) A national flag image : https://github.com/status-im/translate.status.im/tree/develop/src/images/flags



## Deployment

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

## CI

* https://ci.status.im/job/misc/job/translate.status.im/
* https://ci.status.im/job/misc/job/dev-translate.status.im/
