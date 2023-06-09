import React from 'react';
import axios from 'axios';

const ExcelDownload = () => {
  const fetchData = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:5003/excel',
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Remove the previous download link if it exists
      const existingLink = document.getElementById('download-link');
      if (existingLink) {
        document.body.removeChild(existingLink);
      }

      const link = document.createElement('a');
      link.href = url;
      const date = new Date();
      const fileName = `${date.getDate()}-${date.getMonth() + 1}-${date
        .getFullYear()
        .toString()
        .substr(-2)}--${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
      link.setAttribute('download', `${fileName}.xlsx`);
      link.id = 'download-link';
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Axios request error:', error);
    }
  };

  return (
    <div className='m-60'>
      <button className='border-2 border-red-500' onClick={fetchData}>Download Excel</button>
    </div>
  );
};

export default ExcelDownload;
