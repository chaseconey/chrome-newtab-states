
(function() {

    // Generate random number
    var index = Math.floor(Math.random() * App.data.length),
        info = App.data[index];

    console.log(info);

    // Load data into new tab page
    var flag = $('<img />', {
        src: '/img/states/' + info.State.toLowerCase().replace(' ', '') + '.png',
        alt: info.State,
        class: 'img-responsive'
    });
    $('#map').html(flag);
    $('#rank').html('#' + info['2013 Rank']);
    $('#place').html(info.City + ', ' + info.State);
    $('#population').html(info['2013 Estimate']);

})();