# How to get started
1. Fork this project from the github page
1. Clone the repo you need: `git clone git@github.com:tanyagupta/codeblogs.git`
1. Create a new branch `git checkout -b newbranchname` to make your changes on
1.  Make changes and commit
    - Make changes to file(s) as needed 
    - Assuming only one file is changed, `git status` should show one file modified in red
    - `git add filename` instead of filename use the file you have changed. For adding all files use `git add .`
    - `Git status` check status, should show same file as modified in green
    - `git commit -m “some message that describes the change”`
    - `git status`
    - `git push origin newbranchname`
1. Set remote and origin are set correctly and issue pull request
   - `git remote -v' to check origin and remote`. Usually you will only see the origin if you are just starting your setup. The origin is your github codebase and the upstream is where you are getting the codebase from: 

```
   origin	git@github.com:tanyagupta/codeblogs.git (fetch)
   origin	git@github.com:tanyagupta/codeblogs.git (push)
``` 
   - Now add the upstream path
    `git remote add upstream git@github.com:TheUserName/the-remote-file.git` 
    
Note that you should only use add if you are setting it for the first time. If the upstream has already been set and you are changing it, do not use add as it will give you an error. In this situation, substitute `add` with`set-url`, the rest of the command is the same. 

Now you should see something similar to the following when you `git remote -v` 

```
   origin	git@github.com:tanyagupta/codeblogs.git (fetch)
   origin	git@github.com:tanyagupta/codeblogs.git (push)
   upstream	git@github.com:tanyagupta/codeblogs.git (fetch)
   upstream	git@github.com:tanyagupta/codeblogs.git (push)
``` 
   - If you go away and come back and changes have occurred in the meanwhile, make sure you have the latest version. `git pull upstream development && git push` development is the name of the branch you want to pull from

   - Issue pull request and clean up
   - Go to github.com and if things worked correctly you should see the updates and a button iniiating a compare and pull request ![pull request](https://github.com/tanyagupta/tanyagupta.github.io/blob/master/images/pull_request.png?raw=true) 
   - Create pull request ![open pull request](https://github.com/tanyagupta/tanyagupta.github.io/blob/master/images/openpullrequest.png?raw=true) 


#### Once the pull request is accepted and the proposed changes have been merged, you can take care of your own codebase and clean up

   - Merge your changes into master and delete the branch you created
   - `git checkout master` Switch to master
   - `git merge newbranchname` This merges the changes to your master
   - `git branch -d newbranchname` This deletes the old branch
   - If needed delete remote branch `$ git push origin --delete newbranchname`
