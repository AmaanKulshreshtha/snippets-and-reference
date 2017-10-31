***Redux’s key ideas***

- All of your application’s data is in a single data structure called the `state` which is held in the `store`
- Your app reads the `state` from this `store`
- The `state` is never mutated directly outside the `store`
- The `views` emit `actions` that describe what happened
- A new `state` is created by combining the `old state` and the `action` by a function called the `reducer`
