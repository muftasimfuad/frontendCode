import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <Heading size="lg">FAQ</Heading>
        <Text mb="16px">{TranslateString(999, 'Q :What is the Psychic finance?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Yieldfarm ,Predict market, Psychic NFTs card , with many ways to earn')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: Why I cant claim all my farming rewards?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Psychic reward pools have a time lock of 75% for 1 year. The other 25% can be claimed anytime. This mechanism is to ensure that price cannot be dumped and to focus on getting mid to long term players on board.')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What can I use PSY for?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Staking pool is being developed where PSY can be staked and points can be earned. Points earned can be used to draw random cards which can be minted into NFT or used to increase PSY rewards in bet/predict market.')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What is bet/predict market?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Bet/predict market is a feature in the Psychic ecosystem where PSY can be used to place bets on a crypto market trend and earn PSY as rewards. E.g. - Will BNB price hit $220 by 19 February 10AM (UTC +8)? Yes/No Correct bets on predictions will be rewarded PSY from pool of users that registered for that bet/predict round.')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: Are we listed in Coingecko? coinmarket cap?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Yes. You can search for Pyschic Token or  PSY')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What is psychic market?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: marketplace to buy and sell NFT cards with PSY token')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: How can I get an NFT card? 1) PSY staking and reward points to open random card (500 points = 1 Card) 2) You can purchase or place bid in psychic market')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What is the role of a creator and referee in predict market?')}</Text>
        <Text mb="16px">{TranslateString(999, '1) Creator can list predict 2) Referee can verify predict result with proof link')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What chain is Psychic Finance on?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Psychic is a BSCX Fork running on Binance Smart Chain (BSC)')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What is the PSY TOKEN?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: You can check out our Medium page for more details - https://psychicfinance.medium.com/about')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What can I do with PSY TOKEN ?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: Yield farming, bet in predict market and purchase NFT card in the psychic market')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: What is psychic NFT card?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: They can reward you with greater PSY Rewards. With the oracle cards, you can predict the market')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q: How can I buy PSY token?')}</Text>
        <Text mb="16px">{TranslateString(999, 'A: On pancake swap, link is in pinned messages')}</Text>
        <Text mb="16px">{TranslateString(999, 'Q : When will psychic market and predict market open? Weve planned in our roadmap for Q2 - Psychic market Q3 - Predict market ')}</Text>
        <Text mb="16px">{TranslateString(999, 'We will try to get out a beta version of psychic market up can open by end of May.')}</Text>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
