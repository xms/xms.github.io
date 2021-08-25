import { ReportApi, MesReportApi } from 'utils/ApiPath';

export const Report = {
  /**
   * WIP Outsize即時產出
   */
  WipOutsize: ReportApi('/WIPOutSize/WIPOutSizePost'),
  /**
   * 各站WIP趨勢
   */
  WipTrand: ReportApi('/WIPOutSize/WIPOutSizePost_30days'),
  /**
   * 站別下拉選單
   */
  ProcessList: ReportApi('/WIPOutSize/SelectProcessCode'),
  /**
   * 機台稼動率
   */
  MachineActivation: ReportApi('/WIPOutSize/MachineUpTimeRawData'),
  /**
   * 站別 => 機台
   */
  MachineListByProcess: ReportApi('/WIPOutSize/SelectMachine'),
  /**
   * 機況一覽表
   */
  MachineState: ReportApi('/WIPOutSize/Query_Machine_Conditions'),
  /**
   * BBO 燒失率 X-R圖
   */
  BboLossRateXR: MesReportApi('/S1_1410/LossRate'),
  /**
   * 材料利用率 折線圖
   */
  MaterialUsageRateChart: ReportApi('/MaterialUTE/Query_Material_UTE_1130_Chart'),
  /**
   * 材料利用率 匯出
   */
  MaterialUsageRateXlsx: ReportApi('/MaterialUTE/Query_Material_UTE_1130'),
};

export default Report;
