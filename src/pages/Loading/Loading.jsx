import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h2 className={styles.articleTitle}>Снижение количества HTTP-запросов</h2>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>1. Уменьшение количества HTTP-запросов</h3>
          <div className={styles.methodContent}>
            <p>При использовании CSS для управления стилями часто применяются фоновые изображения, каждое из которых создаёт отдельный HTTP-запрос. Для оптимизации можно:</p>
            <ul className={styles.methodList}>
              <li>Объединять несколько изображений в одно (CSS-спрайты)</li>
              <li>Использовать свойство background-position для отображения нужных частей изображения</li>
              <li>Применять встроенные SVG вместо растровых изображений</li>
            </ul>
          </div>
        </section>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>2. CSS и JavaScript вызываются извне</h3>
          <div className={styles.methodContent}>
            <p>Если содержимое CSS и JS относительно большое, старайтесь не писать на одну и ту же страницу. Лучше загружать их извне, поскольку браузер будет кэшировать файлы CSS и JS.</p>
            
            <div className={styles.methodExample}>
              <h4>❌ Плохо: встроенные стили и скрипты</h4>
              <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Пример сайта</title>
    <!-- Встроенный CSS (не кэшируется) -->
    <style>
        body { font-family: Arial; margin: 0; }
        .header { background: #f0f0f0; padding: 20px; }
    </style>
</head>
<body>
    <div class="header">Привет, мир!</div>

    <!-- Встроенный JS (не кэшируется) -->
    <script>
        console.log("Скрипт выполнен");
    </script>
</body>
</html>`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Правильно: внешние файлы</h4>
              <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Пример сайта</title>
    <!-- Подключение внешнего CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="header">Привет, мир!</div>

    <!-- Подключение внешнего JS (в конце body) -->
    <script src="script.js"></script>
</body>
</html>`}</code></pre>
            </div>
          </div>
        </section>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>3. Сжатие кода JavaScript и CSS</h3>
          <div className={styles.methodContent}>
            <p>Как правило, в файлах JS и CSS имеется большое количество пробелов, переносов строк и комментариев, что облегчает чтение. Если их можно сжать, они будут очень способствовать передаче по сети.</p>
            
            <div className={styles.methodExample}>
              <h4>❌ Исходный CSS (разработка)</h4>
              <pre><code>{`/* Главные стили страницы */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}

/* Стили для шапки */
.header {
    background: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
}

/* Стили кнопки */
.button {
    display: inline-block;
    padding: 10px 20px;
    background: #3498db;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}`}</code></pre>
              <p>~400 байт</p>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Сжатый CSS (продакшен)</h4>
              <pre><code>{`body{font-family:'Arial',sans-serif;margin:0;padding:0;background:#f5f5f5}.header{background:#2c3e50;color:white;padding:20px;text-align:center}.button{display:inline-block;padding:10px 20px;background:#3498db;color:white;border-radius:5px;text-decoration:none}`}</code></pre>
              <p>~250 байт</p>
            </div>
          </div>
        </section>

        <div className={styles.methodsGrid}>
          <section className={styles.methodCard}>
            <Link to="/">
              <img src="/icons/leftarrow.svg" alt="Предыдущая тема" />
              <h3>Главная</h3>
            </Link>
          </section>

          <section className={styles.methodCard}>
            <h3>Текущая тема: Загрузка</h3>
            <p>Уменьшение количества HTTP-запросов. CSS и JavaScript вызываются извне. Сжатие кода JavaScript и CSS.</p>
          </section>

          <section className={styles.methodCard}>
            <h3>Следующая тема: Кэширование</h3>
            <p>Добавить срок действия файла или заголовок кэша (кеширование статики). Добавление Nginx. Настройка в .htaccess (Apache).</p>
          </section>

          <section className={styles.methodCard}>
            <Link to="/caching">
              <img src="/icons/rightarrow.svg" alt="Следующая тема" />
              <h3>Кэширование</h3>
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Loading