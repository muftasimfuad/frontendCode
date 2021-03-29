import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import masterChefABI from 'config/abi/masterchef.json'
import { getContract } from 'utils/web3'
import { getCakeAddress, getMasterChefAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'

const useTotalLocked = () => {
    const [totalLocked, setTotalLocked] = useState(new BigNumber(0))
    const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
    const { fastRefresh } = useRefresh()

    useEffect(() => {
        async function fetchTotalLocked() {
          const masterChefContract = getContract(masterChefABI, getMasterChefAddress())
          const totallocked = await masterChefContract.methods.lockOf(account).call()
          setTotalLocked(new BigNumber(totallocked))
        }
    
        if (account && ethereum) {
            fetchTotalLocked()
          }
        }, [account, ethereum, fastRefresh])
      
    return totalLocked

}
  

export default useTotalLocked
