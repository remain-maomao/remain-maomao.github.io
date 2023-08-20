let input = document.querySelector("input");
let terminalBody = document.querySelector("#terminalBody");

const functionCalls = () => {
    checkWindowClick();
    checkPressedEnter();
}

const checkWindowClick = () => {
    terminalBody.addEventListener('click', () => input.focus());
}

const checkPressedEnter = () => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            execute(input.value);
        }
    });
}

const execute = (inputValue) => {
    let temp = input.value;
    input.remove();
    terminalBody.innerHTML += temp;
    checkCommand(temp);
    addInput();
}

const checkCommand = (inputCommand) => {

    terminalBody.innerHTML += '<br>';
    let command = inputCommand.split(" ")[0];

    if (command) {
        if (command === '我是猪') { commandTrick(); }
        else {
            terminalBody.innerHTML += '\"' + inputCommand + '\"' + ' 不是一个咒语，请试试 \"我是猪\"';
        }
    }
    terminalBody.innerHTML += '<br>';
}

function addInput() {
    terminalBody.innerHTML += ' > <input type="text" autofocus />';
    input = document.querySelector("input");
    input.focus();
    functionCalls();
}

const commandTrick = () => {
    // 编辑信的内容
    terminalBody.innerHTML += `<br />
    亲爱的小狗屁💕：
    <br />
    <br />`;
    terminalBody.innerHTML += `
    别后月余，殊深驰系。到今天为止，我们在一起已经有了半年之久啦。在写这封信的第一部分的时候，我们还在闹变扭中😭，那个时候我心中充满了各种复杂的情绪，有欢喜，有忧伤，有对未来的憧憬，也有对当下的迷茫，就像浪里的小船不知该飘向何方🚣‍♂️。
        <br />
        <br />`;
    terminalBody.innerHTML += `
        就在过去的几天前，我们又一次吵了架❤️‍🔥。自从在一起以来，我们几乎每个月都有吵架。这是为什么呢，难道就没有办法逃出这个魔咒吗，我暗中想象。每个月我都寄希望于你不要发火，尽我所能去安慰你，照顾你的情绪，揣摩你的小心思，生怕你生气🧐。
        <br />
        <br />`;
    terminalBody.innerHTML += `
        可是好像每个月都没有办法尽如人意，一开始，你吵架，我不知所措；到后来，我希望自己能够做得更好；再到后来，我已经不知道我该向什么方向去努力了。不管怎么做，总有可以挑剔的地方，总有不尽如人意的地方，总会与完美有着分毫之差的距离。
        <br />
        <br />`;
    terminalBody.innerHTML += `
        虽然我不知道未来的方向在哪里，也不知道下一步该何去何从，但是总得乐观🥰一点鸭。我现在知道的，就是我做的不够好，我还能努力，继续死皮赖脸的努力冲冲冲！争取这次的错误不再犯，下次比这次做得更好，能够让小狗屁的满意度再多一点。
        <br />
        <br />`;
    terminalBody.innerHTML += `
        上面这部分是咱们前俩天闹变扭的时候，我写下的部分。到今天，我的心境又发生了新的变化。我应该多向小狗屁袒露自己内心的想法，自己的苦恼与烦闷，而不是憋在心里不吐不快。
        <br />
        <br />`;
    terminalBody.innerHTML += `
        就像小狗屁说的，既然我们已经决定好了要一起走下去👫，那我们就要共同克服难关。既然小狗屁会向我倾诉自己的苦恼，那我也应该向小狗屁倾诉自己的苦恼。爱情需要两个人共同相互依靠。你依靠我，我也依靠你。
        <br />
        <br />`;
    terminalBody.innerHTML += `
        你说，你可能还是不太懂我，我想了想，可能是因为自己还没有养成向你倾诉、向你抱怨、向你吐苦水的习惯。这样的习惯，其实并不好。因为你没办法知道我内心什么时候郁闷、烦躁和苦恼。我这俩天向小狗屁倾诉了不少苦水，感觉自己浑身轻松了。至少，我们内心的联结💞变得更加牢固了。
        <br />
        <br />
        `;
    terminalBody.innerHTML += `
    地理上的距离无法阻挡我们对彼此的爱意，<br /><br />相互之间的包容与鼓励是我们一直走下去的动力！<br /><br />小狗屁💨加油！大狗屎💩加油！`;
    terminalBody.innerHTML += `
    <br />
    <br />爱你的玉米`;
    terminalBody.innerHTML += `<br>`
}

functionCalls();