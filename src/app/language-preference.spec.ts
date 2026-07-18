import { describe, expect, it, vi } from 'vitest';
import {
  LANGUAGE_STORAGE_KEY,
  isLanguage,
  readStoredLanguage,
  resolveLanguagePreference,
  writeStoredLanguage,
} from './language-preference';

describe('language preference', () => {
  it('accepts only supported language codes', () => {
    expect(['en', 'es', 'pt'].every(isLanguage)).toBe(true);
    expect(isLanguage('fr')).toBe(false);
    expect(isLanguage(null)).toBe(false);
  });

  it('prefers storage, then browser language, then English', () => {
    const storage = { getItem: vi.fn(() => 'pt') };
    expect(resolveLanguagePreference(storage, 'es-ES')).toBe('pt');
    storage.getItem.mockReturnValue('invalid');
    expect(resolveLanguagePreference(storage, 'es-ES')).toBe('es');
    expect(resolveLanguagePreference(storage, 'fr-FR')).toBe('en');
  });

  it('tolerates storage read and write failures', () => {
    const storage = {
      getItem: vi.fn(() => { throw new Error('blocked'); }),
      setItem: vi.fn(() => { throw new Error('blocked'); }),
    };
    expect(readStoredLanguage(storage)).toBeNull();
    expect(resolveLanguagePreference(storage, 'pt-BR')).toBe('pt');
    expect(() => writeStoredLanguage(storage, 'pt')).not.toThrow();
    expect(storage.setItem).toHaveBeenCalledWith(LANGUAGE_STORAGE_KEY, 'pt');
  });
});
