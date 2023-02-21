install: # установить зависимости
	npm ci

brain-games: # запуск игры brain-games
	node bin/brain-games.js

brain-even: # запуск игры brain-even
	node bin/brain-even.js

brain-calc: # запуск игры brain-calc
	node bin/brain-calc.js

brain-gcd: # запуск игры brain-gcd
	node bin/brain-gcd.js

brain-progression: # запуск игры brain-progression
	node bin/brain-progression.js

brain-prime: # запуск игры brain-prime
	node bin/brain-prime.js

publish: # отладка публикации
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .
