import { RotatingLines } from 'react-loader-spinner';

const Spinner = ({ size, color, strokeWidth }) => {
    return (
        <RotatingLines
            visible={true}
            height={size ?? '24'}
            width={size ?? '24'}
            color={color ?? 'grey'}
            strokeWidth={strokeWidth ?? '5'}
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            strokeColor={color ?? '#3a3a4e'}
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};

export default Spinner;
