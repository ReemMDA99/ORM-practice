const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-05-24 16:12:03');

  expect(format_date(date)).toBe('5/24/2022');
});


test('format_plural() returns a pluralized word', () => {
  const singular = format_plural('tiger', 1);
  const plural = format_plural('lion', 2);

  expect(singular).toBe('tiger');
  expect(plural).toBe('lions');
});

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.coolstuff.com/abcdefg/');
  const url3 = format_url('https://www.google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});
