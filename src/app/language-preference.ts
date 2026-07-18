import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Language } from './portfolio-data';

export const LANGUAGE_STORAGE_KEY = 'portfolio.language';

type StorageReader = Pick<Storage, 'getItem'>;
type StorageWriter = Pick<Storage, 'setItem'>;

export function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'es' || value === 'pt';
}

export function readStoredLanguage(storage: StorageReader | null): Language | null {
  try {
    const value = storage?.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeStoredLanguage(storage: StorageWriter | null, language: Language): void {
  try {
    storage?.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Storage can be unavailable in privacy modes; the URL still carries the locale.
  }
}

export function resolveLanguagePreference(storage: StorageReader | null, browserLanguage?: string): Language {
  const stored = readStoredLanguage(storage);
  if (stored) return stored;

  const primaryLanguage = browserLanguage?.toLowerCase().split('-')[0];
  return isLanguage(primaryLanguage) ? primaryLanguage : 'en';
}

@Injectable({ providedIn: 'root' })
export class LanguagePreference {
  private readonly document = inject(DOCUMENT);

  resolve(): Language {
    return resolveLanguagePreference(this.storage(), this.document.defaultView?.navigator.language);
  }

  save(language: Language): void {
    writeStoredLanguage(this.storage(), language);
  }

  private storage(): Storage | null {
    try {
      return this.document.defaultView?.localStorage ?? null;
    } catch {
      return null;
    }
  }
}
