export const COVER="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const LOGO=
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const avatar=
"https://avatars.githubusercontent.com/u/42413038?v=4"

export const Api_options = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMD_KEY
  }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const OPENai_API_KEY = process.env.REACT_APP_OPENAI_KEY