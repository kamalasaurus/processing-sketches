# A simple p5.js portfolio

Developed at ITP Summer Camp 2018: put your code in the sketches folder
and then you can use the generated website to run your p5 sketches
locally with your browser.

```
.
├── README.md
├── controller.js
├── docs
│   ├── index.html
│   └── installer.sh
├── index.html
├── package-lock.json
├── package.json
├── sketches
│   ├── 1.js
│   ├── 2.js
│   ├── 3.js
│   └── 4.js
│   └── <insert new files here>.js
└── style.css
```

To run your code, just enter the filename (preferrably a number) into
the text field on the webpage and hit enter.

## Requirements

The installer script will auto-install brew, nvm, and node if you don't
have them yet since they're necessary to get your portfolio running.

## Usage

1. open a new terminal window, move to a directory you want this stuff
   to exist in, then copy/paste `curl https://kamalasaurus.github.io/processing-sketches/installer.sh -sSf | sh`
2. `cd processing-sketches`
3. `npm start`

