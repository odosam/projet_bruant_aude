// export const environment = {production : false,
//     backend : "/assets/mock/produits.json",
//     backendUserSignin: 'http://localhost:3000/api/utilisateur/login',
//     backendUserSignup: 'http://localhost:3000/api/utilisateur/register',
// }

let rootUrl = 'http://localhost:3000/'

export const environment = {
    production: false,
    backendProduit: rootUrl + 'api/products',
    backendRegister: rootUrl + 'api/users/register',
    backendLogin: rootUrl + 'api/users/login',
    backendUser: rootUrl + 'api/users/user',
};