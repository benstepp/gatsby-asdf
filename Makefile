build:
	@rm -rf dist &> /dev/null || true
	@node_modules/.bin/babel lib --out-dir dist/ --source-maps inline

.PHONY: build