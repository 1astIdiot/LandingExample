export type Industries =
  'MATERIALS_TRANSFER' |
  'EQUIPMENT_MAINTENANCE' |
  'WELDING' |
  'CASTING' |
  'FORGING' |
  'SPRAY_COATING' |
  'PROCESSING_OPERATIONS' |
  'PARTS_ASSEMBLY' |
  'QUALITY_CONTROL';

export interface Tag {
  title: string;
  color: string;
  url: string;
}

export type AutomationIdTypes =
  'CNC' |
  'INDUSTRIAL_ROBOT' |
  'COBOTS';
