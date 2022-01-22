import { useState } from 'react'
import { Heading, Flex, Input } from '@chakra-ui/react'

const Home = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      setData('')
      return
    }
    fetch('/api/figlet', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((d) => d.text())
      .then((d) => setData(d.replace(/`{3}/g, '')))
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <Flex flex={1} justify="center" align="center" h="100vh" direction="column">
      <Heading mb={4}>Figlet</Heading>
      <form name="figlet" onSubmit={handleSubmit}>
        <Input
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something"
          mb={4}
        />
      </form>
      <pre style={{ fontFamily: 'courier' }}>{data}</pre>
      <a href="https://slack.com/oauth/v2/authorize?client_id=2205202690.2987775105924&scope=commands&user_scope=">
        <img
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
        />
      </a>
    </Flex>
  )
}

export default Home
