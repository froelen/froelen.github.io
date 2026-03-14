const body = document.body;

// Browser engine handler
function getEngine() {  // returns a string of the browser's engine bypassing its userAgent string
    const docStyle = document.documentElement.style;
    if (window.navigator.userAgentData) return 'Blink';  // only present in Chromium
    if ('MozAppearance' in docStyle || window.netscape) return 'Gecko';
    if ('WebkitAppearance' in docStyle && !window.chrome) return 'WebKit';  // Chromium engine would return true to Webkit test, thus adding not window.chrome
    return 'Blink';  // default to Chromium engine
};


body.classList.add(getEngine().toLowerCase());  // adds as a class the browser engine for easy specific fixes in CSS 

// Color scheme handler
function toggleScheme() { body.classList.toggle('dark'); };
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (colorSchemeQuery.matches) { toggleScheme(); };  // Initial toggle
colorSchemeQuery.addEventListener('change', toggleScheme);  // When browser preference changes
document.getElementById("color-scheme-button").addEventListener('click', () => { toggleScheme(); });  // Handles scheme button clicks