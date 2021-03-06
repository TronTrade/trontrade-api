/**
 * @module tests
 */
import ExchangeClient from "../exchangeClient";

var client = new ExchangeClient();

beforeEach(() => {
  client = new ExchangeClient();
});

describe('ExchangeClient', () => {

  this.setTimeout(10_000);

  test('read symbols', async () => {

    const symbols = await client.symbols();

    expect(symbols.length).toBeGreaterThan(0);
  });

  test('read ANTE symbol', async () => {

    const anteSymbol = await client.symbol(1);

    expect(anteSymbol.symbol.name).toBe("TRXANTE");
  });

  test('read ANTE price', async () => {

    const anteSymbol = await client.symbol(1);
    const ticker = await anteSymbol.ticker().current();

    expect(ticker.price).toBeGreaterThan(0);
  });

  test('read ANTE orderbook', async () => {

    const anteSymbol = await client.symbol(1);
    const orderBook = await anteSymbol.orderbook().current();

    expect(orderBook.sell()[0].price).toBeGreaterThan(orderBook.buy()[0].price);
  });

});
