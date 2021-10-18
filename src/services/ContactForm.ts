import ContactForm from '../api/routes/ContactFormApi';

const contactForm = async (body: any) => {
    const { data } = await ContactForm.contactForm(body);
    return data;
};

const Service = {
    contactForm,
};

export default Service;
