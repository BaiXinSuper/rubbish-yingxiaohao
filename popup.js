const bg = chrome.extension.getBackgroundPage();
let currentBlackList = bg.getBlackList();
let currentKeywords= bg.getKeywords();
let currentWhiteList = bg.getWhitelist();
const blackListDom = document.getElementById("blackList");
const KeywordsDom=document.getElementById("keywords");
const whiteListDom=document.getElementById("whiteLists");
document.getElementById('confirm').addEventListener("click", () => {
    const text = document.getElementById('name').value;
    if (text) {
        bg.addBlackList(text);
        blackListDom.innerHTML = `<p>${JSON.stringify(currentBlackList)}</p>`;
    }
})

blackListDom.innerHTML = `<p>${JSON.stringify(currentBlackList)}</p>`;
document.getElementById('confirmk').addEventListener("click", () => {
    const text2 = document.getElementById('keyword').value;
    if (text2) {
        bg.addKeyword(text2);
        KeywordsDom.innerHTML = `<p>${JSON.stringify(currentKeywords)}</p>`;
    }
})

KeywordsDom.innerHTML = `<p>${JSON.stringify(currentKeywords)}</p>`;


document.getElementById('confirmw').addEventListener("click", () => {
    const text3 = document.getElementById('whitelist').value;
    if (text3) {
        bg.addWhitelist(text3);
        whiteListDom.innerHTML = `<p>${JSON.stringify(currentWhiteList)}</p>`;
    }
})

whiteListDom.innerHTML = `<p>${JSON.stringify(currentWhiteList)}</p>`;
