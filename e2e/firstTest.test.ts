import { expect } from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Hello!'))).toExist();
    await element(by.text('Hello!')).swipe('up', 'fast', 0.89);
  });
});
