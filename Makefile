BROWSERIFY = node ./node_modules/browserify/bin/cmd.js
WIPS_CURRENT = node ./node_modules/bin/wisp.js
FLAGS =

ifdef verbose
	FLAGS = --verbose
endif

ifdef current
	WISP = $(WIPS_CURRENT)
else
	WISP = ./node_modules/wisp/bin/wisp.js
endif

all: host main bundle clean


clean:
	rm *.js

host:
	cat ./host.wisp | $(WISP) > ./host.js

main:
	cat ./main.wisp | $(WISP) > ./main.js

bundle:
	$(BROWSERIFY) --debug --exports require --entry ./main.js > ./build/main.js
