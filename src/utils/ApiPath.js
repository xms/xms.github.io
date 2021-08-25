const mergePath = (baseUrl) => (route) => `${baseUrl}${route}`;

const site = sessionStorage.getItem('site');
const { baseUrl } = window.APP_CONFIG[site || 'default'];
const MesUserApi = mergePath(baseUrl.mesUserApi);
const MesReportApi = mergePath(baseUrl.mesReportApi);
const ReportApi = mergePath(baseUrl.reportApi);

const ApplyApis = fn => (routes) => {
  let result = {};
  Object.keys(routes).forEach(rk => {
    result[rk] = fn(routes[rk]);
  });
  return result;
};

const ApplyMesUser = ApplyApis(MesUserApi);
const ApplyReport = ApplyApis(ReportApi);
const ApplyMesReport = ApplyApis(MesReportApi);

export {
  mergePath,

  MesUserApi,
  ReportApi,
  MesReportApi,

  ApplyMesUser,
  ApplyReport,
  ApplyMesReport,
};
