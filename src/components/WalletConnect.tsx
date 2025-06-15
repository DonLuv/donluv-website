import { useState } from 'react'
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const { signMessage } = useSignMessage()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const handleSiweAuth = async () => {
    if (!address) return

    setIsAuthenticating(true)
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in to donluv.xyz',
        uri: window.location.origin,
        version: '1',
        chainId: 1,
        nonce: Math.random().toString(36).substring(2),
        issuedAt: new Date().toISOString(),
      })

      const messageToSign = message.prepareMessage()

      signMessage(
        { message: messageToSign },
        {
          onSuccess: signature => {
            setIsAuthenticated(true)
            console.log('SIWE authentication successful', {
              message: messageToSign,
              signature,
            })
          },
          onError: error => {
            console.error('SIWE authentication failed', error)
          },
        }
      )
    } catch (error) {
      console.error('Error during SIWE auth:', error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  const handleDisconnect = () => {
    disconnect()
    setIsAuthenticated(false)
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        {isAuthenticated && <span className="text-xs text-green-500 hidden sm:inline">✓</span>}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {!isAuthenticated && (
              <DropdownMenuItem onClick={handleSiweAuth} disabled={isAuthenticating}>
                {isAuthenticating ? 'Signing...' : 'Sign In with Ethereum'}
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={handleDisconnect}>Disconnect</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isPending}>
          Connect Wallet
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {connectors.map(connector => (
          <DropdownMenuItem
            key={connector.uid}
            onClick={() => connect({ connector })}
            disabled={isPending}
          >
            {connector.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
