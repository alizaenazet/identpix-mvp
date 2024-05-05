export async function POST(request: Request) {
  console.log(request.ip);
  console.log(request.geo!.country);
  console.log(request.geo!.region);
  console.log("cok");
  console.log(request.headers.get('X-Forwarded-For'));
  
  return Response.json({
    status: 200,
    body : {
        ip : request.ip,
        country : request.geo!.country,
        region : request.geo!.region
    }
  })

}