# Определение переменных
NODE_MODULES = node_modules

# Цель по умолчанию
all: install

# Установка зависимостей
install:
	@echo "Установка зависимостей..."
	npm ci

# Очистка папки node_modules
clean:
	@echo "Удаление папки node_modules..."
	rm -rf $(NODE_MODULES)

# Помощь
help:
	@echo "Makefile команды:"
	@echo "  make install   - Установить зависимости с помощью npm ci"
	@echo "  make clean     - Удалить папку node_modules"
	@echo "  make help      - Показать это сообщение"

.PHONY: all install clean help

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
