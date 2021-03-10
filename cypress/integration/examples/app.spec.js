const apiUrl = "https://api.covid19api.com/live/country/norway/status/confirmed";

const statisticTableArray = [
  {
    date: '2021-03-06',
    confirmed: 74037,
  },
  {
    date: '2021-03-07',
    confirmed: 74546,
  },
  {
    date: '2021-03-08',
    confirmed: 74942,
  },
  {
    date: '2021-03-09',
    confirmed: 75304,
  },
  {
    date: '2021-03-10',
    confirmed: 76484,
  }
]

describe('Covid-19 statistic App', () => {
    beforeEach(() => {
      cy.intercept(apiUrl, { fixture: 'data.json'});
      cy.visit('/');
      cy.clock(new Date("2021-03-10"));
    });

    const inputAndSearch = () => {
      cy.get('input').type('norway');
      cy.get('button').click();
    }
  
    it('displays totals correctly', () => {
      inputAndSearch();

      cy.get('[data-cy="confirmed"]').contains("76 484");
      cy.get('[data-cy="deaths"]').contains("632");
    });

    it('dispays statistic table correctly', () => {
      inputAndSearch();

      cy.get('[data-cy="table-row"]').each(($row, index) => {
        cy.wrap($row).find('td').first().contains(statisticTableArray[index].date);
        cy.wrap($row).find('td').last().contains(statisticTableArray[index].confirmed);
      });
    });
});
  