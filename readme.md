# slack status CLI

_Update your slack status straight from the terminal._

---

## Installation

### Clone

Inside your chosen terminal app (I recommend [hyper](https://hyper.is/)), clone this repository to your local environment using the command

`git clone ***`

### Setup

Once you've cloned the repository, navigate to the folder using the command `cd status-cli`. Once there, you can install status globally with the following command:

```shell
$ npm install -g .
```

### Interface

Once you've installed it globally, you're ready to go! To easily get started, just enter `status`. Entering `status -h` will pull up a full list of the available commands and actions.

#### Available Commands

The following commands can be used following the `status` keyword to maintain your status.

| Command (short, long versions) | Action                                                                                         | Example            |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------ |
| `-h`, `--help`                 | Displays Help Menu (Detailing all commands)                                                    | `status -h`        |
| `-c`, `--current`              | Loads current status                                                                           | `status -c`        |
| `-hd`, `--headsdown`           | A preconfigured "heads down" status. <br> Optionally follow with amount of minutes to set for. | `status -hd -m 45` |
| `-x`, `--clear`                | Clear current status                                                                           | `status -x`        |
| `-dnd`,`--snooze`              | Snooze / Do not disturb. Enter amount of minutes to snooze or will default to 30min            | `status -dnd 45`   |
| `-w` ,`--wake`                 | Wake - End snooze / Do not disturb.                                                            | `status -w`        |
| `-m`,`--minutes`               | Minutes to pass to another command.                                                            | `status -dnd -m 2` |
