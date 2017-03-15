# Quote Slash Command for Mixmax

This is an open source Mixmax Slash Command. See <http://developer.mixmax.com/docs/overview-slash-commands#tutorial-building-mygiphy> for more information about how to use this example code in Mixmax.

For a more complex example using multi-word search, see [Soundcloud command](https://github.com/simonxca/mixmax-soundcloud-slash-command).

## What it should look like:
Typeahead<br>
![typeahead](http://i.makeagif.com/media/3-15-2017/2-2d1W.gif)


## Running locally

1. Install using `npm install`
2. Run using `npm start`
3. Add a Mixmax Slash Command in your Mixmax dashboard. (Call it quote) Should look like:<br>
![Mixmax Settings](https://github.com/trunnelben/quote-slash-command/blob/master/Screenshots/Mixmax_Settings.png)
4. Quit Chrome and restart it using the following command on OS X: `open -a Google\ Chrome --args --ignore-certificate-errors`. See [here](http://developer.mixmax.com/docs/integration-api-appendix#local-development-error-neterr_insecure_response) for why.
5. Compose an email in Gmail using Mixmax and type /quote
6. Type anything after /quote to generate a random quote, and type again for a new quote - Choose the quote you like

## Why do we run it in https locally?

Mixmax slash command APIs are required to be served over https. This is because they are queried directly from the Mixmax client in the browser (using AJAX) that's running on an https domain. Browsers forbid AJAX requests from https domains to call http APIs, for security. So we must run an https server with a locally-signed certificate.

See [here](http://developer.mixmax.com/docs/integration-api-appendix#local-development-error-neterr_insecure_response) for how to fix the **ERR_INSECURE_RESPONSE** error that you might get in Chrome.
