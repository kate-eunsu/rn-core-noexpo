import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg viewBox="0 0 24 24" stroke-width="1.5" >
    <circle cx="12" cy="12" r="10" fill="black" />
</svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;