$(function(){
    $("#submit-btn").on("click",()=>{
        var jsondata={
            name:$("#name").val(),
            mobile:$("#mobile").val(),
            age:$("#age").val(),
            branch:$("#branch").val(),
          }
          $.ajax({
              type:"post",
              url:"/api/user",
              data: jsondata,
              success: function(){
                 alert("User added successfully...");
              },
              error:(err)=>{
                alert("User not added..."+err);
              }
          })
    })
  
   $("#get-users").on('click',function(){
    $.ajax({
        type:"get",
        url:"/api/user",
        success:function(data){
                showTable(data);
        },
        error: (err)=>{
            console.log("ERROR"+err);
        }
    })
})

    function showTable(data){
        var cell="<table><tr><th>S.No</th><th>Name</th><th>Mobile Number</th><th>Age</th><th>Branch</th></tr>";
        for(var i=0;i<data.length;i++){
            cell+= "<tr><td>"+(i+1)+"</td><td>"+data[i].name+"</td><td>"+data[i].mobile+"</td><td>"+data[i].age+"</td><td>"+data[i].branch+"</td></tr>";
        }
        cell+="</table>";
        $("#table").html(cell);
    }

})