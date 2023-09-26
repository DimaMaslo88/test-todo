import * as React from 'react';
import { SVGProps } from 'react';

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M14 7v6m-3-3h6m-3 11H5c-1.105 0-2-.893-2-1.998V10m6 7h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z'
    />
  </svg>
);
