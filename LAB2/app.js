
    var num = 10;
    let name = "Pan";
    age = 20;

    fruit =["apple","mango","tangmo"];
    obj ={name:"Panyakorn",age:21,tel:"123-555L"};

    data ={adress:["184","khumuang","Buriram",3100],name: "John" };

    console.log(fruit[1]);
    console.log(obj.tel);
    console.log(data.adress[2]);
      
    document.getElementById("msg").innerHTML = data.adress[2];

    let longtxt = data.name + " : " + fruit[0];

    longtxt = `${data.name} : 
                ${fruit[1]}`;

    $(function(){
        $("#msg").html(longtxt);
    }); //jQuery ready
