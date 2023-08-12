const errorHandlerMiddleware = (err, req, res, next) => {
  const errStatus = 500;
  const errMsg = err.message;

  res.status(errStatus).send({
    msg: errMsg,
  });
};

export default errorHandlerMiddleware;
