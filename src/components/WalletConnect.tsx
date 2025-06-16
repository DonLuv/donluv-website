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
        statement: 'AUTHENTICATE TO DONLUV_SYSTEM',
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
            console.log('AUTHENTICATION SUCCESSFUL', {
              message: messageToSign,
              signature,
            })
          },
          onError: error => {
            console.error('AUTHENTICATION FAILED', error)
          },
        }
      )
    } catch (error) {
      console.error('AUTH ERROR:', error)
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
        {isAuthenticated && (
          <span className="text-xs text-primary hidden sm:inline terminal-glow font-mono">
            AUTH_OK
          </span>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="border-primary hover:bg-primary/10 font-mono text-xs terminal-glow"
            >
              {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-primary bg-card/95 backdrop-blur">
            {!isAuthenticated && (
              <DropdownMenuItem
                onClick={handleSiweAuth}
                disabled={isAuthenticating}
                className="font-mono text-xs hover:bg-primary/10 focus:bg-primary/10"
              >
                {isAuthenticating ? 'AUTHENTICATING...' : 'AUTHENTICATE_WALLET'}
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={handleDisconnect}
              className="font-mono text-xs hover:bg-destructive/10 focus:bg-destructive/10 text-destructive"
            >
              DISCONNECT_WALLET
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={isPending}
          className="border-primary hover:bg-primary/10 font-mono text-xs terminal-glow"
        >
          {isPending ? 'CONNECTING...' : 'CONNECT_WALLET'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-primary bg-card/95 backdrop-blur">
        {connectors.map(connector => (
          <DropdownMenuItem
            key={connector.uid}
            onClick={() => connect({ connector })}
            disabled={isPending}
            className="font-mono text-xs hover:bg-primary/10 focus:bg-primary/10"
          >
            CONNECT_{connector.name.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
