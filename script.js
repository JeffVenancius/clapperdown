const rules = [
  [/#{6}\s+([^\n]+)/g, "<h6>$1</h6>"],
  [/#{5}\s+([^\n]+)/g, "<h5>$1</h5>"],
  [/#{4}\s+([^\n]+)/g, "<h4>$1</h4>"],
  [/#{3}\s+([^\n]+)/g, "<h3 class='place'>$1</h3>"],
  [/#{2}\s+([^\n]+)/g, "<h2>$1</h2>"],
  [/#{1}\s+([^\n]+)/g, "<h1>$1</h1>"],

  [/\*\*\s?([^\n]+)\*\*/g, "<b>$1</b>"],
  [/\*\s?([^\n]+)\*/g, "<i>$1</i>"],
  [/~\s?([^\n]+)~/g, "<u>$1</u>"],
  [/__([^_]+)__/g, "<b>$1</b>"],
  [/_([^_`]+)_/g, "<i>$1</i>"],
  [/([^\n]+\n?)/g, "<p>$1</p>"] ,

  [/&br\s+([^\n]+)/gi, "<h4 class='bottomright'>$1</h4>"],
  [/&a\s+([^\n]+)/gi, "<h2 class='author'>$1</h2>"],
  [/&c\s+([^\n]+)/gi, "<h4 class='contact'>$1</h4>"],
  [/&t\s+([^\n]+)/gi, "<h1 class='title'>$1</h1>"],
  [/&type\s+([^\n]+)/gi, "$1"],
  [/%%.*/g, ""],
];

const autocompletionrules = [
    [/#{3}e\s([^\n]+)/gi, "### EXT. $1"],
    [/#{1}e\s([^\n]+)/gi, "### EXT. $1"],
    [/#{1}i\s([^\n]+)/gi, "### INT. $1"],
    [/#{3}i\s([^\n]+)/gi, "### INT. $1"],
    [/#{1}\s(\d+)/g, "$1"],
    [/#0\d\s[^\n]+/g,""],
];

let screenplay;
let actors = [];

function render() {
    screenplay = document.querySelector('#screenplay');
    let textarea = document.querySelector('textarea').value;
    let linetext = textarea.split('\n');
    let type;
    let titlepage = [];

    linetext = linetext.map(line => {
        for (let i = 0; i < autocompletionrules.length; i++){
            let replace = line.replace(autocompletionrules[i][0], autocompletionrules[i][1]);
            if (replace !== line)
                switch (i) {
                case 2:
                    if (Number(replace) <= actors.length) {
                        replace = actors[replace - 1];
                    }
                    break;
                case 5:
                    let multiplier = Number(line.charAt(2));
                    let hashtag = '';
                    for (let i = 1; i < multiplier; i++) {
                        hashtag += "#";
                    };
                    line = line.replace(line.substr(0,3),hashtag);
                    console.log(line)
                    replace = line;
                    break;
                };
            line = replace;
        };
        return line;
    });
    
    actors = [];

    linetext = linetext.map(line => {
        for (let i = 0; i < rules.length; i++){
            let replaced = line.replace(rules[i][0], rules[i][1]);
            if (line.match(/^<h/)){replaced = line;} // So it doesn't create unecessary paragraphs.
            if ( replaced !== line){
                switch (i) {
                case 5:
                    if (!actors.includes(line)) {actors.push(line);};
                    break;
                case 12:
                case 13:
                case 14:
                case 15:
                    titlepage.push(replaced);
                case 16:
                    type = line.replace(rules[i][0], rules[i][1]);
                case 17:
                    replaced = '';
                }
                line =  replaced;
            };
        };
        return line;
    });
    
// rendering titlepage
    let classStr = "class='";
    let reorderStr = ["title'","author'","contact'","bottomright'"];
    let reorder = [[],[],[],[]];

    for (let i = 0; i < reorder.length; i++) {
        reorder[i] = titlepage.filter(el => el.includes(classStr + reorderStr[i]));
    }

    for (let i = 0; i < reorder.length; i++) {
        let container = "<div id='container" + reorderStr[i] + ">";
        reorder[i].unshift(container);
        reorder[i].push('</div>');
        reorder[i] = reorder[i].join('');
    }

    reorder[2] = "<div id='bottomtitle'>" + reorder[2];
    reorder[3] += "</div>";
    reorder.unshift("<div id='titlepage'>");
    reorder.push("</div>");
    titlepage = reorder.join('');
    titlepage = titlepage.replace(/<p>|<\/p>/g,'');
    linetext.unshift(titlepage);
    linetext = linetext.join('');
    screenplay.innerHTML = linetext;
}

let scrollcounter = 0;
function get_key() {
    // screenplay = document.querySelector('#screenplay');
    // switch (event.key) {
    // case "ArrowUp":
    //     scrollcounter -= 1;
    //     break;
    // case "ArrowDown":
    // case "Enter":
    //     scrollcounter +=1;
    // }
    // scrollcounter = Math.min(Math.max(scrollcounter, 0), document.querySelector('#screenplay').scrollHeight);
    // screenplay.scroll(0,scrollcounter * 10);
}
