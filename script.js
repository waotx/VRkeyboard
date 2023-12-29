//буквы на клавиатуре и константы
const engLayout = '<div class="key key2 Backquote"><div class="keySymbol">`</div><div class="keySymbol keySymbol_upper">~</div></div>\n' + '        <div class="key key2 Digit1"><div class="keySymbol">1</div><div class="keySymbol keySymbol_upper">!</div></div>\n' + '        <div class="key key2 Digit2"><div class="keySymbol">2</div><div class="keySymbol keySymbol_upper">@</div></div>\n' + '        <div class="key key2 Digit3"><div class="keySymbol">3</div><div class="keySymbol keySymbol_upper">#</div></div>\n' + '        <div class="key key2 Digit4"><div class="keySymbol">4</div><div class="keySymbol keySymbol_upper">$</div></div>\n' + '        <div class="key key2 Digit5"><div class="keySymbol">5</div><div class="keySymbol keySymbol_upper">%</div></div>\n' + '        <div class="key key2 Digit6"><div class="keySymbol">6</div><div class="keySymbol keySymbol_upper">^</div></div>\n' + '        <div class="key key2 Digit7"><div class="keySymbol">7</div><div class="keySymbol keySymbol_upper">&</div></div>\n' + '        <div class="key key2 Digit8"><div class="keySymbol">8</div><div class="keySymbol keySymbol_upper">*</div></div>\n' + '        <div class="key key2 Digit9"><div class="keySymbol">9</div><div class="keySymbol keySymbol_upper">(</div></div>\n' + '        <div class="key key2 Digit0"><div class="keySymbol">0</div><div class="keySymbol keySymbol_upper">)</div></div>\n' + '        <div class="key key2 Minus"><div class="keySymbol">-</div><div class="keySymbol keySymbol_upper">_</div></div>\n' + '        <div class="key key2 Equal"><div class="keySymbol">=</div><div class="keySymbol keySymbol_upper">+</div></div>\n' + '        <div class="key key4 Backspace"><div class="keySymbol">Backspace</div></div>\n' + '        <div class="key key2 Tab"><div class="keySymbol">Tab</div></div>\n' + '        <div class="key key2 KeyQ"><div class="keySymbol">Q</div></div>\n' + '        <div class="key key2 KeyW"><div class="keySymbol">W</div></div>\n' + '        <div class="key key2 KeyE"><div class="keySymbol">E</div></div>\n' + '        <div class="key key2 KeyR"><div class="keySymbol">R</div></div>\n' + '        <div class="key key2 KeyT"><div class="keySymbol">T</div></div>\n' + '        <div class="key key2 KeyY"><div class="keySymbol">Y</div></div>\n' + '        <div class="key key2 KeyU"><div class="keySymbol">U</div></div>\n' + '        <div class="key key2 KeyI"><div class="keySymbol">I</div></div>\n' + '        <div class="key key2 KeyO"><div class="keySymbol">O</div></div>\n' + '        <div class="key key2 KeyP"><div class="keySymbol">P</div></div>\n' + '        <div class="key key2 BracketLeft"><div class="keySymbol">[</div></div>\n' + '        <div class="key key2 BracketRight"><div class="keySymbol">]</div></div>\n' + '        <div class="key key2 Backslash"><div class="keySymbol">\\</div><div class="keySymbol keySymbol_upper">|</div></div>\n' + '        <div class="key key2 Delete"><div class="keySymbol">Del</div></div>\n' + '        <div class="key key4 CapsLock"><div class="keySymbol">Caps Lock</div></div>\n' + '        <div class="key key2 KeyA"><div class="keySymbol">A</div></div>\n' + '        <div class="key key2 KeyS"><div class="keySymbol">S</div></div>\n' + '        <div class="key key2 KeyD"><div class="keySymbol">D</div></div>\n' + '        <div class="key key2 KeyF"><div class="keySymbol">F</div></div>\n' + '        <div class="key key2 KeyG"><div class="keySymbol">G</div></div>\n' + '        <div class="key key2 KeyH"><div class="keySymbol">H</div></div>\n' + '        <div class="key key2 KeyJ"><div class="keySymbol">J</div></div>\n' + '        <div class="key key2 KeyK"><div class="keySymbol">K</div></div>\n' + '        <div class="key key2 KeyL"><div class="keySymbol">L</div></div>\n' + '        <div class="key key2 Semicolon"><div class="keySymbol">;</div></div>\n' + '        <div class="key key2 Quote"><div class="keySymbol">\'</div></div>\n' + '        <div class="key key4 Enter"><div class="keySymbol">Enter</div></div>\n' + '        <div class="key key4 ShiftLeft"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key2 IntlBackslash"><div class="keySymbol">\\</div></div>\n' + '        <div class="key key2 KeyZ"><div class="keySymbol">Z</div></div>\n' + '        <div class="key key2 KeyX"><div class="keySymbol">X</div></div>\n' + '        <div class="key key2 KeyC"><div class="keySymbol">C</div></div>\n' + '        <div class="key key2 KeyV"><div class="keySymbol">V</div></div>\n' + '        <div class="key key2 KeyB"><div class="keySymbol">B</div></div>\n' + '        <div class="key key2 KeyN"><div class="keySymbol">N</div></div>\n' + '        <div class="key key2 KeyM"><div class="keySymbol">M</div></div>\n' + '        <div class="key key2 Comma"><div class="keySymbol">,</div></div>\n' + '        <div class="key key2 Period"><div class="keySymbol">.</div></div>\n' + '        <div class="key key2 Slash"><div class="keySymbol">/</div></div>\n' + '        <div class="key key2 ArrowUp"><div class="keySymbol">↑</div></div>\n' + '        <div class="key key2 ShiftRight"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key3 ControlLeft"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 MetaLeft"><div class="keySymbol">Win</div></div>\n' + '        <div class="key key2 AltLeft"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key12 Space"><div class="keySymbol"> </div></div>\n' + '        <div class="key key2 AltRight"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key3 ControlRight"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 ArrowLeft"><div class="keySymbol">←</div></div>\n' + '        <div class="key key2 ArrowDown"><div class="keySymbol">↓</div></div>\n' + '        <div class="key key2 ArrowRight"><div class="keySymbol">→</div></div>'
const rusLayout = '<div class="key key2 Backquote"><div class="keySymbol">Ё</div></div>\n' + '        <div class="key key2 Digit1"><div class="keySymbol">1</div><div class="keySymbol keySymbol_upper">!</div></div>\n' + '        <div class="key key2 Digit2"><div class="keySymbol">2</div><div class="keySymbol keySymbol_upper">"</div></div>\n' + '        <div class="key key2 Digit3"><div class="keySymbol">3</div><div class="keySymbol keySymbol_upper">№</div></div>\n' + '        <div class="key key2 Digit4"><div class="keySymbol">4</div><div class="keySymbol keySymbol_upper">;</div></div>\n' + '        <div class="key key2 Digit5"><div class="keySymbol">5</div><div class="keySymbol keySymbol_upper">%</div></div>\n' + '        <div class="key key2 Digit6"><div class="keySymbol">6</div><div class="keySymbol keySymbol_upper">:</div></div>\n' + '        <div class="key key2 Digit7"><div class="keySymbol">7</div><div class="keySymbol keySymbol_upper">?</div></div>\n' + '        <div class="key key2 Digit8"><div class="keySymbol">8</div><div class="keySymbol keySymbol_upper">*</div></div>\n' + '        <div class="key key2 Digit9"><div class="keySymbol">9</div><div class="keySymbol keySymbol_upper">(</div></div>\n' + '        <div class="key key2 Digit0"><div class="keySymbol">0</div><div class="keySymbol keySymbol_upper">)</div></div>\n' + '        <div class="key key2 Minus"><div class="keySymbol">-</div><div class="keySymbol keySymbol_upper">_</div></div>\n' + '        <div class="key key2 Equal"><div class="keySymbol">=</div><div class="keySymbol keySymbol_upper">+</div></div>\n' + '        <div class="key key4 Backspace"><div class="keySymbol">Backspace</div></div>\n' + '        <div class="key key2 Tab"><div class="keySymbol">Tab</div></div>\n' + '        <div class="key key2 KeyQ"><div class="keySymbol">Й</div></div>\n' + '        <div class="key key2 KeyW"><div class="keySymbol">Ц</div></div>\n' + '        <div class="key key2 KeyE"><div class="keySymbol">У</div></div>\n' + '        <div class="key key2 KeyR"><div class="keySymbol">К</div></div>\n' + '        <div class="key key2 KeyT"><div class="keySymbol">Е</div></div>\n' + '        <div class="key key2 KeyY"><div class="keySymbol">Н</div></div>\n' + '        <div class="key key2 KeyU"><div class="keySymbol">Г</div></div>\n' + '        <div class="key key2 KeyI"><div class="keySymbol">Ш</div></div>\n' + '        <div class="key key2 KeyO"><div class="keySymbol">Щ</div></div>\n' + '        <div class="key key2 KeyP"><div class="keySymbol">З</div></div>\n' + '        <div class="key key2 BracketLeft"><div class="keySymbol">Х</div></div>\n' + '        <div class="key key2 BracketRight"><div class="keySymbol">Ъ</div></div>\n' + '        <div class="key key2 Backslash"><div class="keySymbol">\\</div><div class="keySymbol keySymbol_upper">/</div></div>\n' + '        <div class="key key2 Delete"><div class="keySymbol">Del</div></div>\n' + '        <div class="key key4 CapsLock"><div class="keySymbol">Caps Lock</div></div>\n' + '        <div class="key key2 KeyA"><div class="keySymbol">Ф</div></div>\n' + '        <div class="key key2 KeyS"><div class="keySymbol">Ы</div></div>\n' + '        <div class="key key2 KeyD"><div class="keySymbol">В</div></div>\n' + '        <div class="key key2 KeyF"><div class="keySymbol">А</div></div>\n' + '        <div class="key key2 KeyG"><div class="keySymbol">П</div></div>\n' + '        <div class="key key2 KeyH"><div class="keySymbol">Р</div></div>\n' + '        <div class="key key2 KeyJ"><div class="keySymbol">О</div></div>\n' + '        <div class="key key2 KeyK"><div class="keySymbol">Л</div></div>\n' + '        <div class="key key2 KeyL"><div class="keySymbol">Д</div></div>\n' + '        <div class="key key2 Semicolon"><div class="keySymbol">Ж</div></div>\n' + '        <div class="key key2 Quote"><div class="keySymbol">Э</div></div>\n' + '        <div class="key key4 Enter"><div class="keySymbol">Enter</div></div>\n' + '        <div class="key key4 ShiftLeft"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key2 IntlBackslash"><div class="keySymbol">\\</div></div>\n' + '        <div class="key key2 KeyZ"><div class="keySymbol">Я</div></div>\n' + '        <div class="key key2 KeyX"><div class="keySymbol">Ч</div></div>\n' + '        <div class="key key2 KeyC"><div class="keySymbol">С</div></div>\n' + '        <div class="key key2 KeyV"><div class="keySymbol">М</div></div>\n' + '        <div class="key key2 KeyB"><div class="keySymbol">И</div></div>\n' + '        <div class="key key2 KeyN"><div class="keySymbol">Т</div></div>\n' + '        <div class="key key2 KeyM"><div class="keySymbol">Ь</div></div>\n' + '        <div class="key key2 Comma"><div class="keySymbol">Б</div></div>\n' + '        <div class="key key2 Period"><div class="keySymbol">Ю</div></div>\n' + '        <div class="key key2 Slash"><div class="keySymbol">.</div></div>\n' + '        <div class="key key2 ArrowUp"><div class="keySymbol">↑</div></div>\n' + '        <div class="key key2 ShiftRight"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key3 ControlLeft"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 MetaLeft"><div class="keySymbol">Win</div></div>\n' + '        <div class="key key2 AltLeft"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key12 Space"><div class="keySymbol"> </div></div>\n' + '        <div class="key key2 AltRight"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key3 ControlRight"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 ArrowLeft"><div class="keySymbol">←</div></div>\n' + '        <div class="key key2 ArrowDown"><div class="keySymbol">↓</div></div>\n' + '        <div class="key key2 ArrowRight"><div class="keySymbol">→</div></div>'
const keyboard = document.querySelector(".keyboard");
const textarea = document.querySelector(".textarea");
const body = document.querySelector("body");
const layouts = [engLayout, rusLayout];
const controlKeys = {Shift: false, Control: false, Alt: false, CapsLock: false};

//стартовая точка при загрузке страницы 
textarea.value='';
let capsCd=false;
let curLayout = +localStorage.getItem('curLayout');
keyboard.innerHTML = layouts[curLayout];

//Темы клавиатуры
document.querySelector('.t1').addEventListener('click', ()=>{
    changeStylesheetRule(document.styleSheets[1], '.key', 'border', 'solid 1px black');
    changeStylesheetRule(document.styleSheets[1], 'body', 'background', 'rgb(95, 96, 97)');
    changeStylesheetRule(document.styleSheets[1], '.keyboard', 'color', 'white');
    changeStylesheetRule(document.styleSheets[1], '.active', 'background', 'rgb(186, 117, 117)');
    changeStylesheetRule(document.styleSheets[1], '.clickActive', 'background', 'rgb(186, 117, 117)');
})
document.querySelector('.t2').addEventListener('click', ()=>{
    changeStylesheetRule(document.styleSheets[1], '.key', 'border', 'solid 1px rgb(39, 207, 137)');
    changeStylesheetRule(document.styleSheets[1], 'body', 'background', 'rgb(102, 114, 79)');
    changeStylesheetRule(document.styleSheets[1], '.keyboard', 'color', 'yellow');
    changeStylesheetRule(document.styleSheets[1], '.active', 'background', 'rgb(116, 63, 140)');
    changeStylesheetRule(document.styleSheets[1], '.clickActive', 'background', 'rgb(116, 63, 140)');
})
document.querySelector('.t3').addEventListener('click', ()=>{
    changeStylesheetRule(document.styleSheets[1], '.key', 'border', 'solid 1px rgb(216, 93, 10)');
    changeStylesheetRule(document.styleSheets[1], 'body', 'background', 'rgb(12, 4, 24)');
    changeStylesheetRule(document.styleSheets[1], '.keyboard', 'color', 'brown');
    changeStylesheetRule(document.styleSheets[1], '.active', 'background', 'rgb(9, 230, 31)');
    changeStylesheetRule(document.styleSheets[1], '.clickActive', 'background', 'rgb(9, 230, 31)');
})

//проверка нажатой клавиши и активация ее на клаве
body.addEventListener("keydown", (e)=>{
    let el = keyboard.querySelector(`.${e.code}`);
    if(el==null) return;
    e.preventDefault();
    if(!el.classList.contains('active')) el.classList.toggle('active')
    

    //состояние горячих клавиш
    controlKeys["Shift"]=e.shiftKey;
    controlKeys["Control"]=e.ctrlKey;
    controlKeys["Alt"]=e.altKey;
    if(!capsCd && e.code==='CapsLock'){
        controlKeys["CapsLock"]=!controlKeys["CapsLock"];
        capsCd=true;
    }

    //ввод текста в текстовое окно
    let keyText = el.querySelector('.keySymbol').innerText;
    if(keyText.length===1){
        if(el.querySelector('.keySymbol_upper')!==null && e.shiftKey){
            textarea.value+=el.querySelector('.keySymbol_upper').innerText;
        }
        else if(e.shiftKey ^ controlKeys['CapsLock']){
            textarea.value+=el.querySelector('.keySymbol').innerText;
        }
        else{
            textarea.value+=el.querySelector('.keySymbol').innerText.toLowerCase();
        }
    }
    else{
        switch(e.code){
            case 'Space':
                textarea.value+=' ';
                break;
            case 'Backspace':
                if (textarea.value != null && textarea.value.length > 0) {
                    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
                }
                break;
            case 'Tab':
                textarea.value+='\t';
                break;
            case 'Enter':
                textarea.value+='\n';
                break;
            case 'ArrowUp':
                textarea.value+='↑';
                break;
            case 'ArrowLeft':
                textarea.value+='←';
                break;
            case 'ArrowDown':
                textarea.value+='↓';
                break;
            case 'ArrowRight':
                textarea.value+='→';
                break;

        }

    }
})

//проверка нажатой клавиши и ДЕактивация ее на клаве
body.addEventListener("keyup", (e)=>{

    let el = keyboard.querySelector(`.${e.code}`);
    if(el==null) return;
    if(el.classList.contains('active')) el.classList.toggle('active');


    //проверка горячих клавиш (смена раскладки)
    if(e.shiftKey && e.code === 'AltLeft'
        || e.altKey && e.code.includes('Shift')){
        curLayout = (curLayout+1)%2;
        keyboard.innerHTML = layouts[curLayout];
        localStorage.setItem('curLayout', curLayout);
    }

    //состояние горячих клавиш
    controlKeys["Shift"]=e.shiftKey;
    controlKeys["Control"]=e.ctrlKey;
    controlKeys["Alt"]=e.altKey;
    if(e.code==='CapsLock'){
        capsCd=false;
    }
})

keyboard.addEventListener("click", (e)=>{

    //проверка нажатой клавиши и активация ее на клаве
    let el = e.target.closest('.key')
    if(el===null) return;
    if(!el.classList.contains('clickActive')) el.classList.toggle('clickActive');
    if(el.classList.item(2)==='CapsLock'){
        controlKeys["CapsLock"]=!controlKeys["CapsLock"];
    }
    //изменение(ввод) текста в окошке
    let keyText = el.querySelector('.keySymbol').innerText;
    if(keyText.length===1){
        if(el.querySelector('.keySymbol_upper')!==null && controlKeys["Shift"]){
            textarea.value+=el.querySelector('.keySymbol_upper').innerText;
        }
        else if(controlKeys["Shift"] ^ controlKeys['CapsLock']){
            textarea.value+=el.querySelector('.keySymbol').innerText;
        }
        else{
            textarea.value+=el.querySelector('.keySymbol').innerText.toLowerCase();
        }
    }
    else{
        switch(el.classList.item(2)){
            case 'Space':
                textarea.value+=' ';
                break;
            case 'Backspace':
                if (textarea.value != null && textarea.value.length > 0) {
                    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
                }
                break;
            case 'Tab':
                textarea.value+='\t';
                break;
            case 'Enter':
                textarea.value+='\n';
                break;
            case 'ArrowUp':
                textarea.value+='↑';
                break;
            case 'ArrowLeft':
                textarea.value+='←';
                break;
            case 'ArrowDown':
                textarea.value+='↓';
                break;
            case 'ArrowRight':
                textarea.value+='→';
                break;

        }
    }

    setTimeout(`if(document.querySelector('.${el.classList.item(2)}').classList.contains('clickActive')) document.querySelector('.${el.classList.item(2)}').classList.toggle('clickActive')`, 150);

    //проверка горячих клавиш (раскладка)
    if(controlKeys["Shift"] && el.classList.item(2)=== 'AltLeft'
        || controlKeys["Alt"] && el.classList.item(2).includes('Shift')){
        curLayout = (curLayout+1)%2;
        keyboard.innerHTML = layouts[curLayout];
        localStorage.setItem('curLayout', curLayout);
    }
})

//функция проверки нажатия клавиши (активации ее на клавиатуре виртуальной)
function keyPress(keyCode){
    let el = keyboard.querySelector(`.${keyCode}`);
    if(el==null) return;
    if(!el.classList.contains('active')) el.classList.toggle('active')

    //изменение текста в окошке текстовом
    let keyText = el.querySelector('.keySymbol').innerText;
    if(keyText.length===1){
        if(el.querySelector('.keySymbol_upper')!==null && controlKeys['Shift']){
            textarea.value+=el.querySelector('.keySymbol_upper').innerText;
        }
        else if(controlKeys['Shift'] ^ controlKeys['CapsLock']){
            textarea.value+=el.querySelector('.keySymbol').innerText;
        }
        else{
            textarea.value+=el.querySelector('.keySymbol').innerText.toLowerCase();
        }
    }
    else{
        switch(keyCode){
            case 'Space':
                textarea.value+=' ';
                break;
            case 'Backspace':
                if (textarea.value != null && textarea.value.length > 0) {
                    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
                }
                break;
            case 'Tab':
                textarea.value+='\t';
                break;
            case 'Enter':
                textarea.value+='\n';
                break;
            case 'ArrowUp':
                textarea.value+='↑';
                break;
            case 'ArrowLeft':
                textarea.value+='←';
                break;
            case 'ArrowDown':
                textarea.value+='↓';
                break;
            case 'ArrowRight':
                textarea.value+='→';
                break;

        }

    }
}

//отжатие клавиши
function keyUnpress(){

}

//изменение темы
function changeStylesheetRule(stylesheet, selector, property, value) {
    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        let rule = stylesheet.cssRules[i];
        if(rule.selectorText === selector) {
            rule.style[property] = value;
            return;
        }
    }
}