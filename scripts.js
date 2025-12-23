const getEngine = () => {
    const docStyle = document.documentElement.style;

    // 1. BLINK (Chrome, Edge, Opera)
    // Client Hints are only in Chromium and only on Secure Contexts (HTTPS).
    if (window.navigator.userAgentData) return 'Blink';

    // 2. GECKO (Firefox)
    // We check for 'MozAppearance' OR 'netscape' object (legacy but stable).
    // This MUST come before the WebKit check.
    if ('MozAppearance' in docStyle || window.netscape) return 'Gecko';

    // 3. WEBKIT (Safari / All iOS Browsers)
    // We check for WebKit-specific constructors or Apple-only objects.
    if (window.safari ||
        (window.GestureEvent && !window.chrome) ||
        ('WebkitAppearance' in docStyle && !window.chrome)) {
        return 'WebKit';
    }

    return 'Unknown';
};