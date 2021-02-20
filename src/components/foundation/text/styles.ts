import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

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
  title,
  subTitle,
};

interface ITextBase {
  as: any;
  color: string;
}

export const TextBase = styled.span<ITextBase>`
  ${({ variant }) => TextStyleVariantMap[variant]};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;
