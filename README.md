# EveryAction Take Home

## Follow-up Questions

### How long, roughly, did you spend working on this project

It took around 30 minutes to build the scripts, initiate the repository, and do other code work. Overall the project took me about an hour and 20 minutes as I was trying to be thorough in my answers to the response questions.

### Give the steps needed to deploy and run your code

To run this script please download node, npm, and this repository. Then navigate to the path containing this newly downloaded repository and run npm install to download dependencies. Next set the API_KEY environment variable to the to the key that you'll be using.

Running node BroadCastEmails on the command line will return the desired results. Thank You!

### What could you do to improve your code for this project if you had more time?

Given more time I would make this code more flexible. There are several other endpoints that could be called, according to the API Reference documentation. Supporters, for example, may be interested in reporting on contributions and disbursements as well as the Broadcast Emails data that we are currently reporting on. Being that the authentication steps are the same and the endpoint is what's changing, re-writing the function to include an endpoint parameter and using it to call whichever endpoint is needed in the uri, might be useful.

In addition, we might want to do different things with the outputs from these request calls. As it stands now, the method only prints the information  that the assignment requires to the console, but what if we wanted to visualize this data or do something else with it? Rather than print it out I would pass an object with the relevant data to a callback or promise. Then I would export the method to be called by other modules where the data object would be manipulated later. This would ready the method to return the data from myriad calls, to be manipulated in whatever ways necessary for future reporting.

There were only 3 results returned in this call. Given more time, and a larger data set to perform testing, I would paginate to ensure the full list of messages are returned. According to the documentation a "nextPageLink" would typically be returned that should help with this. Additionaly a $top=50 parameter could be passed under normal circumstances that would enable us to set the size of the resultant object.

### Outline a testing plan for this report

To test this report I would first recommend printing out the status_code variable included in the listEmails method in the BroadCastEmails module. This will give you the http response code from your request where you can ensure that there are no client or server errors.

If there are client errors (a 400 code) next steps would be to ensure you are calling a valid endpoint, and that your API key is valid. Logging the response body, represented by the variable 'body' in the listEmails function, to the console should tell you if your authentication is insufficient, returning an 'UNAUTHORIZED', message.

If the endpoint is invalid the response body should tell you that the endpoint doesn't exist. For example misspelling BroadCastEmails in the URL returns this message:

'The API 'v2.BroadcastEmailasds' doesn't exist'

If on the other hand the issue is server side, it may be wise to get in touch with NGP support.

If you are receiving successful response codes ensure that the body of your response reflects the data that we are expecting. Our report script expects a json object to be returned to the response body. That object should include a key 'items'. Items' value should be an array of objects each containing an emailMessageId, and name. If any of these are not as expected our code may need a refactor to produce the report that we've come to expect.
