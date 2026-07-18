import { Language } from '../portfolio-data';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import { Translation } from './translation';

export const translations: Record<Language, Translation> = { en, es, pt };
