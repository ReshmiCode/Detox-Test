jest.retryTimes(2);

test('should have welcome screen', async () => {
  console.warn('tried');
  await element(by.text('Helloz!')).tap();
  //await element(by.text('Hello!')).swipe('up', 'fast', 0.89);
});
