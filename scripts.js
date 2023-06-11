
//time Variables
var startTime = 1
var endTime = 24
var InputEl = ""
var container = $(".container-lg")
var now = dayjs().format("dddd, MMMM DD, hh:mm,A");
$('#currentDay').text(now)

function plannerLayout(){
   for(var i = startTime; i < endTime;i++){
      var hrEl = dayjs().hour(i).format("h a");
      var Template = `<div id="hour"class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${hrEl}</div>
<textarea class="col-8 col-md-10 description" rows="3">${InputEl}</textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div>
`
container.append(Template);


//color code hour loop for past present and future
var currenthr= dayjs().format("h")
console.log(currenthr)

var hour = (dayjs().hour(i).format("h"));
console.log(hour)
var Row = $(".row")
Row.remove("past,present,future");

if (hour < currenthr){
   Row.addClass("past");

} else if (hour === currenthr){
   Row.remove("past")
   Row.addClass("present");

}else  {
   Row.remove("present")
   Row.addClass("future");

}

  }
};
plannerLayout();



$('.saveBtn').on('click',function(event){
   var time = $(this).siblings('.hour').text();
   var description= $(this).siblings('.description').val();
   localStorage.setItem(time,description);
})

function saveDescription(){
   $('.hour').each(function(){
      var time = $(this).text();
      var savedInput = localStorage.getItem(time)
      if (savedInput !==null) {
         $(this).siblings('.description').val(savedInput);
      } 
      else{ 
         (now !=localStorage.getItem(time))
            localStorage.clear();
      }
   });
 
}
saveDescription();


