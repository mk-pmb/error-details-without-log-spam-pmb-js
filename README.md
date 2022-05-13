
<!--#echo json="package.json" key="name" underline="=" -->
error-details-without-log-spam-pmb
==================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Reduce noise when passing errors to console.error().
<!--/#echo -->


Motivation
----------

I was using `express-promise-router` and my error handler dumped the errors
using `console.error`. That was very noisily, see chapter "noise" below.
I needed a way to display just the stack trace (`err.stack`) and the
useful properties such as `err.code`.



API
---

This module exports one function:

### errorDetailsWithoutLogSpam(origErr)

Given your original error object `origErr`,
return an error object that has the useful details but omits the noise.



Usage
-----

```javascript
import errorDetailsWithoutLogSpam
  from 'error-details-without-log-spam-pmb';

function myErrorHandler(err, req) {
  console.error(req.method, req.url,
    errorDetailsWithoutLogSpam(err));
}
```



Noise
-----

Examples of what I consider a waste of my screen space:

```text
  [Symbol(originalCallSite)]: [
    CallSite {}, CallSite {},
    CallSite {}, CallSite {},
    CallSite {}, CallSite {},
    CallSite {}, CallSite {}
  ],
  [Symbol(mutatedCallSite)]: [
    CallSite {}, CallSite {},
    CallSite {}, CallSite {},
    CallSite {}, CallSite {},
    CallSite {}, CallSite {}
  ]
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
