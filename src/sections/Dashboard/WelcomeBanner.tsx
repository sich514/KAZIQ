import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import styled from 'styled-components';
import { useUserStore } from '../../hooks/useUserStore';

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; /* Выравниваем кнопки по правой стороне */
  gap: 10px;
  padding-right: 20px; /* Добавляем отступ справа */

  & > button {
    border: none;
    width: 200px; /* Фиксированная ширина кнопок для более аккуратного вида */
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background-color .2s ease;
    color: black;
    cursor: pointer;

    &:hover {
      background: white;
    }
  }
`;

const Welcome = styled.div`
  background-image: url('/banner.png');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr; /* Две колонки: текст слева, кнопки справа */
  height: 350px; /* Высота баннера */
  align-items: center; /* Центрируем элементы по вертикали */
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, .07)) drop-shadow(0 2px 2px rgba(0, 0, 0, .06));

  @media (max-width: 800px) {
    grid-template-columns: 1fr; /* В мобильной версии колонки складываются друг над другом */
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: white; /* Цвет заголовка для лучшего контраста */
`;

export function WelcomeBanner() {
  const wallet = useWallet();
  const walletModal = useWalletModal();
  const store = useUserStore();

  const copyInvite = () => {
    store.set({ userModal: true });
    if (!wallet.connected) {
      walletModal.setVisible(true);
    }
  };

  return (
    <Welcome>
      <div>
        <Title>WELCOME TO 888 . BUY . PLAY . WIN</Title>
        <p style={{ color: 'white' }}>
          A fair, simple and decentralized casino on Solana.
        </p>
      </div>
      <Buttons>
        <button onClick={copyInvite}>
          💸 Copy Invite
        </button>
        <button onClick={() => window.open('https://v2.gamba.so/', '_blank')}>
          🚀 Add Liquidity
        </button>
        <button onClick={() => window.open('https://discord.gg/HSTtFFwR', '_blank')}>
          💬 Discord
        </button>
      </Buttons>
    </Welcome>
  );
}
