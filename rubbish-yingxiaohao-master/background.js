// blackList = [...initBlackList];
keyWords=window.localStorage.getItem('keyWords')
if (!keyWords){
    keyWords=[...keywords];
    window.localStorage.setItem('keyWords',keyWords)
}else{
    keyWords=window.localStorage.getItem('keyWords').replace('"','').split(',')
}
blackList=window.localStorage.getItem('blackList')
if (!blackList){
    blackList = [...initBlackList];
    window.localStorage.setItem('blackList',blackList)
}
else{
    blackList=window.localStorage.getItem('blackList').replace('"','').split(',')
}
whiteList=window.localStorage.getItem('BwhiteList')
if (!whiteList){
    whiteList = [...whitelist];
    window.localStorage.setItem('BwhiteList',whiteList)
}else{
    whiteList=window.localStorage.getItem('BwhiteList').replace('"','').split(',')
}

function remove(l,index){
    for (var i=0;i<l.length;i++){
        if (l[i]==index){
            l.splice(i,1);
        }
    }
    return l;
}

function addBlackList(text) {
    if (!blackList.includes(text)) {
        blackList.push(text);
    }else{
        blackList=remove(blackList,text)
    }
    window.localStorage.setItem('blackList',blackList)
}
function addKeyword(text) {
    if (!keyWords.includes(text)) {
        keyWords.push(text);
    }else{
        keyWords=remove(keyWords,text)
    }
    window.localStorage.setItem('keyWords',keyWords)
}

function addWhitelist(w){
    if (!whiteList.includes(w)) {
        whiteList.push(w);
    }else{
        whiteList=remove(whiteList,w)
    }
    window.localStorage.setItem('BwhiteList',whiteList)
}

function getBlackList() {
    if (blackList){
        return blackList;
    }
    return null;
}
function getKeywords(){
    if (keyWords){
        return keyWords;
    }
    return null;
}

function getWhitelist(){
    if (whiteList){
        return whiteList;
    }
    return null;
}

chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "getBlackList")
            sendResponse({blackList: getBlackList()});
        else if (request.action === "getKeywords")
            sendResponse({keywords: getKeywords()}); // snub them.
        else if (request.action==='getwhiteList')
            sendResponse({whiteList:getWhitelist()});
    });