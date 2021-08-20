/* eslint-disable max-len */
import { colors } from 'styles/variables';
import imageCNC from 'images/cnc.png';
import imageRobot2 from 'images/robot2.png';
import imageRobot3 from 'images/robot3.png';
import imageSpecialist1 from 'images/specialist1.png';
import imageSpecialist2 from 'images/specialist2.png';
import imageSpecialist4 from 'images/specialist4.png';
import imageSpecialist5 from 'images/specialist5.png';
import imageSpecialist6 from 'images/specialist6.png';
import { AutomationIdTypes, Industries, Tag } from 'types/home-page';

export const industries: {
  [key: string]: {
    id: Industries;
    title: string;
  };
} = {
  MATERIALS_TRANSFER: {
    id: 'MATERIALS_TRANSFER',
    title: 'Перенос материалов',
  },
  EQUIPMENT_MAINTENANCE: {
    id: 'EQUIPMENT_MAINTENANCE',
    title: 'Обслуживание станков и машин ',
  },
  WELDING: {
    id: 'WELDING',
    title: 'Сварка и пайка',
  },
  CASTING: {
    id: 'CASTING',
    title: 'Литьё',
  },
  FORGING: {
    id: 'FORGING',
    title: 'Ковка и штамповка',
  },
  SPRAY_COATING: {
    id: 'SPRAY_COATING',
    title: 'Нанесение покрытий распылением',
  },
  PROCESSING_OPERATIONS: {
    id: 'PROCESSING_OPERATIONS',
    title: 'Различные операции обработки',
  },
  PARTS_ASSEMBLY: {
    id: 'PARTS_ASSEMBLY',
    title: 'Сборка механических и электронных деталей',
  },
  QUALITY_CONTROL: {
    id: 'QUALITY_CONTROL',
    title: 'Контроль качества продукции',
  },
};

const tags = {
  METAL_WORKING: {
    title: 'металлообработка',
    color: colors.miscellaneous.blue300,
    url: '/',
  },
  ELECTRONICS: {
    title: 'электроника',
    color: colors.miscellaneous.blue200,
    url: '/',
  },
  AUTO_INDUSTRY: {
    title: 'автопром',
    color: colors.miscellaneous.blue100,
    url: '/',
  },
  FOOD_INDUSTRY: {
    title: 'пищепром',
    color: colors.miscellaneous.gray100,
    url: '/',
  },
  LOGISTICS: {
    title: 'логистика',
    color: colors.miscellaneous.green300,
    url: '/',
  },
  PHARMACOLOGY_CHEMICAL: {
    title: 'фарма и химпром',
    color: colors.miscellaneous.green200,
    url: '/',
  },
  ELECTRICAL_ENGINEERING: {
    title: 'электротехника',
    color: colors.miscellaneous.green100,
    url: '/',
  },
  FURNITURE: {
    title: 'мебель',
    color: colors.miscellaneous.yellow100,
    url: '/',
  },
};

const materialsTransferTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
  tags.FOOD_INDUSTRY,
  tags.LOGISTICS,
  tags.PHARMACOLOGY_CHEMICAL,
  tags.ELECTRICAL_ENGINEERING,
  tags.FURNITURE,
];

const equipmentMaintenanceTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
  tags.FOOD_INDUSTRY,
  tags.PHARMACOLOGY_CHEMICAL,
  tags.ELECTRICAL_ENGINEERING,
  tags.FURNITURE,
];

const weldingTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
];

const castingTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
];

const forgingTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
  tags.FOOD_INDUSTRY,
  tags.LOGISTICS,
  tags.PHARMACOLOGY_CHEMICAL,
  tags.ELECTRICAL_ENGINEERING,
  tags.FURNITURE,
];

const sprayCoatingTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
  tags.FURNITURE,
];

const processingOperationsTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
  tags.FURNITURE,
];

const partsAssemblyTags = [
  tags.AUTO_INDUSTRY,
  tags.ELECTRONICS,
  tags.FURNITURE,
];

const qualityControlTags = [
  tags.METAL_WORKING,
  tags.ELECTRONICS,
  tags.AUTO_INDUSTRY,
  tags.FOOD_INDUSTRY,
  tags.LOGISTICS,
  tags.PHARMACOLOGY_CHEMICAL,
  tags.ELECTRICAL_ENGINEERING,
  tags.FURNITURE,
];

export const industriesBlocks: {
  title: string;
  text: string;
  mediaId: Industries;
  tags: Tag[];
}[] = [
    {
      title: industries.MATERIALS_TRANSFER.title,
      text: 'Перенос деталей и заготовок от станка к станку или с конвейера на конвейер, паллетирование, укладка деталей в тару, упаковка и т.п.',
      mediaId: industries.MATERIALS_TRANSFER.id,
      tags: materialsTransferTags,
    },
    {
      title: industries.EQUIPMENT_MAINTENANCE.title,
      text: 'Загрузка и разгрузка станков, удаление стружки, очистка рабочей зоны, удерживание обрабатываемой детали.',
      mediaId: industries.EQUIPMENT_MAINTENANCE.id,
      tags: equipmentMaintenanceTags,
    },
    {
      title: industries.WELDING.title,
      text: 'Полуавтоматическая дуговая, точечная и лазерная сварка, пайка.',
      mediaId: industries.WELDING.id,
      tags: weldingTags,
    },
    {
      title: industries.CASTING.title,
      text: 'Литьё под давлением, извлечение готовых изделий из пресс-форм.',
      mediaId: industries.CASTING.id,
      tags: castingTags,
    },
    {
      title: industries.FORGING.title,
      text: 'Закладка заготовок и их забор с укладкой в тару.',
      mediaId: industries.FORGING.id,
      tags: forgingTags,
    },
    {
      title: industries.SPRAY_COATING.title,
      text: '',
      mediaId: industries.SPRAY_COATING.id,
      tags: sprayCoatingTags,
    },
    {
      title: industries.PROCESSING_OPERATIONS.title,
      text: 'Сверление, фрезерование, клепание, гидроабразивная резка, обдирка, очистка, шлифовка, полировка.',
      mediaId: industries.PROCESSING_OPERATIONS.id,
      tags: processingOperationsTags,
    },
    {
      title: industries.PARTS_ASSEMBLY.title,
      text: 'Завинчивание, клепание, запрессовка.',
      mediaId: industries.PARTS_ASSEMBLY.id,
      tags: partsAssemblyTags,
    },
    {
      title: industries.QUALITY_CONTROL.title,
      text: 'С применением различных средств измерения (калибры, шаблоны, 3D сканеры, лазерные устройства)',
      mediaId: industries.QUALITY_CONTROL.id,
      tags: qualityControlTags,
    },
  ];

export const industryMedia: {
  [key: string]: {
    id: string;
    title: string;
  }[]
} = {
  [industries.MATERIALS_TRANSFER.id]: [
    {
      id: 'I7snXS6JIsA',
      title: 'Перенос материалов',
    },
    {
      id: '1Ob7PInf9UU',
      title: 'Перенос материалов 2',
    },
    {
      id: 'oKwjzIQOHNI',
      title: 'Перенос материалов 3',
    },
    {
      id: 'c9sdtfd2A4I',
      title: 'Перенос материалов 4',
    },
    {
      id: '9eVCQGU3bFI',
      title: 'Перенос материалов 5',
    },
  ],
  [industries.EQUIPMENT_MAINTENANCE.id]: [],
  [industries.WELDING.id]: [],
  [industries.CASTING.id]: [],
  [industries.FORGING.id]: [
    {
      id: 'T525oxPipR8',
      title: 'Ковка и штамповка',
    },
  ],
  [industries.SPRAY_COATING.id]: [
    {
      id: 'FcmplSJhQU4',
      title: 'Нанесение покрытий распылением',
    },
  ],
  [industries.PROCESSING_OPERATIONS.id]: [
    {
      id: '1sZabfUFtO4',
      title: 'Различные операции обработки',
    },
    {
      id: 'Wrdc1JuMqDs',
      title: 'Различные операции обработки 2',
    },
    {
      id: 'PRrLeh2jOWI',
      title: 'Различные операции обработки 3',
    },
    {
      id: '_hmgHdKdVbk',
      title: 'Различные операции обработки 4',
    },
  ],
  [industries.PARTS_ASSEMBLY.id]: [
    {
      id: 'kReWhyA7G2w',
      title: 'Сборка механических и электронных деталей',
    },
    {
      id: 'VkDy8C-T1xU',
      title: 'Сборка механических и электронных деталей',
    },
  ],
  [industries.QUALITY_CONTROL.id]: [],
};

export const automationItemIds: {
  [key: string]: AutomationIdTypes;
} = {
  CNC: 'CNC',
  INDUSTRIAL_ROBOT: 'INDUSTRIAL_ROBOT',
  COBOTS: 'COBOTS',
};

export const automationItems = [
  {
    id: automationItemIds.CNC,
    title: 'Автоматизация \nна системах с ЧПУ',
    text: 'Это системы, собранные из простых компонентов - электромеханических, пневматических или гидравлических устройств: пушеров, линейных модулей и т.п.',
    image: imageCNC,
  },
  {
    id: automationItemIds.INDUSTRIAL_ROBOT,
    title: 'Автоматизация \nна промышленных роботах',
    text: 'Промышленные роботы - это универсальные устройства с широким диапазоном возможностей: грузоподъёмностью от 2 до 3000 кг и большим радиусом рабочей зоны',
    image: imageRobot2,
  },
  {
    id: automationItemIds.COBOTS,
    title: 'Автоматизация \nна коллаборативных роботах',
    text: 'Коллаборативные роботы, они же коботы, специально созданы для взаимодействия с человеком. Это устройства небольшого размера, веса и малым потреблением энергии.',
    image: imageRobot3,
  },
];


interface AutomationInfo {
  title: string;
  textLeftColumn: string;
  textRightColumn: string;
  pros: { title: string; text?: string; }[];
  cons: { title: string; text?: string; }[];
}

export const automationCNCInfo: AutomationInfo = {
  title: 'Автоматизация \n на системах с ЧПУ',
  textLeftColumn: `
    Это системы, собранные из простых компонентов - электромеханических, пневматических
    или гидравлических устройств: пушеров, модулей линейных перемещений, поворотных блоков,
  `,
  textRightColumn: `
    конвейеров, стопперов и т.д., двух- и трехосевых манипуляторов, связанных системой
    датчиков и управляемых программируемым контроллером.
  `,
  pros: [
    {
      title: 'Самое доступное решение.',
      text: `
        Дорогостоящий робот не применяется, всё собирается на универсальных компонентах,
        добавляется кое-что разработанное конкретно под данную операцию. При вдумчивом
        подходе такое решение получается самым эргономичным и лаконичным, идеально
        выполняющим одну операцию. Рентабельно применять в массовом производстве с
        программой выпуска на длительный период.
      `,
    },
  ],
  cons: [
    {
      title: 'При малейшем изменении техпроцесса всё придётся переделывать.',
      text: `
        Решение не универсальное, обладает ограниченной функциональностью. Например,
        укладчик заготовок будет работать только с заготовками заданных параметров,
        и для другого будет не применим. Для новой продукции многое придётся делать
        заново, в том числе большинство механики.
      `,
    },
  ],
};

export const automationIndustrialRobotInfo: AutomationInfo = {
  title: 'Автоматизация \n на промышленных роботах',
  textLeftColumn: `Промышленные роботы - это универсальные устройства с широким диапазоном возможностей:
    грузоподъёмность от 2 до 3000 кг, радиус рабочей зоны от 500 до 4500мм, скорость
    работы до 40м/с. Применяются в промышленности, например, `,
  textRightColumn: `
    при сборке автомобилей, в сварочных работах, переносе деталей и заготовок от станка к станку или с конвейера
    на конвейер, штабелирование, работа с поддонами, укладка деталей в тару и т. п.
  `,
  pros: [
    {
      title: 'Поднимают до 3000 кг, перемещаются со скоростью до 40 м/с, радиус размаха до 4,5 метров.',
      text: undefined,
    },
    {
      title: 'Могут работать во вредных условиях, показатели защищенности до IP69.',
      text: undefined,
    },
    {
      title: 'Универсальны, легко перенастраиваются на другой тип работы. Могут менять инструменты.',
      text: undefined,
    },
    {
      title: `
        Могут оснащаться быстросъемными инструментами, что увеличивает количество операций на одном
        рабочем месте, например, сверловка отверстий, далее смена инструмента и полировка поверхности.
      `,
      text: undefined,
    },
  ],
  cons: [
    {
      title: 'Во время работы опасны для человека, поэтому требуют установки защитных ограждений.',
      text: undefined,
    },
    {
      title: 'Высокая стоимость, высокое энергопотребление.',
      text: undefined,
    },
    {
      title: 'Их монтаж сопряжен со значительными подготовительным работами:',
      text: `
        Подводка мощного электропитания, перестановка станков, в некоторых случаях бетонирование фундамента под тяжелого робота.
      `,
    },
  ],
};

export const automationCobotInfo: AutomationInfo = {
  title: 'Автоматизация \n на коллаборативных роботах',
  textLeftColumn: `
    Коллаборативные роботы, они же коботы, специально созданы для взаимодействия с человеком.
    Это устройства небольшого размера. Основное отличие их от промышленных роботов - то, что
    они останавливаются при прикасании к любому препятствию, например, к ладони - то есть
    не смогут навредить человеку или разрушить предметы, находящиеся в рабочей зоне.<br/>
    <br/>
    Они заметно дешевле промышленных роботов, обладают меньшей скоростью и грузоподъёмностью
    (до 16 кг, перемещаются со скоростью до 1 м/с) и питаются от обычной розетки. Применяются,
    как правило, в сервисных целях или в таких производственных операциях, где не требуется
    перемещение больших тяжестей.
  `,
  textRightColumn: `
    Коботы сертифицированы TUV NORD по стандарту ISO 10218-1, а функции безопасности
    оцениваются Cat.3 PL d согласно стандарту ISO 13849-1. Они могут работать вместе
    с людьми на производственной линии. Все это достигается благодаря настраиваемым
    функциям безопасности.<br/>
    <br/>
    Их можно легко программировать за счет 'показа' роботу необходимых движений
    оператором. Человек перемещает манипулятор руками по желательным траекториям
    в необходимые позиции. По окончании обучения робот оптимизирует траектории
    и будет готов повторять эти движения самостоятельно.<br/>
    <br/>
    Особенно хорошо они могут выполнять повторяющиеся действия, такие, как выбор,
    расстановка, упаковка, нанесение клея или пайка.
  `,
  pros: [
    {
      title: 'Могут работать во вредных условиях.',
      text: undefined,
    },
    {
      title: 'Могут работать совместно с человеком на одной производственной линии.',
      text: 'Безопасны для людей. Не требуют значительных выделенных площадей и огораживания периметра безопасности, невелики по размеру - это позволяет использовать роботов в помещении с людьми (хотя по российским нормативным актам они всё равно должны быть огорожены, как и промышленные роботы).',
    },
    {
      title: 'Не нужно менять технологический процесс.',
      text: 'Небольшие размеры и вес (до 40 кг) позволяют легко перемещать коботов между рабочими местами. Легко масштабируются.',
    },
    {
      title: 'Удобны для использования в малом и среднем бизнесе.',
      text: 'Их внедрение не требует больших инвестиций.',
    },
    {
      title: 'Не выдвигают особых требований к условиям эксплуатации.',
      text: 'Могут устанавливаться, например, на воздушных судах или в обычных квартирах. Не требуют специальных условий по электропитанию, достаточно простой розетки с заземлением. Могут монтироваться на обычный стол.',
    },
    {
      title: 'Сравнительно низкая цена.',
      text: 'Просты в развертывании и интеграции. Легко обучаются.',
    },
    {
      title: 'Универсальны, легко перенастраиваются на другой тип работы',
      text: 'Могут оснащаться быстросъемными инструментами, что увеличивает количество операций на одном рабочем месте. Например, сверловка отверстий, далее смена инструмента и полировка поверхности.',
    },
  ],
  cons: [
    {
      title: 'Не могут выполнять тяжёлую работу',
      text: 'Малый радиус размаха, до 1,3 метров. Малая скорость по сравнению с промышленными роботами.',
    },
  ],
};

export const specialists = [
  {
    name: 'Александр \nКоваленко',
    position: 'Директор',
    responsibilities: 'Вопросы стратегического взаимодействия',
    tel: '+7 (9299) 508-819',
    email: 'ak@fv.dev',
    image: imageSpecialist1,
  },
  {
    name: 'Иван \nКрашенинников',
    position: 'Менеджер отдела продаж',
    responsibilities: 'Договорные отношения',
    tel: '+7 (9272) 705-678',
    email: 'ik@fv.dev',
    image: imageSpecialist2,
  },
  {
    name: 'Леонид \nКашин',
    position: 'Data Scientist',
    responsibilities: 'Нейросети и машинное зрение',
    tel: '+7 (9299) 508-819',
    email: 'ak@fv.dev',
    image: imageSpecialist4,
  },
  {
    name: 'Евгений \nТихонов',
    position: 'Главный конструктор',
    responsibilities: 'Архитектура решений',
    tel: '+7 (9299) 508-819',
    email: 'ak@fv.dev',
    image: imageSpecialist5,
  },
  {
    name: 'Андрей \nСкок',
    position: 'зам. директора по АСУ',
    responsibilities: 'Внедрение, логистика',
    tel: '+7 (9299) 508-819',
    email: 'ak@fv.dev',
    image: imageSpecialist6,
  },
];
