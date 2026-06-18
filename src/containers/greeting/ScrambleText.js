import React, { useEffect, useState } from "react";

const glyphs = [
"ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ",
"サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト",
"ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ",
"マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ",
"ル","レ","ロ","ワ","ヲ","ン","ガ","ギ","グ","ゲ",
"ゴ","ザ","ジ","ズ","ゼ","ゾ"
];

export default function DecoderText() {
const finalText = "Karthikeyan L N R";

const [chars, setChars] = useState(
finalText.split("").map((c) =>
c === " "
? { value: " ", locked: true }
: {
value: glyphs[Math.floor(Math.random() * glyphs.length)],
locked: false
}
)
);

useEffect(() => {
let revealIndex = 0;


const interval = setInterval(() => {
  setChars((prev) =>
    prev.map((item, index) => {
      if (item.locked) return item;

      if (index <= revealIndex) {
        return {
          value: finalText[index],
          locked: true
        };
      }

      return {
        value:
          glyphs[Math.floor(Math.random() * glyphs.length)],
        locked: false
      };
    })
  );

  revealIndex += 0.12;

  if (revealIndex > finalText.length) {
    clearInterval(interval);
  }
}, 16);

return () => clearInterval(interval);


}, []);

return ( <span>
{chars.map((char, index) => (
<span
key={index}
style={{
display: "inline-block",
minWidth: "0.6ch"
}}
>
{char.value} </span>
))} </span>
);
}
