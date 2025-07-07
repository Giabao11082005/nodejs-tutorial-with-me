import cliProgress from "cli-progress";

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

bar.start(100, 0);

let value = 0;
const interval = setInterval(() => {
  value++;
  bar.update(value);

  if (value >= 100) {
    clearInterval(interval);
    bar.stop();
  }
}, 50);
