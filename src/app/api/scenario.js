function scenario (request, response) {
    const dynamicDate = new Date();
    console.log(request);
  
    response.json({date: dynamicDate});
}

export default scenario;