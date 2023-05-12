
function loadCoupon(){
    document.getElementById('main').style.filter='blur(5px)';
    document.getElementById('coupon').style.border='3px solid rgb(166 189 229)';
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('coupon').style.opacity="1";
    document.getElementById('coupon').style.position="fixed";
    }
      

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.filter='blur(0px)';
    }
    
    function ChangeMode() {
        let moon = document.getElementById ("moon");
        if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "#141D26";
        document.body.style.color = "#fff";
        }
        else {
        moon.className ="moon";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        }
        }

       /* Comment
       let x=document.getElementById('out');
                    let y=document.getElementById('location');
                    function geolocation()
                    { 
                        if(navigator.geolocation)
                      {
                          navigator.geolocation.getCurrentPosition(showPosition);
                      }
                      else
                      {
                        x.innerText="Geo not supported";
                      }

                    }

                    function showPosition(data)
                    {
                      console.log(data);
                      let lat=data.coords.latitude;
                      let lon=data.coords.longitude;
                      x.innerText= `Latitude is ${lat} and Longitude is ${lon}`;
                      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
                      fetch(url,{method:'GET'})
                      .then((res)=>res.json())
                      .then((data) => {
                        console.log(data);
                        let cityName = data.city.name;
                        let temp = data.list[0].temp.day+" °C";
                        y.innerText = `Weather of ${cityName} is ${temp}`;
                    })
                }*/
                
                    