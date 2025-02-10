import Image from 'next/image';
import * as S from './ProductsNavbar.styled';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ArrowWind from '@/public/images/product/arrow_wind.png';
import ChillerSvg from '@/public/images/product/chiller.svg';
import VrfSvg from '@/public/images/product/vrf.svg';
import FrameSvg from '@/public/images/product/frame.svg';
import { useState } from 'react';
import { useGetAllCategoriesQuery } from '@/features/categories';
import { useParams, useRouter } from 'next/navigation';

// const PRODUCTS_LIST = [
//   {
//     id: 1,
//     title: 'Fankoil',
//     image: FrameSvg,
//     items: [
//       {
//         id: 1,
//         title: 'Cassette fancoils: 4 tubes',
//       },
//       {
//         id: 2,
//         title: 'Duct fan coil Clivet',
//       },
//       {
//         id: 3,
//         title: 'Clivet inverter R410 (-15°C-20°C)',
//       },
//       {
//         id: 4,
//         title: 'Tape type',
//       },
//       {
//         id: 5,
//         title: 'Ceiling-floor type cassette fan coils, 4 pipes',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Chiller',
//     image: ChillerSvg,
//     items: [
//       {
//         id: 1,
//         title: 'Cassette fancoils: 4 tubes',
//       },
//       {
//         id: 2,
//         title: 'Duct fan coil Clivet',
//       },
//       {
//         id: 3,
//         title: 'Clivet inverter R410 (-15°C-20°C)',
//       },
//       {
//         id: 4,
//         title: 'Tape type',
//       },
//       {
//         id: 5,
//         title: 'Ceiling-floor type cassette fan coils, 4 pipes',
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Conditioner',
//     image: ArrowWind,
//     items: [
//       {
//         id: 1,
//         title: 'Cassette fancoils: 4 tubes',
//       },
//       {
//         id: 2,
//         title: 'Duct fan coil Clivet',
//       },
//       {
//         id: 3,
//         title: 'Clivet inverter R410 (-15°C-20°C)',
//       },
//       {
//         id: 4,
//         title: 'Tape type',
//       },
//       {
//         id: 5,
//         title: 'Ceiling-floor type cassette fan coils, 4 pipes',
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: 'VRF',
//     image: VrfSvg,
//     items: [
//       {
//         id: 1,
//         title: 'Cassette fancoils: 4 tubes',
//       },
//       {
//         id: 2,
//         title: 'Duct fan coil Clivet',
//       },
//       {
//         id: 3,
//         title: 'Clivet inverter R410 (-15°C-20°C)',
//       },
//       {
//         id: 4,
//         title: 'Tape type',
//       },
//       {
//         id: 5,
//         title: 'Ceiling-floor type cassette fan coils, 4 pipes',
//       },
//     ],
//   },
// ];

const ProductsNavbar = ({ changeToggleMenu }: {changeToggleMenu: () => void}) => {
  const [openProductId, setOpenProductId] = useState<number | null>(null);
  const { locale } = useParams();
  const { data } = useGetAllCategoriesQuery({ locale: locale.toString() });

  const toggleProduct = (productId: number) => {
    setOpenProductId(openProductId === productId ? null : productId);
  };

  return (
    <S.SubMenu>
      {data?.map((category) => (
        <>
          <S.SubMenuItem
            key={category.id}
            onClick={() => toggleProduct(category.id)}
          >
            <S.SubMenuFirstItem>
              <Image
                src={category.icon}
                width={20}
                height={18}
                alt="Arrow wind"
              />
              <Link
                href={`/category/${category.slug}`}
                onClick={changeToggleMenu}
                passHref
              >
                {category.name}
              </Link>
            </S.SubMenuFirstItem>
            <S.Chevron isOpen={openProductId === category.id}>
              <ChevronRight
                size={18}
                color="#0044CC"
                rotate={openProductId === category.id ? '88deg' : 0}
              />
            </S.Chevron>
          </S.SubMenuItem>
          {openProductId === category.id && (
            <S.SubMenuItems>
              {category.subCategories.map((item) => (
                <S.SubMenuSubItem
                  href={`/products/?category=${category.id}&subCategory=${item.id}`}
                  key={item.id}
                >
                  {item.name}
                </S.SubMenuSubItem>
              ))}
            </S.SubMenuItems>
          )}
        </>
      ))}
    </S.SubMenu>
  );
};

export default ProductsNavbar;
