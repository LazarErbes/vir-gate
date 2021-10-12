import shield from '../../../assets/images/shield.png';
import microsoftLogo from '../../../assets/images/microsoft-logo.png';

interface WindowsLogoProps {
    isColor?: boolean;
}

const WindowsLogo = ({ isColor }: WindowsLogoProps) => {
    return (
        <div className="col-xs-12 col-md-7 col-lg-6 col-xl-5">
            {isColor ? (
                <img src={microsoftLogo} className="mr-auto ml-auto" alt="Microsoft" />
            ) : (
                <img src={shield} className="mr-auto ml-auto" alt="shiled" />
            )}
        </div>
    );
};
export default WindowsLogo;
