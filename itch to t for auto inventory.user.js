// ==UserScript==
// @name         itch to t for auto inventory
// @namespace    itchToTheTforAutoInventory
// @version      0.1
// @description  'itch to t for auto inventory' automatically claims drops on twitch in the background on the inventory page
// @author       DayXP
// @match        https://www.twitch.tv/drops/inventory*
// @run-at       document-end
// @grant        none
// ==/UserScript==

let buttonText = ['claim now', 'jetzt abholen', 'reclamar ahora', 'en profiter', 'riscuoti subito', 'kiváltás most!', 'claim nu', 'hent nå', 'odbierz teraz',
                  'resgatar agora', 'solicită acum', 'vyzdvihnúť teraz', 'lunasta nyt', 'hämta nu', 'nhận ngay', 'Şimdi Al', 'vyzvednout kořist', 'Διεκδίκηση τώρα',
                  'Взимане сега', 'Получить сейчас', 'เคลมตอนนี้', '现在领取', '立即領取', '今すぐ入手', '지금 받기'];

const IdleTimer = setTimeout(function(){
    let items = document.querySelectorAll("[class*='ScCoreButton']");
    items.forEach((item) => {
        buttonText.forEach((searchText) => {
            if (item.innerText.toLowerCase().includes(searchText.toLowerCase())) {
                if (item != null) { item.click(); };
            }
        });
    });
    clearTimeout(IdleTimer);
}, 10000);
setInterval(function() {
    window.location.reload();
}, 5*60250);
