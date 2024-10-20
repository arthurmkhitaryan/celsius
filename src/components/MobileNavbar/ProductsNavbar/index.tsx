import Image from 'next/image';
import * as S from './ProductsNavbar.styled';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ArrowWind from '@/public/images/product/arrow_wind.png';
import ChillerSvg from '@/public/images/product/chiller.svg';
import VrfSvg from '@/public/images/product/vrf.svg';
import FrameSvg from '@/public/images/product/frame.svg';
import { useState } from 'react';

const PRODUCTS_LIST = [
    {
        id: 1,
        title: 'Fankoil',
        image: FrameSvg,
        items: [
            {
                id: 1,
                title: 'Cassette fancoils: 4 tubes'
            },
            {
                id: 2,
                title: 'Duct fan coil Clivet'
            },
            {
                id: 3,
                title: 'Clivet inverter R410 (-15°C-20°C)'
            },
            {
                id: 4,
                title: 'Tape type'
            },
            {
                id: 5,
                title: 'Ceiling-floor type cassette fan coils, 4 pipes'
            },
        ]
    },
    {
        id: 2,
        title: 'Chiller',
        image: ChillerSvg,
        items: [
            {
                id: 1,
                title: 'Cassette fancoils: 4 tubes'
            },
            {
                id: 2,
                title: 'Duct fan coil Clivet'
            },
            {
                id: 3,
                title: 'Clivet inverter R410 (-15°C-20°C)'
            },
            {
                id: 4,
                title: 'Tape type'
            },
            {
                id: 5,
                title: 'Ceiling-floor type cassette fan coils, 4 pipes'
            },
        ]
    },
    {
        id: 3,
        title: 'Conditioner',
        image: ArrowWind,
        items: [
            {
                id: 1,
                title: 'Cassette fancoils: 4 tubes'
            },
            {
                id: 2,
                title: 'Duct fan coil Clivet'
            },
            {
                id: 3,
                title: 'Clivet inverter R410 (-15°C-20°C)'
            },
            {
                id: 4,
                title: 'Tape type'
            },
            {
                id: 5,
                title: 'Ceiling-floor type cassette fan coils, 4 pipes'
            },
        ]
    },
    {
        id: 4,
        title: 'VRF',
        image: VrfSvg,
        items: [
            {
                id: 1,
                title: 'Cassette fancoils: 4 tubes'
            },
            {
                id: 2,
                title: 'Duct fan coil Clivet'
            },
            {
                id: 3,
                title: 'Clivet inverter R410 (-15°C-20°C)'
            },
            {
                id: 4,
                title: 'Tape type'
            },
            {
                id: 5,
                title: 'Ceiling-floor type cassette fan coils, 4 pipes'
            },
        ]
    },
]

const ProductsNavbar = () => {
    const [openProductId, setOpenProductId] = useState<number | null>(null);

    const toggleProduct = (productId: number) => {
        setOpenProductId(openProductId === productId ? null : productId);
    };

    return (
        <S.SubMenu>
            {PRODUCTS_LIST.map(product => (
                <>
                    <S.SubMenuItem key={product.id} onClick={() => toggleProduct(product.id)}>
                    <S.SubMenuFirstItem>
                        <Image src={product.image} width={20} height={18} alt="Arrow wind" />
                        <Link href="">{product.title}</Link>
                    </S.SubMenuFirstItem>
                    <S.Chevron isOpen={openProductId === product.id}>
                        <ChevronRight size={18} color='#0044CC' rotate={openProductId === product.id ? '88deg' : 0} />
                    </S.Chevron>
                    </S.SubMenuItem>
                    {openProductId === product.id && (
                        <S.SubMenuItems>
                            {product.items.map(item => (
                                <S.SubMenuSubItem key={item.id}>
                                    {item.title}
                                </S.SubMenuSubItem>
                            ))}
                        </S.SubMenuItems>
                    )}
                </>
            ))}
         </S.SubMenu>
    )
}

export default ProductsNavbar;