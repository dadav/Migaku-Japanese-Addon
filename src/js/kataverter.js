function convertToKata(n){hiragana="がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁぃぅぇぉゃゅょっゐゑ",katakana="ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォャュョッヰヱ",newStr="";for(var a=0;a<n.length;a++)-1!==hiragana.indexOf(n[a])?newStr+=katakana[hiragana.indexOf(n[a])]:newStr+=n[a];return newStr}!function(){!function(){var n=document.getElementsByClassName("wrapped-japanese");if(n)for(var a in n)void 0!==n[a].innerHTML&&(n[a].innerHTML=convertToKata(n[a].innerHTML))}()}();