exports.handler = async (event, context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

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
      url: "https://www.semrush.com/free-tools/website-authority-checker/?utm_source=chatgpt.com&utm_medium=chatgpt&utm_campaign=mrca-gpt"
    })
  };
};
