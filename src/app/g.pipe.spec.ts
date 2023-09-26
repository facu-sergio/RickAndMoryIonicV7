import { GPipe } from './g.pipe';

describe('GPipe', () => {
  it('create an instance', () => {
    const pipe = new GPipe();
    expect(pipe).toBeTruthy();
  });
});
