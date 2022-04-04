import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const imagesLinks = [
  '11_4483cba164.jpg',
  '1234_ba3bf5292d.jpg',
  '13_b7bc531ac4.jpg',
  '158383348_801458103779495_7176548979929488667_n_c584a21047.jpg',
  '15_01_fc25697b02.jpg',
  '16_3218af408b.jpg',
  '175889299_1768693520005443_6216336337673682645_n_5756c38df5.jpg',
  '179204053_825386471386658_2078376434718316246_n_7f218feb00.jpg',
  '17_5dd3a8102b.jpg',
  '181819384_827633897828582_5295107989738155293_n_4c49212d85.jpg',
  '182005015_830121927579779_2464909483940978177_n_6c3952b505.jpg',
  '186264957_834979107094061_5394151359787320540_n_711742e63c.jpg',
  '18_47a9f57641.jpg',
  '197450679_1010801303061578_5776146005567549053_n_6136bc9577.jpg',
  '19_570c5df04d.jpg',
  '2_e82bb4c619.jpg',
  '3_54dc346fa6.jpg',
  '4_d78e899432.jpg',
  '5_a27b2c16d4.jpg',
  '6_d283a7e3e9.jpg',
  '7k_6f4746064d.jpg',
  '7_b3ba9afd5b.jpg',
  'barruca_be6dedb7b8.jpg',
  'baruca_54ae544c65.jpg',
  'CHILLPET_LOGO_MEANING_01_f7591bef3e.jpg',
  'CHINHPHUON_Gguideeeee_01_0a2e04197f.jpg',
  'clara_1_b61815593d.jpg',
  'clara_8f41ed09bb.jpg',
  'cmap_d9999ee6ce.jpg',
  'Goldgrotto_b887f5b83f.jpg',
  'IMG_20220131_001858_d0c9256348.jpg',
  'IMG_20220131_001900_4c47ea0f52.jpg',
  'IMG_20220131_001910_e2e1b52eaa.jpg',
  'IMG_20220131_001911_de3d2d346f.jpg',
  'jks_77f314f543.jpg',
  'kiendinh_84d507105d.jpg',
  'kien_dinh_01_a2a74ab666.png',
  'LAPINA_SHOWCASE_70e495002b.jpg',
  'lion_cup_02_1b3f5fcc7f.jpg',
  'maxxxx_3670f4801d.jpg',
  'miva_4638404cff.jpg',
  'NAMHUNG_1_e64db32c8c.jpg',
  'namhung_b1567530c5.jpg',
  'Ngua_Go_44aafa9b15.jpg',
  'oms_a5ed1ca6e6.jpg',
  'pepep2_8a9d75409e.jpg',
  'pepep3_8b34c51a6b.jpg',
  'pepep4_ec735be397.jpg',
  'pepepxxx2_ac7515f0b1.jpg',
  'poppings_827df5ca08.jpg',
  'poso_9de297782e.jpg',
  'Screenshot_1067_df09ac310b.jpg',
  'Screenshot_1184_74557e2923.jpg',
  'Screenshot_1964_22222_b8217da8fc.jpg',
  'sflycam_7a89eca53b.jpg',
  'tegasusu_dbcc2e5087.jpg',
  'TITANNN_0a7c9bc39a.jpg',
  'Untitled_1_1a8e47c9b2.jpg',
  'Untitled_3_30a11ab847.jpg',
  'Update1_44d1c8feb4.jpg',
  'vivu_40df6b52c4.jpg',
  'vtuyyyfb_3b24fa0557.jpg',
  'vtuyyy_cf3eeafe99.jpg',
  'widleflame_d7697439d7.jpg',
  'winnn_7a59244b65.jpg',
  'winola_c4a3b0708d.jpg',
  'yaks_07a9274953.jpg',
  'YNGHIA_69a8cbea06.jpg',
];

export default function Home({ links }) {
  return (
    <div className="">
      <main className="">
        <ul className="w-screen grid grid-cols-3 grid-flow-row-dense gap-4">
          {imagesLinks.map((imageLink, i) => {
            let clx;
            if (i % 4 == 0) clx = 'col-span-2 row-span-2';
            else clx = 'col-span-1';
            return (
              <li key={imageLink} className={`h-full w-full ${clx}`}>
                <Link href={`/products/${imageLink}`} passHref>
                  <Image
                    src={`/images/raws/${imageLink}`}
                    alt="product image"
                    width="100%"
                    height="100%"
                    objectFit="fill"
                    layout="responsive"
                    className="cursor-pointer h-full w-full"
                    loading={i > 6 ? 'lazy' : 'eager'}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
