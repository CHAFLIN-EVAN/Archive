export type ArchiveCategory =
  | 'chinese-history'
  | 'world-history'
  | 'period'
  | 'biography'
  | 'event';

export type FigureRelationType =
  | 'ally'
  | 'enemy'
  | 'subordinate'
  | 'superior'
  | 'rival'
  | 'colleague'
  | 'family';

export interface FigureRelation {
  targetName: string;
  type: FigureRelationType;
  label: string;
}

export interface TimelineEntry {
  year: string;
  event: string;
  significance?: string;
}

export interface KeyFigure {
  name: string;
  role: string;
  period?: string;
  description?: string;
  faction?: string;
  relations?: FigureRelation[];
}

export interface Archive {
  id: string;
  title: string;
  titleEn?: string;
  date: string;
  dateEnd?: string;
  description: string;
  content?: string;
  image?: string;
  references: string[];
  tags: string[];
  country: string;
  countryCode: string;
  category: ArchiveCategory;
  timeline?: TimelineEntry[];
  keyFigures?: KeyFigure[];
  analysis?: string;
  createdAt: string;
  updatedAt: string;
  isAIGenerated?: boolean;
}

export interface Country {
  id: string;
  name: string;
  nameEn: string;
  code: string;
  category: 'chinese-history' | 'world-history' | 'future';
  archiveCount: number;
  description?: string;
}

export interface ArchiveReport {
  title: string;
  subject: string;
  country: string;
  countryCode: string;
  category: ArchiveCategory;
  date: string;
  dateEnd?: string;
  timeline: TimelineEntry[];
  keyEvents: string[];
  keyFigures: KeyFigure[];
  analysis: string;
  references: string[];
  tags: string[];
  description: string;
}

export interface ArchiveSettings {
  apiKey: string;
  apiEndpoint: string;
  apiModel: string;
}
