# sample_api
  

## Steps
1. Clone the repo
    `git clone https://github.com/harshitkumar31/sample_api.git`
    `cd sample_api`
  
2. Edit the configuration files in sample_api/configure/
  
      #### configureDb.py

      ```python
      def main():
           host, user, passwd = 'localhost', 'root', 'admin'
      ```
       

      #### index.js

      ```javascript
      var connection=mysql.createPool({
         // Change the config here 
        host:'localhost',
         user:'root',
         // 'port': 3306,
         password:'admin',
         database:'mrnd_library'
        });
      ```

3. Create Database and tables
   
   ```
   cd sample_api\configure
   pip install -r requirements.txt
   python configureDb.py -c all
   ```

4. Npm install and run the server
    ```
    cd sample_api
    npm install
    node index.js
    
    ```
    Your API sample server must be running on port 3000.
    Check this postman collection out for sample API calls.
    
    [Postman collection for the sample API](https://www.getpostman.com/collections/ea6f9b590265759dd696)
    
 
