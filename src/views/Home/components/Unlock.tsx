import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import useTotalLocked from 'hooks/useTotalUserLocked'
import useCanUnlockAmount from 'hooks/useCanUnlockAmount'
import { TranslateString } from 'utils/translateTextHelpers'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import CardValue from './CardValue'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/egg/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {

  const totalLocked = useTotalLocked()
  const canUnlock = useCanUnlockAmount()

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'PSY locked')}
        </Heading>
        <CardImage src="/images/egg/2.png" alt="cake logo" width={64} height={64} />
        <Block>
          <CardValue value={getBalanceNumber(totalLocked)} fontSize="24px" />
          <Label>{TranslateString(999, 'Your PSY locked amount')}</Label>
        </Block>
        <Block>
          <strong style={{fontSize: '24px'}}>{parseFloat(getBalanceNumber(canUnlock).toFixed(4))}</strong>
          <Label>{TranslateString(999, 'PSY Unlocked')}</Label>
        </Block>
      </CardBody>
    </StyledFarmStakingCard>
  ) 
}

export default FarmedStakingCard
