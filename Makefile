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
	cat ./src/host.wisp | $(WISP) > ./host.js

main:
	cat ./src/main.wisp | $(WISP) > ./main.js

bundle:
	$(BROWSERIFY) --debug \
                --require wisp/sequence \
                --require wisp/string \
                --require wisp/reader \
                --require wisp/ast \
                --require wisp/reader \
                --require wisp/compiler \
                --require wisp/runtime \
                --require wisp/analyzer \
                --exports require \
                --entry ./main.js > ./build/main.js
