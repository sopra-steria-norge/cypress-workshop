const apiUrl = "https://api.covid19api.com/live/country/norway/status/confirmed";

describe('Covid-19 statistic App', () => {
    beforeEach(() => {
      cy.intercept(apiUrl, { fixture: 'data.json'});
      cy.visit('/');
    });
  
    it('Displays page', () => {
      cy.get('input').type('norway');
      cy.get('button').click();
    });
});
  