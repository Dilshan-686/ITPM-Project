import * as Style from './styles';
import feather from 'feather-icons';

const Icon = ({ name, color, onClick }) => {
    const getImageString = feather.toSvg(name ?? 'circle');
    return (
        <Style.IconContainer
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: getImageString }}
            style={{ color: color, cursor: 'pointer' }}
        />
    );
};

export default Icon;
