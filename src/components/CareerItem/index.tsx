'use client';

import * as S from './CareerItem.styled';
import { ChevronRight, Dot } from 'lucide-react';
import { theme } from '@/styles';
import { useState } from 'react';
import CareerModal from '@/components/modals/CareerModal';

export interface CareerItemProps {
  title: string;
  address: string;
  postingDate: string;
  content: string;
}

const CareerListItem = ({
  address,
  postingDate,
  title,
  content,
}: CareerItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <S.CareerItemContainer onClick={openModal}>
        <S.CareerItemContent>
          <S.CareerItemTitle>{title}</S.CareerItemTitle>
          <S.CareerItemInfo>
            <S.CareerAddress>{address}</S.CareerAddress>
            <Dot size={40} color={theme.palette.common.mainBlue} />
            <S.CareerItemPostDate>
              Posting Date: {postingDate}
            </S.CareerItemPostDate>
          </S.CareerItemInfo>
        </S.CareerItemContent>
        <ChevronRight
          size={52}
          color={theme.palette.common.mainBlue}
          strokeWidth={1.5}
        />
      </S.CareerItemContainer>
      <CareerModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        career={{ address, postingDate, title, content }}
      />
    </>
  );
};

export default CareerListItem;
