# Default Commands
---------
These are the default commands for AiurBot. Use these commands in chat by using the bot's trigger (! by default) followed by the command name. Some commands require arguments. If any parameters for a command are surrounded in square brackets below, those parameters are optional.

|Command Name|Arguments|Description|Minimum Rank|
|:----------:|:-------:|-----------|:----------:|
|8ball       |`<any text>` | Asks the Magic 8 Ball a question.
|about       | | Displays bot's "about" message.
|afktime     |`[@username|#userID]` | Returns the amount of time a user has been inactive. Gets your own info if no valid argument.|Bouncer
|anagram     |`<7-30 character string>` | Returns an anagram of the given word(s), retrieved from www.anagramgenius.com.
|blacklist   |`<blacklist name>` `<add//remove|rem>` `<youtube|yt|1//soundcloud|sc|2>` `<video ID//track ID>` | Adds or removes songs to/from a given blacklist.|Manager
|blacklists  | | Returns list of valid blacklist names to be used with the blacklist command.
|commands    | | Lists active commands and amount of inactive commands.
|candy       |`<@username>` | Give someone a random tasty candy!
|catfact     | | Returns a random Cat fact.
|cookie      |`<@username>` | Give someone a cookie!
|dc          | | Places you back into the waitlist at your old position ONLY IF you were disconnected while waiting.Must be undefined since disconnecting.
|dclookup    |`[@username|userID]` | Returns a user's last disconnect time and position. Use their ID if they are not present in the room.
|disable     |`<command name>` | Disable a command.|Manager
|enable      |`<command name>` | Enable a command.|Manager
|english     |`<@username>` | Notify a user in their language to speak English if it is required.|Bouncer
|fact        || Returns a random numerical fact.
|fortune     |`[@username]` | Miss Cleo will read out a fortune! Gets your own fortune if no valid argument.
|gif         |`<tags>`| Grabs a random image from Giphy with the given tags. 2s cooldown.
|help        |`<chat command name>`| Returns the description of a command.
|jointime    |`[@username|#userID]` | Returns amount of time since the given user entered the room. Gets your own info if no valid argument.|Bouncer
|kick        |`@username`| Bans a user from the room and unbans them 2.5 seconds later, simulating a kick.|Manager
|link        | | Returns the link of the song currently playing.|RDJ
|props       | | Show some appreciation for the DJ!
|roll        |[`<#>]` | Returns a random number up to the number given.(Default 12)
|roomscore   | | Returns the current Room Score.
|seentime    |`[@username|#userID]` | Returns the total amount of time a user has been seen in the room. Gets your own info if no valid argument.|Bouncer
|set         |`<option>` `<value>` | Sets a bot option to the given value. If no value is given, returns the current value of it. List of valid options: https://git.io/vyXgH |Manager
|shots, shot |`[@username]` | Buy a random shot for a user!
|skip        |`[reason]` | Skips current song with optional reason, if valid.|Bouncer
|skipreasons || Lists reasons that can be used with !skip.|Bouncer
|stats       |`[@username|#userID]` | Returns the user's recorded amount of plays and votes received. Gets your own info if no valid argument.|Bouncer
|swap        |`@user1` `@user2` | Swaps positions of two users in the waitlist. At least one must be in the waitlist.|Manager
|trigger     | | Returns current trigger of the bot. This can be called with any valid trigger character.
|uptime      | | Returns uptime of this bot.
|weed        |`<@username>` | Give someone some weed!

# Custom Commands
---------
These are the custom commands

|Command Name|Description|
|:----------:|-----------|
|author      | Credits the original Author of Aiurbot.
|owner       | Ping the owner of RoboTHC.
|subinfo     | Provides info about Plug Subscription.
|rcs         | Links our recommended Plug Extension.
|fav         | Reminder to favorite the room.
|emoji       | Links an emoji reference page.
|discord     | Provides invite link to Discord server.
|dcinfo      | Information about the DC command.
|lottoinfo   | Information about the DJ lottery.
|ba          | Information about Brand Ambassadors
|android     | Links to the plug android app.
|ios         | Links to the plug ios app.

# Coming Soon
---------
These are the commands and features that are planned

|Command Name|Arguments|Description|
|:----------:|---------|-----------|
|cc          | `<command>` `<response>` | Create custom command
|flip        | | Flips a coin
|gamble      | `<points>` | Gambles X amount of money in some sort of game.
|money       | `[pay]` `[@user]` | Either views your current money or pays another user
