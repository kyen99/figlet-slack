import figlet from 'figlet'

export default function handler(req, res) {
  const { body: { text = '' } = {} } = req
  if (!text) return res.status(404).json({ data: 'error' })

  const data = figlet.textSync(text, {
    width: 80,
    whitespaceBreak: true,
  })

  res.status(200).json({
    response_type: 'in_channel',
    text: '```' + data + '```',
  })
}

/*
Example slack request body:
{
  token: '3fzMRCzg3JyGUS5lqGl2a7GX',
  team_id: 'T02615YLA',
  team_domain: 'mach49',
  channel_id: 'D01MZJGEGQ3',
  channel_name: 'directmessage',
  user_id: 'U01MJK4LM9D',
  user_name: 'kai.yen',
  command: '/figlet',
  text: 'woohoo',
  api_app_id: 'A02V1NT33T6',
  is_enterprise_install: 'false',
  response_url: 'https://hooks.slack.com/commands/T02615YLA/2990530117573/NKlNhH031uoL5EcnljoDc73Q',
  trigger_id: '2978823632695.2205202690.d012bda3be7253d0f926ba487d589736'
}

Response Block...

{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "``` __     _______ ____ _____ ___ ____    _    _     \n \\ \\   / / ____|  _ \\_   _|_ _/ ___|  / \\  | |    \n  \\ \\ / /|  _| | |_) || |  | | |     / _ \\ | |    \n   \\ V / | |___|  _ < | |  | | |___ / ___ \\| |___ \n    \\_/  |_____|_| \\_\\|_| |___\\____/_/   \\_\\_____|\n                                                  ```"
			}
		},
		{
			"type": "input",
			"label": {
				"type": "plain_text",
				"text": "Font",
				"emoji": true
			},
			"element": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a font",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "default",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "colossal",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "broadway",
							"emoji": true
						},
						"value": "value-2"
					}
				],
				"action_id": "static_select-action"
			}
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Send",
						"emoji": true
					},
					"value": "click_me_123",
					"action_id": "actionId-0"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Cancel",
						"emoji": true
					},
					"value": "click_me_123",
					"action_id": "actionId-1"
				}
			]
		}
	]
}

*/
