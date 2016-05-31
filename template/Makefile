bucket := 's3://dev.example.com --acl public-read --delete --inl'

lint:
	@node_modules/.bin/eslint "**/*.js"

develop:
	@NODE_ENV=development node_modules/.bin/gatsby develop

build:
	@rm -rf public
	@node_modules/.bin/gatsby build

deploy:
	@aws s3 sync public $(bucket) \
		--acl=public-read \
		--include "*.html" \
		--delete \
		--cache-control='max-age=60, must-revalidate'
	@aws s3 sync public $(bucket) \
		--acl=public-read \
		--exclude "*.html" \
		--delete \
		--cache-control='max-age=525600'

.PHONY: develop build lint deploy
