'use strict';

(function(module) {
  var Data = {};


  var icons = {
    kids: {
      name: 'children casualties',
      icon: '/styles/imgs/icon.png'
    },
    noKids: {
      name: 'no children casualties',
      icon: '/styles/imgs/icon2.png',
    },
    lots: {
      name: 'more than 10 casualties',
      icon: '/styles/imgs/icon3.png'
    }
  };

  var stylesArray =
    [
      {
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#212121'
          }
        ]
      },
      {
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#212121'
          }
        ]
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'featureType': 'administrative.country',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      },
      {
        'featureType': 'administrative.land_parcel',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'administrative.locality',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#bdbdbd'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#181818'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#616161'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#1b1b1b'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'color': '#2c2c2c'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#8a8a8a'
          }
        ]
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#373737'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#3c3c3c'
          }
        ]
      },
      {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#4e4e4e'
          }
        ]
      },
      {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#616161'
          }
        ]
      },
      {
        'featureType': 'transit',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#000000'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#3d3d3d'
          }
        ]
      }
    ];
  var mapOptions = {
    zoom: 4,
    styles: stylesArray,
    center: new google.maps.LatLng(18.783174, 58.002993),
    mapTypeId: google.maps.MapTypeId.STREET,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    }
  }

  var yemenCoords = [
    {lat: 12.6886, lng: 43.4729},
    {lat: 12.7422, lng: 43.5992},
    {lat: 12.6403, lng: 43.8959},
    {lat: 12.5975, lng: 43.9288},
    {lat: 12.6511, lng: 44.1595},
    {lat: 12.6296, lng: 44.2694},
    {lat: 12.6832, lng: 44.4287},
    {lat: 12.8011, lng: 44.5441},
    {lat: 12.8172, lng: 44.621},
    {lat: 12.7422, lng: 44.8352},
    {lat: 12.8118, lng: 45.0275},
    {lat: 12.9778, lng: 45.126},
    {lat: 13.0848, lng: 45.4175},
    {lat: 13.3629, lng: 45.6647},
    {lat: 13.4431, lng: 46.6809},
    {lat: 13.646, lng: 47.3895},
    {lat: 14.0567, lng: 48.0103},
    {lat: 14.0513, lng: 48.6639},
    {lat: 14.573, lng: 49.1913},
    {lat: 14.8174, lng: 50.0977},
    {lat: 15.6442, lng: 52.1631},
    {lat: 16.2991, lng: 52.229},
    {lat: 16.7204, lng: 53.1079},
    {lat: 18.9998, lng: 52.0093},
    {lat: 18.6254, lng: 49.1748},
    {lat: 18.1563, lng: 48.197},
    {lat: 17.4345, lng: 47.5928},
    {lat: 16.936, lng: 47.1094},
    {lat: 17.2825, lng: 46.7523},
    {lat: 17.3244, lng: 45.4065},
    {lat: 17.4398, lng: 45.2087},
    {lat: 17.4004, lng: 44.014},
    {lat: 17.3297, lng: 43.959},
    {lat: 17.3716, lng: 43.6871},
    {lat: 17.5655, lng: 43.4125},
    {lat: 17.4922, lng: 43.2449},
    {lat: 17.3795, lng: 43.2285},
    {lat: 17.3192, lng: 43.3383},
    {lat: 17.2536, lng: 43.201},
    {lat: 17.0857, lng: 43.1653},
    {lat: 17.0463, lng: 43.234},
    {lat: 16.9123, lng: 43.1433},
    {lat: 16.7835, lng: 43.2532},
    {lat: 16.6467, lng: 43.2367},
    {lat: 16.6704, lng: 43.1488},
    {lat: 16.5309, lng: 43.1213},
    {lat: 16.5046, lng: 42.9483},
    {lat: 16.4045, lng: 42.9401},
    {lat: 16.3992, lng: 42.767},
    {lat: 16.0353, lng: 42.8357},
    {lat: 15.8504, lng: 42.7945},
    {lat: 15.705, lng: 42.6846},
    {lat: 15.2391, lng: 42.7945},
    {lat: 13.6033, lng: 43.2861},
    {lat: 13.2506, lng: 43.2367},
    {lat: 12.8332, lng: 43.4894},
    {lat: 12.6886, lng: 43.4729}

  ];

  var yemenShape = new google.maps.Polygon({
    paths: yemenCoords,
    strokeColor: 'yellow',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillOpacity: 0.2
  });


  var pakistanCoords = [
    {lat: 37.0376, lng: 74.5532},
    {lat: 35.4607, lng: 77.8711},
    {lat: 35.978, lng: 79.3433},
    {lat: 35.3532, lng: 80.398},
    {lat: 34.18, lng: 78.8818},
    {lat: 32.3614, lng: 78.9697},
    {lat: 33.0087, lng: 77.6074},
    {lat: 33.2111, lng: 76.4429},
    {lat: 31.7842, lng: 74.4653},
    {lat: 31.0153, lng: 74.5532},
    {lat: 27.9168, lng: 71.7627},
    {lat: 28.0138, lng: 70.3565},
    {lat: 26.8241, lng: 69.5435},
    {lat: 24.4272, lng: 71.1035},
    {lat: 23.6848, lng: 68.1152},
    {lat: 25.4631, lng: 66.5772},
    {lat: 25.1652, lng: 61.6553},
    {lat: 26.7849, lng: 63.1934},
    {lat: 28.2463, lng: 62.71},
    {lat: 29.8788, lng: 60.8862},
    {lat: 29.8788, lng: 66.3355},
    {lat: 31.0153, lng: 66.5112},
    {lat: 31.8029, lng: 68.2471},
    {lat: 31.6721, lng: 69.148},
    {lat: 32.9534, lng: 69.4995},
    {lat: 33.3581, lng: 70.2905},
    {lat: 34.0345, lng: 69.895},
    {lat: 33.9798, lng: 71.0815},
    {lat: 35.3711, lng: 71.6089},
    {lat: 36.0846, lng: 71.2353},
    {lat: 36.7565, lng: 72.2241},
    {lat: 37.0376, lng: 74.5313},
    {lat: 37.0376, lng: 74.5532}
  ];

  var pakistanShape = new google.maps.Polygon({
    paths: pakistanCoords,
    strokeColor: 'white',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillOpacity: 0.2
  });

  var somaliaCoords = [
    {lat: 11.8674, lng: 51.0644},
    {lat: 10.4014, lng: 44.5606},
    {lat: 10.7901, lng: 43.7695},
    {lat: 11.6092, lng: 43.2861},
    {lat: 10.6606, lng: 42.6269},
    {lat: 9.0153, lng: 43.9893},
    {lat: 7.9722, lng: 47.900},
    {lat: 4.9158, lng: 44.9561},
    {lat: 4.1273, lng: 42.0117},
    {lat: 2.7675, lng: 41.0449},
    {lat: -0.8349, lng: 40.9131},
    {lat: -1.6697, lng: 41.5723},
    {lat: 2.1528, lng: 45.2637},
    {lat: 4.4779, lng: 47.9004},
    {lat: 9.3624, lng: 50.8008},
    {lat: 11.7383, lng: 51.1963},
    {lat: 11.8674, lng: 51.0644}
  ];

  var somaliaShape = new google.maps.Polygon({
    paths: somaliaCoords,
    strokeOpacity: 0.2,
    strokeWeight: 0,
    strokeColor: '#FF0000',
    fillColor: '#FF0000',
    fillOpacity: 0.2
  });

  Data.fetchAll = function() {
    $.get('/scripts/models/biggerdata.json')
        .then(function(strikes) {
          var openWindow;
          var map = new google.maps.Map(document.getElementById('map'), mapOptions);
          google.maps.event.addDomListener(window, 'resize', function() {
            var center = {lat: 18.783174, lng: 58.002993};
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
          });
          strikes.forEach(val => {
            var lat = parseFloat(val.lat);
            var lng = parseFloat(val.lon);
            if (val.deaths > 10) {
              var marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                icon: icons.lots.icon,
                map: map,
              });
            } else
            if (!val.children) {
              var marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                icon: icons.noKids.icon,
                map: map,
              });
            } else {
              var marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                icon: icons.kids.icon,
                map: map,
              });
            }
            for (var key in val) {
              if (!val[key]) val[key] = 'no info';
            }
            var infowindow = new google.maps.InfoWindow({
              content: `<dl><div><dt>town:</dt><dd> ${val.town}</dd></div><br><div><dt>location:</dt> <dd>${val.location}, ${val.country}</dd></div><br><div><dt>deaths:</dt><dd>${val.deaths}</dd></div><br><div><dt>injuries:</dt> <dd>${val.injuries}</dd></div><br><div><dt>civilan deaths:</dt> <dd>${val.civilians}</dd></div><br><div><dt>children:</dt> <dd>${val.children}</dd></div><br><div><dt>description:</dt> <dd>${val.narrative}</dd></div></dl>`,
              maxWidth: 300
            });
            marker.addListener('click', function() {
              if (openWindow) openWindow.close();
              infowindow.open(map, marker);
              openWindow = infowindow;
            });
            yemenShape.setMap(map);
            somaliaShape.setMap(map);
            pakistanShape.setMap(map);
            // var legend = document.getElementById('legend');
            // for (var key in icons) {
            //   var type = icons[key];
            //   var name = type.name;
            //   var icon = type.icon;
            //   var div = document.createElement('div');
            //   div.innerHTML = '<img src="' + icon + '"> ' + name;
            //   legend.appendChild(div);
            // }
            // map.controls[google.maps.ControlPosition.LEFT_CENTER].push(legend);
          });
          var infowindow = new google.maps.InfoWindow({
            content: `<div class="win">click on a missile for more information</div>`,
            position: {lat: 8.9285, lng: 72.4902},
            maxWidth: 150
          });
          infowindow.open(map);
        });
  };

  module.Data = Data;
})(window);
