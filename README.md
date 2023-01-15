# neo-scraper-example

## Usage

```sh
yarn install
node index.js
```

## Notes

- Updating JSDOM will probably break everything.
- For sites that do some client-side rendering you [might have to use Puppeteer](https://github.com/neobooru/neo-scraper/blob/1c9e0934d1c3b034ba3a0ddf43e0a167e825a031/src/test/engine.ts#L23).
- It's better to use the site's API if they have one.
