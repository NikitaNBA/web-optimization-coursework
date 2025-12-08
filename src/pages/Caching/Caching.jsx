import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Caching.module.css'

const Caching = () => {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h2 className={styles.articleTitle}>Оптимизация кэширования</h2>

        <section className={styles.method}>
          <h3 className={styles.methodTitle}>1. Добавить срок действия файла или заголовок кэша (кеширование статики)</h3>
          <div className={styles.methodContent}>
            <p>Для изображений и файлов скриптов JS, часто используемых одним и тем же пользователем, время буферизации можно установить в Apache или nginx, например, установить срок действия в 24 часа, чтобы при повторном посещении страницы пользователем та же группа изображений или JS не загружалась снова, что сокращает количество HTTP-запросов, значительно повышает скорость доступа пользователя и снижает нагрузку на сервер.</p>
            
            <div className={styles.methodExample}>
              <h4>✅ Добавьте в конфиг Nginx:</h4>
              <pre><code>{`server {
    # ...

    location ~* \\.(jpg|jpeg|png|gif|webp|svg|woff2|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \\.(html|htm)$ {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}`}</code></pre>
            </div>

            <div className={styles.methodExample}>
              <h4>✅ Настройка в .htaccess (Apache):</h4>
              <pre><code>{`<IfModule mod_expires.c>
# Включаем модуль expires
ExpiresActive On

# Кэширование на 1 год (максимально для статики)
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
ExpiresByType font/woff2 "access plus 1 year"
ExpiresByType text/css "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"

# Отключаем кэш для HTML (чтобы изменения сразу применялись)
ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
# Заголовок Cache-Control для статики
<FilesMatch "\\.(jpg|jpeg|png|gif|webp|svg|woff2|css|js)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

# Отключаем кэш для HTML
<FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
</FilesMatch>
</IfModule>`}</code></pre>
            </div>
          </div>
        </section>

        <div className={styles.methodsGrid}>
          <section className={styles.methodCard}>
            <Link to="/loading">
              <img src="/icons/leftarrow.svg" alt="Предыдущая тема" />
              <h3>Загрузка</h3>
            </Link>
          </section>

          <section className={styles.methodCard}>
            <h3>Текущая тема: Кэширование</h3>
            <p>Добавить срок действия файла или заголовок кэша (кеширование статики). Добавление Nginx. Настройка в .htaccess (Apache).</p>
          </section>

          <section className={styles.methodCard}>
            <h3>Следующая тема: Сеть и сервер</h3>
            <p>CDN. Использование CDN (Content Delivery Network). Подключение CDN для jQuery, Bootstrap Включение сжатия Gzip на сервере</p>
          </section>

          <section className={styles.methodCard}>
            <Link to="/server">
              <img src="/icons/rightarrow.svg" alt="Следующая тема" />
              <h3>Сеть и сервер</h3>
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Caching