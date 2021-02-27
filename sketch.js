// URL to retreive data. Mine is public so anyone can get it
let url = 'https://io.adafruit.com/api/v2/tofu_/feeds/project-1';
let counter = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    fill(255, 10);
    rect(0, 0, width, height);
    // only pull this every once in awhile
    if (counter % 1 == 0) {
        getData(); // function for calling data
    }
    counter++;
}

function getData() {
    let data; // local var to get last value
    // this calls a GET function, which requests a URL
    // the arguments are the url to request, the kind of data to expect,
    // and a callback function once the data is ready
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        let resize = map(data, 0, 1, 50, 100);
        let recol = (0, 0, 255);
        noStroke();
        fill(255, 0, 0);
        ellipse(width / 2, height / 2, resize);
        // print out the data we're keen to see
        console.log(data);
    });
}
