import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import styled from 'styled-components';
import { useUserStore } from '../../hooks/useUserStore';

const RightText = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: right;
  padding-right: 20px;
  line-height: 1.5;
  text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000; /* Black outline */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media (max-width: 800px) {
    text-align: center;
    padding-right: 0;
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Welcome = styled.div`
  background-image: url('/banner.png');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 350px;
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, .07)) drop-shadow(0 2px 2px rgba(0, 0, 0, .06));

  @media (max-width: 800px) {
    justify-content: center;
    padding-right: 0;
  }

  @media (max-width: 500px) {
    height: 250px;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000; /* Black outline */

  @media (max-width: 800px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  color: white;
  text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000; /* Black outline */

  @media (max-width: 800px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export function WelcomeBanner() {
  const wallet = useWallet();
  const walletModal = useWalletModal();
  const store = useUserStore();

  return (
    <Welcome>
      <RightText>
        <Title>TAMAGUTCHI CASINO.<br /> BUY. PLAY. WIN!</Title>
        <Subtitle>
          A simple and decentralized casino<br />for degens on Solana.
        </Subtitle>
      </RightText>
    </Welcome>
  );
}
