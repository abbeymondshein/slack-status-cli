# slack status CLI

_Update your slack status straight from the terminal._

Focus is precious, and Slack is full of many distractions! Utilize this tool to let your team know you are `heads down` straight from the command line - far away from all cute cat and dog photos.

---

## Installation

### Clone

Inside your chosen terminal app (I recommend [hyper](https://hyper.is/)), clone this repository to your local environment using the command

`git clone https://github.com/abbeymondshein/slack-status-cli.git`

### Setup

Once you've cloned the repository, navigate to the folder using the command `cd slack-status-cli`. Once there, you can install status globally with the following command:

```shell
$ npm install -g .
```

### Slack App Setup

1. On `https://api.slack.com/apps` click `Create New App`.
2. Give your app a name, select your workspace & `Create App`.
3. Navigate to the `Oauth & Permissions` page and in the `User Token Scopes` section, authorize your app for the following scopes:
   - dnd:read
   - dnd:write
   - users.profile:read
   - users.profile:write
4. Scroll up to the top of the page and hit `Install to Workspace`.
5. Once the app is installed, the page will have a section called `OAuth Tokens for Your Team`. Copy the value following `User OAuth Token`. This generally starts with something like `xoxb-`. You will need this token for the next step: setting up your environment variables.

### Environment Variables

Create a copy of the `.env.sample` file and name it `.env`. Make sure to update it with your slack token from the previous step.

```
SLACK_TOKEN = xoxp-therestofyourtoken12328320940923849238
```

### Interface

Once you've installed it globally, you're ready to go! Entering `status -h` will pull up a full list of the available commands and actions.

#### Available Commands

The following commands can be used following the `status` keyword to update your status.

| Command (short, long versions) | Action                                                                                                                                                       | Example            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `-h`, `--help`                 | Displays Help Menu (Detailing all commands)                                                                                                                  | `status -h`        |
| `-c`, `--current`              | Loads current status                                                                                                                                         | `status -c`        |
| `-hd`, `--headsdown`           | A preconfigured "heads down" status. <br> Optionally follow with amount of minutes to set for.<br> Defaults to 30 Minute DND & non-expiring status duration. | `status -hd 45`    |
| `-x`, `--clear`                | Clear current status                                                                                                                                         | `status -x`        |
| `-dnd`,`--snooze`              | Snooze / Do not disturb. Enter amount of minutes to snooze or will default to 30min                                                                          | `status -dnd 45`   |
| `-w` ,`--wake`                 | Wake - End snooze / Do not disturb.                                                                                                                          | `status -w`        |
| `-m`,`--minutes`               | Minutes to pass to another command.                                                                                                                          | `status -dnd -m 2` |

### Contribution

Feel free to open a PR or Issue with suggestions / improvements!

Upcoming enhancement concepts:

- complete status update ( emoji, status, duration, DND duration)
- emoji autocompletion
- extended status durations (days)
- ✨ interface refinement ✨
