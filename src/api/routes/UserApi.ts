import api from '../index';

const upsertUser = (token: string) => {
    return api.post(`account`, null, {
        headers: { Authorization: 'Bearer ' + token },
    });
};

const updateMe = (data: any) => {
    return api.patch('account', data);
};

const canUpdateCompany = () => {
    return api.get(`account/canUpdateCompany`);
};

const fetchMyCompanyInfo = () => {
    return api.get(`account/company`);
};

const updateMyCompany = (data: any) => {
    return api.put('account/company', data);
};

const updateMyCompanyAsSole = () => {
    return api.put('account/companySole');
};

const fetchMyInfo = () => {
    return api.get(`account`);
};

const userPoriflePicture = (body: any) => {
    return api.post(`/user/profile`, body);
};

const uploadImage = (options: any, data: any) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'text/plain',
        },
    };
    return api.post(options.action, data, config);
};

export default {
    upsertUser,
    updateMe,
    fetchMyInfo,
    fetchMyCompanyInfo,
    updateMyCompany,
    canUpdateCompany,
    updateMyCompanyAsSole,
    uploadImage,
    userPoriflePicture,
};
