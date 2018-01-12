$('.input-group.date input').datepicker({
    format: "dd/mm/yyyy",
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true
    // onClose: function(dateText,datePickerInstance) {
    //     var oldValue = $(this).data('oldValue') || "";
    //     if (dateText !== oldValue) {
    //         $(this).data('oldValue',dateText);
    //         $(this).trigger('dateupdated');
    //     }
    // }
    // onSelect: function (d, i) {
    //     if (d !== i.lastVal) {
    //         $(this).change(d);
    //     }
    // }
});
// .on('.input-group.date input change', e => this.brandValidate = e.target.value)
// $('.input-group.date input').change(function(e){
//     //Change code!
//     // $('#brandValidate').trigger('click');
//     // alert(e.target.value);
//     this.brandValidate= e.target.value;
//     alert(this.brandValidate);
// });