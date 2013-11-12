Test project to test the #with helper and data context.

See the console for results.

The `testTemplate` is twice inserted. The `firstHelper` sets some data to the current data context. the `secondHelper` logs this value.

This works fine in templates, but not inside a `{{#with}}` block helper.
There the second helper, doesn't know about the set data context value?!