export const getSession = (request) => {
    console.log(request);
    return {
        user: {
            id: '@#$%mdkn',
            name: 'Philip',
            access: 'admin'
        },
    };
};