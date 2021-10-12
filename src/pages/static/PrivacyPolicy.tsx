import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';

const PrivacyPolicy: FunctionComponent<any> = (props) => {
    const { t } = useTranslation(['f']);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            <div className='terms-of-use__container'>
                <p className='wizard-heading terms-of-use__wizard-heading'>{t('f:static.privacyPolicy')}</p>
            </div>
            <div className='terms-of-use__card-container'>
                <Card className='terms-of-use__card terms-of-use'>
                    <h1 className='terms-of-use__title mb-30'>Virgate Privacy Policy</h1>
                    <p className='mt-20'>
                        Virgate values your privacy and cares about the way in which your personal information is
                        treated.
                    </p>
                    <p className='mt-10'>This policy describes:</p>
                    <ul className='terms-of-use__list mt-10'>
                        <li>
                            <p>what personal information we collect about you</p>
                        </li>
                        <li>
                            <p>how we obtain your personal information</p>
                        </li>
                        <li>
                            <p>how we use your personal information</p>
                        </li>
                        <li>
                            <p>on what basis we use your personal information</p>
                        </li>
                        <li>
                            <p>how long we keep your personal information </p>
                        </li>
                        <li>
                            <p>who we share your personal information with </p>
                        </li>
                        <li>
                            <p>how we protect your personal information </p>
                        </li>
                        <li>
                            <p>which countries we transfer your personal information to</p>
                        </li>
                        <li>
                            <p>your rights regarding your personal information</p>
                        </li>
                    </ul>
                    <p className='mt-10'>
                        Virgate refers to Virgate Pte. Ltd., a Singapore incorporated technology company. 
                    </p>
                    <p className='mt-10'>
                        If you need further information or have any questions about our privacy policy or practices,
                        please contact us using the details set out at the end of the policy.
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>
                        What personal information do we collect about you?
                    </h3>
                    <p className='mt-10'>
                        As a B2B platform, we collect very limited personal information. However, we may collect certain
                        personal information from you in the course of our business, including through your use of our
                        platform, when you contact or request information from us, when you engage our services or as a
                        result of your relationship with one or more of our staff, real estate service providers, as
                        well as prospective buyers and sellers using our platform.  
                    </p>
                    <p className='mt-10'>The personal information that we process includes:</p>
                    <ul className='terms-of-use__list mt-10'>
                        <li>
                            <p>
                                Basic information, such as your name (including name prefix or title), the company you
                                work for, your title or position and your relationship to a person
                            </p>
                        </li>
                        <li>
                            <p>Contact information, such as your postal address, email address and phone number(s)</p>
                        </li>
                        <li>
                            <p>Professional licence details that may be required in your operational jurisdiction</p>
                        </li>
                        <li>
                            <p>
                                Technical information, such as information from your visits to our website or
                                applications or in relation to materials and communications we send to you
                                electronically 
                            </p>
                        </li>
                        <li>
                            <p>
                                Any other information relating to you which you may provide to us, including information
                                of third parties that you submit through the platform.
                            </p>
                        </li>
                    </ul>
                    <h3 className='terms-of-use__sub-header mt-10'>How we obtain your personal information</h3>
                    <ul className='terms-of-use__list mt-10'>
                        <li>
                            <p>
                                We collect information from you as part of our user interface on our platform, including
                                account creation and questionnaire details as necessary in the course of providing our
                                business services
                            </p>
                        </li>
                        <li>
                            <p>
                                We collect your personal information while monitoring our technology tools and services,
                                including our websites and email communications sent to and from Virgate
                            </p>
                        </li>
                        <li>
                            <p>
                                We gather information about you when you provide it to us, or interact with us directly,
                                for instance engaging with our staff
                            </p>
                        </li>
                        <li>
                            <p>
                                We may collect or receive information about you from other sources, such as keeping the
                                contact details we already hold for you accurate and up to date through either publicly
                                available sources or other Member(s).
                            </p>
                        </li>
                    </ul>
                    <h3 className='terms-of-use__sub-header mt-10'>How we use your personal information</h3>
                    <p className='mt-10'>
                        Virgate collects and processes personal information about you in a number of ways, including
                        through your use of our website and in the provision of services by us.  We use that
                        information:
                    </p>
                    <ul className='terms-of-use__list mt-10'>
                        <li>
                            <p>To provide and improve this website, including auditing and monitoring its use</p>
                        </li>
                        <li>
                            <p>
                                To provide and improve our services to you and to our users, including handling the
                                personal information of others on behalf of our users
                            </p>
                        </li>
                        <li>
                            <p>To provide information requested by you</p>
                        </li>
                        <li>
                            <p>To promote our services, including sending updates, publications and marketing</p>
                        </li>
                        <li>
                            <p>To manage and administer our relationship with you and our users</p>
                        </li>
                        <li>
                            <p>
                                To fulfil our legal, regulatory and risk management obligations, including establishing,
                                exercising or defending legal claims
                            </p>
                        </li>
                    </ul>
                    <h3 className='terms-of-use__sub-header mt-10'>Cookies</h3>
                    <p className='mt-10'>
                        We use for session cookies on our platform. This is for performance (such as keeping a user
                        logged in) or for anonymised analytics. 
                    </p>
                    <p className='mt-10'>
                        Session cookies enable the website you are visiting to keep track of your movement from page to
                        page so you don't get asked for the same information you've already given to the site. Cookies
                        allow you to proceed through many pages of a site quickly and easily without having to
                        authenticate or reprocess each new area you visit.
                    </p>
                    <p className='mt-10'>
                        Session cookies allow users to be recognised within a website so any page changes or item or
                        data selection you do is remembered from page to page.
                    </p>
                    <p className='mt-10'>
                        You can adjust your session cookies through the settings feature of your browser.
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Marketing and other emails</h3>
                    <p className='mt-10'>
                        We use personal information to understand whether you read the emails and other materials, such
                        as publications, that we send to you, click on the links to the information that we include in
                        them and whether and how you visit our website after you click on that link (immediately and on
                        future visits).  We do this by using software that places a cookie on your device which tracks
                        this activity and records it against your email address.
                    </p>
                    <p className='mt-10'>
                        If you receive marketing communications from us and no longer wish to do so, you may unsubscribe
                        at any time by sending an email to [unsubscribe@virgate.com]
                    </p>
                    <p className='mt-10'>
                        The above excludes essential communications which Virgate may need to send to its users in order
                        for the Platform to properly function and for the Services to be provided.
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Services</h3>
                    <p className='mt-10'>
                        We collect, create, hold and use personal information in the course of and in connection with
                        the services we provide to our brands and suppliers.  We will also process personal information
                        provided to us by or on behalf of our brands and suppliers for the purposes of the work we do
                        for them.  The information may be disclosed to third parties to the extent reasonably necessary
                        in connection with that work.  Please also see ‘Who we share your personal information with’ and
                        ‘Which countries we transfer your personal information to’ below.
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>On what basis we use your personal information</h3>
                    <p className='mt-10'>We use your personal information on the following bases:</p>
                    <ul className='terms-of-use__list mt-10'>
                        <li>
                            <p>To comply with legal and regulatory obligations</p>
                        </li>
                        <li>
                            <p>
                                For legitimate business purposes.  Please see ‘How we use your personal information’ for
                                more detail
                            </p>
                        </li>
                    </ul>
                    <h3 className='terms-of-use__sub-header mt-10'>How long we keep your personal information</h3>
                    <p className='mt-10'>
                        Your personal information will be retained in accordance with the requirements of applicable
                        data protection laws and the purpose for which the information is collected and used, taking
                        into account legal and regulatory requirements to retain the information for a minimum period,
                        limitation periods for taking legal action, good practice and Virgate’s business purposes.
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Who we share your personal information with</h3>
                    <p className='mt-10'>
                        We may share your personal information with certain trusted third parties in accordance with
                        contractual arrangements in place with them, including:
                    </p>
                    <ul className='terms-of-use__list mt-10'>
                        <li>
                            <p>Our professional advisers and auditors</p>
                        </li>
                        <li>
                            <p>Suppliers to whom we outsource certain support services</p>
                        </li>
                        <li>
                            <p>IT service providers to Virgate</p>
                        </li>
                        <li>
                            <p>
                                Third parties engaged in the course of the services we provide to users and with their
                                prior consent, such as technology service providers
                            </p>
                        </li>
                        <li>
                            <p>
                                User profile / contact information may be shared with other users of the Platform in
                                connection with certain services including deal room access
                            </p>
                        </li>
                    </ul>
                    <p className='mt-10'>
                        Where necessary, or for the reasons set out in this policy, personal information may also be
                        shared with regulatory authorities, courts, tribunals, government agencies and law enforcement
                        agencies.  While it is unlikely, we may be required to disclose your information to comply with
                        legal or regulatory requirements. We will use reasonable endeavours to notify you before we do
                        this, unless we are legally restricted from doing so.
                    </p>
                    <p className='mt-10'>
                        If in the future we re-organise or transfer all or part of our business, we may need to transfer
                        your information to new Virgate entities or to third parties through which the business of
                        Virgate will be carried out.
                    </p>
                    <p className='mt-10'>
                        Virgate may use social media sites such as Facebook, LinkedIn, Instagram and Twitter.  If you
                        use these services, you should review their privacy policy for more information on how they deal
                        with your personal information.
                    </p>
                    <p className='mt-10'>
                        We do not sell, rent or otherwise make personal information commercially available to any third
                        party, except with your prior permission.
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>How we protect your personal information</h3>
                    <p className='mt-10'>
                        We use a variety of technical and organisational measures to help protect your personal
                        information from unauthorised access, use, disclosure, alteration or destruction consistent with
                        applicable data protection laws. 
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>
                        Which countries we transfer your personal information to
                    </h3>
                    <p className='mt-10'>
                        In order to provide our services we may need to transfer your personal information to locations
                        outside the jurisdiction in which you provide it or where you are viewing this website for the
                        purposes set out in this privacy policy.  This may entail a transfer of your information from
                        Singapore to another country or from another country to Singapore.  Please see ‘Who we share
                        your personal information with’ for more detail on how the information may be shared with
                        Virgate offices and third party service providers.
                    </p>
                    <p className='mt-10'>
                        The level of information protection in countries outside of Singapore may be less than that
                        offered in Singapore. Where this is the case, we will implement appropriate measures to ensure
                        that your personal information remains protected and secure in accordance with applicable data
                        protection laws.  Where our third party service providers process personal data outside of
                        Singapore in the course of providing services to us, our written agreement with them will
                        include appropriate measures, usually standard contractual clauses. 
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Your rights regarding your personal information</h3>
                    <p className='mt-10'>
                        Singapore’s data protection legislation and other applicable data protection laws provide
                        certain rights for data subjects. 
                    </p>
                    <p className='mt-10'>
                        You are entitled to request details of the information we hold about you and how we process it. 
                        You may also have a right in accordance with applicable data protection law to have it rectified
                        or deleted, to restrict our processing of that information, to stop unauthorised transfers of
                        your personal information to a third party and, in some circumstances, to have personal
                        information relating to you transferred to another organisation. You may also have the right to
                        lodge a complaint in relation to Virgate’s processing of your personal information with a local
                        supervisory authority.
                    </p>
                    <p className='mt-10'>
                        If you object to the processing of your personal information, or if you have provided your
                        consent to processing and you later choose to withdraw it, we will respect that choice in
                        accordance with our legal obligations.  
                    </p>
                    <p className='mt-10'>
                        Your objection (or withdrawal of any previously given consent) could mean that we are unable to
                        perform the actions necessary to achieve the purposes set out above (see ‘How we use your
                        personal information’) or that you may not be able to make use of the services offered by us.
                        Please note that even after you have chosen to withdraw your consent we may be able to continue
                        to process your personal information to the extent required or otherwise permitted by law, in
                        particular in connection with exercising and defending our legal rights or meeting our legal and
                        regulatory obligations. 
                    </p>
                    <p className='mt-10'>
                        We must ensure that your personal information is accurate and up to date. Therefore, please
                        advise us of any changes to your information by email to contact@virgate.com
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Data controllers</h3>
                    <p className='mt-10'>
                        There are a number of entities through which Virgate provides services. Virgate’s main IT
                        systems are located in Singapore and controlled by Virgate. 
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Further information</h3>
                    <p className='mt-10'>
                        For further information on our privacy policy or practices or to make a complaint please
                        contact: contact@virgate.com
                    </p>
                    <h3 className='terms-of-use__sub-header mt-10'>Privacy policy changes</h3>
                    <p className='mt-10'>
                        This privacy policy may be updated periodically to reflect changes in our privacy practices.
                    </p>
                    <p className='mt-100'>© 2021 Virgate Pte. Ltd. all rights reserved.</p>
                    <p className='terms-of-use__copyright mt-10'>
                        Virgate Pte. Ltd. is a private limited company incorporated in Singapore with registered number:
                        202033680C and having its registered office at 90 Eu Tong Sen Street, #03-02, Singapore 059811.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
