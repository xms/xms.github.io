import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { message, Tooltip } from 'antd';
import axios from 'axios';

import useAxios from 'hooks/useAxios';
import Gov from 'apis/GovResource';
import { round } from 'utils/Math';

const Weather = styled.div`
  width: 8rem;
  color: #FFFFFF;
  text-align: center;
`;

function WeatherComponent() {
  const getAxios = useAxios(axios.get, [], null, 'Query failed.');
  const [weather, setWeather] = useState({
    startTime: null,
    endTime: null,
    percentage: null,
  });

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    try {
      const { baseUrl: { gov: { Authorization = null } } } = window.APP_CONFIG;
      const params = {
        Authorization,
        limit: 2,
        offset: 0,
        locationName: '前鎮區',
        elementName: 'PoP6h',
        timeFrom: moment().format('YYYY-MM-DDTHH:mm:ss'),
      };
      const { success = false, records = null } = await getAxios.exec(Gov.Weather, { params });
      if (!success) {
        message.error('API return nothing.');
      } else {
        const measureData = records?.locations?.[0]?.location?.[0]?.weatherElement?.[0]?.time?.[0];
        const { startTime = null, endTime = null, elementValue = [] } = measureData;
        const percentage = round(elementValue?.[0]?.value);
        setWeather({
          startTime,
          endTime,
          percentage,
        });
      }
    } catch (error) {
      message.error('Sorry, get weather failed.');
      console.log('error.message: %o', error.message);
    }
  }

  return (
    <Weather className="weather">
      <Tooltip title={`${weather.startTime} ~ ${weather.endTime}`}>
        降雨機率:
      </Tooltip>
      {' '}
      {weather.percentage}
      %
    </Weather>
  );
}

export default WeatherComponent;
// API doc: https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/%E9%A0%90%E5%A0%B1/get_v1_rest_datastore_F_D0047_065
