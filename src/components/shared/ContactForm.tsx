import { Modal } from 'antd';
import { Formik, Form, Field } from 'formik';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ResearchContactFormValidationSchema } from '../../validations/ResearchContactForm';

interface Props {
    isModalOpened: boolean;
    setIsModalOpened: (boolean: boolean) => void;
}

const ContactFormModal: FunctionComponent<Props> = (props) => {
    const { t } = useTranslation(['f', 'b']);

    const closeModalHandler = (resetForm: any) => {
        resetForm();
        props.setIsModalOpened(false);
    };

    const hasErrors = (errors: any, name: string, touched: any) => {
        if (errors && errors[name] && touched[name]) {
            return <span className="error-text">{t(`${errors[name]}`, { name: t(`f:research.${name}`) })}</span>;
        }
    };

    return (
        <Modal
            className={'contact-form-modal'}
            visible={props.isModalOpened}
            footer={null}
            closable={false}
            onCancel={() => props.setIsModalOpened(false)}
        >
            <p className="heading">{t('f:contactForm.contactUs')}</p>
            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                }}
                validationSchema={ResearchContactFormValidationSchema}
                enableReinitialize
                onSubmit={async (values: any, { resetForm }) => {}}
            >
                {({ resetForm, errors, touched, validateForm, values }) => (
                    <Form className="row">
                        <span
                            className="contact-form-modal__close d-block"
                            onClick={() => closeModalHandler(resetForm)}
                        >
                            +
                        </span>

                        <div className="col-md-8 form-group">
                            <label htmlFor="subject">{t('f:contactForm.firstName')}</label>
                            <Field id="firstName" name="firstName" placeholder={t('f:contactForm.firstName')} />
                            {hasErrors(errors, 'subject', touched)}
                        </div>
                        <div className="col-md-8 form-group">
                            <label htmlFor="subject">{t('f:contactForm.lastName')}</label>
                            <Field id="lastName" name="lastName" placeholder={t('f:contactForm.lastName')} />
                            {hasErrors(errors, 'subject', touched)}
                        </div>
                        <div className="col-md-8 form-group">
                            <label htmlFor="email">{t('f:contactForm.email')}</label>
                            <Field id="email" name="email" placeholder={t('f:contactForm.email')} />
                            {hasErrors(errors, 'email', touched)}
                        </div>

                        <div className="col-md-12 m-auto mt-50">
                            <button
                                className="button-main button-primary d-block m-auto"
                                type="submit"
                                onClick={validateForm}
                            >
                                {t('f:button.send')}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default ContactFormModal;
