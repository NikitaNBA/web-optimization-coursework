import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Server.module.css'

const Server = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h2 className={styles.articleTitle}>Оптимизация сети и сервера</h2>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>1. Использование CDN (Content Delivery Network)</h3>
          <div className={styles.methodContent}>
            <p>CDN — это сеть серверов, которые кэшируют статику (CSS, JS, изображения) и раздают их пользователям из ближайшего дата-центра. Распространяйте изображения и видео в местах, куда может добраться сеть CDN, чтобы пользователи могли загружать эти файлы поблизости при посещении, чтобы достичь цели ускорения сети и в то же время снизить нагрузку на ваш собственный веб-сайт.</p>
            
            <div className={styles.methodExample}>
              <h4>✅ Подключение CDN для jQuery, Bootstrap</h4>
              <pre><code>{`<!-- Bootstrap CSS (через CDN jsDelivr) -->
<link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-..." 
    crossorigin="anonymous"
>

<!-- jQuery (через CDN Google) -->
<script 
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha384-..."
    crossorigin="anonymous"
></script>`}</code></pre>
            </div>
          </div>
        </section>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>2. Включение сжатия Gzip на сервере</h3>
          <div className={styles.methodContent}>
            <p>Передаваемый контент сжимается, а затем передается клиенту и распаковывается. Таким образом, объем данных, передаваемых по сети, будет значительно сокращен. Обычно Apache и nginx на сервере могут напрямую включить эту настройку или напрямую задать заголовок файла передачи с точки зрения кода, добавить настройку gzip или напрямую задать ее с устройства балансировки нагрузки. Однако следует отметить, что эта настройка немного увеличит нагрузку на сервер.</p>
            
            <div className={styles.methodExample}>
              <h4>✅ Настройка Gzip в Apache (.htaccess)</h4>
              <pre><code>{`<IfModule mod_deflate.c>
# Включаем сжатие для текстовых файлов
AddOutputFilterByType DEFLATE text/html text/plain text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/javascript application/x-javascript
AddOutputFilterByType DEFLATE application/json

# Исключаем проблемы с некоторыми браузерами
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
</IfModule>`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Настройка Gzip в Nginx (nginx.conf)</h4>
              <pre><code>{`server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    gzip_min_length 1024;  # Минимальный размер для сжатия (1 КБ)
    gzip_comp_level 5;     # Уровень сжатия (1–9, 6–оптимально)
    gzip_vary on;          # Поддержка Vary: Accept-Encoding
}`}</code></pre>
            </div>
          </div>
        </section>

        <div className={styles.methodsGrid}>
          <section className={styles.methodCard}>
            <Link to="/caching">
              <img src="/icons/leftarrow.svg" alt="Предыдущая тема" />
              <h3>Кэширование</h3>
            </Link>
          </section>

          <section className={styles.methodCard}>
            <h3>Текущая тема: Сеть и сервер</h3>
            <p>CDN. Использование CDN (Content Delivery Network). Подключение CDN для jQuery, Bootstrap Включение сжатия Gzip на сервере</p>
          </section>

          <section className={styles.methodCard}>
            <h3>Следующая тема: Рендеринг</h3>
            <p>Определение формата CSS помещается в заголовок файла. JavaScript в конце файла. Избегание CSSExpressions.</p>
          </section>

          <section className={styles.methodCard}>
            <Link to="/render">
              <img src="/icons/rightarrow.svg" alt="Следующая тема" />
              <h3>Рендеринг</h3>
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Server