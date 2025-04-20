# React + TypeScript + Vite
# 프로젝트 셋팅
npm create vite@latest wedding-invite --template react
cd wedding-invite
npm install

# git 연동 
git init
git remote add origin https://github.com/{my-id}/{repo-name}.git

git add .
git commit -m "초기 커밋"
git branch -M {branch-name}
git push -u origin {branch-name} 
==> 오류 시, 
    git push -u origin develop --force 
    
    or 

    git pull origin develop --rebase
    git push -u origin develop

npm install gh-pages --save-dev ==> remote git 에 git -page 관련 설정

----------------------------------------------------

# 소스 수정 후, git page 반영
git commit -m "💍 fix: message"
git push origin develop

npm run deploy

이후 1~2분 기다리기