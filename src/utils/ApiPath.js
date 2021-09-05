const { baseUrl } = window.APP_CONFIG;

// apply single
const mergePath = (base) => (route) => `${base}${route}`;
const GovApi = mergePath(baseUrl.gov.URL);

// apply multiple
const ApplyApis = fn => (routes) => {
  let result = {};
  Object.keys(routes).forEach(rk => {
    result[rk] = fn(routes[rk]);
  });
  return result;
};

const ApplyGov = ApplyApis(GovApi);

export {
  mergePath,

  // single
  GovApi,

  // multiple
  ApplyGov,
};
