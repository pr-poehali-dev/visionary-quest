export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">MICRO*GREEN</div>
        <nav>
          <a href="#">Рецепты</a>
          <a href="#">О нас</a>
          <a href="#">Продукты</a>
          <a href="#">Доставка</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЖИВИ
              <br />
              НА ПОЛНУЮ <span>СИЛУ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Ростки маша и нута — живые, только проросшие, прямо к твоему столу. Максимум питательных веществ, минимум
              усилий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать доставку
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть рецепты
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              background: `url("https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/07876d13-f44d-45bd-8292-5277de27e104.jpg") center center / cover`,
            }}
          >
            <div className="sticker">
              ЖИВЫЕ
              <br />
              РОСТКИ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #МИКРОЗЕЛЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ПОЛЬЗА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * МАШ И НУТ * СВЕЖИЕ КАЖДЫЙ ДЕНЬ * ДОСТАВКА ПО ГОРОДУ * ЖИВЫЕ ВИТАМИНЫ * РЕЦЕПТЫ В ПОДАРОК * МАШ И
            НУТ * СВЕЖИЕ КАЖДЫЙ ДЕНЬ * ДОСТАВКА ПО ГОРОДУ * ЖИВЫЕ ВИТАМИНЫ * РЕЦЕПТЫ В ПОДАРОК
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ ПРОДУКТЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все рецепты
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/a80f9850-de35-45f5-8154-5fd32d7dcbda.jpg"
                alt="Ростки маша"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ростки маша</h3>
                  <span className="price">290 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежные, хрустящие ростки маша. Богаты белком и витамином С. Идеальны в салаты, супы и азиатские
                  блюда.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Сытный
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/78a3a820-9dec-4e4f-b676-5cccac6c2278.jpg"
                alt="Ростки нута"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ростки нута</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Ореховый вкус, высокое содержание белка и клетчатки. Отличная добавка к хумусу, рагу и боулам.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Набор
              </span>
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/d1c47b63-8497-44c5-86f1-b8311d1247a4.jpg"
                alt="Микс ростков"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Микс: маш + нут</h3>
                  <span className="price">520 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Лучшее из двух миров — набор маша и нута с карточками рецептов в подарок.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ПРИРОДА В СТАКАНЕ.</h2>
            <p className="vibe-text">
              Мы проращиваем маш и нут в чистой воде без химии и добавок. Ростки готовы за 3–5 дней и доезжают до тебя
              живыми. Просто добавь в любое блюдо — и получи заряд витаминов, белка и хрусткого настроения.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @MICRO.GREEN
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/07876d13-f44d-45bd-8292-5277de27e104.jpg"
                alt="Маш и нут"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/a80f9850-de35-45f5-8154-5fd32d7dcbda.jpg"
                alt="Ростки маша"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/78a3a820-9dec-4e4f-b676-5cccac6c2278.jpg"
                alt="Ростки нута"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/d9c22819-48bd-400f-9947-4d193c8224ed/files/d1c47b63-8497-44c5-86f1-b8311d1247a4.jpg"
                alt="Микс ростков"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">MICRO*GREEN</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Живые ростки маша и нута с доставкой. Свежие, полезные, без химии. С любовью к зелёному.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Рецепты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Доставка</h4>
          <ul>
            <li>Пн–Пт: 9:00 – 19:00</li>
            <li>Сб: 10:00 – 17:00</li>
            <li>Вс: выходной</li>
            <li style={{ marginTop: "10px", fontWeight: 800 }}>Заказ до 12:00 = доставка сегодня</li>
          </ul>
        </div>
        <div>
          <p style={{ fontSize: "12px", color: "#999", marginTop: "40px", gridColumn: "1 / -1" }}>
            © 2024 MICRO*GREEN — Живые ростки с доставкой
          </p>
        </div>
      </footer>
    </>
  );
}
