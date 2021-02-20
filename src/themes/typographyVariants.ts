/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export

export interface ITypographyVariants {
  title: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
  titleXS: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
  subTitle: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
}

export const typographyVariants: ITypographyVariants = {
  // [title]
  title: {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: 1.25, // 125%
  },
  // [titleXS]
  titleXS: {
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  },
  // [subTitle]
  subTitle: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
};
