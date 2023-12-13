stall:
	npm install

lint:
	npx stylelint ./build/**/*.css
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./build/**/*.html

deploy:
	npx surge ./build
