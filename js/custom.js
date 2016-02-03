// define variables
var cityPop = 
[
    { 
        city: 'Portland',
        population: 583776
    },
    {
        city: 'Miami',
        population: 399457
    },
    {
        city: 'San Francisco',
        population: 852469
    },
    {
        city: 'Phoenix',
        population: 1445632
    }
];


// create a table with cities and populations
function cities()
{
    $("#content").append("<table id=\"ftable\">");

    $("table").append("<tr>");

    $("tr").append("<th>City</th><th>Population</th>");

    for (var i = 0; i < cityPop.length; i++)
    {
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

        $("table").append(rowHtml);
    };
};

// add columns to citypop 
function addColumns(cityPop)
{
    
    $('tr').each(function(i)
    {

        if (i == 0)
        {

            $(this).append('<th>City Size</th>');
        } 
        else 
        {

            var citySize;

            if (cityPop[i-1].population < 100000)
            {
                citySize = 'Small';

            } 
            else if (cityPop[i-1].population < 500000)
            {
                citySize = 'Medium';

            } 
            else 
            {
                citySize = 'Large';
            };

            $(this).append('<td>' + citySize + '</td>');
        };
    });
};

// change color of the table on mouseover
function addEvents()
{
    $('#ftable').mouseover(function()
    {
        
        var color = "rgb(";

        for (var i=0; i<3; i++)
        {

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i<2)
            {
                color += ",";
            } 
            else 
            {
                color += ")";
            }

        $(this).css('color', color);
        };
    });

    // alert the user to the fact they clicked the table
    function clickme()
    {

        window.alert('Hey, you clicked me!');

        //console.log('yo');
    };

    $('#ftable').on('click', clickme);
};


// call functions
cities();

addColumns(cityPop);

addEvents();








