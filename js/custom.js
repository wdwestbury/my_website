//define two arrays for cities and population
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


//function to create a table with cities and their populations
function cities()
{
    //append the table element to the div
    $("#content").append("<table id=\"ftable\">");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++)
    {
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";

        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};


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

        // alert the user to the fact they clicked the table
        function clickme()
        {
            alert('Hey, you clicked me!');
        };

        $('#ftable').on('click', clickme);
    });
};



cities();

addColumns(cityPop);

addEvents();








