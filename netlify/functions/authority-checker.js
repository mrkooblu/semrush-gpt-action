exports.handler = async (event, context) => {
    // Set CORS headers for ChatGPT
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: ''
      };
    }

    // Return Semrush URL
    const response = {
      url: "https://www.semrush.com/free-tools/website-authority-checker/?utm_source=ch
  atgpt.com&utm_medium=chatgpt&utm_campaign=mrca-gpt"
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };
  };
