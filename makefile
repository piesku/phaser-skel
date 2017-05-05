export SHELL := /bin/bash
export PATH  := $(CURDIR)/node_modules/.bin:$(PATH)

SOURCES := $(wildcard src/*)
OK := \033[32;01m✓\033[0m

# The default target.
all: lint build

# Used for pre-publishing.
dist: lint build minify

build: public/play/bundle.js
minify: public/play/bundle.min.js

serve:
	@serve public

watch:
	@find $(CURDIR)/src | entr -c $(MAKE) -s all

clean:
	@rm -f public/play/bundle.*
	@echo -e " $(OK) $@"

lint:
	@eslint \
	    --config $(CURDIR)/lint_config.json \
	    --max-warnings 0 \
		$(SOURCES) bundle_config.js
	@echo -e " $(OK) $@"

public/play/bundle.js: $(SOURCES)
	@rollup $(CURDIR)/src/index.js \
	    --config $(CURDIR)/bundle_config.js \
		--format iife \
		--globals phaser:Phaser \
	    --output $@
	@echo -e " $(OK) $@ built"

public/play/bundle.min.js: public/play/bundle.js
	@uglifyjs $< \
	    --compress \
	    --mangle \
	    --screw-ie8 \
	    --output $@
	@echo -e " $(OK) $@ minified"

public/play/phaser.%: node_modules/phaser/build/phaser.%
	@cp $< $@
	@echo -e " $(OK) $@ copied"
