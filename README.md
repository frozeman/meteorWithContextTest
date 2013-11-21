Test project to test the #with helper.

See the console for results.

The With helper re-runs when things (like re-renderings of parts) change in the "testTemplate", which is inside the {{#with}} helper

I would expect that the {{with}} helper won't rerun when things change in a child template.