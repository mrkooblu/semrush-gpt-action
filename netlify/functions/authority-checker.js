exports.handler = async (event, context) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: ''
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        url: "https://www.semrush.com/free-tools/website-authority-checker/?utm_source=chatgpt.com&utm_medium=chatgpt&utm_campaign=mrca-gpt",
        message: "Opening Website Authority Checker..."
      })
    };

  } catch (error) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: "https://www.semrush.com/free-tools/website-authority-checker/?utm_source=chatgpt.com&utm_medium=chatgpt&utm_campaign=mrca-gpt"
      })
    };
  }
};
