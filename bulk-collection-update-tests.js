// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by bulk-collection-update.js.
import { name as packageName } from "meteor/bulk-collection-update";

// Write your tests here!
// Here is an example.
Tinytest.add('bulk-collection-update - example', function (test) {
  test.equal(packageName, "bulk-collection-update");
});
