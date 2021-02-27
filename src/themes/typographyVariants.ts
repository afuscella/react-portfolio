export interface ITypographyVariants {
  paragraph1: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
  paragraph2: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
  paragraph2XS: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
  smallestException: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
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
  subTitleXS: {
    fontSize: string;
    fontWeight: string;
    lineHeight: number;
  };
}

export const typographyVariants: ITypographyVariants = {
  // [paragraph1]
  paragraph1: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
  // [paragraph2]
  paragraph2: {
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  },
  // [paragraph2XS]
  paragraph2XS: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  },
  // [smallestException]
  smallestException: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1,
  },
  // [title]
  title: {
    fontSize: '46px',
    fontWeight: '700',
    lineHeight: 1.25, // 125%
  },
  // [titleXS]
  titleXS: {
    fontSize: '36px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  },
  // [subTitle]
  subTitle: {
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  },
  // [subTitleXS]
  subTitleXS: {
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  }
};
