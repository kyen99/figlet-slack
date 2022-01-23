import figlet from 'figlet'

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
*/

export default function handler(req, res) {
  console.log(req.body)
  const { body: { text = '' } = {} } = req
  if (!text) return res.status(404).json({ data: 'error' })

  const data = figlet.textSync(text, {
    width: 80,
    whitespaceBreak: true,
  })

  res.status(200).send('```' + data + '```')
}
