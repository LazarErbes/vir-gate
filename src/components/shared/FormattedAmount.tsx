import { FunctionComponent } from 'react';
import NumberFormat from 'react-number-format';

interface Props {
    prefix?: string;
    suffix?: string;
    value: number | string;
}

const FormattedAmount: FunctionComponent<Props> = ({ prefix, value, suffix }) => {
    const formattedPrefix = prefix === 'SGD' || prefix === 'USD' ? '$ ' : prefix ? `${prefix} ` : '';
    return (
        <>
            <NumberFormat
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                prefix={formattedPrefix}
                value={value}
            />
            {suffix && ` ${suffix}`}
        </>
    );
};

export default FormattedAmount;
