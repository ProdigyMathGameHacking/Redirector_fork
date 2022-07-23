const fetch = require("node-fetch");

(async () => {
    const status = await (await fetch("https://api.prodigygame.com/game-api/status")).json();
    const gameMin = new String(await (await fetch(`${status.data.gameCodePath}game.min.js`)).text()).valueOf();
    console.log(gameMin.length);
})();