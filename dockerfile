# Выбор базовой ОС
FROM ubuntu:20.04

# Установка необходимых пакетов
RUN apt-get update && apt-get install -y curl

# Установка Node.js 14
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Копирование исходных файлов в контейнер
COPY . /app
WORKDIR /app

# Установка зависимостей из package.json
RUN npm install

# Запуск сборки с помощью npm run start
CMD ["npm", "run", "start"]