# Выбор базовой ОС
FROM node:14

# Установка необходимых пакетов
RUN apt-get update && apt-get install -y curl

# Копирование исходных файлов в контейнер
COPY . /app
WORKDIR /app

# Установка зависимостей из package.json
RUN npm install

# Запуск сборки с помощью npm run start
CMD ["npm", "run", "start"]