function getEngine() {
    const docStyle = document.documentElement.style;
    if (window.navigator.userAgentData) return 'Blink';
    if ('MozAppearance' in docStyle || window.netscape) return 'Gecko';
    if ('WebkitAppearance' in docStyle && !window.chrome) return 'WebKit';
    return 'Blink'; // default to Chromium engine
};