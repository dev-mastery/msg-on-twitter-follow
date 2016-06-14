## Functions

<dl>
<dt><a href="#startMessagingNewFollowers">startMessagingNewFollowers([msg])</a></dt>
<dd><p>When a user follows you, follow them back and send a message</p>
</dd>
<dt><a href="#followUser">followUser(user)</a></dt>
<dd><p>Follows a user</p>
</dd>
<dt><a href="#sendMessage">sendMessage(user, [msg])</a></dt>
<dd><p>Sends a direct message (DM) to a user.</p>
</dd>
<dt><a href="#stopMessagingNewFollowers">stopMessagingNewFollowers()</a></dt>
<dd><p>Stops tracking new followers</p>
</dd>
</dl>

<a name="startMessagingNewFollowers"></a>

## startMessagingNewFollowers([msg])
When a user follows you, follow them back and send a message

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> | the message to send. Defaults to `Hi ${user.name}, thanks for following me. I hope you're having a great ${dayOfWeek}!`; |

<a name="followUser"></a>

## followUser(user)
Follows a user

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Twit.Twitter.User</code> | the user to follow. |

<a name="sendMessage"></a>

## sendMessage(user, [msg])
Sends a direct message (DM) to a user.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Twit.Twitter.User</code> | the user to message |
| [msg] | <code>string</code> | the message to send. Defaults to `Hi ${firstName}, thanks for following me! I hope you're having a great ${dayOfWeek}.`; |

<a name="stopMessagingNewFollowers"></a>

## stopMessagingNewFollowers()
Stops tracking new followers

**Kind**: global function  
