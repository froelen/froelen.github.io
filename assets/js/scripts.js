const html = document.documentElement;


// Browser engine handler
function getEngine() {  // returns a string of the browser's engine bypassing its userAgent string
    const docStyle = document.documentElement.style;
    if (window.navigator.userAgentData) return 'Blink';  // only present in Chromium
    if ('MozAppearance' in docStyle || window.netscape) return 'Gecko';
    if ('WebkitAppearance' in docStyle && !window.chrome) return 'WebKit';  // Chromium engine would return true to Webkit test, thus adding not window.chrome
    return 'Blink';  // default to Chromium engine
};
html.classList.add(getEngine().toLowerCase());  // adds as a class the browser engine for easy specific fixes in CSS 


// Color scheme handler (page load toggle in scheme-init.js)
const metaTheme = document.querySelector('meta[name="theme-color"]');
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function toggleScheme() {
    html.classList.toggle('dark');
    metaTheme.setAttribute('content', html.classList.contains('dark') ? '#181952' : '#F7F8FF');
}
function checkSchemeSync() {
    if ( (colorSchemeQuery.matches && !html.classList.contains('dark')) || (!colorSchemeQuery.matches && html.classList.contains('dark'))) toggleScheme();
}

colorSchemeQuery.addEventListener('change', checkSchemeSync);
document.getElementById('color-scheme-button').addEventListener('click', toggleScheme);


// Toggles nav-lang and nav-links visibility from menu button
document.getElementById('nav-button-collapse').addEventListener('click', () => {
    document.getElementById('header').classList.toggle('open');
});