export function changeTime(time) {

     const date = new Date(time);

     return date.getFullYear() + '年' +
         (date.getMonth() + 1 ) + '月' +
         date.getDay() + '日' +
         (date.getHours()< 10 ? ("0"+ date.getHours()):date.getHours()) + ':' +
         (date.getMinutes()< 10 ? ("0"+ date.getMinutes()):date.getMinutes()) + ':' +
         (date.getSeconds()< 10 ? ("0"+ date.getSeconds()):date.getSeconds());
}