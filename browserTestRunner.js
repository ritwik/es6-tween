const { Easing, Tween, update, getAll, removeAll } = require('./bundled/Tween')
const puppeteer = require('puppeteer')

const runBrowserTest = async () => {
  console.log("Starting app")
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  console.log("Getting ready to evaluate")
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    console.log("Evaluating")
    console.log(Tween)
    let tween = new Tween({ x: 0 })
        .to({ x: 100 }, 100)
        .repeat(2)
        .yoyo(true)
        .start(0)
    console.log(tween)

    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
}

runBrowserTest()
