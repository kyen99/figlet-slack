// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import figlet from 'figlet'

export default function handler(req, res) {
  const { body: { text = '' } = {} } = req
  if (!text) return res.status(404).json({ data: 'error' })

  const data = figlet.textSync(text, {
    width: 80,
    whitespaceBreak: true,
  })

  res.status(200).send('```' + data + '```')
}
