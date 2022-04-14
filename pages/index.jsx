import * as React from 'react';
import Image from 'next/image';
import { useScrollContext } from '../lib/scrollContext';

export default function Home() {
  const { number } = useScrollContext();

  return (
    <div className="">
      <main className="">
        <ul className="p-4 w-screen flex flex-col items-center justify-center md:grid grid-cols-4 grid-flow-row-dense gap-4">
          {new Array(number).fill(':))').map((_, i) => {
            let clx;
            if (i % 3 == 0) clx = 'col-span-2 row-span-2';
            if (i % 4 == 0) clx = 'col-span-2 row-span-2';
            else clx = 'col-span-1';
            return (
              <li
                key={i}
                className={`h-full w-full rounded-lg border-4 border-primary ${clx}`}
              >
                <Image
                  src={`/img/${i + 1}.jpg`}
                  alt="product image"
                  width="100%"
                  height="100%"
                  objectFit="fill"
                  layout="responsive"
                  className="h-full w-full rounded-sm"
                  priority
                  loading="eager"
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
