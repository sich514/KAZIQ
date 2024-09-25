import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import styled from 'styled-components';
import { useUserStore } from '../../hooks/useUserStore';

const RightText = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: right;
  padding-right: 20px;
  line-height: 1.5;
  text-shadow: 0px 0px 5px #ff69b4, 0px 0px 10px #ff69b4; /* Розовая обводка */
`;

const Welcome = styled.div`
  background-image: url('/banner.png');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 350px;
  align-items: center;
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, .07)) drop-shadow(0 2px 2px rgba(0, 0, 0, .06));

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: white;
  text-shadow: 0px 0px 5px #ff69b4, 0px 0px 10px #ff69b4; /* Розовая обводка */
`;

const Subtitle = styled.p`
  color: white;
  text-shadow: 0px 0px 5px #ff69b4, 0px 0px 10px #ff69b4; /* Розовая обводка */
`;

export function WelcomeBanner() {
  const wallet = useWallet();
  const walletModal = useWalletModal();
  const store = useUserStore();

  return (
    <Welcome>
      <div>
        <Title>WELCOME TO 888 . BUY . PLAY . WIN</Title>
        <Subtitle>
          A fair, simple and decentralized casino on Solana.
        </Subtitle>
      </div>
      <RightText>
        Fair play. High rewards.<br />
        Start your adventure today!
      </RightText>
    </Welcome>
  );
}
