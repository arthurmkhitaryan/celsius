import Image from 'next/image';
import * as S from './ProductHover.styled';
import ArrowWind from '@/public/images/product/arrow_wind.png';
import ChillerSvg from '@/public/images/product/chiller.svg';
import VrfSvg from '@/public/images/product/vrf.svg';
import FrameSvg from '@/public/images/product/frame.svg';

const ProductHover = () => (
    <S.HoverComponent>
    <S.HoverContent>
      <S.HoverContainer>
        <S.ContentHeader>
            <Image src={FrameSvg} width={34} height={30} alt="Arrow wind" />
            <h4>Fankoil</h4>
        </S.ContentHeader>
        <S.ContentInfo>cassette fancoils: 4 tubes</S.ContentInfo>
        <S.ContentInfo>Duct fan coil Clivet</S.ContentInfo>
        <S.ContentInfo>Clivet inverter R410 (-15°C-20°C)</S.ContentInfo>
      </S.HoverContainer>
      <S.HoverContainer>
      <S.ContentHeader>
            <Image src={ChillerSvg} width={34} height={30} alt="Arrow wind" />
            <h4>Chiller</h4>
      </S.ContentHeader>
        <S.ContentInfo>Mini chiller inverter</S.ContentInfo>
        <S.ContentInfo>Chiller ON/OFF</S.ContentInfo>
        <S.ContentInfo>Aqua Super II DC inverter (hydromodul)</S.ContentInfo>
      </S.HoverContainer>
      <S.HoverContainer>
      <S.ContentHeader>
            <Image src={ArrowWind.src} width={34} height={30} alt="Arrow wind" />
            <h4>Conditioner</h4>
        </S.ContentHeader>
        <S.ContentInfo>cassette fancoils: 4 tubes</S.ContentInfo>
        <S.ContentInfo>Duct fan coil Clivet</S.ContentInfo>
        <S.ContentInfo>Clivet inverter R410 (-15°C-20°C)</S.ContentInfo>
      </S.HoverContainer>
      <S.HoverContainer>
      <S.ContentHeader>
            <Image src={VrfSvg} width={34} height={30} alt="Arrow wind" />
            <h4>VRF</h4>
        </S.ContentHeader>
        <S.ContentInfo>Mini VRF</S.ContentInfo>
        <S.ContentInfo>ATOM-B Mini VRF- ATB</S.ContentInfo>
        <S.ContentInfo>Mini VRF V8</S.ContentInfo>
      </S.HoverContainer>
    </S.HoverContent>
  </S.HoverComponent>
)

export default ProductHover;