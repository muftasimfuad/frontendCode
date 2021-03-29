import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useTotalLocked from 'hooks/useTotalUserLocked'
import useCanUnlockAmount from 'hooks/useCanUnlockAmount'
import { useTotalSupply, useBurnedBalance, useCirculatingSupply } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const userLocked = useTotalLocked()
  const canUnlock = useCanUnlockAmount()
  const circulatingSupply = useCirculatingSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) : 0
  const cSupply = circulatingSupply ? getBalanceNumber(circulatingSupply) - getBalanceNumber(burnedBalance) : 0
  const currentFarmed = circulatingSupply ? getBalanceNumber(circulatingSupply) - getBalanceNumber(burnedBalance) * (0.25) : 0
  const totalLocked = circulatingSupply ? getBalanceNumber(circulatingSupply) - getBalanceNumber(burnedBalance) * (0.75) : 0

  let REWARD_PER_BLOCK = 0;
  if(farms && farms[0] && farms[0].REWARD_PER_BLOCK){
    REWARD_PER_BLOCK = new BigNumber(farms[0].REWARD_PER_BLOCK).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'PSY Stats')}
        </Heading>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Total Supply')}</Text>
          {cakeSupply && <CardValue fontSize="18px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Circulating Supply')}</Text>
          <CardValue fontSize="18px" value={cSupply} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Total Burned')}</Text>
          <CardValue fontSize="18px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'New PSY/block')}</Text>
          <Text bold fontSize="18px">{REWARD_PER_BLOCK}</Text>
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Total farmed amount')}</Text>
          <CardValue fontSize="18px" value={currentFarmed} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Total contract locked amount')}</Text>
          <CardValue fontSize="18px" value={totalLocked} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Your PSY locked amount')}</Text>
          <CardValue fontSize="18px" value={getBalanceNumber(userLocked)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'PSY Unlocked')}</Text>
          <CardValue fontSize="18px" value={parseFloat(getBalanceNumber(canUnlock).toFixed(4))} decimals={0} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
