import { NeoScraper } from "neo-scraper";
import { JSDOM } from "jsdom";

// Warning: do NOT remove this code when running in Node.js.
// It can be removed when running in the browser, and in that case you also want to remove JSDOM.
// Expose JSDOM Element constructor.
global.Element = new JSDOM().window.Element;
// 'Implement' innerText in JSDOM: https://github.com/jsdom/jsdom/issues/1245
// This implementation is not 100% correct, but usually good enough so that the tests pass.
Object.defineProperty(global.Element.prototype, "innerText", {
  get() {
    return this.textContent.replace(/(\r\n|\n|\r|^\s+|\s+$)/gm, "");
  },
});

// For Node.js we need to use the JSDOM package because Node.js doesn't have a "document" object.
const scraper = new NeoScraper();
const dom = await JSDOM.fromURL(
  "https://safebooru.org/index.php?page=post&s=view&id=4080876"
);
const res = scraper.scrapeDocument(dom.window.document);
console.dir(res.posts);

// In browsers you don't need to use JSDOM.
// const scraper = new NeoScraper();
// const res = scraper.scrapeDocument(document);
