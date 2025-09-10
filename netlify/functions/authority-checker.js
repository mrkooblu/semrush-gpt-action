export default async (req, context) => {
    // Set CORS headers for ChatGPT
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers });
    }

    // Return Semrush URL
    const response = {
      url: "https://www.semrush.com/free-tools/website-authority-checker/?utm_source=ch
  atgpt.com&utm_medium=chatgpt&utm_campaign=mrca-gpt"
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers
    });
  };
