import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/#/swap` : 'https://exchange.KHDSwapswap.finance',
      },
      {
        label: 'Liquidity',
        href: process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/#/pool` : 'https://exchange.KHDSwapswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://KHDSwapswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://KHDSwapswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://KHDSwapswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://KHDSwapswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.KHDSwapswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/KHDSwapswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.KHDSwapswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://KHDSwapswap.medium.com',
      },
    ],
  },
]

export default config
