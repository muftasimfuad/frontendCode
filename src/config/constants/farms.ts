import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 2,
    lpSymbol: 'PSY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x84ba7b7e0b687078d65af43986719720e7f3e71c',
    },
    tokenSymbol: 'PSY',
    tokenAddresses: {
      97: '',
      56: '0x8dbc995946ad745dd77186d1ac10019b8ea6694a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'PSY-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x5da70b3a2ed7bf0ba68a3d4219e8e874842c2136',
    },
    tokenSymbol: 'PSY',
    tokenAddresses: {
      97: '',
      56: '0x8dbc995946ad745dd77186d1ac10019b8ea6694a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'PSY-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x0c1e2116c8f72fc7208492e7aea6760cc5dce9a1',
    },
    tokenSymbol: 'PSY',
    tokenAddresses: {
      97: '',
      56: '0x8dbc995946ad745dd77186d1ac10019b8ea6694a',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
