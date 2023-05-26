## Front End
1. All documentation is in `/docs` folder:
   - Test cases - `docs/FE-tests.txt`
   - Test report - `docs/FE-testReport.txt`
   - Bug reports - `docs/FE-bugReports.txt`
2. FE tests are created with Cypress. To run them use the command 
   - `npm test` from the root folder of the project
   - or using Docker `docker run -it -v $(pwd):/e2e -w /e2e cypress/included:12.12.0`  

## Back End
1. All documentation is in `/docs` folder:
   - Test cases - `docs/BE-tests.txt`
   - Test report - `docs/BE-testReport.txt`
2. BE tests are created with Postman. To import tests to the Postman follow Postman [docs](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-postman-data)
3. To run them with Newman use the command 
   - `newman run backend_tests/limehome.postman_collection.json` from the root folder of the project
   - or using Docker `docker run -v $(pwd)/backend_tests:/etc/newman -t postman/newman:5-alpine run limehome.postman_collection.json`
