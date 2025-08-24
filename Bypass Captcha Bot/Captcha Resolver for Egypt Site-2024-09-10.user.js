// ==UserScript==
// @name         Captcha Resolver for Egypt Site
// @namespace    http://tampermonkey.net/
// @version      2024-09-10
// @description  Resolve CAPTCHA images and find topmost elements
// @author       sa7tout
// @match       https://egypt.blsspainglobal.com/Global/NewCaptcha/GenerateCaptcha*
// @match       https://egypt.blsspainglobal.com/Global/newcaptcha/*
// @match       https://egypt.blsspainglobal.com/Global/NewCaptcha/*
// @match       https://egypt.blsspainglobal.com/Global/*

// @grant       unsafeWindow
// ==/UserScript==

'use strict'

const captchaConfig = {
    enabled: 'on',
    apiKey: 'femom-e54decc7-8911-ba3a-5b9c-22490396fcd6',
}

function solveCaptcha(autoSubmit) {



    if (!(/on|true/.test(captchaConfig.enabled) && captchaConfig.apiKey)) return

    const target = getCaptchaTarget();
    const grid = getCaptchaGrid();

    const extractCaptchaGridData = grid => Object.fromEntries(grid.map(img => img.src).entries());

    const onSuccess = result => {
        if (result.status === 'solved') {
            Object.entries(result.solution).forEach(([index, value]) => value === target && grid[index].click());


            if (!window.location.href.includes("https://egypt.blsspainglobal.com/Global/newcaptcha") || !window.location.href.includes("https://appointment.theitalyvisa.com/Global/newcaptcha")) {

                if (onSubmit()) {

                    if (autoSubmit) onSubmit();
                }


            }


        } else {
            onError('captchaerror', result);
        }
    };

    const onError = (type, data) => {
        console.error(type, data);
        $('.validation-summary-valid').html('<b>Failed to solve captcha.</b>');
    };

    $.post({
        url: 'https://pro.nocaptchaai.com/solve',
        headers: { apiKey: captchaConfig.apiKey },
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
            method: 'ocr',
            id: 'morocco',
            images: extractCaptchaGridData(grid),
        }),
        timeout: 30_000,
        beforeSend() {
            this._loading = $(`
  <div class="d-flex align-items-center justify-content-center lead" style="
      background: linear-gradient(to bottom, rgba(94, 255, 0, 0.5), rgba(94, 255, 0, 0.5));
      border: 2px solid rgba(75, 205, 6, 0.8); /* Gold border */
      color: red; /* Red text */
      font-weight: bold;
      border-radius: 7px;
      padding: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
      transition: transform 0.2s, box-shadow 0.2s;
  ">
    <span class="spinner-grow"></span>
    &nbsp;Solving Captcha ...
  </div>
`).prependTo('.main-div-container');
        },
        complete(xhr, state) {
            this._loading?.remove();

            switch (state) {
                case 'success':
                    onSuccess(xhr.responseJSON);
                    break;
                case 'error':
                case 'parsererror':
                    onError(state, xhr);
                    break;
            }
        },
    });

    function getCaptchaTarget() {
        return $('.box-label')
            .sort((a, b) => getComputedStyle(b).zIndex - getComputedStyle(a).zIndex)
            .first()
            .text()
            .replace(/\D+/, '');
    }

    function getCaptchaGrid() {
        return $(':has(> .captcha-img):visible').get()
            .reduce((acc, cur) => {
                (acc[Math.floor(cur.offsetTop)] ??= []).push(cur);
                return acc;
            }, [])
            .flatMap(sortedByTop => {
                const sortedByZIndex = sortedByTop.sort((a, b) => getComputedStyle(b).zIndex - getComputedStyle(a).zIndex);
                const top3 = sortedByZIndex.slice(0, 3); // max cells
                const sortedByLeft = top3.sort((a, b) => a.offsetLeft - b.offsetLeft);
                return sortedByLeft;
            })
            .map(element => element.firstElementChild);
    }

}

// Example of using the function
$(document).ready(() => {
    // Assuming autoSubmit is a boolean determining whether to auto-submit after solving
    if (document.querySelector("h5") && document.querySelector("h5").textContent.startsWith("Book New Appointment") && !document.body.textContent.trim().includes("Checking Slots:") && !document.body.textContent.trim().includes("Book New Appointment - Visa Type Selection") && !document.body.textContent.trim().includes("Book New Appointment - Slot Selection") && window.location.href.startsWith("https://egypt.blsspainglobal.com/Global/Appointment/AppointmentCaptcha")) {

        solveCaptcha(true);

    }

    if (window.location.href.startsWith("https://egypt.blsspainglobal.com/Global/newcaptcha") || window.location.href.startsWith("https://egypt.blsspainglobal.com/Global/NewCaptcha")) {


        solveCaptcha(true);

    }


});



    // if (window.location.href.startsWith("https://egypt.blsspainglobal.com/Global/blsAppointment/ManageAppointment") || window.location.href.startsWith("https://egypt.blsspainglobal.com/Global/BlsAppointment/ManageAppointment")) {

    //     let checkIsDatePageCaptchaAvailable = setInterval(() => {


    //         if (document.querySelector("#btnVerifiedEmail") && document.querySelector("#btnVerifiedEmail").style.display !== "none") {
    //             console.log('Entered!');


    //                 solveCaptcha(true);


    //         }

    //     }, 1000);



    // }

