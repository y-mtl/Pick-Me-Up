// let orderData;

// Generate Orders Table
function generateTableRow(orderObj){
  // console.log(orderObj);
  const $row          = $("<tr>").addClass("table-white");
  const $orderNumber  = $("<td>").append($("<a>").text(orderObj.id).attr("href",`http://localhost:8080/restaurants/1/orders/${orderObj.id}`));
  const $customerName = $("<td>").text(orderObj.name);
  const $phoneNumber  = $("<td>").text(orderObj.phone_number);
  const $timePlaced   = $("<td>").text(moment(orderObj.created_at).format('MM/DD, h:mm a'));
  const $button       = $("<button>").addClass("btn btn-secondary centered").text("Send SMS");


  $row.append($orderNumber, $customerName, $phoneNumber, $timePlaced, $button);
  return $row;
};


function renderRows(orderData){
  $.each(orderData, function(index, value){
    $("tbody").append(generateTableRow(value))
  })
}


$.get("/restaurants/1/orders/fetch", function(res){
  orderData = res;
  // console.log(orderData);
})
.done(function(){
  $(function(){
    renderRows(orderData);
  });
})
.fail(function(err){
  console.log(err);
})



$(document).ready(function(){
  $('tbody').on('click', 'button', function (event) {
    let id = $(this).parent().find(".orderId").text();
    // event.preventDefault();
    //   $.ajax({
    //       method: 'PUT',
    //       url: '/orders/' + phone_number,
    //       data: {"phone_number": phone_number}
    //     }).done(function () {
    //       console.log('done');
    //   });
    $(this).parent().remove();
  });
});




// $(()=>{
//   console.log("works")
//       monitorEvents(document);
//   $("tbody").on("click", "button", function(){
//     console.log("clicked")
//     $.get("restaurants/1/orders/1")
//   })

// })


