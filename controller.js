void function initialize() {

  setup();

  let input = document.querySelector('input');

  input.addEventListener('keypress', (event) => {
    if (event.which === 13) {
      let url = (new URL(window.location)).host;
      window.location = `#${input.value}`
      location.reload();
    }
  });

}();

function setup() {
  let hash = (new URL(window.location))
    .hash
    .substring(1);

  if (!!hash) {
    let processing = document.createElement('script');
        processing.src = './node_modules/p5/lib/p5.min.js';

    document.body.appendChild(processing);

    let script = document.createElement('script');
    script.src = `./sketches/${hash}.js`;

    document.body.appendChild(script);
  }
}

