# First time set up
## Git
1. Download [git](https://git-scm.com/downloads)
1. `git config --global user.name "Tanya Gupta"` to set up the user name
1.  Confirm it is set up correctly `git config --global user.name`
1. `git config --global user.email "email@example.com"` Set up commit email address in Git
1. Confirm it is set up correctly `git config --global user.email`

## Set up SSH key
1. `ls -al ~/.ssh` This will list all the files in your .ssh directory. This directory is where SSH keys are stored. An SSH key is the fingerprint of a key that is verified when you try to login to a remote computer using SSH.
1. You should see something like `id_rsa.pub`
1. If you don't see this then you need to set up a new SSH key - continue below

### Generating a new SSH key
1. `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
1. This should create a new ssh keys
1. When you are asked to enter a file to save the key, press enter to accept the default
1. Enter a passphrase when asked

### Add your SSH key to the ssh-agent
1. Type `eval "$(ssh-agent -s)"`. This should show you something like `Agent pid 59566`
1. If you're using macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain so that it looks like what is shown below. For windows see [link](https://docs.microsoft.com/en-us/vsts/git/use-ssh-keys-to-authenticate)

```
Host *
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/id_rsa
``` 

Then `ssh-add -K ~/.ssh/id_rsa` to add SSH key to the ssh-agent

### Add your SSH key to your Github account
1. ` pbcopy < ~/.ssh/id_rsa.pub` copies the SSH key to your clipboard
2. Click on your profile photo and choose Settings
1. Select SSH and GPG AddKeysToAgent
1. Click on *New SSH Key* or *Add SSH key*
1. Enter a title, paste key, and click Add SSH key
1. Confirm your Github password

#### NOTE
If you get the error *ssh fails with packet_write_wait: Broken pipe*, go to your *config* file in your .ssh and add the line *IPQoS=throughput*
[(see source)](https://bbs.archlinux.org/viewtopic.php?id=239961) 

# Getting started
1. Fork the project you need from the github page ![fork](https://camo.githubusercontent.com/9aa6c12b0a100ea4be6215ea84ea12556e4dc013/68747470733a2f2f68656c702e6769746875622e636f6d2f6173736574732f696d616765732f68656c702f7265706f7369746f72792f666f726b5f627574746f6e2e6a7067)
1. Clone the repo you need: `git clone git@github.com:tanyagupta/codeblogs.git` You could also have done `git clone https://https://github.com/tanyagupta/codeblogs`. However many prefer using SSH instead of HTTPS to avoid entering a password each time although Github [recommends](https://help.github.com/articles/which-remote-url-should-i-use/) using HTTPS instead of SSH
1. Once in the new directory, create a new branch `git checkout -b newbranchname` to make your changes on
1.  Make changes and commit
    - Make changes to file(s) as needed
    - Assuming only one file is changed, `git status` should show one file modified in red
    - `git add filename` instead of filename use the file you have changed. For adding all files use `git add .`
    - `Git status` check status, should show same file as modified in green
    - `git commit -m “some message that describes the change”`
    - `git status`
    - `git push origin newbranchname`
1. Set remote and origin are set correctly and issue pull request
   - `git remote -v' to check origin and remote`. Usually you will only see the origin if you are just starting your setup. The origin is your github codebase and the upstream is where you are getting the codebase from (see additional information below for using https:

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




#### Once the pull request is accepted and the proposed changes have been merged, you can take care of your own codebase and clean up

   - Merge your changes into master and delete the branch you created
   - `git checkout master` Switch to master
   - `git merge newbranchname` This merges the changes to your master
   - `git branch -d newbranchname` This deletes the old branch
   - If needed delete remote branch `$ git push origin --delete newbranchname`

### Stash
This is useful if there is a merge conflict between your local copy and the remote. Let's say you want to pull the latest changes but some changes you have made locally also needs to be incorporated. 

The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy

``$ git stash``
To resolve the conflict first "stash" your changes so you can pull the latest from the remote. Then pull any changes so that you do not have any conflict. Once the changes have been pulled, ``git apply`` to keep the stash changes and apply them to the latest version. Now resolve all the conflicts. Then commit and push your own changes if you need to. Finally `git stash drop` to drop the stash

See [link](https://www.atlassian.com/git/tutorials/git-stash) for more

## Additional information
### Using HTTPS vs SSH
Some combinations that could be used

```
git remote add upstream git@github.com:TheDevPath/googleMaps-offline-navigator.git  
git remote add upstream https://github.com/TheDevPath/googleMaps-offline-navigator.com   
git remote set-url upstream git@github.com:TheDevPath/googleMaps-offline-navigator.git  
git remote set-url upstream https://github.com/TheDevPath/googleMaps-offline-navigator.com
git remote add origin https://github.com/tanyagupta/googleMaps-offline-navigator.com  
git remote set-url origin https://github.com/tanyagupta/googleMaps-offline-navigator.com
git remote set-url origin git@github.com:tanyagupta/googleMaps-offline-navigator.git  
```
### Terms
| Term | What it means |
| ------------- | ------------- |
| Upstream and origin | Upstream generally refers to the original repo that you have forked and the origin is your fork which is your own repo on GitHub and the clone of the original repo of GitHub. From Github: *When a repo is cloned, it has a default remote called origin that points to your fork on GitHub, not the original repo it was forked from.To keep track of the original repo, you need to add another remote named upstream*|

| Command  | What it does |
| ------------- | ------------- |
| git remote -v   | shows origin and remote  |
| git status  | shows files staged, commited or changed  |
|git branch -d newbranchname|deletes a branch, -d option is an alias for --delete, which only deletes the branch if it has already been fully merged in. its upstream branch. (You could also use -D, which is an alias for --delete --force, which deletes the branch "irrespective of its merged status) |
|git pull upstream development && git push | pulls latest changes from upstream branch development and also pushes the changes to your github account|
|git remote rename oldname newname | renames remote [More](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
| git checkout branchname |Switches to an existing branch|
|git branch -a|See all branches|
|ls -a|Shows Hidden directories|
|git rebase master development| where development is the branch that needs to be aligned with master. Rebasing is tricky so check out this [reference](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)|
|git reset --hard master|when you are on development, use this command to abandon any changes made to branch development and just replicate what is on branch master|
|git stash|Saves uncommited changes for later use (will not do this for untracked or ignored files|
|git stash pop|Removes the changes saved in stash and reapplies them to the working copy|
|git stash apply|Keeps both the stash and also reapplies changes to working copy|
|git stash list| shows all your stashes|
|git stash drop| delete a normal stash created with `git stash`
|git branch -a|Shows all remote and local branches|
|`git clone https://github.com/tanyagupta/offline-uscitizenship-flashcards --branch new-UI --single-branch`|Clone one specific branch. Here the url is the url of the repo and new-UI is the name of the branch. If you are not in the destination folder already add the branch name like so `it clone <url> --branch <branch>--single-branch [<folder>]`
|`git://github.com/tanyagupta/offline-uscitizenship-flashcards.git //git fetch origin //git checkout -b new-UI origin/new-UI  //git merge development //git checkout development // git merge --no-ff new-UI git push origin development`| This is how you would "copy" from new-UI branch which has the latest changes to development which has the older code via command line and also resolve conflicts and perform a manual merge. |
|`git checkout -b nameofbranch myownbranchname`. Then `git pull url_of_repo branchnameofrepo`|Checking out pull requests locally and working on someone else's branch See [link](https://gist.github.com/elfrank/c08256de9c15e41e1781) and [link](https://help.github.com/articles/checking-out-pull-requests-locally/)|
|`$ git push -d <remote_name> <branch_name> and $ git branch -d <branch_name>`|Delete local and remote branch. Remote branch is usually origin. [See link](https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely)|
|First make sure your remotes are set up correctly (see above - getting started #5). Then `git checkout -b <branch-name>` to create a new branch and check it out
The remote branch is automatically created when you push it to the remote server. So you can just do: `git push <remote-name> <branch-name>` |How do you create a remote Git branch?|

## Resources
- [Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)   
- [Github Guides](https://guides.github.com/activities/forking/)
- [Eqqon work](http://www.eqqon.com/index.php/)
- [Collaborative Github work](Collaborative_Github_Workflow%20%20%20%20)
- [Stackoverflow](https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github)
- [Don't be afraid to commit](http://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html)
- [Atlassian](https://www.atlassian.com/git/tutorials/using-branches/git-merge) 

