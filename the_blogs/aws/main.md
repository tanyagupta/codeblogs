# How to keep the current copy and production code separate when using an AWS Lambda Endpoint for an Alexa Skill

When making changes to the code of an AWS lambda endpoint, we do not want our live alexa skill to break. In order to do so, we “freeze” the code and use the frozen version for deployment. In other words, when the code is ready for deployment, we take a “snapshot” of the code as it is at that moment. This snapshot is used as a reference in the live skill’s endpoint. We then continue to develop the code as usual, without affecting the live skill. To achieve this, we use two mechanisms: versioning and aliasing.

The frozen code is the code that is running as the live endpoint. To create the “frozen” code we need to make a version of this code. Versioning creates an immutable duplicate of the code that is being versioned. [See how to make a version](how_to_make_a_version.md). Let use assume that it is called version1

We then create an alias for version1 and give it any name we want <See how to make an alias>. Here we assume that the name is prod1.  We also need to add a trigger to the alias so that it is linked to Alexa skills kit and the skill id in question <See how to add a trigger to the alias>

We now set prod1 as the end point. <How to include the new endpoint> Now the current code can continue to be updated and changed.

When we are ready for our next production version, we are ready to create another version. Let’s call it v2. We then point prod1 to v2. <How to point the alias to a new version> At that point v2 becomes live.

We can now delete v1 as we are no longer using it. Alternatively we can leave it for audit/archive purposes.
