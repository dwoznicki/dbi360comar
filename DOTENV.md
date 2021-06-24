This project requires a `.env` file. Variables in the `.env` file determine development vs. production environment, how data is fetched, and so on.

## Environment variables

### REACT_APP_ENVIRONMENT
- `development`: What this does is TBD.
- `production`: What this does it TBD.

### REACT_APP_DATA
- `fetch`: Fetch data from the local server.
- `dummy`: Load dummy data defined in src/services/api.js file.

### REACT_APP_SERVER
The base URL for fetching data. For example, "https://localhost/".

