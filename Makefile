install:
	npm install

lint:
	npx stylelint ./build/styles/*.css
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./build/**/*.html

pug-lint:
	npx pug-lint ./app/**/*.pug

deploy:
	npx surge ./build

build-file:
	npx gulp build

build-Pug:
	npx gulp buildPug

svg:
	npx gulp buildSvg

server:
	npx gulp server

watchers:
	npx gulp watch

conv:
	npx pug ./app/pages/index.pug --pretty -w -o ./build/index.html

conv-s:
	sass --watch ./app/scss/app.scss:./build/styles/app.css

vs:
	code .
	
commit:
	git add .
	git commit -m 'fix'
	git push