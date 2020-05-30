// let xml_string = fs.readFileSync("ETDA-invoice.xml", "utf8");
let data = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<catalog>
  <person>
    <name>John</name>
    <surname>Smith</surname>
  </person>
  <person>
    <name>Abe</name>
    <surname>Lincoln</surname>
  </person>
  <person>
    <name>James</name>
    <surname>Bond</surname>
  </person>
</catalog>`;
const xml2js = require('xml2js');
xml2js.parseString(data, (err, result) => {
  result.catalog.person.push({ name: 'Tony', surname: 'Stark' });
  const builder = new xml2js.Builder();
  data = builder.buildObject(result);
  console.log(data);
  // write data to file
});