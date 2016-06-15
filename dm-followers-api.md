<a name="module_dmFollowers"></a>

## dmFollowers

* [dmFollowers](#module_dmFollowers)
    * [~startMessagingNewFollowers([msg])](#module_dmFollowers..startMessagingNewFollowers)
    * [~followUser(user)](#module_dmFollowers..followUser)
    * [~sendMessage(user, [msg])](#module_dmFollowers..sendMessage)
    * [~stopMessagingNewFollowers()](#module_dmFollowers..stopMessagingNewFollowers)

<a name="module_dmFollowers..startMessagingNewFollowers"></a>

### dmFollowers~startMessagingNewFollowers([msg])
When a user follows you, follow them back and send a message

**Kind**: inner method of <code>[dmFollowers](#module_dmFollowers)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> | the message to send. Defaults to the environment variable: `process.env.T_GREETING`. Can also use merge tags in the form, `%FIELD_NAME%` |

<a name="module_dmFollowers..followUser"></a>

### dmFollowers~followUser(user)
Follows a user.

**Kind**: inner method of <code>[dmFollowers](#module_dmFollowers)</code>  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Twit.Twitter.User</code> | the user to follow. |

<a name="module_dmFollowers..sendMessage"></a>

### dmFollowers~sendMessage(user, [msg])
Sends a direct message (DM) to a user.

**Kind**: inner method of <code>[dmFollowers](#module_dmFollowers)</code>  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Twit.Twitter.User</code> | the user to message |
| [msg] | <code>string</code> | the message to send. Defaults to the environment variable: `process.env.T_GREETING`. Can also use merge tags in the form, `%FIELD_NAME%` |

<a name="module_dmFollowers..stopMessagingNewFollowers"></a>

### dmFollowers~stopMessagingNewFollowers()
Stops tracking new followers

**Kind**: inner method of <code>[dmFollowers](#module_dmFollowers)</code>  
