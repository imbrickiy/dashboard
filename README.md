# Dashboard

Десктопное приложение на базе [Next.js](https://nextjs.org) и [Tauri](https://tauri.app).

## Технологии

- **Frontend**: Next.js 16, React 19, TypeScript
- **Desktop**: Tauri 2.9
- **Стили**: Tailwind CSS 4
- **Шрифты**: Geist (оптимизированы через `next/font`)

## Требования

- Node.js 20+
- Rust (для сборки Tauri приложения)
- Системные зависимости Tauri: [установка](https://tauri.app/v1/guides/getting-started/prerequisites)

## Установка

```bash
npm install
```

## Разработка

### Запуск веб-версии

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Запуск Tauri приложения

```bash
npm run tauri:dev
```

Автоматически запустится Next.js dev сервер и Tauri окно.

## Сборка

### Сборка веб-версии

```bash
npm run build
```

Статические файлы будут в папке `out/`.

### Сборка Tauri приложения

```bash
npm run tauri:build
```

Собранное приложение будет в `src-tauri/target/release/`.

## Структура проекта

```
dashboard/
├── src/                    # Next.js приложение
│   ├── app/               # App Router страницы
│   └── components/        # React компоненты
│       └── window_controls.tsx  # Кастомные кнопки управления окном
├── src-tauri/             # Tauri конфигурация и Rust код
│   ├── src/              # Rust исходники
│   ├── tauri.conf.json   # Конфигурация Tauri
│   └── capabilities/     # Разрешения безопасности
├── public/               # Статические ресурсы
└── package.json
```

## Особенности

- **Кастомные кнопки управления окном**: Свернуть, развернуть, закрыть
- **Прозрачное окно**: `transparent: true` в конфигурации
- **Без декораций**: `decorations: false` для кастомного UI
- **Статический экспорт**: Next.js настроен на `output: 'export'`

## Скрипты

- `npm run dev` - Запуск Next.js dev сервера
- `npm run build` - Сборка Next.js приложения
- `npm run start` - Запуск production Next.js сервера
- `npm run lint` - Проверка кода ESLint
- `npm run tauri:dev` - Запуск Tauri в режиме разработки
- `npm run tauri:build` - Сборка Tauri приложения

## Конфигурация

### Next.js

- Конфигурация: `next.config.mjs`
- Статический экспорт для Tauri
- Поддержка Tauri dev host через переменную окружения

### Tauri

- Конфигурация: `src-tauri/tauri.conf.json`
- Размер окна: 1280x720
- Прозрачное окно без стандартных декораций
- Frontend dist: `../out`

## Документация

- [Next.js Documentation](https://nextjs.org/docs)
- [Tauri Documentation](https://tauri.app)
- [Learn Next.js](https://nextjs.org/learn)
