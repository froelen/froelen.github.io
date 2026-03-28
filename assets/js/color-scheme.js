const initialSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (initialSchemeQuery.matches) {
    document.documentElement.classList.add('dark');
    document.querySelector('meta[name="theme-color"]').setAttribute("content", '#181952');
}