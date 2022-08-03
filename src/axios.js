import axios from 'axios';
import XMLParser from "react-xml-parser";

const myKey = 'lNd%2B8FRn%2Ffj9I9hNJvKRoaVvCvN56%2F1HzZR1XPgwsBOp5%2F4TIj8A%2FO84O2iKCHHPtizpYfqMjXnT2EL7%2F888kQ%3D%3D';

function parseStr(dataSet) {
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  console.log(dataArr);
}

export const searching = async () => {
    const config = {
      method: 'get',
      url: `https://apis.data.go.kr/B553662/peakPoiInfoService/getPeakPoiInfoList?serviceKey=${myKey}`,
      headers: {},
    };
  
    return await axios(config)
      .then((response) => {
        const dataSet =  response.data;
        parseStr(dataSet);
      })
      .catch(function (error) {
        console.log(error, '에러쓰');
      });
  };