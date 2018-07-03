https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

There have been attempts to work around the same-origin policy (such as JSONP). The Cross Origin Resource Sharing (CORS) mechanism has enabled a standardized means of retrieving cross-origin resources. The CORS mechanism lets you specify in a request that you want to retrieve a cross-origin resource (in fetch this is enabled by default). The browser adds an Origin header to the request, and then requests the appropriate resource. The browser only returns the response if the server returns an Access-Control-Allow-Origin header specifying that the origin has permission to request the resource. In practice, servers that expect a variety of parties to request their resources (such as 3rd party APIs) set a wildcard value for the Access-Control-Allow-Origin header, allowing anyone to access that resource.

If the server you are requesting from doesn't support CORS, you should get an error in the console indicating that the cross-origin request is blocked due to the CORS Access-Control-Allow-Origin header being missing.


The server (that the POST request is sent to) needs to include the Access-Control-Allow-Headers header (etc) in its response. Putting them in your request from the client has no effect.

This is because it is up to the server to specify that it accepts cross-origin requests (and that it permits the Content-Type request header, and so on) – the client cannot decide for itself that a given server should allow CORS.
