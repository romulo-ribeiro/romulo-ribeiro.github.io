import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { vi } from 'vitest';
import { LanguagePreference } from './language-preference';
import { LanguageRedirect } from './language-redirect';

describe('LanguageRedirect', () => {
  const navigate = vi.fn(() => Promise.resolve(true));

  beforeEach(() => {
    navigate.mockClear();
    TestBed.configureTestingModule({
      imports: [LanguageRedirect],
      providers: [
        { provide: Router, useValue: { navigate } },
        { provide: LanguagePreference, useValue: { resolve: () => 'pt' } },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });
  });

  it('replaces the root URL with the preferred localized route', () => {
    TestBed.createComponent(LanguageRedirect).detectChanges();
    expect(navigate).toHaveBeenCalledWith(['/pt'], { replaceUrl: true });
  });

  it('does not redirect during server rendering', () => {
    TestBed.overrideProvider(PLATFORM_ID, { useValue: 'server' });
    TestBed.createComponent(LanguageRedirect).detectChanges();
    expect(navigate).not.toHaveBeenCalled();
  });
});
