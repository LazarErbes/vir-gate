import api from '..';

const contactForm = (body: any) => {
    return api.post(`/contactform`, body);
};

const APIs = {
    contactForm,
};

export default APIs;
