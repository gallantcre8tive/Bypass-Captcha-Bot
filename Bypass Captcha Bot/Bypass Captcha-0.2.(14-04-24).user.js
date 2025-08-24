// ==UserScript==
// @name         Bypass Captcha
// @namespace    http://tampermonkey.net/
// @version      0.2.(14/04/24)
// @description  try to take over the world!
// @author       sa7tout
// @match        https://egypt.blsspainglobal.com/Global/blsAppointment/ManageAppointment*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //$("#CaptchaData").val('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');
    $("#CaptchaId").val('38333959-de23-499a-9cda-6055aa9be438');
var urlCaptcha="/Global/CaptchaPublic/GenerateCaptcha?data=bIRf8eUeuy5GRsv9ZWnxVnNGWGXpXtYeaSv9UpwqYwFjoCVwXDlw4tZPdLqhS5Ck61ZBqKOnX5Ef88K%2fNm0u%2fFsu7RmUxK3R7B7TOpkurRI%3d";
$.ajax({
    type: "GET",
    url: urlCaptcha,
    //dataType: "json",
    success: function (data)
    {
        console.log(data);
        var urlSubmit ="/Global/CaptchaPublic/SubmitCaptcha";
data ={
    'SelectedImages':'pnyglao,uglduu,thswvq,glexawcx,zntdepga,ydwdod',
    'Id':'bIRf8eUeuy5GRsv9ZWnxVnNGWGXpXtYeaSv9UpwqYwFjoCVwXDlw4tZPdLqhS5Ck61ZBqKOnX5Ef88K/Nm0u/Fsu7RmUxK3R7B7TOpkurRI=',
    'Captcha':'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',
    '__RequestVerificationToken':$('input:hidden[name="__RequestVerificationToken"]').val(),
    'X-Requested-With':'XMLHttpRequest'
};
$.ajax({
    type: "POST",
    data:data,
    url: urlSubmit,
    dataType: "json",
    success: function (data)
    {
        //$("#CaptchaData").val('xziF+nLF1su5Z6CzlGlZdjFhiKtfEPVHls91xvwHzZS/YyLRRFYiqk09c6WK7IipO+0m/G9bemLrBmDWs4tBK+u9eUkyEM+lTHntCNrTKV6LCD87NqnKHaZFmXX+EmCENKpphcmaj2CMeWoHCmPGVGWFnACYER3Dnp3QMunBKKtyQ2QyFKdychi18hFOk3B/q4ulRGk+AnKQhNS9qdyTSbWdJdZJH2K1d6iDEnhmeJ1iRmXmJICO0rYzk5oh9apSLy9ZuLWqWYbPSoOfWWmvg5jcW97PiEOJba/sv79a8hLE+mn62sQ05rgRwBnWh7pc/SeADvmL5ois0S80OVBhky+GBi7sPJKJFZqgwG0gyA+3W1t2Ie/rJCUn5nfuZkyNFfem06AqxrM4KEkdz1SCPQ859zcbIjHtCu2l7BLZwMJhBVEXj8d14E09ne5oK7vqFjHlpKn5tAQiFMawXfxTvA==');
        //$("#CaptchaId").val('gqCXJiFzho4m7pSTPFK+s9UZfntVAPwRwptdZ8IsE6eOc/mbMnSOPkZODN4wFQVxM2WzKspuq1jVJNS3A4RvKQ5XOD2tzPtoJYKKwJ30p2g=');
        $("#CaptchaId").val('38333959-de23-499a-9cda-6055aa9be438');
        $("#CaptchaData").val(data.captcha);
        //$("#CaptchaParam").val('HLfo8MHrouZA/rV7Rexu8vdGYiKbltLIzlMtUUDHqs40WeOodNKMhm/sWnEJniQfx10Ixu9BFNQVwcAurUpr9Vc9b1grzpmRbgOZ/Ax53GeW+c+HbsKGXGzqDGB2ftYWdaEp7JpE3h1EvrWQ0JvIJ4WdhcbxUarQNTKNKZq9go0cxf3/w3nGt4FuLGmEYTroe7VDyjBFWXDlvCDpGq0LLCXE4WoUdc9DY3xUEpC9Vj1IE4AMpMOkdjx0O04chJlDgjPTYe8AwJL6jT/weEDDxRE1PWV76l2DPUqnz5DN0xn4YOoXsNJEGYqm723utUl7zSrAqH6NIYT+VvCxjSmrzmlpIEVbwIkoriY3zo0au2WTNuyQon4xbZmdiVHrUd0k4GU6X7bQodqXFV5Wv7kKJBKIlohuBvM0ThRUU2BUArwjNDuVRbg1KKtTW0uRcyqHoNzIZ/n/Q9zOa49L5BS9eg==')
        console.log(data);

        $("#btnSubmit").show();
        $("btnVerifyAppointment").hide();
        document.querySelector("#btnVerify").style.display = "none";

        $("#btnSubmit").click();
        $("#account1").click();
        localStorage.setItem('submitclicksharedVariable', parseInt(localStorage.getItem('submitclicksharedVariable')) + 1);
        console.log(localStorage.getItem('submitclicksharedVariable'));
        $('.alert-warning').remove();

    }
});
    }
});

})();