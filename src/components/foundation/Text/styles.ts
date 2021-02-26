import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';
import { propToStyle } from '@/themes/utils/propToStyle';

const smallestException = css`
  font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
`;

const paragraph1 = css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
`;

const paragraph2 = css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
  md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
    `}
  `,
})}
`;

const subTitle = css`
  font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
`;

export const TextStyleVariantMap = {
  smallestException,
  paragraph1,
  paragraph2,
  title,
  subTitle,
};

interface ITextBase {
  as: any;
  color: string;
}

export const TextBase = styled.span<ITextBase>`
  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}

  ${({ variant }) => TextStyleVariantMap[variant]};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;
