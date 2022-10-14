## main

     \____________/
       branch to do some work

How do I create a branch?
checkout tells us to go to a different place
-b is saying create a new branchd
git checkout -b <name of your branch>

To combine add and commit use

git commit -am 'message'

To see all branches

git branch
hit Q when you are done viewing the branches

To push to a branch

git push origin <branch name>

git checkout <branch name> without the b allows you to look at a branch check it out

git pull origin main
Do this after you merge on Github and before you add anything else to your main branch

to locally delete branch use
git branch -d <name of branch>
if you get a message that it won't delete use
git branch -D <name of branch>

I am creating a Contact component. I want to then push it to Github without my netlify updating

1 - create a local branch
2 - create Components folder
3 - create Contact.js
4 - git status look at updates
5 - git add .
6 - git commit -m <message in quotes>
7 - add component to the App.js
8 - npm start make sure changes are working
9 - git status check everything is staged
10 - git add
11 - git commit
12 - push branch to Github
13 - check Github
14 - Compare & Pull Request click
15 - Make notes look at changes
16 - Click Merge
17 - wait for netlify to do its checks as well
18 - click confirm merge
19 - delete branch on Github
20 - go back to local project
21 - cd to main
22 - delete branch from main
23 - pull info from Github to local using git pull origin main
24 - check deployment site
