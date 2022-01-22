import figlet from 'figlet'

const say = (text) =>
  figlet.textSync(text, {
    width: 80,
    whitespaceBreak: true,
  })

export default function handler(req, res) {
  const { code } = req.query

  if (!code) return res.status(200).send('huh?')

  fetch('https://slack.com/api/oauth.v2.access', {
    method: 'POST',
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then((d) => d.json())
    .then((r) => {
      if (r.error)
        return res.status(500).send(`slack said...\n\n ${say(r.error)}`)
    })
    .then(() => res.status(200).send(say('All your figlet are belong to us')))
}
