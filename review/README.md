# Review

On your `my-app`, you used the HTML5 `required` attribute. This causes the browser to run its own validation (in modern browsers), so there is no way to check yours. I removed the `required` attributes to test. Note also that you had a space in the textarea, and that counts. So the `required` attribute on that didn't work. Make sure you don't have that space!

```html
<textarea id="message" name="message" cols="40" rows="6" required> </textarea>
```

Should be:

```html
<textarea id="message" name="message" cols="40" rows="6" required></textarea>
```

Put the `.eslintrc` in the root folder of the application, not in the `app` folder.

You've loaded Bootstrap but aren't using it.

Your form method should be POST. GET is only used for search forms and other nullipotent requests (i.e., they don't change anything). This form makes changes to your database, so should use a POST.

For your CSS classes, please use `train-case` not `snake_case`. For your form input `name` attributes, please use `camelCase`. (You're using JavaScript, and the style guide for JS indicates camelCase for variables and properties.)

Your validation doesn't work because the event handler is looking for `#my-form` but the form has no `id` attribute. I added it to test.

Your email was hooked up to an event handler for keyup and that worked fine. But you had an event handler for password (no password on this form), and none for name or website, so those did not work. Did you test this page? These should have been easy errors to catch. Make sure you test *everything*. Learning how to write code is the *easy* part. Learning attention to detail and how to debug&mdash;that's the hard part. Start now! You won't regret it.

Good points on the accessibility. If you don't need something, don't use it.

Bootstrap looks good. Best I've seen so far.

Thank you, thank you, thank you for the time to complete the tutorial. So far, the only answer I've gotten. I really appreciate it.

Looks like your user testing went very well. I hope you've cottoned on to how important good user testing is. We often *think* that we can guess what users want, but we're usually way off. There is no substitute for proper testing. So how come so few people do it?

Everything else looks great! Thanks.



