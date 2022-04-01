chrome.extension.sendRequest({action: "getBlackList"}, function (response) {
    const blackList = response.blackList;
    chrome.extension.sendRequest({action: "getwhiteList"}, function (response) {
        whiteList=response.whiteList;
    });
    //console.info('blackList', blackList);
    chrome.extension.sendRequest({action: "getKeywords"}, function (response) {
        keywords=response.keywords;});
    function get_id(){
        var url=document.getElementsByClassName("up-info report-wrap-module report-scroll-module")[0].getElementsByTagName("a")[0].href
        var uid=url.split('com/')[1];
        return uid;
    }
    function get_sign(){
        var uid=get_id();
        if (whiteList.includes(uid)){
            return;
        }
        var sign=document.getElementsByClassName('up-info report-wrap-module report-scroll-module')[0].getElementsByClassName('desc')[0].textContent
        for (var i=0;i<keywords.length;i++){
            if (!sign.search(keywords[i]===-1)){
                if ($('.follow-btn').text()!='我是营销号'){
                    $('.username').text('uid'+get_id())
                    alert('您正在观看疑似营销号内容，请注意你的大脑不要被引导');
                    $('.tit').text('营销号内容：'+$('.tit').text());
                    document.title = '您正在浏览营销号内容！！！';
                    $('.follow-btn').text('我是营销号');
                    $('.follow-btn').css('background', 'red');
                    $('.appeal-text').css('border', '5px solid red').css('font-size', '24px')
                    $('.ops').html('<p style="color:red;font-weight: bold;font-size: 24px">这是一个光荣的营销号，随手举报传递正能量 →</p>')
                    $('.ipt-txt').text('营销号+1');
                    $('body').append('<video src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/audio.mp4" autoplay style="display: none"></video>');
                }else{
                    return;
                }
            }
        }

    }

    function get_f(){
        if ($('.follow-btn').text()==='我是营销号'){
            return;
        }
        var uid=get_id();
        if (whiteList.includes(uid)){
            return;
        }
        var x=$('.text').text().split(' ')[0]
        if (x!=''){
            var x=$('.text').text().split(' ')[0];
            var m=document.getElementsByClassName('desc-info desc-v2')[0].getElementsByTagName('span')[0].textContent;
            for (var i=0;i<keywords.length;i++){
                if (!m.search(keywords[i]===-1)){
                    if ($('.follow-btn').text()!='我是营销号'){
                        $('.username').text('uid'+get_id())
                        alert('您正在观看疑似营销号内容，请注意你的大脑不要被引导');
                        $('.tit').text('营销号内容：'+$('.tit').text());
                        document.title = '您正在浏览营销号内容！！！';
                        $('.follow-btn').text('我是营销号');
                        $('.follow-btn').css('background', 'red');
                        $('.appeal-text').css('border', '5px solid red').css('font-size', '24px')
                        $('.ops').html('<p style="color:red;font-weight: bold;font-size: 24px">这是一个光荣的营销号，随手举报传递正能量 →</p>')
                        $('.ipt-txt').text('营销号+1');
                        $('body').append('<video src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/audio.mp4" autoplay style="display: none"></video>');
                    }else{
                        return;
                    }
                }
            }
            if (x.search(/置顶/)){
                x=$('.text').text().split(' ')[0];
                for (var i=0;i<keywords.length;i++){
                    if (x.search(keywords[i])!=-1){
                        if ($('.follow-btn').text()!='我是营销号'){
                            $('.username').text('uid'+get_id())
                            alert('您正在观看疑似营销号内容，请注意你的大脑不要被引导');
                            $('.tit').text('营销号内容：'+$('.tit').text());
                            document.title = '您正在浏览营销号内容！！！';
                            $('.follow-btn').text('我是营销号');
                            $('.follow-btn').css('background', 'red');
                            $('.appeal-text').css('border', '5px solid red').css('font-size', '24px')
                            $('.ops').html('<p style="color:red;font-weight: bold;font-size: 24px">这是一个光荣的营销号，随手举报传递正能量 →</p>')
                            $('.ipt-txt').text('营销号+1');
                            $('body').append('<video src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/audio.mp4" autoplay style="display: none"></video>');
                        }else{
                            return;
                        }
                    }
                }
            }
            
        }
    }
    



    setInterval(() => {


        if ($('.follow-btn').text()==='我是营销号'){
            return;
        }
        var uid=get_id();
        if (whiteList.includes(uid)){
            return;
        }
        if (blackList.includes(uid)) {
            // $('html').css('filter', 'invert(1)');

            // $('p, span, a').each((index, item) => {
            //         $(item).text('营销号');
            //     }
            // )
            if ($('.follow-btn').text()!='我是营销号'){
                document.title = '您正在浏览营销号内容！！！';
                $('.username').text('uid'+get_id())
                $('.follow-btn').text('我是营销号');
                $('.follow-btn').css('background', 'red');
                $('.appeal-text').css('border', '5px solid red').css('font-size', '24px')
                $('.ops').html('<p style="color:red;font-weight: bold;font-size: 24px">这是一个光荣的营销号，随手举报传递正能量 →</p>')
                $('.ipt-txt').text('营销号+1');
                $('body').append('<video src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/audio.mp4" autoplay style="display: none"></video>')
                $('.tit').text('营销号内容：'+$('.tit').text())
            }
        }
    }, 2000)
    setInterval(() => {
        get_f();
    }, 2000);
    setInterval(() => {
        get_sign();
    }, 2000);
});

