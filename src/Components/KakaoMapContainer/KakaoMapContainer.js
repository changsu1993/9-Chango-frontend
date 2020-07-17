import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const { kakao } = window;

const MapContainer = (props) => {
  const [latitude, setLatitude] = useState('37.504449');
  const [longitude, setLongitude] = useState('127.048951');
  const [address, setAddress] = useState('경기 화성시 전나무골길 9');
  console.log('들어온데이터', props.sentData);

  // useEffect(() => {
  //   Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>
  //     setAddress(response)
  //   );
  // }, []);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.504449, 127.048951),
      level: 8,
    };
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();
    props.setMap(map);

    let circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(37.504449, 127.048951),
      radius: 2000, // 미터 단위의 원의 반지름입니다
      strokeWeight: 5, // 선의 두께입니다
      strokeColor: '#75B8FA', // 선의 색깔입니다
      strokeOpacity: 0.2, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid', // 선의 스타일 입니다
      fillColor: 'dodgerblue', // 채우기 색깔입니다
      fillOpacity: 0.6, // 채우기 불투명도 입니다
    });
    circle.setMap(map);
    props.setCircle(circle);

    function setZoomable(zoomable) {
      map.setZoomable(zoomable);
    }

    function setDraggable(draggable) {
      map.setDraggable(draggable);
    }

    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    geocoder.addressSearch({ address }, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <div
      id='myMap'
      style={{
        width: '100%',
        height: '250px',
      }}
    ></div>
  );
};

export default MapContainer;
