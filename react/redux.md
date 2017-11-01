***Redux’s key ideas***

- All of your application’s data is in a single data structure called the `state` which is held in the `store`
- Your app reads the `state` from this `store`
- The `state` is never mutated directly outside the `store`
- The `views` emit `actions` that describe what happened
- A new `state` is created by combining the `old state` and the `action` by a function called the `reducer`
- Reducer functions must be **pure functions**.

A **pure function** is one that:
- Will always return the same value given the same set of arguments.
- Does not alter the “world” around it in any way. This includes mutating variables externalto the function or altering an entry in a database.

<img width="400" alt="screen shot 2017-10-31 at 11 12 29 am" src="https://user-images.githubusercontent.com/17349825/32205819-70652400-be2c-11e7-917f-213f5afbb079.png">
