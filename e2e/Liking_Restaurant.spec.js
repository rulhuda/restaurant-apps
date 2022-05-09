const assert = require('assert');
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
})

Scenario('showing empty liked movies', ({ I }) => {
  I.wait(2);
  I.seeElement('#empty-resto');
  I.see('Add your favorite restaurants first!', '#empty-resto');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.wait(2);
  I.see('Add your favorite restaurants first!', '#empty-resto');

  I.amOnPage('/');
  I.wait(3);
  for (start = 1; start < 4; start++) {
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
  }
  I.seeElement('.resto-item__name');

  const firstResto = locate('.resto-item__name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.wait(4);
  I.click(firstResto);

  I.wait(2);
  I.seeElement('#likeButton');

  I.wait(2);
  I.click('#likeButton');
  
  I.wait(2);
  I.seeElement('.swal-button--confirm');

  I.wait(2);
  I.click(locate('.swal-button--confirm').first());

  I.wait(2);
  I.amOnPage('/#/like');

  I.wait(2);
  I.seeElement('.resto-item')
  const likedRestoName = await I.grabTextFrom('.resto-item__name');
  assert.strictEqual(firstRestoName, likedRestoName);

  I.wait(5);
  I.seeElement('.resto-item__name');

  I.wait(2);
  I.click(locate('.resto-item__name').first());

  I.wait(5);
  I.seeElement('#likeButton');

  I.wait(2);
  I.click('#likeButton');

  I.wait(2);
  I.seeElement('.swal-button--confirm');

  I.wait(2);
  I.click(locate('.swal-button--confirm').first());

  I.wait(2);
  I.amOnPage('/#/like');

  I.wait(2);
  I.see('Add your favorite restaurants first!', '#empty-resto');
});

Scenario('reviewing restaurant', ({ I }) => {
  I.see('Add your favorite restaurants first!', '#empty-resto');
  I.amOnPage('/');

  I.wait(3);
  for (start = 1; start < 4; start++) {
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
  }
  I.seeElement('.resto-item__name');

  I.click(locate('.resto-item__name').first());

  I.wait(2);
  for (start = 1; start < 8; start++) {
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
  }

  I.wait(3);
  I.fillField('#txtName', 'User e2e');

  I.wait(3);
  I.fillField('#txtReview', 'Review e2e');

  I.wait(3);
  I.click({css: 'button.btn-post'});

  I.wait(2);
  I.seeElement('.swal-button--confirm');

  I.wait(2);
  I.click(locate('.swal-button--confirm').first());

  I.wait(2);
  for (start = 1; start < 6; start++) {
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
    I.pressKey('ArrowDown');
  }

  I.wait(3);
});