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
2 -
