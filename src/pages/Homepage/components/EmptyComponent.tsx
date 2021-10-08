
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"

 const EmptyComponent = () => {
    const { t } = useTranslation(['f', 'b']);
        return (<Result
                title="Coming Soon"
                subTitle="Sorry, we are still building the page."
                extra={<Link to="/">{t('f:button.goHome')}</Link>}
            />
        )
       
    }
    

export default EmptyComponent;
