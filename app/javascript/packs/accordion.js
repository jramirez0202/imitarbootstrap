$(document).on('turbolinks:load', function(){


  $('#collapseOne').show();
  $('#collapseTwo').hide();
  $('#collapseThree').hide();
 
  $('#collapseOne-b').click(function (){
    $('#collapseOne').show('slow');
    $('#collapseTwo').slideUp('slow');
    $('#collapseThree').slideUp('slow');
  })

  $('#collapseTwo-b').click(function (){
    $('#collapseOne').slideUp('slow');
    $('#collapseTwo').show('slow');
    $('#collapseThree').slideUp('slow');
  })

  $('#collapseThree-b').click(function (){
    $('#collapseOne').slideUp('slow');
    $('#collapseTwo').slideUp('slow');
    $('#collapseThree').show('slow');
  })

})


// $(document).ready(function() {
//   $('.collapsed').click(function() {
//           var target = $($(this).data('target'))
//           if (target.is(":visible")) {
//               target.slideUp()
//           } else {
//               $('.collapse').slideUp()
//               target.slideToggle()
//           }
//       })
// })


// $(document).on('turbolinks:load', function(){


//   $('.accordin-button').click(function(){
//       var idText = $(this).data('target')
//       var textDom = $(idText)
//       if (textDom.is(":visible")){
//           textDom.hide('slow')
//       } else {
//           $('.paragraph').hide('slow')
//           textDom.show('slow')
//       }
//   })

// })