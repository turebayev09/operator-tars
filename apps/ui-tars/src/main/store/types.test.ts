
import { describe, it, expect } from 'vitest';
import { VLMProviderV2 } from './types';

describe('VLMProviderV2', () => {
  it('should have correct value for Agible provider', () => {
    expect(VLMProviderV2.agible).toBe('Agible');
  });

  it('should contain exactly one provider', () => {
    const providerCount = Object.keys(VLMProviderV2).length;
    expect(providerCount).toBe(1);
  });
});

