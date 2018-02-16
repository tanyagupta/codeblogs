# How to get started
1. Fork this project from the github page
1. Clone the repo you need: `git clone git@github.com:tanyagupta/codeblogs`
1. Create a new branch `git checkout -b newbranchname` to make your changes on
1. Check if remote and local are set correctly
   - `git remote -v' to check local and remote` both should show. If they don't you need to set them up
   - `git remote add upstream git@github.com:TheUserName/the-remote-file.git` (if you are adding it for the first time OR substitute `add` with`set-url` if you have already set it and want to change it. If you to `add` and the remote has already been added you will get an error
   - `git remote add origin git@github.com:TheUserName/the-remote-file.git` OR `git remote set-url origin git@github.com:TheUserName/the-remote-file.git`
1. If you go away and come back and changes have occurred in the meanwhile, make sure you have the latest version. `git pull upstream development && git push` development is the name of the branch you want to pull from
1.  Make changes and commit
    - `git status` should show one file modified in red
    - `git add readme.md`
    - `Git status` shows same file as modified in green
    - `git commit -m “some message that describes the change”`
    - `git status`
    - `git push origin newbranchname`
1. Now that all the changes are done, merge changes into master and delete the branch you created
   - `git checkout master` Switch to master
   - `git merge newbranchname` This merges the changes to your master
   - `git branch -d newbranchname` This deletes the old branch
2. Issue pull request and clean up
   - Go to github.com and issue a pull request
   - Delete your old branch
