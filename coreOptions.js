//HOME: the roomslug to join upon logging in
exports.HOME = "worldwide-5";

//STARTASNORMALUSER: if true, starts bot with all commands and automatic moderation disabled
exports.STARTASNORMALUSER = false;

//EXTERNALSETTINGS: if true, allows loading of settings.json
exports.EXTERNALSETTINGS = true;

//DEBUG: if true, logs certain internal things (spammy!)
exports.DEBUG = false;

//TRIGGER: bot's trigger char, all chat messages must start with this (excluding the "trigger" command).
//This is reverted to "!" in case it becomes invalid; see validateTrigger().
//Can only be one of these characters: ! # $ % ^ & * ( ) _ + - = ` ~ . , ?
exports.TRIGGER = '$';