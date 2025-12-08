import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Render.module.css'

const Render = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h2 className={styles.articleTitle}>Оптимизация загрузки и рендеринга страницы</h2>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>1. Определение формата CSS помещается в заголовок файла</h3>
          <div className={styles.methodContent}>
            <p>Эта настройка более благоприятна для ситуации, когда клиент — медленная сеть или содержимое веб-страницы относительно большое. Она может сохранять информацию о форматировании, пока веб-страница постепенно представляется, и не влияет на красоту веб-страницы.</p>
            
            <div className={styles.methodExample}>
              <h4>✅ Базовый пример (рекомендуемый способ)</h4>
              <pre><code>{`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Пример быстрой загрузки CSS</title>

    <!-- CSS подключается в <head> -->
    <link rel="stylesheet" href="styles.css">

    <!-- Если CSS небольшой, можно встроить критичные стили прямо в HTML -->
    <style>
        /* Критически важные стили (Above-the-Fold) */
        body { margin: 0; font-family: Arial, sans-serif; }
        .header { background: #2c3e50; color: white; padding: 1rem; }
    </style>
</head>
<body>
    <header class="header">
        <h1>Заголовок сайта</h1>
    </header>
    <main>
        <p>Основное содержимое страницы...</p>
    </main>

    <!-- JS подключается в конце <body> -->
    <script src="script.js"></script>
</body>
</html>`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>❌ Подключение CSS в <span className={styles.highlight}>&lt;body&gt;</span> или в конце страницы</h4>
              <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Пример плохой загрузки CSS</title>
</head>
<body>
    <!-- CSS подключен слишком поздно -->
    <div class="content">Текст без стилей... (покажется "голым")</div>
    
    <!-- Плохо: стили в конце <body> -->
    <link rel="stylesheet" href="styles.css">
</body>
</html>`}</code></pre>
            </div>
          </div>
        </section>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>2. Скрипт JavaScript в конце файла (неблокирующая загрузка)</h3>
          <div className={styles.methodContent}>
            <p>Многие скрипты JavaScript неэффективны для выполнения, или некоторые скрипты сторонних доменных имен неожиданно не загружаются. Если эти скрипты помещаются в начало страницы, скорость загрузки содержимого нашего собственного веб-сайта может замедлиться или даже не загружаться нормально. Поэтому обычно размещайте эти скрипты в конце файла веб-страницы.</p>
            
            <div className={styles.methodExample}>
              <h4>✅ Скрипты перед закрывающим <span className={styles.highlight}>&lt;/body&gt;</span> (рекомендуется)</h4>
              <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Оптимизированная загрузка</title>
</head>
<body>
    <!-- Весь контент загрузится ДО скриптов -->
    <div id="content">Страница отобразится мгновенно!</div>
    
    <!-- Скрипты в конце body -->
    <script src="app.js"></script>
</body>
</html>`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>❌ Скрипты в <span className={styles.highlight}>&lt;head&gt;</span> без атрибутов</h4>
              <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Плохой пример</title>
    <!-- ❌ Блокирует загрузку страницы -->
    <script src="app.js"></script>
</head>
<body>
    <!-- Контент появится только после загрузки app.js -->
    <div id="content">Загрузка...</div>
</body>
</html>`}</code></pre>
            </div>
          </div>
        </section>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>3. Избегайте использования скриптов CSS (CSSExpressions)</h3>
          <div className={styles.methodContent}>
            <p>Иногда для динамического изменения параметров CSS можно использовать cssexpression для его реализации. Однако это не стоит потерь и значительно увеличит нагрузку на браузер пользователя. Поэтому делать этого не рекомендуется.</p>
            
            <div className={styles.methodExample}>
              <h4>❌ Плохой пример: CSS Expression (так делать <span className={styles.warning}>НЕЛЬЗЯ</span>)</h4>
              <pre><code>{`/* ⚠️ Устаревший код (IE5-IE8) */
.box {
    width: expression(document.body.clientWidth > 800 ? "800px" : "auto");
    background-color: expression(new Date().getHours() < 12 ? "#f0f0f0" : "#333");
}`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Для динамических размеров/позиций — используйте CSS + JS</h4>
              <pre><code>{`<style>
    /* CSS-правила для разных состояний */
    .element { width: 100%; }
    @media (min-width: 1000px) {
        .element { width: 50%; }
    }
</style>

<!-- JS для сложной логики -->
<script>
    // Если нужно что-то сложнее медиа-запросов
    function updateWidth() {
        const element = document.querySelector('.element');
        element.style.width = window.innerWidth > 1000 ? '50%' : '100%';
    }
    window.addEventListener('resize', updateWidth);
    updateWidth(); <!-- Инициализация-->
</script>`}</code></pre>
            </div>
          </div>
        </section>

        <div className={styles.methodsGrid}>
          <section className={styles.methodCard}>
            <Link to="/server">
              <img src="/icons/leftarrow.svg" alt="Предыдущая тема" />
              <h3>Сеть и сервер</h3>
            </Link>
          </section>

          <section className={styles.methodCard}>
            <h3>Текущая тема: Рендеринг</h3>
            <p>Определение формата CSS помещается в заголовок файла. JavaScript в конце файла. Избегание CSSExpressions.</p>
          </section>

          <section className={styles.methodCard}>
            <h3>Следующая тема: Задержка</h3>
            <p>Избегание управления 301, 302 (минимизация редиректов). Цепочка редиректов (самая частая проблема). Использование канонических URL сразу.</p>
          </section>

          <section className={styles.methodCard}>
            <Link to="/delay">
              <img src="/icons/rightarrow.svg" alt="Следующая тема" />
              <h3>Задержка</h3>
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Render