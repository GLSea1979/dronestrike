'use strict';

(function(module) {
  function Data (opts) {
    Object.keys(opts).forEach(function(val) {
      this[val] = opts[val];
    }, this);
  }

  Data.allData = [];

  Data.prototype.insertRecord = function() {
    $.post('/strikes/insert', {number: this.number, country: this.country, date: this.date, narrative: this.narrative, town: this.town, location: this.location, deaths: this.deaths, deaths_min: this.deaths_min, deaths_max: this.deaths_max, civilians: this.civilians, injuries: this.injuries, children: this.children, tweet_id: this.tweet_id, bureau_id: this.bureau_id, bij_summary_short: this.bij_summary_short, bij_link: this.bij_link, target: this.target, lat: this.lat, lon: this.lon, names: this.names})
  };

  Data.loadAll = function(rows) {
      // console.log('in loadall')
    Data.allData = rows.map(function(ele) {
      return new Data(ele);
    });
  };


  Data.fetchAll = function(ctx, next) {
      // console.log('in data.fetchAll');
    $.get('/strikes/all')
        .then(function(obj) {
          if (obj.rowCount) {
            console.log('in fetch all', obj.rows);
            localStorage.strikes = obj.rows;
            Data.loadAll(obj.rows);
          } else {
            $.ajax({
              url: 'http://api.dronestre.am/data',
              method: 'GET',
              dataType: 'jsonp'
            })
             .then(rawData => {
               rawData.strike.forEach(function(item) {
                 var strike = new Data(item);
                 strike.insertRecord();
               });
               Data.fetchAll();
             });
          }
        }).then(function(obj) {
          var somalia = Data.allData.filter( val => {return val.country ==='Somalia'});
          console.log('somalia', somalia);
          mapView.makeMap();
          somaliaView.makeMap(somalia);
          let yemen = Data.allData.filter( val => {return val.country ==='Yemen'});
          let pakistan = Data.allData.filter( val => {val.country.indexOf('P') === 0});
        });
  };

  Data.findWhere = function(field, value, callback) {
    console.log(field, 'field', value, 'value');
    console.log('data all data in findwhere', Data.allData);
    console.log('findwhere', Data.allData.filter(strike => {strike.field.toUpperCase() === value.toUpperCase()}));
  }

  Data.findWhere = function(field, value, callback) {
    $.get('/strikes/all')
[
    {
      sql: 'SELECT * FROM strikes WHERE ' + field + ' = ?;',
      data: [value]
    }
            ],
            callback()
  };

  Data.allCountries = function() {
    return Data.allData.map(function(strike) {
      return strike.country;
    })
          .reduce(function(names, name) {
            if (names.indexOf(name) === -1) {
              names.push(name);
            }
            return names;
          }, []);
  };

        // Data.allCategories = function(callback) {
        //   webDB.execute('SELECT DISTINCT category FROM strikes;', callback);
        // };

  module.Data = Data;
})(window);
