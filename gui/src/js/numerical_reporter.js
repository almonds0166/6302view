function Numerical_Reporter(unique,title,data_type,color=null,bg_color=null){
    var div_id = "box_"+String(unique);
    var color = color;
    var bg_color = bg_color;
    var title = title;
    var data_type = data_type; //int or float
    var range = [null,null]; //shape is : [low,high]..saturate otherwise
    var value = 0.0;
    var unique = unique; //unique identifying number

    var format = function(value){
        var buffer = new ArrayBuffer(4);
        var f32 = new Float32Array(buffer); 
        var i32 = new Int32Array(buffer); 
        f32[0] = value;
        //console.log(data_type);
        if (data_type==="float"){
            return f32[0].toPrecision(12);
        } else{
            return i32[0];
        }

    }
    var overall_div = document.getElementById(div_id);
    var holder = document.createElement('div');
    holder.setAttribute("id", div_id+unique+"_holder");
    holder.setAttribute("class", "number_holder");
    var title_disp = document.createElement('div');
    title_disp.setAttribute("id",div_id+unique+"_title");
    title_disp.setAttribute("class","handle number_title");
    title_disp.innerHTML=title;
    holder.appendChild(title_disp);
    overall_div.appendChild(holder);
    var reported = document.createElement('div');
    reported.setAttribute('class','reported_number');
    reported.setAttribute('style',"color:"+ color+";background-color:"+bg_color+";");
    reported.setAttribute('id',div_id+unique+"_number");
    reported.innerHTML = format(value);
    holder.appendChild(reported);
    this.step = function(value){ 
        if (range[1] != null && value[0][0]> range[1]){
            value[0][0] = range[1];
        }else if (range[0] != null && value[0][0] <range[0]){
            value[0][0]= range[0];
        }
        // console.log(value[0][0]);
        reported.innerHTML = format(value[0][0])
    };
};
