var page = require('webpage').create();

page.paperSize = {
    width: '8.5in',
    height: '11in',
    margin: {
        top: '50px',
        left: '20px'
    }
}

page.open('http://localhost:3000/report/turbine/huvr_turbine', function() {
    page.render('output.pdf');
    phantom.exit();
});
