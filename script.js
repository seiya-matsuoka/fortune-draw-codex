"use strict";

const fortuneResults = [
  {
    fortune: "大吉",
    message: "新しいことに挑戦すると、良い結果につながりそうです。",
  },
  {
    fortune: "中吉",
    message: "焦らず進めば、うれしい出来事がありそうです。",
  },
  {
    fortune: "小吉",
    message: "小さな幸せを見つけられる一日になりそうです。",
  },
  {
    fortune: "吉",
    message: "落ち着いて行動すれば、穏やかに過ごせそうです。",
  },
  {
    fortune: "末吉",
    message: "急がず準備を整えると、運が少しずつ開けそうです。",
  },
  {
    fortune: "凶",
    message: "無理をせず、慎重に過ごすことを心がけましょう。",
  },
];

const drawButton = document.querySelector("#draw-button");
const fortuneResult = document.querySelector("#fortune-result");
const messageResult = document.querySelector("#message-result");

drawButton.addEventListener("click", () => {
  const resultIndex = Math.floor(Math.random() * fortuneResults.length);
  const result = fortuneResults[resultIndex];

  fortuneResult.textContent = result.fortune;
  messageResult.textContent = result.message;
});
