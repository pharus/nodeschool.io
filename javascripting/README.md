# javascripting

> Learn the basics of Javascript. No previous programming experience required.
    
    npm install -g javascripting
    
Well, I solved them all, yet with a few considerations.

Considerations:
- for-loop: didn't use post increment, because sometimes it is troublesome,
    and not necessarily an Js idiom. Besides, you should avoid for, and use 
    iterating methods. (imho, Js was made to be coded a little like Lisp)
- looping-through-arrays: same as above, makes more sense using iterating 
    methods.
- scope: didn't name then, and called within closure, because they aren't
    called recursively, so it would be useless here.