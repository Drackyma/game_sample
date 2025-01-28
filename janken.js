
// じゃんけんの手を定義
const hands = ["グー", "チョキ", "パー"];

// コンピュータの手をランダムに選択
function getComputerHand() {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}

// 勝敗を判定する関数
function determineWinner(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return "引き分け";
    } else if (
        (playerHand === "グー" && computerHand === "チョキ") ||
        (playerHand === "チョキ" && computerHand === "パー") ||
        (playerHand === "パー" && computerHand === "グー")
    ) {
        return "あなたの勝ち";
    } else {
        return "コンピュータの勝ち";
    }
}

function determineJanken() {
    const yourHand = document.getElementById('janken').value;
    const computerHand = getComputerHand();
    const result = determineWinner(yourHand, computerHand);
    document.getElementById('computerHand').innerText = 'コンピュータの手は: ' + computerHand;
    document.getElementById('yourHand').innerText = 'あなたの手は: ' + yourHand;
    document.getElementById('result').innerText = 'じゃんけんの結果は: ' + result;
}