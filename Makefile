build:
	@rm -rf dist &> /dev/null || true
	@node_modules/.bin/babel lib --out-dir dist/ --source-maps inline

publish: build
	@npm publish

.PHONY: build publish
