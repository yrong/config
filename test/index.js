const newman = require('newman');
const fs = require('fs');

const node_name = process.env['NODE_NAME']
describe(`${node_name} test suite`, function() {
    this.timeout(15000)
    it('api', function(done) {
        newman.run({
            collection: JSON.parse(fs.readFileSync(`./test/${node_name}.postman_collection.json`,'utf8')),
            environment: JSON.parse(fs.readFileSync('../config/test/postman_globals.json', 'utf8')),
            reporters: 'cli'
        }, function (err) {
            if (err) {
                done(err)
            }else{
                console.log('api run complete!');
                done();
            }
        });
    });
})
