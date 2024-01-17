install:
	npm install

lint:
	npx stylelint ./build/styles/*.css
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./build/**/*.html

deploy:
	npx surge ./build

build-file:
	npx gulp build

server:
	npx gulp server

watchers:
	npx gulp watchers

conv:
	npx pug ./app/pages/index.pug --pretty -w -o ./build/index.html

conv-s:
	sass --watch ./app/scss/app.scss:./build/styles/app.css

ss:
	code .
	
com:
	git add .
	git commit -m 'fix'
	git push
