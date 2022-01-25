var matrix = [[1,2,3,4],
              [4,1,7,9],
              [3,5,9,3],
              [3,1,8,6]];
var n = matrix.length
var lsum =0;
for(var i =0;i<n;i++){
    for(var j =0;j<n;j++){
        if(i == j){
            lsum = lsum+matrix[i][j];
        }
    }
}

var rsum = 0;
for(var i =0;i<n;i++){
    for(var j =0;j<n;j++){
        if(i+j==n){
            rsum = rsum+matrix[i][j];
        }
    }
}

function setValueL(){
    document.getElementById("left").innerText = lsum;
    console.log("jhf")
}
function setValueR(){
    document.getElementById("right").innerText = rsum;
    console.log("jhf")
}
