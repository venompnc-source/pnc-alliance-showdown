export type Language = "en" | "it" | "pt" | "de" | "ru" | "uk";

export interface Translations {
  header: {
    title: string;
    subtitle: string;
    dashboard: string;
  };
  welcome: {
    badge: string;
    title: string;
    subtitle: string;
  };
  filters: {
    search: string;
    all: string;
    personal: string;
    sort: string;
    quest: string;
    type: string;
    points: string;
    time: string;
  };
  stats: {
    showing: string;
    sorting: string;
    asc: string;
    desc: string;
  };
  card: {
    requirement: string;
    points: string;
    time: string;
    noTime: string;
  };
  modal: {
    reward: string;
    timeLimit: string;
    tip: string;
    close: string;
    noTip: string;
  };
  empty: {
    title: string;
    subtitle: string;
  };
  types: Record<string, string>;
}

export const translations: Record<Language, Translations> = {
  en: {
    header: { title: "Alliance Showdown", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Quest Optimization Engine v1.0", title: "Quest Data Dashboard", subtitle: "Visualize, sort, and filter every alliance showdown quest with ease. Maximize your rewards and efficiency with real-time data analysis." },
    filters: { search: "Search quests...", all: "All Types", personal: "Personal (240)", sort: "Sort By", quest: "Quest Name", type: "Quest Type", points: "Points", time: "Time" },
    stats: { showing: "Showing {count} Quests", sorting: "Sorting by {sortBy} ({order})", asc: "asc", desc: "desc" },
    card: { requirement: "Requirement", points: "Points", time: "Time", noTime: "No time limit" },
    modal: { reward: "Reward", timeLimit: "Time Limit", tip: "Helpful Tip", close: "Got it", noTip: "No specific tips available for this quest." },
    empty: { title: "No quests found", subtitle: "Try adjusting your filters or search query." },
    types: { arena: "Arena", market: "Black Market", alliance: "Alliance", ap: "Consume AP", diamond: "Diamond", stamina: "Stamina", gather: "Gathering", gear: "Gear", hero: "Hero Shards", heal: "Healing", help: "Help Allies", building: "Building Power", research: "Research Power", troop: "Troop Power", rally: "Monster Dens", speedup: "Speedups", transport: "Transport", packs: "Buy Packs", other: "Other" }
  },
  it: {
    header: { title: "Sfida tra Alleanze", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Motore di Ottimizzazione Missioni v1.0", title: "Dashboard Dati Missioni", subtitle: "Visualizza, ordina e filtra ogni missione della sfida tra alleanze con facilità. Massimizza le tue ricompense." },
    filters: { search: "Cerca missioni...", all: "Tutti i Tipi", personal: "Personali (240)", sort: "Ordina per", quest: "Nome Missione", type: "Tipo Missione", points: "Punti", time: "Tempo" },
    stats: { showing: "Mostrando {count} Missioni", sorting: "Ordinamento per {sortBy} ({order})", asc: "cresc", desc: "decresc" },
    card: { requirement: "Requisito", points: "Punti", time: "Tempo", noTime: "Nessun limite" },
    modal: { reward: "Ricompensa", timeLimit: "Limite di Tempo", tip: "Consiglio Utile", close: "Capito", noTip: "Nessun consiglio specifico disponibile." },
    empty: { title: "Nessuna missione trovata", subtitle: "Prova a modificare i filtri o la ricerca." },
    types: { arena: "Arena", market: "Mercato Nero", alliance: "Alleanza", ap: "Consuma PA", diamond: "Diamante", stamina: "Energia", gather: "Raccolta", gear: "Equipaggiamento", hero: "Frammenti Eroe", heal: "Cura", help: "Aiuto Alleati", building: "Potere Edifici", research: "Potere Ricerca", troop: "Potere Truppe", rally: "Covi di Mostri", speedup: "Accelerazioni", transport: "Trasporto", packs: "Pacchetti", other: "Altro" }
  },
  pt: {
    header: { title: "Confronto de Alianças", subtitle: "Puzzles & Chaos", dashboard: "Painel" },
    welcome: { badge: "Motor de Otimização de Missões v1.0", title: "Painel de Dados de Missões", subtitle: "Visualize, ordene e filtre todas as missões do confronto de alianças com facilidade." },
    filters: { search: "Pesquisar missões...", all: "Todos os Tipos", personal: "Pessoais (240)", sort: "Ordenar por", quest: "Nome da Missão", type: "Tipo de Missão", points: "Pontos", time: "Tempo" },
    stats: { showing: "Mostrando {count} Missões", sorting: "Ordenando por {sortBy} ({order})", asc: "asc", desc: "desc" },
    card: { requirement: "Requisito", points: "Pontos", time: "Tempo", noTime: "Sem limite" },
    modal: { reward: "Recompensa", timeLimit: "Limite de Tempo", tip: "Dica Útil", close: "Entendido", noTip: "Nenhuma dica específica disponível." },
    empty: { title: "Nenhuma missão encontrada", subtitle: "Tente ajustar seus filtros ou pesquisa." },
    types: { arena: "Arena", market: "Mercado Negro", alliance: "Aliança", ap: "Consumir PA", diamond: "Diamante", stamina: "Estamina", gather: "Coleta", gear: "Equipamento", hero: "Fragmentos de Herói", heal: "Cura", help: "Ajuda de Aliados", building: "Poder de Construção", research: "Poder de Pesquisa", troop: "Poder de Tropas", rally: "Covis de Monstros", speedup: "Acelerações", transport: "Transporte", packs: "Pacotes", other: "Outro" }
  },
  de: {
    header: { title: "Allianz-Showdown", subtitle: "Puzzles & Chaos", dashboard: "Dashboard" },
    welcome: { badge: "Quest-Optimierungs-Engine v1.0", title: "Quest-Daten-Dashboard", subtitle: "Visualisieren, sortieren und filtern Sie jede Allianz-Showdown-Quest mit Leichtigkeit." },
    filters: { search: "Quests suchen...", all: "Alle Typen", personal: "Persönlich (240)", sort: "Sortieren nach", quest: "Quest-Name", type: "Quest-Typ", points: "Punkte", time: "Zeit" },
    stats: { showing: "Zeige {count} Quests", sorting: "Sortiert nach {sortBy} ({order})", asc: "aufst", desc: "abst" },
    card: { requirement: "Anforderung", points: "Punkte", time: "Zeit", noTime: "Kein Zeitlimit" },
    modal: { reward: "Belohnung", timeLimit: "Zeitlimit", tip: "Hilfreicher Tipp", close: "Verstanden", noTip: "Keine spezifischen Tipps verfügbar." },
    empty: { title: "Keine Quests gefunden", subtitle: "Versuchen Sie, Ihre Filter oder Suche anzupassen." },
    types: { arena: "Arena", market: "Schwarzmarkt", alliance: "Allianz", ap: "AP verbrauchen", diamond: "Diamant", stamina: "Ausdauer", gather: "Sammeln", gear: "Ausrüstung", hero: "Heldenscherben", heal: "Heilung", help: "Allianz-Hilfe", building: "Gebäudekraft", research: "Forschungskraft", troop: "Truppenkraft", rally: "Monsterhöhlen", speedup: "Beschleuniger", transport: "Transport", packs: "Pakete", other: "Andere" }
  },
  ru: {
    header: { title: "Противостояние Альянсов", subtitle: "Puzzles & Chaos", dashboard: "Панель" },
    welcome: { badge: "Движок оптимизации квестов v1.0", title: "Панель данных квестов", subtitle: "Визуализируйте, сортируйте и фильтруйте квесты противостояния альянсов." },
    filters: { search: "Поиск квестов...", all: "Все типы", personal: "Личные (240)", sort: "Сортировка", quest: "Название", type: "Тип", points: "Очки", time: "Время" },
    stats: { showing: "Показано {count} квестов", sorting: "Сортировка по {sortBy} ({order})", asc: "возр", desc: "убыв" },
    card: { requirement: "Требование", points: "Очки", time: "Время", noTime: "Без лимита" },
    modal: { reward: "Награда", timeLimit: "Лимит времени", tip: "Полезный совет", close: "Понятно", noTip: "Специфических советов нет." },
    empty: { title: "Квесты не найдены", subtitle: "Попробуйте изменить фильтры." },
    types: { arena: "Арена", market: "Рынок", alliance: "Альянс", ap: "Очки действия", diamond: "Алмазы", stamina: "Энергия", gather: "Сбор", gear: "Снаряжение", hero: "Герои", heal: "Лечение", help: "Помощь", building: "Стройка", research: "Наука", troop: "Войска", rally: "Логова", speedup: "Ускорители", transport: "Транспорт", packs: "Наборы", other: "Другое" }
  },
  uk: {
    header: { title: "Протистояння Альянсів", subtitle: "Puzzles & Chaos", dashboard: "Панель" },
    welcome: { badge: "Двигун оптимізації квестів v1.0", title: "Панель даних квестів", subtitle: "Візуалізуйте, сортуйте та фільтруйте квести протистояння альянсів." },
    filters: { search: "Пошук квестів...", all: "Всі типи", personal: "Особисті (240)", sort: "Сортування", quest: "Назва", type: "Тип", points: "Очки", time: "Час" },
    stats: { showing: "Показано {count} квестів", sorting: "Сортування за {sortBy} ({order})", asc: "зрост", desc: "спад" },
    card: { requirement: "Вимога", points: "Очки", time: "Час", noTime: "Без ліміту" },
    modal: { reward: "Нагорода", timeLimit: "Ліміт часу", tip: "Корисна порада", close: "Зрозуміло", noTip: "Специфічних порад немає." },
    empty: { title: "Квести не знайдено", subtitle: "Спробуйте змінити фільтри." },
    types: { arena: "Арена", market: "Ринок", alliance: "Альянс", ap: "Очки дії", diamond: "Алмази", stamina: "Енергія", gather: "Збір", gear: "Спорядження", hero: "Герої", heal: "Лікування", help: "Допомога", building: "Будівництво", research: "Наука", troop: "Війська", rally: "Лігва", speedup: "Прискорювачі", transport: "Транспорт", packs: "Набори", other: "Інше" }
  }
};
