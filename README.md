## Getting Started

Необходимо создать файл .env.local, в котором будет указан API-ключ для NASA API

```
NASA_API_KEY=your_key
```

Если на компьютере установлен Docker, можно собрать образ и запустит контейнер командами:

```bash
docker build -t armageddon .
docker run -p 3000:3000 armageddon
```

Если Docker не установлен на компьютер - проект можно запустит командами:

```bash
yarn build
yarn start
```

или

```bash
npm run build
npm run start
```

Ссылка для демонстрации: http://217.25.95.4:3000/
