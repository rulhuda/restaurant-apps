Feature('Reviewing Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('posting review restaurant', ({ I }) => {
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

  I.wait(2);
  I.fillField('#txtName', 'Test e2e');

  I.wait(2);
  I.fillField('#txtReview', 'Review Test e2e');

  I.wait(2);
  I.click({css: 'button.btn-post'});

  I.wait(4);
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
})