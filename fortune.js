function determineFortune(number) {
    const fortuneNumber = number % 4;
    if (fortuneNumber == 0) {
        return "大吉";
    } else if (fortuneNumber == 1) {
        return "中吉";
    } else if (fortuneNumber == 2) {
        return "小吉";
    } else if (fortuneNumber == 3) {
        return "吉";
    } else {
        return "凶";
    }
}

function determineFortuneDetail(fortuneResult) {
    switch (fortuneResult) {
        case "大吉":
            return "今日は最高の一日になるでしょう！";
        case "中吉":
            return "今日は良いことがたくさん起こるでしょう。";
        case "小吉":
            return "今日は少し良いことがあるかもしれません。";
        case "吉":
            return "今日は普通の日になるでしょう。";
        case "凶":
            return "今日は注意が必要です。";
        default:
            return "運勢が不明です。";
    }
}


function showFortune() {
    const birthdayInput = document.getElementById('birthday').value;
    const fortuneResult = determineFortune(parseInt(birthdayInput, 10));
    const fortuneDetail = determineFortuneDetail(fortuneResult);
    document.getElementById('result').innerText = 'あなたの誕生日から運勢を占うと: ' + fortuneResult;
    document.getElementById('detail').innerText = fortuneDetail;

}