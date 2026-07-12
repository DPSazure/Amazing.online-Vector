document.addEventListener('DOMContentLoaded', () => {

  // ========== Тема ==========
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀ Светлая тема' : '🌙 Тёмная тема';

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀ Светлая тема' : '🌙 Тёмная тема';
  });

  // ========== Дисклеймер ==========
  const overlay = document.getElementById('disclaimer-overlay');
  const acceptBtn = document.getElementById('accept-disclaimer');
  if (localStorage.getItem('disclaimerAccepted')) {
    overlay.classList.add('hidden');
  }
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('disclaimerAccepted', '1');
    overlay.classList.add('hidden');
  });

  // ========== Бургер-меню ==========
  const burgerBtn = document.getElementById('burger-menu');
  const mainNav = document.getElementById('main-nav');
  burgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // ========== Навигация ==========
  const mainContent = document.getElementById('main-content');
  const navLinks = document.querySelectorAll('nav a');

  const ordersHTML = `
    <div class="section-title">Приказы и официальные документы</div>

    <div class="order-full">
      <div class="order-header">Приказ №1 — Устав ЧВК «Вектор»</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <h3>Глава 1. Общие положения</h3>
        <p>ЧВК «Вектор» — негосударственная военизированная организация, созданная для выполнения специальных задач, обеспечения безопасности и охраны. Деятельность регламентируется настоящим Уставом, Конституцией и федеральными законами.</p>
        <h3>Глава 2. Структура и управление</h3>
        <p>Высший орган — Генеральный штаб НВО (Генеральный совет) в составе трёх членов. Исполнительный директор осуществляет повседневное руководство. В состав ЧВК входят подразделения: 1-й Штурмовой отряд, 2-я Группа тактико-медицинской обороны, ОСпН «Барс», 1-й Взвод морской пехоты, Оперативное реагирование по делам береговой охраны, Разведывательное управление, Следственный комитет, ОБР.</p>
        <h3>Глава 3. Права и обязанности</h3>
        <p>Каждый военнослужащий обязан соблюдать Конституцию, законы, устав, приказы командиров. Имеет право применять оружие и специальные средства в строгом соответствии с Приказом №3.</p>
        <h3>Глава 4. Дисциплинарная ответственность</h3>
        <p>За нарушения предусмотрены взыскания: устное предупреждение, выговор, строгий выговор, понижение в звании/должности, увольнение. Порядок наложения определён в Приказе №2.</p>
        <p><em>Полный текст Устава доступен для личного состава в канцелярии Генштаба.</em></p>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №2 — О внутреннем распорядке и дисциплине</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <h3>1. Распорядок дня</h3>
        <ul>
          <li>Будни: рабочее время 10:00–21:00, обед 13:00–14:00.</li>
          <li>Выходные и праздничные дни: 10:00–19:00, обед 13:00–14:00.</li>
          <li>Отсутствие на рабочем месте свыше 15 минут без уважительной причины считается прогулом и влечёт дисциплинарное взыскание.</li>
        </ul>
        <h3>2. Правила поведения</h3>
        <ul>
          <li>Запрещено употребление спиртных напитков, наркотических средств, появление в состоянии опьянения.</li>
          <li>Курение разрешено только в специально отведённых местах.</li>
          <li>Запрещены азартные игры, драки, сквернословие, порча имущества.</li>
        </ul>
        <h3>3. Форма одежды</h3>
        <p>Для рядового и младшего состава – установленная униформа (бирка 160), для агентов – бирка 259. Начальствующий состав носит деловой костюм. Обязательно наличие шеврона подразделения и медицинской маски на время смены.</p>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №3 — О применении оружия и специальных средств</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <h3>Общие условия</h3>
        <p>Применение физической силы, специальных средств и огнестрельного оружия допускается только когда иными способами пресечь правонарушение невозможно. Перед применением делается предупредительный окрик, за исключением внезапного нападения.</p>
        <h3>Основания для применения оружия</h3>
        <ol>
          <li>Защита себя или иных лиц от посягательства, угрожающего жизни или здоровью.</li>
          <li>Отражение вооружённого нападения на охраняемый объект или патруль.</li>
          <li>Задержание лица, оказывающего вооружённое сопротивление, или пытающегося скрыться после совершения тяжкого/особо тяжкого преступления.</li>
          <li>Остановка транспортного средства путём его повреждения, когда водитель создаёт реальную опасность для жизни людей и не подчиняется неоднократным требованиям остановиться.</li>
        </ol>
        <h3>Запреты</h3>
        <p>Не допускается применение оружия в отношении женщин, лиц с явными признаками инвалидности и несовершеннолетних (кроме случаев вооружённого нападения с их стороны).</p>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №4 — О порядке несения караульной службы и охраны объектов</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ul>
          <li>Часовой обязан бдительно охранять пост, не покидать его без разрешения.</li>
          <li>Останавливать всех приближающихся окриком «Стой, назад». При неподчинении – предупредительный выстрел вверх, затем огонь на поражение только в случае реальной угрозы жизни или попытки прорыва.</li>
          <li>Контрольно-пропускной пункт: проверка документов у всех входящих, досмотр транспорта и грузов.</li>
        </ul>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №5 — О мобилизационной готовности и действиях по тревоге</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ol>
          <li>Немедленно прибыть к месту сбора своего подразделения в полной экипировке.</li>
          <li>Получить табельное оружие и боекомплект под роспись.</li>
          <li>Занять позиции согласно боевому расчёту и ожидать дальнейших указаний командира.</li>
          <li>Группам быстрого реагирования быть готовыми к выезду через 15 минут.</li>
        </ol>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №6 — О взаимодействии с гражданскими структурами и государственными органами</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ul>
          <li>Любое взаимодействие с МВД, ФСБ, прокуратурой, правительством области осуществляется только с санкции Генштаба или Исполнительного директора.</li>
          <li>Запрещено самостоятельно инициировать контакты, передавать служебную информацию.</li>
          <li>При совместных операциях старший от ЧВК обязан согласовать план действий и зоны ответственности, а по завершении предоставить письменный отчёт.</li>
        </ul>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №7 — О противодействии диверсионной деятельности и шпионажу</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ul>
          <li>Личный состав обязан проявлять бдительность, обращать внимание на попытки несанкционированной фото/видеосъёмки, наблюдения, вербовки.</li>
          <li>Обо всех подозрительных лицах и инцидентах немедленно докладывать в Следственный комитет или Разведуправление.</li>
          <li>Категорически запрещается разглашать информацию о дислокации, численности, вооружении и планах подразделений.</li>
        </ul>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №8 — О медицинском обеспечении</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ul>
          <li>Каждый военнослужащий обязан иметь индивидуальную аптечку.</li>
          <li>Первая помощь раненым оказывается силами 2-й Группы тактико-медицинской обороны.</li>
          <li>На территории части работает медицинский пункт с круглосуточным дежурством фельдшера.</li>
        </ul>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №9 — О связи и радиодисциплине</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ul>
          <li>Радиообмен ведётся строго по служебной необходимости.</li>
          <li>Формат вызова: «[Позывной подразделения] вызывает [Позывной абонента]».</li>
          <li>Запрещены частные разговоры, передача конфиденциальной информации открытым текстом.</li>
        </ul>
      </div>
    </div>

    <div class="order-full">
      <div class="order-header">Приказ №10 — О материально-техническом снабжении</div>
      <div class="order-content hidden">
        <p><strong>Статус:</strong> открытый | <strong>Дата введения:</strong> 10.05.2026</p>
        <ul>
          <li>Всё имущество подлежит строгому учёту. Инвентаризация проводится ежемесячно.</li>
          <li>Выдача оружия и боеприпасов — только под роспись в журнале.</li>
          <li>За утрату, порчу или недостачу виновные несут материальную ответственность.</li>
        </ul>
      </div>
    </div>

    <p style="margin-top:1rem; color:var(--text-light);">Секретные приказы хранятся в Генштабе и до личного состава доводятся отдельными распоряжениями.</p>
  `;

  const pages = {
    home: `
      <div class="hero">
        <h1>☠ ЧВК «ВЕКТОР»</h1>
        <p>Нижегородский военный округ. Обеспечение безопасности и специальные операции.</p>
      </div>
      <div style="background: var(--bg-panel); border: 1px solid var(--border); border-radius: 6px; padding: 1.5rem; margin-top: 2rem; text-align: center;">
        <h3 style="color: var(--accent); margin-bottom: 0.5rem;">📍 Главный офис / База</h3>
        <p style="color: var(--text); font-size: 1.1rem; margin: 0.3rem 0;">г. Лыткарино, Нижегородская область</p>
        <p style="color: var(--text-light); font-size: 0.9rem; margin: 0.3rem 0;">GPS-координаты: <strong style="color: var(--accent);">5 - 5</strong></p>
        <p style="color: var(--text-light); font-size: 0.8rem; margin-top: 0.5rem;">Все встречи и переговоры — строго по предварительному согласованию.</p>
      </div>
      <div class="section-title">Ключевые подразделения</div>
      <div class="grid-units">
        <div class="unit-card"><h3>🌊 1-й Взвод морской пехоты</h3><p>Амфибийные операции, десантирование с воды, охрана портов и прибрежной инфраструктуры. Взвод оснащён плавсредствами и специальным вооружением для ведения боя на береговой линии.</p></div>
        <div class="unit-card"><h3>🛡 Оперативное реагирование по делам береговой охраны</h3><p>Патрулирование прибрежной зоны, предотвращение контрабанды, быстрое реагирование на морские угрозы. Подразделение тесно взаимодействует с флотом и авиацией для контроля территориальных вод.</p></div>
        <div class="unit-card"><h3>✈️ Воздушно-космические силы (ВКС)</h3><p>Обеспечение господства в воздухе, авиационная разведка, нанесение точечных ударов, поддержка наземных и морских операций. Оснащены современной авиатехникой и средствами противовоздушной обороны.</p></div>
      </div>
      <div class="section-title">Командование и управление</div>
      <div class="grid-units">
        <div class="unit-card"><h3>🏛 Генеральный штаб НВО <span class="badge">Генсовет</span></h3><p>Высший орган управления ЧВК. Разработка стратегических планов, координация всех подразделений, принятие решений о проведении операций. Состоит из трёх членов Генерального совета.</p></div>
      </div>
    `,
    structure: `
      <div class="section-title">Структура ЧВК «Вектор»</div>
      <div class="grid-units">
        <div class="unit-card"><h3>🌊 1-й Взвод морской пехоты</h3><p>Амфибийные подразделения, способные высаживаться с воды. Охрана портовой инфраструктуры, десантные операции, патрулирование водных рубежей. Вооружены специальными плавсредствами и оружием для морского боя.</p></div>
        <div class="unit-card"><h3>🛡 Оперативное реагирование по делам береговой охраны</h3><p>Контроль прибрежной зоны: выявление контрабандистов, предотвращение несанкционированного проникновения, быстрое реагирование на морские угрозы. Используют быстроходные катера и современные системы наблюдения.</p></div>
        <div class="unit-card"><h3>✈️ Воздушно-космические силы (ВКС)</h3><p>Авиация и силы ПВО ЧВК. Обеспечение воздушного прикрытия, нанесение ударов по наземным и надводным целям, транспортные операции, воздушная разведка. В состав входят истребители, штурмовики и вертолёты.</p></div>
        <div class="unit-card"><h3>🏛 Генеральный штаб НВО <span class="badge">Генсовет</span></h3><p>Стратегическое командование, состоящее из трёх членов Генерального совета. Разработка оперативных планов, управление ресурсами, координация всех подразделений.</p></div>
      </div>
    `,
    orders: ordersHTML,
    contact: `
      <div class="section-title">Связь с командованием</div>
      <div class="contact-wrapper">
        <iframe src="https://forms.yandex.ru/u/6a32ce6890290216f82c8b86?iframe=1" frameborder="0" name="ya-form-6a32ce6890290216f82c8b86" width="650" height="500"></iframe>
      </div>
      <p style="text-align:center; margin-top:1rem; color:var(--text-light);">Для обращений используйте форму выше. Ответ поступит в течение 48 часов.</p>
    `
  };

  function initAccordions() {
    const headers = document.querySelectorAll('.order-header');
    headers.forEach(header => {
      header.addEventListener('click', function() {
        this.classList.toggle('open');
        const content = this.nextElementSibling;
        content.classList.toggle('hidden');
      });
    });
  }

  function navigate(page) {
    mainContent.innerHTML = pages[page] || pages.home;
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === page) link.classList.add('active');
    });
    if (page === 'orders') {
      initAccordions();
    }
    window.scrollTo(0,0);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  navigate('home');

  // ========== Авторизация ==========
  const authModal = document.getElementById('auth-modal');
  const loginForm = document.getElementById('auth-login-form');
  const registerForm = document.getElementById('auth-register-form');
  const profileDiv = document.getElementById('auth-profile');
  const openLoginBtn = document.getElementById('open-login');
  const closeModalBtn = document.querySelector('.close-modal');

  openLoginBtn.addEventListener('click', () => {
    updateAuthModal();
    authModal.classList.remove('hidden');
  });
  closeModalBtn.addEventListener('click', () => authModal.classList.add('hidden'));
  window.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.classList.add('hidden');
  });

  document.getElementById('switch-to-register').addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    profileDiv.classList.add('hidden');
  });
  document.getElementById('switch-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    profileDiv.classList.add('hidden');
  });

  document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('pmc_users') || '{}');
    if (users[username] && users[username].password === password) {
      localStorage.setItem('current_user', username);
      updateAuthModal();
      openLoginBtn.textContent = 'Личный кабинет (' + username + ')';
    } else {
      alert('Неверный логин или пароль');
    }
  });

  document.getElementById('register-btn').addEventListener('click', () => {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const callsign = document.getElementById('reg-callsign').value.trim();
    if (!username || !password) { alert('Логин и пароль обязательны'); return; }
    const users = JSON.parse(localStorage.getItem('pmc_users') || '{}');
    if (users[username]) { alert('Пользователь уже существует'); return; }
    users[username] = { password, callsign };
    localStorage.setItem('pmc_users', JSON.stringify(users));
    localStorage.setItem('current_user', username);
    updateAuthModal();
    openLoginBtn.textContent = 'Личный кабинет (' + username + ')';
    alert('Регистрация успешна!');
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('current_user');
    updateAuthModal();
    openLoginBtn.textContent = 'Личный кабинет';
  });

  function updateAuthModal() {
    const currentUser = localStorage.getItem('current_user');
    if (currentUser) {
      const users = JSON.parse(localStorage.getItem('pmc_users') || '{}');
      const user = users[currentUser];
      loginForm.classList.add('hidden');
      registerForm.classList.add('hidden');
      profileDiv.classList.remove('hidden');
      document.getElementById('profile-login').textContent = currentUser;
      document.getElementById('profile-callsign').textContent = user.callsign || 'не указан';
    } else {
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      profileDiv.classList.add('hidden');
    }
  }
  const savedUser = localStorage.getItem('current_user');
  if (savedUser) {
    openLoginBtn.textContent = 'Личный кабинет (' + savedUser + ')';
  }

  // ========== Эффект вспышки ==========
  document.addEventListener('click', function(e) {
    const flash = document.createElement('div');
    flash.className = 'flash';
    flash.style.left = e.clientX + 'px';
    flash.style.top = e.clientY + 'px';
    const size = 40 + Math.random() * 30;
    flash.style.width = size + 'px';
    flash.style.height = size + 'px';
    document.body.appendChild(flash);
    flash.addEventListener('animationend', () => {
      flash.remove();
    });
  });
});
