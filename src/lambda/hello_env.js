const { BOT_TOKEN } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: BOT_TOKEN
  };
};
