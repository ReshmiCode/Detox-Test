import { expect } from 'detox';

it('should have welcome screen', async () => {
  await expect(element(by.text('Hello!'))).toExist();
  await element(by.text('Hello!')).swipe('up', 'fast', 0.89);
});
