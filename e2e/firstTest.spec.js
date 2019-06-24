describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await element(by.text('Welcome!')).atIndex(0).swipe('down', 'fast', 0.7);
  });
});
