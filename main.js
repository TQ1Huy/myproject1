// var, let, const
// alert(123); =>ok
// confirm("Ban co muon xoa k?"); => Co, khong
// prompt
// DOM
// let a = prompt ('nhap a');
// // let b = prompt ('nhap b');
// // a=parseInt(a)+parseInt(b);

// switch(a) {
//     case "1":
//       window.open("https://www.youtube.com/");
//       break;
//     case "Apple":
//       alert("Welcome")
//       break;
//   default:
//       alert("Neither");
//   }
// let a = prompt ('nhap so hoc vien a');
// for(let i=0; i<a;i++){
//     let b = prompt ('nhap b');
//     let c = prompt ('nhap c');
//     let d = prompt ('nhap d');
//     let e = prompt ('nhap e');
//     document.write(b,'<br>');
//     document.write(c);
//     document.write('<br>');
//     document.write(d);
//     document.write('<br>');
//     document.write(e);
// }
function Loadlayout(){
    $(".header").load("header_admin.html", "data", function (response, status, request) {
        this; // dom element
    });
    $("#left-admin").load("left_admin.html", "data", function (response, status, request) {
        this; // dom element
        
    });
    // $("#product-content").load("page/product.html", "data", function (response, status, request) {
    //     this; // dom element
        
    // });
}
Loadlayout();
function openpro(link){
     $("#product-content").load(`page/${link}`, "data", function (response, status, request) {
        this; 
        for(let i=0; i<4;i++){
            $("#table-product").append(`<tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
                <button class="button-3">
                    Edit
                </button>
            </td>
            <td>
                <button class="button-4">
                    Delete
                </button>
            </td>
          </tr>`);
        }
    });
}



