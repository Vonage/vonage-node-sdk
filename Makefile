CURRENT_DIR = $(shell pwd)

install-deps:
	if [ -d "node_modules" ]; then \
				rm -rf node_modules; \
	fi
	if [ -f "package-lock.json" ]; then \
		rm package-lock.json; \
	fi
	for NAME in $(CURRENT_DIR)/packages/*; do \
		if [ -d $${NAME} ]; then \
			cd $${NAME}; \
			if [ -d "node_modules" ]; then \
				rm -rf node_modules; \
			fi; \
			if [ -f "package-lock.json" ]; then \
				rm package-lock.json; \
			fi; \
		fi; \
	done
	cd $(CURRENT_DIR)
	npm install
	npx lerna bootstrap

check-major-updates:
	npm-check-updates -x node-fetch -u --deep

update-major-deps: check-major-updates install-deps