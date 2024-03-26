import * as Style from './styles';
import feather from 'feather-icons';

const Icon = ({ name, color, onClick, size }) => {
    const getImageString = feather.toSvg(name ?? 'circle', { width: size, height: size });
    return (
        <Style.IconContainer
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: getImageString }}
            style={{ color: color, cursor: 'pointer', width: size, height: size }}
        />
    );
};

export default Icon;
