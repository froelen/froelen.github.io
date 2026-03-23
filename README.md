# froelen's website

Repository: froelen.github.io ([github.com/froelen/froelen.github.io]( https://github.com/froelen/froelen.github.io ))

Url: [froelen.is-a.dev]( https://froelen.is-a.dev ) (backup: [froelen.github.io]( https://froelen.github.io ))

Generated using froelen's [static website generator]( https://github.com/froelen/static-website-generator )!

---

This website was created and is owned, maintained, and used by myself :)

Feel free to use parts of its code or its design as inspiration for your own projects, although if you end up using it, I'd appreciate to be credited where and when necesary ^^

## Development environment

### File stucture

The development environment of this wesbite looks like this:

```
dev-env/
↳ static-website-generator/  # Cloned from https://github.com/froelen/static-website-generator
  ↳ ssg.py

↳ froelen.github.io/  # Website directory
  ↳ assets/...
  ↳ en/...
  ↳ fr/...
  ↳ ssg-lang/
    ↳ en.json
    ↳ fr.json
  ↳ ssg-templates/
    ↳ index.html
    ↳ credits.html
    ↳ ...
```

If you wish to work on this website as well, it is recommended to have the same file structure to make it easy, as tools (like build and localhost scripts) are designed for this environment.

### froelen's Static website generator usage

You can build new pages from templates using the following command. Make sure to check which templates you're generating (`--templates`) and in which languages (`--languages`).
`user@machine:~/path/to/dev-env/` `python3 ./static-website-generator/ssg.py --languages='en,fr' --translations-dir='./assets/ssg-lang/' --templates='index' --templates-dir='./assets/ssg-templates/' --output-dir='./'`

For details, refer to froelen's SSG documentation.

### Localhost

You can easily launch a locally hosted version of the website to visualize it at any moment, simply run the following command:
`user@machine:~/path/to/dev-env/` `node localhost.js`
Note that this script also automatically launches a build script using froelen's SSG (assuming it is located in the correct place in the file structure as described earlier).