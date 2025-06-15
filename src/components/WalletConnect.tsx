import { useState } from 'react'
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

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
            // Here you would typically verify the signature on your backend
            // For now, we'll just set authenticated to true
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
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Wallet Connected
            {isAuthenticated && <span className="text-green-500 text-sm">✓ Authenticated</span>}
          </CardTitle>
          <CardDescription>
            {address.slice(0, 6)}...{address.slice(-4)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {!isAuthenticated && (
            <Button onClick={handleSiweAuth} className="w-full" disabled={isAuthenticating}>
              {isAuthenticating ? 'Signing...' : 'Sign In with Ethereum'}
            </Button>
          )}
          <Button onClick={handleDisconnect} variant="outline" className="w-full">
            Disconnect
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Connect Wallet</CardTitle>
        <CardDescription>Choose a wallet to connect to donluv.xyz</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {connectors.map(connector => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            disabled={isPending}
            variant="outline"
            className="w-full justify-start"
          >
            {connector.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
