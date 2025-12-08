import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Delay.module.css'

const Delay = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h2 className={styles.articleTitle}>Избегание избыточных перенаправлений и задержек</h2>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>1. Избегайте управления 301, 302 (минимизация редиректов)</h3>
          <div className={styles.methodContent}>
            <p>Улучшение скорости доступа к веб-сайту очень важно для пользовательского опыта, особенно при оптимизации интерфейса, ключом к которому являются сокращение HTTP-запросов и сокращение объема программ интерфейса.</p>
            
            <div className={styles.methodExample}>
              <h4>❌ Цепочка редиректов (самая частая проблема)</h4>
              <pre><code>{`# Плохой сценарий (2 лишних запроса):
http://site.com → 301 → https://www.site.com → 302 → https://www.site.com/home`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>❌ Редирект через JavaScript (еще хуже)</h4>
              <pre><code>{`<!-- Медленно и ненадежно -->
<script>
    if (window.location.href === 'http://site.com') {
        window.location.href = 'https://www.site.com';  // Полная перезагрузка
    }
</script>`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Используйте канонические URL сразу</h4>
              <pre><code>{`# Правильно: сразу отдаем контент без редиректов
server {
    listen 80;
    server_name site.com www.site.com;
    return 301 https://www.site.com$request_uri;  # ТОЛЬКО ОДИН редирект
}

server {
    listen 443 ssl;
    server_name site.com;  # Без www
    return 301 https://www.site.com$request_uri;  # Но лучше сразу настраивать SSL для www
}

server {
    listen 443 ssl;
    server_name www.site.com;  # Основной домен
    root /var/www/html;       # Прямая отдача контента
    # ...
}`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Заменяйте цепочки редиректов на <span className={styles.highlight}>&lt;link rel="canonical"&gt;</span></h4>
              <pre><code>{`<!-- Вместо редиректа со страницы \`/old\` на \`/new\` -->
<head>
    <link rel="canonical" href="https://site.com/new" />
</head>`}</code></pre>
            </div>
          </div>
        </section>

        <div className={styles.methodsGrid}>
          <section className={styles.methodCard}>
            <Link to="/render">
              <img src="/icons/leftarrow.svg" alt="Предыдущая тема" />
              <h3>Рендеринг</h3>
            </Link>
          </section>

          <section className={styles.methodCard}>
            <h3>Текущая тема: Задержка</h3>
            <p>Избегание управления 301, 302 (минимизация редиректов). Цепочка редиректов (самая частая проблема). Использование канонических URL сразу.</p>
          </section>

          <section className={styles.methodCard}>
            <h3>Следующая тема: Главная</h3>
            <p>Оптимизация скорости загрузки. Концепция времени загрузки веб-сайта. Метод оптимизации времени загрузки веб-страницы.</p>
          </section>

          <section className={styles.methodCard}>
            <Link to="/">
              <img src="/icons/rightarrow.svg" alt="Следующая тема" />
              <h3>Главная</h3>
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Delay