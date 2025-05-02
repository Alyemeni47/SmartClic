
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirTracker - Verified Airdrops</title>
        <meta name="description" content="Track real, verified crypto airdrops across Solana, Ethereum, and more." />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>AirTracker</h1>
        <p>Welcome to the no-BS airdrop tracker. Clean. Verified. Real.</p>
        <ul>
          <li>• Connect your wallet</li>
          <li>• Check for airdrop eligibility</li>
          <li>• View real airdrops from Solana, Ethereum, and more</li>
        </ul>
        <p style={{ marginTop: '2rem' }}>Coming soon: Wallet checker + Telegram alerts</p>
      </main>
    </div>
  )
}
