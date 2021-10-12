import { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';

const TermsOfUse: FunctionComponent<any> = (props) => {
    const { t } = useTranslation(['f']);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            <div className="terms-of-use__container">
                <p className="wizard-heading terms-of-use__wizard-heading">{t('f:static.termsOfUse')}</p>
            </div>
            <div className="terms-of-use__card-container">
                <Card className="terms-of-use__card terms-of-use">
                    <h1 className="terms-of-use__title mb-30">Virgate Terms and Conditions</h1>
                    <h2 className="terms-of-use__header mt-20">General Provisions</h2>
                    <p className="mt-10">
                        The submission of information to Virgate (as defined below), access to, and use of the Virgate
                        website and platform (located at www.virgate.com) (the “Site” or “Platform”), and the real
                        estate information services provided thereon (collectively, the “Service”) is subject to the
                        following contractually binding terms and conditions (the “Terms and Conditions” or the
                        “Agreement”).
                    </p>
                    <p className="mt-10">
                        If you are viewing, using, or accessing the Service for free, you are a “User.” If you are
                        viewing, using or accessing the Service under a paid fee agreement or subscription, you are a
                        “Member.” These Terms and Conditions refer to Users and Members collectively as “You.” By
                        viewing, using, or accessing the Service, You represent and warrant that You are not an
                        unauthorised competitor of Virgate or any of its affiliates (collectively, “Virgate” or the
                        “Company”) or acting on behalf of a competitor of Virgate in registering for or accessing the
                        Service.
                    </p>
                    <p className="mt-10">
                        By viewing, using or accessing the Service, You agree that You are at least 18 years old and
                        that these Terms and Conditions are a binding legal agreement between You and Virgate. You also
                        agree to be contractually bound by the Privacy Policy, which is available by hyperlink at the
                        top of this page. If You do not agree to these Terms and Conditions, You are prohibited from
                        viewing, using or accessing the Service and must immediately discontinue viewing, use, and/or
                        access. Unless explicitly stated herein otherwise, if You and Virgate have entered into a
                        separate written agreement that covers Your use of a Virgate product or service (the “Licensee
                        Agreement”), the terms and conditions of such agreement shall control with respect to such
                        product or service to the extent they are inconsistent with these Terms and Conditions. All
                        questions concerning these Terms and Conditions should be directed to: contact@virgate.com.
                        Virgate may update these Terms and Conditions at any time, with or without notice to You. You
                        are responsible for frequently reviewing these Terms and Conditions. The latest version of the
                        Terms and Conditions is available on the Virgate website.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Ownership and License Grant</h2>
                    <p className="mt-10">
                        Virgate retains all rights (including Intellectual Property Rights as defined below), title and
                        interest in the Service, the Virgate website, Virgate Materials, Email Alert database, Virgate
                        technology, and all underlying technology and data including any enhancements and improvements
                        thereto as a result of providing the Deliverables hereunder. You may not frame such websites.
                        You will not and will not allow others to: reverse engineer, decompile, disassemble, merge,
                        copy, use, disclose, sell or transfer the underlying source code or structure or sequence of
                        Virgate’s technology or delete or alter author attributes or copyright notices. You shall use
                        the Virgate system solely for Your own individual use and shall not share passwords with others
                        or allow others to use the Virgate system under or through that Your login ID/email and
                        password; nor shall any Member use the Virgate system to list properties or conduct searches on
                        behalf of other non-Member brokerage, research, analyst, sales or other similar personnel.
                        Intellectual Property Rights means all intellectual property rights (throughout the universe, in
                        all media, now existing or created in the future, for all versions and elements, in all
                        languages, and for the entire duration of such rights) arising under statutory or common law,
                        contract, or otherwise, and whether or not perfected, including, without limitation, (a) all
                        rights associated with works of authorship including, without limitation, copyrights, moral
                        rights, copyright applications, copyright registrations, synchronization rights; (b) rights
                        associated with trademarks, service marks, trade names, logos, trade dress, and the applications
                        for registration and registrations of trademarks and service marks; (c) rights relating to the
                        protection of trade secrets and confidential information; (d) rights analogous to those set
                        forth in this definition and any and all other proprietary rights relating to intangible
                        property; and (e) divisions, continuations, renewals, reissues, and extensions of the foregoing
                        (as and to the extent applicable) now existing, later filed, issued, or acquired. You grant
                        Virgate the right to market or list your name or company name as a user or searcher on the
                        Virgate website.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Trademarks</h2>
                    <p className="mt-10">
                        The Site employs various trademarks and service marks of Virgate and of other third parties. All
                        of these trademarks and service marks are the property of their respective owners. You agree not
                        to use or display them in any manner without the prior written permission of the applicable
                        trademark owner.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Confidentiality - Data Room Services</h2>
                    <p className="mt-10">
                        The documents stored in the Virgate Virtual Data Room service are intended to be confidential.
                        Except as otherwise provided herein, Virgate personnel shall not review or disclose to others
                        the documents or other information stored there. Authorised access is designed to be restricted
                        to the Authorised Member(s) that store the information there and other users designated by such
                        Authorised Member(s) to have access to the information.
                    </p>
                    <h2 className="terms-of-use__header mt-20">How the Virgate Platform works</h2>
                    <p className="mt-10">
                        Virgate is a platform and marketplace for institutional grade, commercial real estate
                        transactions.
                    </p>
                    <p>
                        Virgate provides an all-in-one transaction management platform to tailor campaigns and manage
                        property portfolios. Virgate’s smart deal room enables buyers, sellers and brokers to
                        collaborate in real-time, accessing information across desktop and mobile devices.
                    </p>
                    <p className="mt-10">You can access the Platform by logging into the online portal.</p>
                    <p className="mt-10">Key access areas of the Platform include: </p>
                    <ul className="terms-of-use__list mt-10">
                        <li>
                            <p>
                                <b>Deal Search</b>: where sellers and buyers can view and analyse public or private
                                opportunities
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Transaction Management</b>: allow buyers, sellers and consultants to collaborate so
                                deals are concluded transparently and efficiently
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Data Room</b>: allows sellers to securely store, set permissions and present
                                documents to potential buyers
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Research</b>: sellers and consultants can prepare a detailed investment thesis
                                outlining the key benefits of their offering and why this is a good acquisition
                                opportunity
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Marketing</b>: allows users to list properties to a large investor audience and send
                                out automated email communication
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Online Bidding</b>: this function allows buyers to submit their bids online in a
                                standard format that sellers can understand and compare
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Scheduling Assistant</b>: allow users to organise their calendars so there is no
                                overlap with other buyers, facilitating inspections, financial modelling and
                                face-to-face meetings with prospective buyers
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Analytics</b>: integration with major data providers will allow Virgate to provide
                                bespoke analytic dashboards on opportunities using the latest data science and AI
                                technology
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Debt Sourcing</b>: enabling buyers to quickly submit and review debt terms from a
                                wide range of debt providers
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>
                                <b>Portfolio Monitoring</b>: manage your portfolio of assets and stay up to date with
                                the latest research and valuations
                            </p>
                        </li>
                    </ul>
                    <h3 className="terms-of-use__sub-header mt-10">Guest</h3>
                    <p className="mt-10">
                        As a guest you will have limited access to the Virgate Platform. Guest users will only be able
                        to view public opportunities on the Platform as well as the public pages that Virgate allows. If
                        a non-disclosure agreement is required to access a deal, then you will need to register for an
                        account and log in as a Member in order to gain access.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Member</h3>
                    <p className="mt-10">
                        Members are registered users of the Virgate Platform. Members will be given access to upload
                        properties into the system and benefit from the analytics Virgate provides. Members choosing to
                        upload properties will be able to manage all their assets in one place. Members will also be
                        able to enter confidential deal rooms. Sellers on the platform will be able to advertise
                        off-market opportunities to targeted Members.
                    </p>
                    <p className="mt-10">
                        Members will either be individual users, not linked or associated with any other Members, or
                        companies that have a relationship with other Members on the platform. Members can convert their
                        accounts to companies if there are multiple Members from the same company, all subsequent users
                        joining the Platform will then automatically form part of this company.
                    </p>
                    <p className="mt-10">
                        Members associated with a company will have certain permissions in their account page to provide
                        services such as buy-side advisory and debt. These will allow users to provide these services on
                        opportunities within the Platform. Users that have selected these services will select
                        geographic and sector preferences to understand limitations to their services. Once services
                        have been selected they will be advertised on opportunities that meet the criteria. Note that
                        not all services will be available on every opportunity as sellers have the right to allow or
                        disallow services. Services will be charged.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Seller</h3>
                    <p className="mt-10">
                        As a Seller you will be responsible for the property listing that you have put on the market.
                        You only become a Seller when you are in the project team of a live opportunity that is being
                        presented to buyers. At this time you take responsibility for the sale, although you can grant
                        access to a consultant/broker to be on your project team. These consultants/brokers can have
                        varying levels of permission within the deal room which can be set. Sellers that list on Virgate
                        will be subject to a success only fee as outlined in the listing process.
                    </p>
                    <p className="mt-10">
                        The Platform will track investor interest, online bid submissions, non-disclosure agreements,
                        investor list status reports, key contacts, property particulars, confidential documentation,
                        financial information and email marketing campaigns.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Buyer</h3>
                    <p className="mt-10">
                        Members will become Buyers in select opportunities where they have been granted access to a deal
                        room. This will give them permission on an opportunity basis to gain access to confidential
                        information. It will also allow them to view property summary, financials, research, transaction
                        information, debt sourcing, FAQ’s, the scheduling assistant and to submit bids online. It will
                        also allow access to Virgate’s dedicated debt sourcing function where buyers can reach out to
                        debt providers and view their terms.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Bid Process</h3>
                    <p className="mt-10">
                        Virgate allows the submission of bids through the online deal room. Sellers are able to adjust
                        key parameters of the bidding function in order to tailor and experience that will not only
                        maximise the number of bids received but also provide a competitive environment to maximise
                        pricing of the bids. Buyers will be able to edit and update their bids any time before the bid
                        deadline, each Buyer will need to submit the required information outlined by the Seller in
                        order to successfully submit a bid.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Membership Privileges</h3>
                    <p className="mt-10">
                        Membership privileges are granted by Virgate to individuals exclusively and are granted
                        specifically to registered members only. Membership rights cannot be assigned, sublicensed,
                        distributed, shared, viewed, accessed, or otherwise transferred to anyone other than the
                        registered Member without the express written permission of Virgate. By completing the
                        registration process You become a “Member,” and You represent and warrant that the information
                        You provide is true, accurate, complete, and current. Each Member must maintain a valid email
                        address and a password, which shall be utilised for logging on to the Virgate system. Members
                        are not permitted to share their individual login information with others. Virgate has the right
                        to refuse or terminate service to any Member, individual, organisation, or firm (and all persons
                        associated or affiliated with said organisation or firm) that fails to abide by the Terms and
                        Conditions, as posted and displayed on the Virgate website, or abuses its rights related to the
                        Service. Upon registration, which is free, User becomes a Member. Users and Members may search
                        using the Service, and will receive access to the available advertised properties matching the
                        designated search parameters. A Member will be able to view exclusive opportunities, off market
                        opportunities, sign non-disclosure agreements and fully participate in the deal room
                        functionality. Members may also list properties on the Service, but those listings will only be
                        able to be fully accessed and viewed in the search results generated on the Company’s
                        www.Virgate.com site.
                    </p>
                    <p className="mt-10">
                        Virgate utilises email as a vital and primary communication channel with Members, who hereby
                        acknowledge and grant Virgate the permission to communicate with them via email (as well as
                        other communication channels such as phone) for any purposes Virgate determines to be relevant
                        including, but not limited to, system messages, product updates, service announcements, and
                        other marketing messages. Virgate will honour Member’s request to opt out of marketing messages
                        and other privacy-related requests to the extent required by law. Due to the nature of the
                        Platform, certain email communications may be considered critical from an approval and system
                        security perspective and Virgate reserves the right to send communication at all times where
                        user specific input is required in order to provide the Services. By becoming a Member, You
                        acknowledge and agree that the Company may record telephone and other electronic communications
                        it has with You for their internal business purposes, including but not limited to training and
                        quality assurance purposes.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">
                        Submission and Administration of Listings and Bids
                    </h3>
                    <p className="mt-10">
                        Members may submit to Virgate property descriptions, photographs, images, videos (which may
                        include sound and/or music), graphics and financial, contact or other information (collectively,
                        the “Submitted Content”) for each listing and as part of the bid submission process in Virgate.
                        By submitting a listing or a bid, Member represents, warrants and agrees that (a) You own or
                        have the full right, power and authority to grant to Virgate use of and rights in and to all
                        Submitted Content that You upload, post, e-mail or otherwise transmit to Virgate; (b) Your
                        license of such content to Virgate hereunder does not, and the use or license of such content by
                        Virgate to third parties will not, infringe any right or interest owned or possessed by any
                        third party; (c) there are no claims, judgments or settlements to be paid by You, or pending
                        claims or litigation, relating to such content; (d) any Submitted Content which is related to a
                        listing or a bid is accurate, correct, free from errors; (e) any bid submission made can be
                        effected in order for an opportunity to become a Completed Transaction; and (f) You will fully
                        indemnify Virgate against any and all damages or other losses, and any related attorney’s fees,
                        other fees, and/or expenses, incurred by the Company as a result of any breach of the foregoing
                        representations or in connection with Your Submitted Content, including, without limitation, as
                        a result of any claim brought by a third party in connection with Your Submitted Content,
                        whether or not such claim prevails. With respect to all Submitted Content You have uploaded in
                        the past or elect to upload in the future, post, e-mail or otherwise transmit to or via the
                        Service, Virgate acknowledges that You retain any applicable ownership rights that You may have
                        with respect to the Submitted Content. You nonetheless grant Virgate and its affiliates and
                        their licensees a royalty-free, worldwide, perpetual, irrevocable, non-exclusive and fully
                        sub-licensable right and license (through multiple tiers) to use, reproduce, adapt, aggregate,
                        perform, display, publish, translate, prepare derivative works from, modify, distribute, sell,
                        and take any other action with respect to all such Submitted Content (in whole or part), whether
                        submitted in the past or in the future, and/or to incorporate it in other works in any form,
                        media, or technology now known or later developed. Member further acknowledges and agrees that
                        Virgate may preserve any such Submitted Content, whether submitted in the past or in the future,
                        and may also disclose such Submitted Content in its sole discretion (including, without
                        limitation, within other products offered by Virgate and its affiliates, including other Virgate
                        Group, Inc. companies). Member agrees not to submit any Submitted Content to Virgate unless
                        Member has received all necessary rights and authorizations, including from the photographer or
                        videographer and/or copyright owner of any photographs or videos, to publish and advertise the
                        property listing and respective bid submission on Member’s website and Virgate’s website.
                        Specifically, Member will not submit a photograph if Member received the photograph from a third
                        party information provider under the terms of a license that does not allow posting of such
                        photograph or video on the Virgate website. Members may submit videos personally created by them
                        or their direct employees or clients who have given permission. Members may also upload or
                        otherwise submit videos created or produced by third-party video tour providers provided they
                        have obtained any necessary consents and permissions to do so. Where Member’s listing
                        incorporates content provided by Virgate or its affiliates, such as property photos or other
                        images, information, tools provided by Virgate (including, but not limited to, the “Acceptance
                        Details” feature that populates with relevant information when an agreement is executed through
                        the Virgate website), forms, agreements (collectively, “Virgate Materials”), Member is granted a
                        limited, revocable, exclusive and non-sub-licensable license to use such Virgate Materials
                        strictly in connection with Member’s Virgate listing. All other rights to Virgate Materials are
                        expressly reserved. The Company may, in its sole discretion but without any obligation to search
                        for such, remove property listings that are alleged to have been submitted in violation of this
                        provision. In addition, the Company may require additional evidence of compliance with this
                        provision from Members who are alleged to have submitted property listings, bids, Submitted
                        Content or other information in violation of these binding Terms and Conditions. The Company
                        will, in its sole discretion, terminate the accounts of, and refuse service to, any Member who
                        repeatedly or knowingly violates these binding Terms and Conditions. Member agrees to maintain
                        accurate contact information (specifically, a valid phone number and email address) in order to
                        submit and maintain active property listings and bids on the Virgate website. No robot, spider
                        or other automated service may be used to submit listings or bids to the Service. The Company
                        shall have the sole authority to choose the manner in which any property listing will be
                        searched, displayed, accessed, viewed, downloaded, copied, and otherwise used on the Virgate
                        website and Company shall have the right to modify the property listing in the exercise of its
                        rights under these binding Terms and Conditions. Listings that are not modified or renewed
                        within a 75-day period are automatically changed to “Unpublished” and are no longer viewable on
                        Virgate.com. Member (a) represents and warrants that all properties and associated information
                        provided by Member, including Submitted Content, will be accurate; (b) agrees not to post a
                        property listing on the Virgate marketplace under a name other than the individually named
                        licensed real estate agent or agents that have been engaged by the property owner to market the
                        property under the terms of a duly executed listing agreement with the owner (shared accounts,
                        e.g. listings@abcrealty.com are strictly prohibited); (c) agrees to administer the properties
                        provided by Member and maintain their accuracy at all times. The Company reserves, in a manner
                        consistent with reasonable commercial business practices, the right to remove all or any part of
                        the property listings or bids posted on the Virgate website. Member is entirely responsible, and
                        Virgate accepts no responsibility, for the Submitted Content from the Member in respect of a
                        listing, bid or otherwise. While Virgate will undertake reasonable efforts to ensure the
                        Platform is maintained and in working order, for data backup and business resumption, Member
                        will be solely responsible for retaining back-up copies of all information, photographs and
                        other materials it provides to Virgate. Member agrees that Virgate may adjust portions of the
                        information contained within the Service (e.g., within property listings). Any such adjustments
                        will have no material impact on the meaning and interpretation of property listings, but will
                        serve as a means of uniquely identifying the property listings. Member accepts that this is a
                        legitimate and lawful security precaution on the part of Virgate, and accepts further that in
                        the event that any third party has access to property listings that can be identified as having
                        such unique adjustments, this shall constitute a prima facie breach of security and of these
                        Terms and Conditions.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Use of Information</h2>
                    <p className="mt-10">
                        You agree to treat all information obtained from the Service, including Virgate Materials,
                        listings, member directory, and any information otherwise made available to You in the Service
                        (individually and collectively, the “Content”) as proprietary to Virgate. You agree that Content
                        reserved for Members will be maintained as confidential and shall be protected as a trade secret
                        of Virgate. Virgate does not ensure the accuracy of, endorse or recommend any Content and You
                        use such Content at Your own risk. You may view, access, or otherwise use the Content solely to
                        obtain initial information from which further evaluation and investigation may commence. You
                        shall limit access to, viewing of, and use of active property listings and broker directory
                        information to personal and internal use, and shall not use any information obtained from the
                        Service for further distribution, publication, public display, or preparation of derivative
                        works or facilitate any of these activities in any way. You shall not use or reproduce any
                        Content that is obtained from the Service, or that is otherwise made available to You in the
                        Service, for or in connection with any other listing service or device. You further shall not
                        use the Service in any other manner for or in connection with any other listing service or
                        device. You shall not use the Service as part of any effort to compete with Virgate, including,
                        without limitation, using the Service to provide, alone or in combination with any other product
                        or service, any database services to any third party or any use that causes a reduction or loss
                        from an existing or potential Virgate Member, nor shall You remove, erase, or tamper with any
                        copyright or other proprietary notice printed or stamped on, affixed to, or encoded or recorded
                        in the Service. You shall not use any robot, spider or other automated process to submit
                        listings, monitor, scrape, data mine or copy Virgate products, services or information;
                        decompile, decode or reverse engineer Virgate software; or use Virgate products or services in
                        an unlawful manner, such as for offensive, abusive, tortious, libellous, defamatory or other
                        illegal purposes. You assign Virgate the right to pursue enforcement of copyright and other
                        intellectual property claims against third parties that have, without authorization, and in
                        violation of these Terms and Conditions, scraped, copied, or distributed content from your
                        Submissions and for which You have not granted such third parties a separate license to use.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Passwords/Logins</h2>
                    <h3 className="terms-of-use__sub-header mt-10">Sellers</h3>
                    <p className="mt-10">
                        Each Seller (including any consultant or Seller authorised representative as the case may be)
                        agrees to pay the amount of US$15,000 for any transaction which completes either directly or
                        indirectly through the Virgate Platform (a Completed Transaction). Fees due to Virgate in
                        respect of all Completed Transactions shall be made using the payment method indicated. Fees
                        owed depend on the specific type and quantity of Virgate products, services, information, or
                        deliverables (collectively “Deliverables”) ordered. Payment of fees shall not be contingent on
                        any events other than the delivery of the ordered Deliverables. Any attorney fees, court costs,
                        or other costs incurred in collection of delinquent undisputed amounts shall be the
                        responsibility of and paid for by the Seller. If payment is not current, Virgate may immediately
                        cease to provide any and all Deliverables to the Seller. The fees do not include sales, use,
                        excise or any other taxes or fees now or hereafter imposed by any governmental authority with
                        respect to the Deliverables. At Virgate’s option, the Seller shall pay such taxes or fees
                        directly or pay to Virgate any such taxes or fees immediately upon invoicing by Virgate. Virgate
                        is required to collect sales tax on purchases in select countries. Recurring charges will
                        include sales tax in accordance with applicable laws of your country.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Consultants</h3>
                    <p className="mt-10">
                        For Consultant subscriptions, Virgate may increase subscription prices annually, on the
                        anniversary of the subscription’s start date. To view your billing information, visit My
                        Account. Monthly Premium subscriptions will automatically renew using the Member’s current
                        credit card account number unless Member or Virgate cancels the subscription three (3) days
                        prior to the renewal date. Member cancellations should be made online via the “My Account” tab,
                        once Member has logged into www.Virgate.com. The fees paid for monthly subscriptions are
                        non-refundable, regardless of whether the subscription is terminated prior to the end of the
                        then-current monthly billing period. No partial month refunds will be provided. Except as
                        otherwise provided herein, all other member subscriptions, including quarterly and annual
                        commitment subscriptions, will automatically renew for additional terms equalling the original
                        term unless Member or Virgate provides three (3) days’ advance written notice of non-renewal.
                        Quarterly and annual commitment subscriptions may be cancelled as of the end of term only; no
                        mid-term cancellations will be permitted. All cancellation and non-renewal requests by Member
                        will be processed within five (5) business days. Once the cancellation is processed, a
                        confirmation email will be sent via the Member’s email account on record with Virgate.
                    </p>
                    <h3 className="terms-of-use__sub-header mt-10">Debt Providers</h3>
                    <p className="mt-10">
                        Debt Providers agree to pay the amount of US$15,000 for any debt origination which completes
                        either directly or indirectly through the Virgate Platform (an “Origination Transaction”). Fees
                        due to Virgate in respect of all Origination Transactions shall be made using the payment method
                        indicated. Fees owed depend on the specific type and quantity of Virgate products, services,
                        information, or deliverables (collectively “Deliverables”) ordered. Payment of fees shall not be
                        contingent on any events other than the delivery of the ordered Deliverables. Any attorney fees,
                        court costs, or other costs incurred in collection of delinquent undisputed amounts shall be the
                        responsibility of and paid for by the Member. If payment is not current, Virgate may immediately
                        cease to provide any and all Deliverables to the Member. The fees do not include sales, use,
                        excise or any other taxes or fees now or hereafter imposed by any governmental authority with
                        respect to the Deliverables. At Virgate’s option, the Member shall pay such taxes or fees
                        directly or pay to Virgate any such taxes or fees immediately upon invoicing by Virgate. Virgate
                        is required to collect sales tax on purchases in select countries. Recurring charges will
                        include sales tax in accordance with applicable laws of your countries.
                    </p>
                    <p className="mt-10">
                        If a Member has a question about a cancellation, the Member should contact contact@virgate.com
                        The Company reserves the right to change its fees or billing methods at any time. The Company
                        will provide timely notice to the affected Members of any such changes.
                    </p>
                    <p className="mt-10">
                        It is the Member’s responsibility to promptly provide the Company with any contact or billing
                        information changes or updates (including phone number, email address, credit card numbers,
                        etc.). Account updates should be made online via the “My Account” tab, once Member has logged
                        into www.Virgate.com. Virgate does not validate all credit card information required by the
                        Member’s payment provider to secure payment.
                    </p>
                    <p className="mt-10">
                        The Member must notify Virgate about any billing problems or discrepancies within 90 days after
                        charges first appear on their Account statement. If it is not brought to Virgate’s attention
                        within 90 days, Member agrees to waive their right to dispute such problems or discrepancies.
                        Notwithstanding anything to the contrary in the Licensee Agreement, if any, Virgate reserves the
                        right to discontinue the provision of all or any portion of the Deliverables, in which case (i)
                        Member shall only be responsible for paying fees associated with that portion of the
                        Deliverables (if any) that continue to be provided after the effective date of such termination,
                        and (ii) Virgate shall refund any fees (if any) paid by Member for provision of the discontinued
                        Deliverables after the effective date of such termination.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Fees</h2>
                    <p className="mt-10">
                        You are responsible for the timely payment of any fees incurred by your use of components and
                        Services available on the Site or via links to other web sites, and all taxes applicable to your
                        use of the Services.
                    </p>
                    <p className="mt-10">
                        SUBJECT TO THE TERMS OF ANY LICENSE AGREEMENT BETWEEN VIRGATE AND YOU, WE RESERVE THE RIGHT, AT
                        ANY TIME AND FROM TIME TO TIME, TO PROSPECTIVELY CHANGE THE NATURE AND AMOUNT OF FEES CHARGED
                        FOR ACCESS TO THE SERVICES OR ANY OF THE COMPONENTS OR SERVICES AVAILABLE ON THE SITE, AND THE
                        MANNER IN WHICH SUCH FEES ARE ASSESSED.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Unsolicited Commercial Email (Spam)</h2>
                    <p className="mt-10">
                        Virgate prohibits the use of our system or its tools to generate or send unsolicited commercial
                        email (spam). You may not use the Service, or other email services that Virgate offers to send
                        spam (i.e. unsolicited commercial email) or otherwise send content that would violate these
                        Terms and Conditions. By using the Virgate Platform, You agree to send email only to those who
                        have given You consent or with whom You have an established business relationship. Virgate has
                        the right to revoke the privileges of any party who breaches these terms.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Privacy</h2>
                    <p className="mt-10">
                        Virgate is committed to respecting the privacy of Your personal information in connection with
                        Your use of this Site. We take great care to keep Your personal information confidential and
                        secure. However, the Internet is not a totally secure medium of communication. For this reason,
                        We cannot guarantee the privacy of any information You input on the Site, send to Us, or request
                        be delivered to You on the Internet. Virgate will not be responsible for any damages You or
                        others may suffer as a result of the loss of confidentiality of any such information.
                    </p>
                    <p className="mt-10">
                        Use of the Site is subject to Virgate’s Privacy Policy, located at www.virgate.com and included
                        at the top of these Terms and Conditions as a hyperlink, and which is hereby incorporated into,
                        and made part of, these Terms and Conditions. Virgate reserves the right, and You authorise Us,
                        to use the Services and any and all other personal information provided by You in any manner
                        consistent with Our Privacy Policy.
                    </p>
                    <p className="mt-10">
                        In accessing Our Platform, you are deemed to have agreed to abide by the provisions of the
                        Personal Data Protection Act 2012 of Singapore, and its associated subsidiary legislation,
                        regulations and/or guidelines.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Termination</h2>
                    <p className="mt-10">
                        In addition to any other termination rights permitted herein, Virgate reserves the right to
                        terminate or suspend a Member’s account upon a good faith determination of a violation of these
                        binding Terms and Conditions or any material provision of another agreement between the parties
                        or their affiliates. Cause for termination includes, but is not limited to, breaches or
                        violations (including threatened breaches or violations) of the Terms and Conditions, requests
                        by law enforcement, fraudulent or illegal activity by You, discontinuance or material
                        modification of Virgate services, non-payment of fees owed by You in connection with Virgate or
                        its affiliates’ services, account inactivity or technical or security issues. Upon termination,
                        Virgate shall have no obligation to maintain or forward any content in your account.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Platform compatibility</h2>
                    <p className="mt-10">
                        Different models or versions of routers, browsers and devices may have firmware or settings that
                        are not compatible with the Virgate Platform. While we continuously develop the Virgate Platform
                        in order to, as far as possible, support all commonly used devices, models and/or browsers in
                        markets where the Virgate Platform is likely to be accessed from, we do not warrant
                        compatibility of the Virgate Platform with specific devices, models and/or browsers.
                    </p>
                    <p className="mt-10">
                        Our Site and Platform may require data network, and due to the device, model and/or browser,
                        there may be delay/hang in the function of the device from consumption of memory and/or data. We
                        shall not be responsible nor liable for any such malfunctions, slowness or hang of your device
                        from using and/or accessing our Site or Platform. We will use commercially reasonable efforts in
                        resolving such reported malfunctions towards the consistent performance of our Site and
                        Platform.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Limitation of Liability and Indemnification</h2>
                    <p className="mt-10">
                        IN NO EVENT SHALL VIRGATE BE LIABLE FOR ANY INDIRECT, EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL
                        OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS,
                        LOSS OF BUSINESS, INTERRUPTION OF BUSINESS, LOSS OF GOODWILL OR BUSINESS REPUTATION, OTHER
                        INTANGIBLE LOSS, INACCURACIES, ERRORS OR OMISSIONS IN THE INFORMATION, PRODUCTS OR SERVICES
                        PROVIDED, RELIANCE BY THE YOU ON THE COMPLETENESS OR ACCURACY OF INFORMATION, PRODUCTS OR
                        SERVICES, LOSS OF USE OF DATA, LOSS OF DATA, COMPUTER VIRUSES, COMPUTER CORRUPTION, DELETION OR
                        CORRUPTION OF CONTENT OR DATA MAINTAINED OR TRANSMITTED THROUGH THE USE OF VIRGATE’S SERVICES,
                        PRIVATE LISTING FUNCTIONALITY OR MEMBER’S FAILURE TO KEEP LOGIN AND/OR PASSWORD SECURE AND
                        CONFIDENTIAL ARISING OUT OF THESE BINDING TERMS AND CONDITIONS. Your exclusive remedy, and
                        Virgate’s entire liability under these Terms and Conditions shall be a refund of the fees paid
                        to Virgate hereunder, and in no event will Virgate’s liability for any reason exceed such fee.
                        Virgate (and its officers, directors, employees and agents) shall not be liable for any damages
                        whatsoever arising from Member’s use of the Deliverables, and Member shall indemnify Virgate
                        (and Virgate’s officers, directors, employees and agents), and hold each of them harmless from
                        and against any and all costs, damages or losses by any of them (including, without limitation,
                        reasonable attorneys’ fees) as a result of a claim by any person other than Member arising from
                        Member’s use or application of the Deliverables. Some jurisdictions do not allow the exclusion
                        of liability for certain damages. As a result, some of the exclusions above may not apply to
                        You.
                    </p>
                    <p className="mt-10">
                        VIRGATE SHALL NOT HAVE ANY LIABILITY FOR ANY DAMAGES RESULTING FROM ANY FAILURE TO PERFORM ANY
                        OBLIGATION HEREUNDER OR FROM ANY DELAY IN THE PERFORMANCE THEREOF DUE TO CAUSES BEYOND VIRGATE'S
                        CONTROL, INCLUDING, WITHOUT LIMITATION, INDUSTRIAL DISPUTES, ACTS OF GOD OR GOVERNMENT, PUBLIC
                        ENEMY, WAR, FIRE, OTHER CASUALTY, FAILURE OF ANY LINK OR CONNECTION WHETHER BY COMPUTER OR
                        OTHERWISE, OR FAILURE OF TECHNOLOGY OR TELECOMMUNICATIONS OR OTHER METHOD OR MEDIUM OF STORING
                        OR TRANSMITTING THE PRODUCT.
                    </p>
                    <p className="mt-10">
                        BY USING THE SERVICE, YOU WAIVE AND RELEASE VIRGATE FROM ANY AND ALL LIABILITY OF ANY AND EVERY
                        KIND OR CHARACTER, KNOWN OR UNKNOWN, WHICH YOU MIGHT HAVE ASSERTED OR ALLEGED AGAINST ANY OF THE
                        VIRGATE BY REASON OF OR ARISING OUT OF THE SERVICE OR YOUR USE THEREOF. THE WAIVERS AND RELEASES
                        SET FORTH IN THESE TERMS AND CONDITIONS INCLUDE CLAIMS OF WHICH YOU ARE PRESENTLY UNAWARE OR
                        WHICH YOU DO NOT PRESENTLY SUSPECT TO EXIST WHICH, IF KNOWN BY YOU, WOULD MATERIALLY AFFECT YOUR
                        WAIVER AND RELEASE SET FORTH ABOVE.
                    </p>
                    <p className="mt-10">
                        You agree to indemnify, defend, and hold harmless Virgate from and against any third party
                        action, suit, claim or demand and any associated losses, expenses, damages, costs and other
                        liabilities (including reasonable attorneys' fees), arising out of or relating to your (and your
                        users') Submitted Content, your violation of any third party right, including without limitation
                        any copyright, property, or privacy right, use or misuse of any portion of the Service, or your
                        violation of these Terms and Conditions. You shall cooperate as fully as reasonably required in
                        the defence of any such claim or demand. Virgate and any third party involved in creating,
                        producing, or delivering the Service reserves the right to assume the exclusive defence and
                        control of any matter otherwise subject to indemnification by You, at your expense, and You
                        shall not in any event settle any such matter without the written consent of Virgate and any
                        such third party.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Warranty Disclaimers</h2>
                    <p className="mt-10">
                        THE LISTINGS, SERVICE, PROPERTY COMPS INFORMATION, BID SUBMISSIONS, PROPERTY FACTS INFORMATION,
                        PRO TOOLS AND VIRGATE MARKET TREND REPORTS ARE PROVIDED “AS IS” AND "AS AVAILABLE" WITHOUT
                        WARRANTY OF ANY KIND. VIRGATE MAKES NO PROMISES, REPRESENTATION OR WARRANTIES, EITHER EXPRESS,
                        IMPLIED, STATUTORY, OR OTHERWISE, WITH RESPECT TO THE LISTINGS, SERVICE, SALES COMP INFORMATION,
                        BID SUBMISSIONS, PROPERTY FACTS INFORMATION, OR VIRGATE MARKET TREND REPORTS, INCLUDING THEIR
                        ACCURACY, OPERATION, CONFORMITY TO ANY REPRESENTATION OR DESCRIPTION, OR THE EXISTENCE OF ANY
                        LATENT OR PATENT DEFECTS, AND VIRGATE SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF
                        MERCHANTABILITY, TITLE, NONINFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE, WARRANTIES
                        RELATING TO ENCUMBERANCES OR LIENS, AND THE IMPLIED CONDITIONS OF SATISFACTORY QUALITY AND
                        ACCEPTANCE AS WELL AS ANY LOCAL JURISDICTIONAL ANALOGUES TO THE ABOVE AND OTHER IMPLIED OR
                        STATUTORY WARRANTIES. VIRGATE MAKES NO PROMISES, REPRESENTATIONS OR WARRANTIES THAT ACCESS TO
                        THE SERVICES WILL BE UNINTERRUPTED OR SECURE. ANY MATERIAL DOWNLOADED FROM VIRGATE’S WEBSITE,
                        INCLUDING LISTINGS, SERVICE, PROPERTY COMPS INFORMATION, BID SUBMISSIONS, PROPERTY FACTS
                        INFORMATION, PRO TOOLS AND VIRGATE MARKET TREND REPORTS IS ACCESSED AT YOUR OWN DISCRETION AND
                        RISK, AND YOU WAIVE ALL CLAIMS AND CAUSES OF ACTION RELATING TO ANY DAMAGE TO YOUR COMPUTER
                        SYSTEM, INTERNET ACCESS, DOWNLOAD OR DISPLAY DEVICE OR LOSS OR CORRUPTION OF DATA THAT RESULTS
                        FROM SUCH DOWNLOADS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM VIRGATE OR
                        ITS SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS AND CONDITIONS. SOME
                        JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. AS A RESULT, SOME OF THE
                        EXCLUSIONS ABOVE MAY NOT APPLY TO YOU.
                    </p>
                    <p className="mt-10">
                        ANY DOCUMENTS, PICTURES, OR OTHER INFORMATION AVAILABLE THROUGH THE SERVICE ARE FOR
                        INFORMATIONAL PURPOSES ONLY, AND MAY NOT REPRESENT THE CURRENT CONDITION OF A PROPERTY OR THE
                        CONDITION OF THE PROPERTY AT THE TIME OF LISTING OR SALE. THE POSTING OF PICTURES THROUGH THE
                        SERVICE DOES NOT CONSTITUTE A GUARANTEE THAT ANY ITEMS REPRESENTED IN THE PICTURES WILL BE
                        PRESENT WHEN A BUYER TAKES POSSESSION OF A PROPERTY. YOU ARE ENCOURAGED TO CONDUCT YOUR OWN DUE
                        DILIGENCE AND INVESTIGATE ALL MATTERS RELATING TO ANY PROPERTIES. YOU SHOULD SEEK INDEPENDENT
                        ADVICE, INCLUDING LEGAL ADVICE, TO PERFORM YOUR DUE DILIGENCE AND THAT YOU USE GOOD FAITH
                        EFFORTS IN DETERMINING THAT THE CONTENT OF ALL INFORMATION PROVIDED TO OR OBTAINED BY YOU IS
                        ACCURATE.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Forms and Agreements</h2>
                    <p className="mt-10">
                        By viewing, using or accessing the Service, including by using any tool, form or agreement
                        provided on the Virgate website, or by uploading any other form or agreement to the Virgate
                        website, You (i) acknowledge that Virgate is not a party to the transaction contemplated by such
                        form or agreement, (ii) agree that these Terms and Conditions, including the warranty
                        disclaimers, waivers, limitations of liability and indemnification set forth in these Terms and
                        Conditions apply to such tools, forms and agreements and Your use thereof, and (iii) acknowledge
                        that Virgate makes no representations or warranties as to the sufficiency, legal effect or
                        enforceability of any such tools, forms and agreements and by your use of the same You confirm
                        that You have made your own independent analysis of the sufficiency, legal effect and
                        enforceability of any such tools, forms and agreements without reliance upon Virgate.
                    </p>
                    <p className="mt-10">
                        Virgate make no representations or warranties as to the sufficiency, legal effect or
                        enforceability of any electronic signatures including, without limitation, what law may govern
                        any such electronic signatures. By viewing, using or accessing the Service, You acknowledge and
                        confirm that You have made your own independent analysis of the sufficiency, legal effect,
                        governing law and enforceability of any such electronic signatures.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Maps and Directions Disclaimer</h2>
                    <p className="mt-10">
                        The maps and directions information provided by Virgate have been obtained from sources believed
                        reliable, including Microsoft Maps which is supplied by Microsoft Corporation, and its use is
                        subject to Microsoft's applicable Terms of Use. While Virgate does not doubt the accuracy of the
                        maps and/or directions, we have not verified the information and make no guarantees, warranties
                        or representations about the maps and/or directions. It is your responsibility to independently
                        confirm the accuracy and completeness of any map and/or set of directions. You assume all risk
                        of use. Neither Virgate nor its partners or suppliers assume any responsibility for loss, damage
                        or delay caused by Your use of and/or reliance on Your use of Virgate's information, products or
                        services.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Links to Third Party Sites</h2>
                    <p className="mt-10">
                        This website may contain hyperlinks to other websites operated by parties other than Virgate
                        which are beyond Virgate’s control. Parties other than Virgate may provide services or sell
                        product lines on this site that take you outside of our service. This includes links from
                        advertisers, sponsors, and content partners that may use Virgate’s logo(s) as part of a
                        co-branding relationship. For example, if You click on a banner advertisement the click may take
                        You off the Virgate site. Virgate does not control, is not responsible for examining or
                        evaluating, and does not warrant the offerings of, any of these businesses or individuals or the
                        content of their websites. Virgate does not assume any liability for the actions, product, and
                        content of all of these and any other third parties. Virgate makes no representations and cannot
                        be held responsible for the accuracy, relevancy, copyright compliance, legality, or decency of
                        material on such third-party websites. When You click on a link that leaves the Virgate site,
                        the site You will land on is not controlled by Virgate and different terms of use and privacy
                        statements may apply. Virgate also does not assume, and expressly disclaims, all liability for
                        any viruses, worms, Trojan horses, defects, or other malfunctions caused by, resulting from,
                        existing within, or in connection with such third-party sites and any links thereto.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Third Party Subscriptions and Data Providers</h2>
                    <p className="mt-10">
                        Virgate uses third party data which flows into the Site and Platform based on Members’
                        permission levels. If the logged in Member is a subscriber of a third party data partner we will
                        feed data from their website into the Virgate Platform so the Member can view this information
                        in Virgate. This integration with third parties is designed to provide the user with the base
                        information needed to make analytics based decisions on Virgate. In providing this information
                        Virgate will query the third party data provider to make sure there is a live subscription and
                        the Virgate Member is in fact a paying subscriber of the third party.
                    </p>
                    <p className="mt-10">
                        The Virgate Platform contains links and content related to third party subscriptions and
                        external data providers which are beyond Virgate’s control. Virgate does not control, is not
                        responsible for examining or evaluating, and does not warrant the offerings of, or content
                        provided by, any of these businesses or individuals. Virgate does not assume any liability for
                        the actions, product, and content of all of these and any other third parties. Virgate makes no
                        representations and cannot be held responsible for the accuracy, relevancy, copyright
                        compliance, legality, or decency of material provided by such third parties.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Other Rights of Virgate</h2>
                    <p className="mt-10">
                        You agree that Virgate shall have the right to use Listings and other information submitted to
                        it for any purpose, including, without limitation, for publication of all or part of such
                        Listing on the Internet. Virgate shall have sole authority to choose the manner in which any
                        Listing will be received, displayed and used by the Service, and reserves the right to remove
                        all or any part of a Listing or refuse Services to anyone at any time in its sole discretion.
                        Virgate shall have no obligation to (i) resolve disputes among Users, Members and/or Members or
                        (ii) monitor or verify the accuracy or proper use of the Listings. Virgate reserves the right to
                        modify or change Services and any and all terms and conditions at any time. The most current
                        copy of these terms and conditions will be posted and available for review on Virgate's website,
                        located at http://www.virgate.com.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Claims of Copyright Infringement</h2>
                    <p className="mt-10">
                        If You believe that your work has been copied onto Virgate in a way that constitutes copyright
                        infringement, please provide Virgate the written information specified below:
                    </p>
                    <ul className="terms-of-use__list mt-10">
                        <li>
                            <p>a description of the copyrighted work that You claim has been infringed;</p>
                        </li>
                        <li className="mt-10">
                            <p>
                                identification of the material You claim is infringing, including a description of where
                                such material is located;
                            </p>
                        </li>
                        <li className="mt-10">
                            <p>your address, telephone number, and e-mail address;</p>
                        </li>
                        <li className="mt-10">
                            <p>
                                a signed statement that the information in your notice is accurate, that You have a
                                good-faith belief that the identified use is not authorized by the copyright owner, its
                                agent, or the law; and under penalty of perjury, that You are the copyright owner or are
                                authorised to act on the copyright owner's behalf.
                            </p>
                        </li>
                    </ul>
                    <p className="mt-10">
                        We may forward any notice(s) of alleged infringement to the person(s) who provided the allegedly
                        infringing content. Please note that this procedure is exclusively for notifying Virgate that
                        your copyrighted material has been infringed.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Brokers and Agents</h2>
                    <p className="mt-10">
                        Any Member who identifies himself or herself as a broker or agent on the Virgate website member
                        registration form or otherwise purports to be a broker on Virgate’s service hereby represents
                        and warrants that such Member is validly licensed as a broker and is in compliance with
                        applicable broker requirements in all jurisdictions in which Member is required to be licensed.
                        The Company may, in its sole discretion, but without any obligation to verify the licensure of
                        such individual as a broker or agent, remove from the list of brokers any Member whom the
                        Company believes is not a licensed broker or agent in any applicable jurisdiction. The Company
                        may, in its sole discretion, terminate the accounts of, and refuse services to, any Member who
                        repeatedly or knowingly misrepresents its licensed broker or agent status or upon notification
                        by any agency or similar governmental authority that such Member is not a licensed broker.
                        Virgate does not and shall not have any obligation to independently verify the licensure of
                        individuals identified as brokers and agents on the website. It is your responsibility to
                        confirm the licensed status of any brokers listed on the Virgate website.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Debt Providers</h2>
                    <p className="mt-10">
                        Any Member who identifies himself or herself as a Debt Provider on the Virgate Platform or
                        otherwise purports to be a Debt Provider on Virgate’s service hereby represents and warrants
                        that such Member is a validly licensed Debt Provider and is in compliance with applicable Debt
                        Provider requirements in all jurisdictions in which the Member is required to be licensed.
                        Virgate may, in its sole discretion, but without any obligation to verify the licensure of such
                        individual as a Debt Provider, remove from the list of Debt Providers any Member whom Virgate
                        believes is not a licensed Debt Provider in any applicable jurisdiction. Virgate may, in its
                        sole discretion, terminate the accounts of, and refuse services to, any Member who repeatedly or
                        knowingly misrepresents its licensed Debt Provider status or upon notification by any agency or
                        similar governmental authority that such Member is not a licensed Debt Provider. Virgate does
                        not and shall not have any obligation to independently verify the licensure of individuals
                        identified as Debt Providers on the website. It is your responsibility to confirm the licensed
                        status of any Debt Providers listed on the Virgate website.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Governing Law; Member Right to Arbitrate</h2>
                    <p className="mt-10">
                        These binding Terms and Conditions, and the Deliverables provided by Virgate, shall be governed
                        by the laws of Singapore, without reference to conflict of laws principles. You hereby consent
                        to the exclusive jurisdiction and venue of the courts of Singapore for the adjudication of any
                        disputes or claims arising out of and/or related to these binding Terms and Conditions. If any
                        provision of these binding Terms and Conditions is found to be invalid or unenforceable by a
                        court of competent jurisdiction, such provision shall be severed from the remainder of these
                        Terms and Conditions, which shall remain in full force and effect.
                    </p>
                    <p className="mt-10">
                        You acknowledge that any breach of these binding Terms and Conditions, including, without
                        limitation, the restrictions on competitor use, viewing, or access and the sections above titled
                        “Submission and Administration of Listings” and “Use of Information,” or any unauthorised use of
                        the Service, is a material breach of the Agreement and will cause irreparable harm and injury to
                        the Company, for which there is no adequate remedy at law. Thus, in addition to all other
                        remedies available at law or in equity, You agree that the Company shall be entitled to
                        injunctive relief. Any User, Member, Member, or other individual or entity that violates any
                        term of these binding Terms and Conditions is precluded from enforcing, agrees not to enforce,
                        and covenants not to sue to enforce, any similar contract, including terms and conditions, terms
                        of use and terms of service, asserted by such User, Member, Member, or other individual or
                        entity, or any affiliate thereof, as binding upon Virgate and its affiliates, including other
                        Virgate Group companies. Material breach of these binding Terms and Conditions harms the
                        integrity, functionality, and reputation of Virgate and its affiliates; detracts from Users’ and
                        Members’ trust in and use of the Service; and unfairly harms, thereby causing damage to, the
                        business of Virgate. You agree that, in the event You materially breach these binding Terms and
                        Conditions, You will pay Virgate’s reasonable attorneys’ fees and costs, to be determined by a
                        court or arbitrator.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Waiver and Severability</h2>
                    <p className="mt-10">
                        The failure of Virgate to exercise or enforce a legal right or remedy contained in the Terms and
                        Conditions does not constitute a waiver of any such right or remedy. No waiver of any right,
                        term or provision of the Terms and Conditions is deemed a waiver of any other right, term or
                        provision. If a court of competent jurisdiction finds any provision of the Terms and Conditions
                        to be invalid, You agree that the remaining terms and provisions remain in full force and
                        effect.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Services Auditing and Monitoring</h2>
                    <p className="mt-10">
                        We reserve the right to audit and monitor (manually or through automated means) the use of the
                        Service to ensure compliance with these Terms and Conditions and to maintain and improve the
                        provision of the Service. We also may, but are not required to, monitor the content on the
                        Service using manual review or technical measures to screen, block, filter, edit or remove
                        content. We may terminate or suspend users’ accounts or delete, edit or remove content that we,
                        in our sole discretion, deem illegal, offensive, abusive, in violation of these Terms and
                        Conditions or our other policies, or otherwise inappropriate or unacceptable. All enforcement
                        determinations are made in our sole discretion, and we will not incur any liability or
                        responsibility if we choose to remove or delete any content.
                    </p>
                    <p className="mt-10">
                        You acknowledge, consent, and agree that we may access, preserve, and disclose information about
                        your use of the Service, including your communications and content You submit, if required to do
                        so by law or in a good faith believe that such access, preservation, or disclosure is reasonably
                        necessary to: (i) comply with legal process; (ii) enforce these Terms and Conditions; (iii)
                        respond to claims that any content You submit violates the rights of third parties; (iv) respond
                        to your requests for Member service; or (v) protect the rights, property or personal safety of
                        us, our users and the public.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Notices</h2>
                    <p className="mt-10">
                        All notices to Virgate must be in writing and must be sent by way of e-mail and, in addition, in
                        either registered mail, certified mail, or overnight mail.
                    </p>
                    <h2 className="terms-of-use__header mt-20">Entire Agreement</h2>
                    <p className="mt-10">
                        Except as provided herein, the terms and conditions of the Agreement constitute the entire
                        agreement between the parties and supersede all previous agreements and understanding, whether
                        oral or written, between the parties hereto with respect to the subject matter of the Agreement.
                    </p>
                    <p className="mt-10">Last Updated: [DATE 2021]</p>
                    <p className="mt-100">© 2021 Virgate Pte. Ltd. all rights reserved.</p>
                    <p className="terms-of-use__copyright mt-10">
                        Virgate Pte. Ltd. is a private limited company incorporated in Singapore with registered number:
                        202033680C and having its registered office at 90 Eu Tong Sen Street, #03-02, Singapore 059811.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default TermsOfUse;
