$(document).ready(function(){
    $('.spoiler__item').on('click', function(){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


// Определяем новый компонент под именем search
// Vue.component('search', {
   

//   template: '<input id="search" type="text" placeholder="Хочу найти..." />',
//   data: {
//       abbreviations: [
//           {
//             a: 'AF',
//             d: 'Afghanistan'
//           },
//           {
//             a: 'AL',
//             d: 'Albania'
//           },
//           {
//             a: 'DZ',
//             d: 'Algeria'
//           },
//           {
//             a: 'AS',
//             d: 'American Samoa'
//           },
//           {
//             a: 'AD',
//             d: 'Andorra'
//           },
//           {
//             a: 'AO',
//             d: 'Angola'
//           },
//           {
//             a: 'AI',
//             d: 'Anguilla'
//           },
//           {
//             a: 'AQ',
//             d: 'Antarctica'
//           },
//           {
//             a: 'AG',
//             d: 'Antigua and Barbuda'
//           },
//           {
//             a: 'AR',
//             d: 'Argentina'
//           },
//           {
//             a: 'AM',
//             d: 'Armenia'
//           },
//           {
//             a: 'AW',
//             d: 'Aruba'
//           },
//           {
//             a: 'AU',
//             d: 'Australia'
//           },
//           {
//             a: 'AT',
//             d: 'Austria'
//           },
//           {
//             a: 'AZ',
//             d: 'Azerbaijan'
//           }
//       ]
//   }
// })


// const autocomplete = new Vue({
//   el: '#search',
//   //component: 'search',
//   data: {
//     abbreviations: [
//       {
//         a: 'AF',
//         d: 'Afghanistan'
//       },
//       {
//         a: 'AL',
//         d: 'Albania'
//       },
//       {
//         a: 'DZ',
//         d: 'Algeria'
//       },
//       {
//         a: 'AS',
//         d: 'American Samoa'
//       },
//       {
//         a: 'AD',
//         d: 'Andorra'
//       },
//       {
//         a: 'AO',
//         d: 'Angola'
//       },
//       {
//         a: 'AI',
//         d: 'Anguilla'
//       },
//       {
//         a: 'AQ',
//         d: 'Antarctica'
//       },
//       {
//         a: 'AG',
//         d: 'Antigua and Barbuda'
//       },
//       {
//         a: 'AR',
//         d: 'Argentina'
//       },
//       {
//         a: 'AM',
//         d: 'Armenia'
//       },
//       {
//         a: 'AW',
//         d: 'Aruba'
//       },
//       {
//         a: 'AU',
//         d: 'Australia'
//       },
//       {
//         a: 'AT',
//         d: 'Austria'
//       },
//       {
//         a: 'AZ',
//         d: 'Azerbaijan'
//       }
//     ]
//   }
// })


// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Привет, Vue!'
//   }
// })