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
  text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000; /* Черная обводка */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000; /* Черная обводка */
`;

const Subtitle = styled.p`
  color: white;
  text-shadow: 0px 0px 5px #000000, 0px 0px 10px #000000; /* Черная обводка */
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
          A degen, simple and decentralized<br /> casino on Solana.
        </Subtitle>
      </RightText>
    </Welcome>
  );
}
