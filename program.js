#!/usr/bin/env node
const { program } = require("commander");
const {
  checkCurrentStatus,
  setCurrentStatus,
  setDND,
  clearCurrentStatus,
  clearDND,
  formatStatusExpiration,
} = require("./processes");

program
  .option("-c, --current", "Check current status")
  .option("-hd, --headsdown", "Preconfigured 'Heads down' status")
  .option("-m, --minutes", "Minutes to be not disturbed")
  .option("-x, --clear", "Clear status")
  .option(
    "-dnd, --snooze",
    `Do not disturb (Snooze notifications)
    Enter amount of minutes to snooze, or will default to 30min
    ex: "status -dnd 45" 
    `
  )
  .option("-w, --wake", "End snooze (Do not disturb)")
  .parse(process.argv);

const { args } = program;
const opts = program.opts();
const { current, headsdown, clear, wake, snooze } = opts;

if (current) {
  checkCurrentStatus();
} else if (headsdown) {
  setCurrentStatus({
    status_text: "heads down",
    status_emoji: ":heads-down:",
    status_expiration: args.length < 1 ? 0 : formatStatusExpiration(args[0]),
  });
  setDND(args.length < 1 ? 30 : args[0]);
} else if (clear) {
  clearCurrentStatus();
} else if (snooze) {
  setDND(args.length < 1 ? 30 : args[0]);
} else if (wake) {
  clearDND();
}
