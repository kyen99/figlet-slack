# Figlet Slack App

This is just a slack app wrapper around the figlet library. It is designed to be deployed to Vercel and then configured as a slack command.

If you just want to have figlet in slack you can use the one I already have deployed:

<a href="https://slack.com/oauth/v2/authorize?client_id=2205202690.2987775105924&scope=commands&user_scope="><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>

## To make your own figlet slack app...

1. Create a Slack app that uses a custom command.
1. Create a .env.local file with CLIENT_ID and CLIENT_SECRET from your Slack App
1. Add the same env vars above to a Vercel project and deploy this repo
1. Add your Vercel production url to your slack command... https://[your url]/api/figlet
