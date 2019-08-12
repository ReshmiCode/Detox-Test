import { expect } from 'detox';

jest.retryTimes(2);

it('should have welcome screen', async () => {
  console.log('tried');
  await expect(element(by.text('Hello!'))).toExist();
  await element(by.text('Hello!')).swipe('up', 'fast', 0.89);
});
