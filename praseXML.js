// let xml_string = fs.readFileSync("ETDA-invoice.xml", "utf8");
var fs = require("fs");
var parser = require('xml2json');


var xmlSig = fs.readFileSync('signature.xml');

fs.readFile( './ETDA-invoice.xml', function(err, data) {
    var xmlref = fs.readFileSync('signed-invoice.xml');
    var jsonref = JSON.parse(parser.toJson(xmlref, {reversible:true}));

    var json = JSON.parse(parser.toJson(data, {reversible: true}));
    var jsonSig = JSON.parse(parser.toJson(xmlSig));
    Object.assign(json["rsm:TaxInvoice_CrossIndustryInvoice"], 
                  jsonSig);

    var stringified = JSON.stringify(jsonref);
    // var stringified = JSON.stringify(json);
    var xml = parser.toXml(stringified);
    fs.writeFile('output.xml', xml, function(err, data) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('updated!');
      }
    });
});

console.log('done')