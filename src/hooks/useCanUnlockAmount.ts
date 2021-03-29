import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import masterChefABI from 'config/abi/masterchef.json'
import { getContract } from 'utils/web3'
import { getCakeAddress, getMasterChefAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'

const useCanUnlockAmount = () => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()

    useEffect(() => {
        async function fetchBalance() {
          const cakeContract = getContract(cakeABI, getCakeAddress())
          const balances = await cakeContract.methods.canUnlockAmount(account).call()
          setBalance(new BigNumber(balances))
        }
    
        if (account && ethereum) {
          fetchBalance()
        }
      }, [account, ethereum, fastRefresh])
      
    return balance

}

export default useCanUnlockAmount
