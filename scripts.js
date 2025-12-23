const getEngine = () => {
    const docStyle = document.documentElement.style;
    if (window.navigator.userAgentData) return 'Blink';
    if ('MozAppearance' in docStyle || window.netscape) return 'Gecko';
    if (window.safari) return 'WebKit';
    return 'blink'; // default to Chromium engine
};